module.exports = {

    output: {
        androidDir: 'android_icons',
        iosDir: 'ios_icons',
        iosSplashDir: 'ios_splash_icons',
        webDir: 'web_icons'
    },

    // For iOS, refer to: https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/IconMatrix.html
    // For Android, refer to:  http://iconhandbook.co.uk/reference/chart/android/
    icons: [
        {
            platform: 'iOS',
            type: 'Notification icon',
            device: 'tablet',
            device_detail: null,
            width: 20,
            height: 20,
            radius: false,
            resolution: 'standard',
            file_name: 'Icon-20x20@1x.png'
        },
        {
            platform: 'iOS',
            type: 'Notification icon',
            device: 'all',
            device_detail: null,
            width: 40,
            height: 40,
            radius: false,
            resolution: 'standard',
            file_name: 'Icon-20x20@2x.png'
        },
        {
            platform: 'iOS',
            type: 'Notification icon',
            device: 'phone',
            device_detail: null,
            width: 60,
            height: 60,
            radius: false,
            resolution: 'standard',
            file_name: 'Icon-20x20@3x.png'
        },
        {
            platform: 'iOS',
            type: 'Settings Icon',
            device: 'all',
            device_detail: null,
            width: 29,
            height: 29,
            radius: false,
            resolution: 'standard',
            file_name: 'Icon-29x29@1x.png'
        },
        {
            platform: 'iOS',
            type: 'Settings Icon',
            device: 'all',
            device_detail: null,
            width: 58,
            height: 58,
            radius: false,
            resolution: 'high',
            file_name: 'Icon-29x29@2x.png'
        },
        {
            platform: 'iOS',
            type: 'Settings Icon',
            device: 'phone',
            device_detail: 'iPhone 6 Plus',
            width: 87,
            height: 87,
            radius: false,
            resolution: 'high',
            file_name: 'Icon-29x29@3x.png'
        },
        // {
        //     platform: 'iOS',
        //     type: 'Spotlight Icon',
        //     device: 'all',
        //     device_detail: null,
        //     width: 40,
        //     height: 40,
        //     radius: false,
        //     resolution: 'standard',
        //     file_name: 'Icon-40.png'
        // },
        {
            platform: 'iOS',
            type: 'Spotlight Icon',
            device: 'all',
            device_detail: null,
            width: 80,
            height: 80,
            radius: false,
            resolution: 'high',
            file_name: 'Icon-40x40@2x.png'
        },
        {
            platform: 'iOS',
            type: 'Spotlight Icon',
            device: 'all',
            device_detail: null,
            width: 120,
            height: 120,
            radius: false,
            resolution: 'high',
            file_name: 'Icon-40x40@3x.png'
        },
        // {
        //     platform: 'iOS',
        //     type: 'iPad Spotlight',
        //     device: 'tablet',
        //     device_detail: 'iPad',
        //     width: 50,
        //     height: 50,
        //     radius: false,
        //     resolution: 'standard',
        //     file_name: 'Icon-50.png'
        // },
        // {
        //     platform: 'iOS',
        //     type: 'iPad Spotlight',
        //     device: 'tablet',
        //     device_detail: 'iPad',
        //     width: 100,
        //     height: 100,
        //     radius: false,
        //     resolution: 'standard',
        //     file_name: 'Icon-50@2x.png'
        // },
        // {
        //     platform: 'iOS',
        //     type: 'App Icon',
        //     device: 'phone',
        //     device_detail: 'iPad App',
        //     width: 57,
        //     height: 57,
        //     radius: false,
        //     resolution: 'standard',
        //     file_name: 'Icon-57.png'
        // },
        // {
        //     platform: 'iOS',
        //     type: 'App Icon',
        //     device: 'phone',
        //     device_detail: 'iPad App',
        //     width: 114,
        //     height: 114,
        //     radius: false,
        //     resolution: 'standard',
        //     file_name: 'Icon-57@2x.png'
        // },
        // {
        //     platform: 'iOS',
        //     type: 'App Icon',
        //     device: 'phone',
        //     device_detail: 'iPhone 1/2/3 & iPod Touch',
        //     width: 60,
        //     height: 60,
        //     radius: false,
        //     resolution: 'standard',
        //     file_name: 'Icon-60.png'
        // },
        {
            platform: 'iOS',
            type: 'App Icon',
            device: 'phone',
            device_detail: 'iPhone 5, iPhone 4/4S',
            width: 120,
            height: 120,
            radius: false,
            resolution: 'high',
            file_name: 'Icon-60x60@2x.png'
        },
        {
            platform: 'iOS',
            type: 'App Icon',
            device: 'phone',
            device_detail: 'iPhone 6 Plus',
            width: 180,
            height: 180,
            radius: false,
            resolution: 'high',
            file_name: 'Icon-60x60@3x.png'
        },
        // {
        //     platform: 'iOS',
        //     type: 'iPad App',
        //     device: 'tablet',
        //     device_detail: 'iPad',
        //     width: 72,
        //     height: 72,
        //     radius: false,
        //     resolution: 'high',
        //     file_name: 'Icon-72.png'
        // },
        // {
        //     platform: 'iOS',
        //     type: 'iPad App',
        //     device: 'tablet',
        //     device_detail: 'iPad',
        //     width: 144,
        //     height: 144,
        //     radius: false,
        //     resolution: 'high',
        //     file_name: 'Icon-72@2x.png'
        // },
        {
            platform: 'iOS',
            type: 'App Icon',
            device: 'tablet',
            device_detail: 'iPad Mini, iPad 1/2',
            width: 76,
            height: 76,
            radius: false,
            resolution: 'standard',
            file_name: 'Icon-76x76@1x.png'
        },
        {
            platform: 'iOS',
            type: 'App Icon',
            device: 'tablet',
            device_detail: 'Retina iPad',
            width: 152,
            height: 152,
            radius: false,
            resolution: 'high',
            file_name: 'Icon-76x76@2x.png'
        },
        // {
        //     platform: 'iOS',
        //     type: 'App Icon',
        //     device: 'tablet',
        //     device_detail: 'iPad Pro',
        //     width: 167,
        //     height: 167,
        //     radius: false,
        //     resolution: 'high',
        //     file_name: 'Icon-83.5@2x.png'
        // },
        {
            platform: 'iOS',
            type: 'Splash Icon',
            device: 'universal',
            device_detail: null,
            width: 256,
            height: 256,
            radius: true,
            resolution: 'high',
            file_name: 'SplashIcon-256@1x.png'
        },
        {
            platform: 'iOS',
            type: 'Splash Icon',
            device: 'universal',
            device_detail: null,
            width: 512,
            height: 512,
            radius: true,
            resolution: 'high',
            file_name: 'SplashIcon-256@2x.png'
        },
        {
            platform: 'iOS',
            type: 'Splash Icon',
            device: 'universal',
            device_detail: null,
            width: 768,
            height: 768,
            radius: true,
            resolution: 'high',
            file_name: 'SplashIcon-256@3x.png'
        },
        // {
        //     platform: 'iOS',
        //     type: 'App Store Icon',
        //     device: 'all',
        //     device_detail: null,
        //     width: 512,
        //     height: 512,
        //     radius: false,
        //     resolution: 'standard',
        //     file_name: 'iTunesArtwork.png'
        // },
        {
            platform: 'iOS',
            type: 'App Store Icon',
            device: 'all',
            device_detail: null,
            width: 1024,
            height: 1024,
            radius: false,
            resolution: 'high',
            file_name: 'Icon-marketing-1024x1024.png'
        },
        /* ------------ ANDROID ICONS ------------ */
        // ldpi (square)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 36,
            height: 36,
            radius: true,
            resolution: 'ldpi',
            file_name: 'ic_launcher.png'
        },
        // ldpi (round)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 36,
            height: 36,
            round: true,
            resolution: 'ldpi',
            file_name: 'ic_launcher_round.png'
        },
        // mdpi (square)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 48,
            height: 48,
            radius: true,
            resolution: 'mdpi',
            file_name: 'ic_launcher.png'
        },
        // mdpi (round)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 48,
            height: 48,
            round: true,
            resolution: 'mdpi',
            file_name: 'ic_launcher_round.png'
        },
        // mdpi (foreground)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 108,
            height: 108,
            radius: false,
            padding: 42,
            resolution: 'mdpi',
            file_name: 'ic_launcher_foreground.png'
        },
        // hdpi (square)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 72,
            height: 72,
            radius: true,
            resolution: 'hdpi',
            file_name: 'ic_launcher.png'
        },
        // hdpi (round)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 72,
            height: 72,
            round: true,
            resolution: 'hdpi',
            file_name: 'ic_launcher_round.png'
        },
        // hdpi (foreground)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 162,
            height: 162,
            radius: false,
            padding: 64,
            resolution: 'hdpi',
            file_name: 'ic_launcher_foreground.png'
        },
        // xhdpi (square)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 96,
            height: 96,
            radius: true,
            resolution: 'xhdpi',
            file_name: 'ic_launcher.png'
        },
        // xhdpi (round)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 96,
            height: 96,
            round: true,
            resolution: 'xhdpi',
            file_name: 'ic_launcher_round.png'
        },
        // xhdpi (foreground)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 216,
            height: 216,
            radius: false,
            padding: 86,
            resolution: 'xhdpi',
            file_name: 'ic_launcher_foreground.png'
        },
        // xxhdpi (square)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 144,
            height: 144,
            radius: true,
            resolution: 'xxhdpi',
            file_name: 'ic_launcher.png'
        },
        // xxhdpi (round)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 144,
            height: 144,
            round: true,
            resolution: 'xxhdpi',
            file_name: 'ic_launcher_round.png'
        },
        // xxhdpi (foreground)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 324,
            height: 324,
            radius: false,
            padding: 128,
            resolution: 'xxhdpi',
            file_name: 'ic_launcher_foreground.png'
        },
        // xxxhdpi (square)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 192,
            height: 192,
            radius: true,
            resolution: 'xxxhdpi',
            file_name: 'ic_launcher.png'
        },
        // xxxhdpi (round)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 192,
            height: 192,
            round: true,
            resolution: 'xxxhdpi',
            file_name: 'ic_launcher_round.png'
        },
        // xxxhdpi (foreground)
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 432,
            height: 432,
            radius: false,
            padding: 172,
            resolution: 'xxxhdpi',
            file_name: 'ic_launcher_foreground.png'
        },
        /* ------------ HIGH RESOLUTION ANDROID ICONS ------------ */
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 328,
            height: 328,
            radius: true,
            resolution: 'ldpi',
            file_name: 'ic_launcher_hi_res.png'
        },
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 768,
            height: 768,
            radius: true,
            resolution: 'mdpi',
            file_name: 'ic_launcher_hi_res.png'
        },
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 768,
            height: 768,
            radius: true,
            resolution: 'hdpi',
            file_name: 'ic_launcher_hi_res.png'
        },
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 768,
            height: 768,
            radius: true,
            resolution: 'xhdpi',
            file_name: 'ic_launcher_hi_res.png'
        },
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 768,
            height: 768,
            radius: true,
            resolution: 'xxhdpi',
            file_name: 'ic_launcher_hi_res.png'
        },
        {
            platform: 'Android',
            type: 'Launcher Icon',
            device: 'all',
            device_detail: null,
            width: 1024,
            height: 1024,
            radius: true,
            resolution: 'xxxhdpi',
            file_name: 'ic_launcher_hi_res.png'
        },
        // End Hi-Res Icons
        {
            platform: 'Android',
            type: 'Google Play Icon',
            device: 'all',
            device_detail: null,
            width: 512,
            height: 512,
            radius: false,
            resolution: 'high',
            file_name: 'ic_launcher-web.png'
        },
        {
            platform: 'Web',
            type: 'favicon',
            device: 'all',
            device_detail: null,
            width: 16,
            height: 16,
            radius: false,
            resolution: 'low',
            file_name: 'favicon-16.ico'
        },
        {
            platform: 'Web',
            type: 'favicon',
            device: 'all',
            device_detail: null,
            width: 32,
            height: 32,
            radius: false,
            resolution: 'standard',
            file_name: 'favicon-32.ico'
        },
        {
            platform: 'Web',
            type: 'favicon',
            device: 'all',
            device_detail: null,
            width: 48,
            height: 48,
            radius: false,
            resolution: 'high',
            file_name: 'favicon-48.ico'
        },
        {
            platform: 'Web',
            type: 'favicon',
            device: 'all',
            device_detail: null,
            width: 64,
            height: 64,
            radius: false,
            resolution: 'x-high',
            file_name: 'favicon-64.ico'
        }
    ]

};
