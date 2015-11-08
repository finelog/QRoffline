# QRoffline
QRoffline is a Chrome App to generate QR code offline.

## About
There is an similar app [FastQR](https://chrome.google.com/webstore/detail/fastqr-generate-qr-code-o/pnjpnfmlblcconkmohdddbknobjhjgeo "https://chrome.google.com/webstore/detail/fastqr-generate-qr-code-o/pnjpnfmlblcconkmohdddbknobjhjgeo").

I have been using for a while. It works fine, but I got two problems: One is that it automatically pop up saving image window after generate the QR code; The other is that it has trouble to generate other languages.

After checking the source code the app, I found out the app using the [jquery-qrcode](https://github.com/jeromeetienne/jquery-qrcode "https://github.com/jeromeetienne/jquery-qrcode") to generate QR code, And it has the different language trouble too.

So I decide to write a app myself, Thankfully, The [qrcodejs](https://github.com/davidshimjs/qrcodejs "https://github.com/davidshimjs/qrcodejs") works great, save me a lot work.

Basically I am using for myself convenience. However, If you like it and have some troubles or suggestions, welcome to create a issue, I will try my best to fix or improve it.

## How To Use
If you are using The Chrome Browser, you can go Settings->Extensions.check the Developer mode box on the top right, click the "load unpacked extension" button, choose the QRoffline folder. And it's all done.

So Easy, Right? \^_\^

If you are **NOT** using the Chrome, then you can open the index.html to use the app. However, it's all English and I am not sure it's cross browser supportive.

Oh, By the way, Since I'm in China, have trouble to verify the Chrome Developer Account for now. It's OK to publish the app to Chrome Web Store for me, It would a lot help.

## License
MIT License

