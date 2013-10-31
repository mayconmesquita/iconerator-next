#Iconerator
-----------
Automatically generate all app market icons from a single image (iOS + Android).

##Installation
-----------
First download and install GraphicsMagick or ImageMagick. In Mac OS X, you can simply use Homebrew and do:

`brew install imagemagick`
`brew install graphicsmagick`


Then install iconerator via npm with:

`$ sudo npm install -g iconerator`


##Usage
------------
`$ iconerator.js [options] <img file ...> <output path ...>`


  
####Options:

    -h, --help      output usage information
    -V, --version   output the version number
    --only-ios      Only generate iOS icons
    --only-android  Only generate Android icons
    --only-iphone   Only generate iPhone icons
    --only-ipad     Only generate iPad icons
    
    


##License
------------

(The MIT License)

Copyright (c) 2013 Alex Ehrnschwender (http://alexehrnschwender.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.