"use strict";

var fs = require('fs'),
    path = require('path'),
    gm = require('gm'),
    im = require('imagemagick'),
    async = require('async'),
    _ = require('underscore'),
    child_process = require('child_process'),
    config = require(__dirname+'/config'),
    sharp = require('sharp'),
    mkdirp = require('mkdirp'),
    find = require('./utils/find'),
    mergedirs = require('merge-dirs'),
    fse = require('fs-extra');

function createWebIconFolders(outputPath) {
    if(!fs.existsSync(path.join(outputPath, config.output.webDir))) {
        fs.mkdirSync(path.join(outputPath, config.output.webDir));
    }
};

function createAndroidIconFolders(outputPath) {
    var baseDir = path.join(outputPath, config.output.androidDir);
    var dirs = ['', '/res', '/res/mipmap-ldpi', '/res/mipmap-mdpi', '/res/mipmap-hdpi', 
                 '/res/mipmap-xhdpi', '/res/mipmap-xxhdpi', '/res/mipmap-xxxhdpi'];
    
    for(var i = 0; i < dirs.length; i++){
        if(!fs.existsSync(path.join(baseDir, dirs[i]))) fs.mkdirSync(baseDir + dirs[i]);
    }
};

function createIOSIconFolders(outputPath) {
    if(!fs.existsSync(path.join(outputPath, config.output.iosDir))) {
        fs.mkdirSync(path.join(outputPath, config.output.iosDir));
    }
};

function createIOSSplashIconFolders(outputPath) {
    if(!fs.existsSync(path.join(outputPath, config.output.iosSplashDir))) {
        fs.mkdirSync(path.join(outputPath, config.output.iosSplashDir));
    }
};

exports.checkDependencies = function(cb) {
    child_process.exec("/usr/bin/type convert", function(err, stdout){
        if(err || stdout === "") return cb("ImageMagick binary not found");
        child_process.exec("/usr/bin/type gm", function(err, stdout){
            if(err || stdout === "") return cb("GraphicsMagick binary not found");
            cb(null);
        });
    });
};

exports.generateBaseIcons = function (inputImg, inputImgRound, cb) {
    // Generate image with radius and rounded one
    const rectRadius = Buffer.from('<svg><rect x="0" y="0" width="1024" height="1024" rx="93" ry="93" /></svg>');
    const circle = Buffer.from('<svg><rect x="0" y="0" width="1024" height="1024" rx="512" ry="512" /></svg>');

    // Create tmp dir if not exists
    mkdirp('./tmp').then(made => {
        let radiusImg = sharp(inputImg).resize(1024, 1024).composite([{ input: rectRadius, blend: 'dest-in' }]).toFile('./tmp/icon-radius.png', (err, info, data) => {
            let roundImg = sharp(inputImgRound).resize(1024, 1024).composite([{ input: circle, blend: 'dest-in' }]).toFile('./tmp/icon-round.png', (err2, info2, data2) => {
                return cb(null, './tmp/icon-radius.png', './tmp/icon-round.png');
            });
        });
    });
}

exports.generateIcons = function(inputImageOriginal, inputImgRadius, inputImgRound, outputPath, platform, device, cb) {
    var iconMeta = config.icons,
    error;

    if(!fs.statSync(inputImageOriginal).isFile()){
        error = new Error("Original image not found: " + inputImageOriginal);
        if(cb) return cb(error);
        else throw error;
    }

    if(!fs.statSync(inputImgRadius).isFile()){
        error = new Error("Input image radius not found: " + inputImgRadius);
        if(cb) return cb(error);
        else throw error;
    }

    if(!fs.statSync(inputImgRound).isFile()){
        error = new Error("Input image round not found: " + inputImgRound);
        if(cb) return cb(error);
        else throw error;
    }

    if(platform === "ios") {
        if(device === "phone") iconMeta = _.where(config.icons, { platform: 'iOS', device: 'phone' });
        else if(device === "tablet") iconMeta = _.where(config.icons, { platform: 'iOS', device: 'tablet' });
        else iconMeta = _.where(config.icons, { platform: 'iOS' });

        createIOSIconFolders(outputPath);
        createIOSSplashIconFolders(outputPath);
    } else if(platform === "android") {
        iconMeta = _.where(config.icons, { platform: 'Android' });
        createAndroidIconFolders(outputPath);
    } else if(platform === "web") {
        iconMeta = _.where(config.icons, { platform: 'Web' });
        createWebIconFolders(outputPath);
    } else {
        createAndroidIconFolders(outputPath);
        createWebIconFolders(outputPath);
        createIOSIconFolders(outputPath);
        createIOSSplashIconFolders(outputPath);
    }

    async.each(iconMeta, function(meta, cb){
        var _inputImage = inputImageOriginal;
        var padding = typeof meta.padding !== 'undefined' ? meta.padding : 0;

        if (meta.radius) _inputImage = inputImgRadius;
        if (meta.round) _inputImage = inputImgRound;

        var outputFile;
        if(meta.platform === 'iOS'){
            if(meta.type === 'Splash Icon') {
                outputFile = path.join(outputPath, config.output.iosSplashDir, meta.file_name);
            } else {
                outputFile = path.join(outputPath, config.output.iosDir, meta.file_name);
            }
        } else if(meta.platform === 'Android'){
            if(meta.type === 'Launcher Icon') {
                outputFile = path.join(outputPath, config.output.androidDir, 'res', 'mipmap-' + meta.resolution, meta.file_name);
            } else {
                outputFile = path.join(outputPath, config.output.androidDir, meta.file_name);
            }
        } else if(meta.platform === 'Web'){
            outputFile = path.join(outputPath, config.output.webDir, meta.file_name);
        }

        if(meta.platform == 'Web') {
            im.convert([_inputImage, '-bordercolor', 'white', '-border', '0', '-alpha', 'off', '-colors', '256', '-resize', meta.width+'x'+meta.height, outputFile], function(err){
               if(err) {
                   console.error("Error generating %s (res: %s) icon: %s:: %s", meta.platform, (meta.resolution || ''), meta.file_name, err);
                   return cb(error);
               } else {
                    //console.log("Generated %s (res: %s) icon: %s", meta.platform, (meta.resolution || ''), meta.file_name);
                   cb(null);
               }
            });
        } else {
            gm(_inputImage)
              .background('none') 
              .noProfile()
              .resize(meta.width - padding, meta.height - padding)
              .gravity('Center')
              .extent(meta.width, meta.height)
              .quality(100)
              .write(outputFile, function(err){
                 if(err) {
                     console.error("Error generating %s (res: %s) icon: %s:: %s", meta.platform, (meta.resolution || ''), meta.file_name, err);
                     return cb(error);
                 } else {
                      //console.log("Generated %s (res: %s) icon: %s", meta.platform, (meta.resolution || ''), meta.file_name);
                     cb(null);
                 }
              });
        }
    }, function(err){
        if(err){
            if(cb) return cb(err);
            else throw err;
        }

        fse.remove(inputImgRadius).then((err) => {
            fse.remove(inputImgRound).then((err) => {
                fse.remove('./tmp').then((err) => {
                    fs.stat('./android/app/src/main/res', (err, stats) => {
                        if (!err) {
                            var androidPath = outputPath + config.output.androidDir;
                            androidPath = androidPath.replace(/\\/g, '/');

                            mergedirs.default(androidPath, './android/app/src/main', 'overwrite');

                            fse.remove(androidPath).then((err) => {
                                console.log('> Android icons moved to: ' + './android/app/src/main/res');
                            });
                        }
                    });
                    
                    find('./ios/', (path, stat) => {
                        var isIconSet = path.match(/AppIcon.appiconset/) && stat.isDirectory();

                        var iosPath = outputPath + config.output.iosDir;
                        iosPath = iosPath.replace(/\\/g, '/');

                        if (isIconSet) {
                            mergedirs.default(iosPath, path, 'overwrite');

                            fse.remove(iosPath).then((err) => {
                                console.log('> iOS icons moved to: ' + path);
                            });
                        }
                    });

                    find('./ios/', (path, stat) => {
                        var isIconSet = path.match(/SplashIcon.imageset/) && stat.isDirectory();

                        var iosPath = outputPath + config.output.iosSplashDir;
                        iosPath = iosPath.replace(/\\/g, '/');

                        if (isIconSet) {
                            mergedirs.default(iosPath, path, 'overwrite');

                            fse.remove(iosPath).then((err) => {
                                console.log('> iOS splash icons moved to: ' + path);
                            });
                        }
                    });

                    fse.remove(outputPath + config.output.webDir).then((err) => {});

                    if(cb) cb(null);
                });
            });
        });
    });
};
