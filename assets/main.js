window.onload = function() {
    //five generate qr buttons
    var gentext  = document.getElementById("gentext");
    var genvcard = document.getElementById("genvcard");
    var gensms   = document.getElementById("gensms");
    var genemail = document.getElementById("genemail");
    var gengeo   = document.getElementById("gengeo");

    //five qr code
    var qrtext  = new QRCode(document.getElementById("qrtext"),  { width:250, height:250 });
    var qrvcard = new QRCode(document.getElementById("qrvcard"), { width:250, height:250 });
    var qrsms   = new QRCode(document.getElementById("qrsms"),   { width:250, height:250 });
    var qremail = new QRCode(document.getElementById("qremail"), { width:250, height:250 });
    var qrgeo   = new QRCode(document.getElementById("qrgeo"),   { width:250, height:250 });

    //text input ti focus
    var load2focus = document.getElementById("load2focus");
    window.addEventListener("load", load2focus.focus(), false);

    gentext.addEventListener("click",  function() { genQrCode(gentext,  qrtext,  1) }, false);
    genvcard.addEventListener("click", function() { genQrCode(genvcard, qrvcard, 2) }, false);
    gensms.addEventListener("click",   function() { genQrCode(gensms,   qrsms,   3) }, false);
    genemail.addEventListener("click", function() { genQrCode(genemail, qremail, 4) }, false);
    gengeo.addEventListener("click",   function() { genQrCode(gengeo,   qrgeo,   5) }, false);

    //localization
    var isApp = false;
    if(location.href.search(/hrome-extension:\/\//i))
    {
        isApp = true;
    }
    if(isApp)
    {
        var i = 0;
        var anchors = document.getElementsByTagName("a");
        var h4s     = document.getElementsByTagName("h4");
        var btns    = document.getElementsByTagName("button");
        var inputs  = document.getElementsByTagName("input");

        document.title = chrome.i18n.getMessage("appname");
        for(i=0; i<inputs.length; i++)
        {
            inputs[i].getLocale();
            if(anchors[i])
                anchors[i].getLocale();
            if(h4s[i])
                h4s[i].getLocale();
            if(btns[i])
                btns[i].getLocale();
        }
    }

}

Element.prototype.getLocale = function() {
    var localename = this.attributes["localename"].value;
    if(this.tagName == "INPUT")
        this.placeholder = chrome.i18n.getMessage(localename);
    else
        this.innerText = chrome.i18n.getMessage(localename);
}

function genQrCode(obj, qrcode, type) {
    var inputs = obj.parentElement.getElementsByTagName("input");
    var text = qrFormula(inputs, type);
    if("" != text)
    {
        qrcode.clear();
        qrcode.makeCode(text);
    }
    else
        qrcode.clear();
}

function qrFormula(obj, type) {
    var arr = new Array();
    for(var i=0; i<obj.length; i++)
    {
        if(obj[i].value == "")
        {
            obj[i].focus();
            return "";
        }
        arr[i] = obj[i].value;
    }
    switch(type)
    {
        //text
        case 1:
            return arr[0];
        //vcard
        case 2: 
             return "BEGIN:VCARD\nVERSION:3.0\nN:"+arr[1]+";"+arr[0]+"\nTEL;TYPE=CELL:"+arr[2]+"\nEMAIL:"+arr[3]+"\nEND:VCARD";
        //sms
        case 3: 
            return "SMSTO:"+arr[0]+":"+arr[1];
        //email
        case 4: 
            return "MATMSG:TO:"+arr[0]+";SUB:"+arr[1]+";BODY:"+arr[2]+";;";
        //geo
        case 5:
            return "GEO:"+arr[0]+","+arr[1];
        default:
            return "";
    }
}
