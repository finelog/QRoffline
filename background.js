chrome.app.runtime.onLaunched.addListener(function() 
{
    chrome.app.window.create('index.html', 
    {
        id: "qroffline",
        bounds: 
        {
            width: 600,
            height: 480,
            left: 100,
            top: 60
        },
        minWidth: 600,
        minHeight: 480
    });
});
