function download() {
    let fileUrl = "https://github.com/IPROjr-SI/IPRO-no-time-brother/releases/download/untagged-ca724f3df5e6b4f40de8/ipro.no.time.brother_v1.0.0.apk";
    let fileName = "ipro.no.time.brother_v1.0.0";
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
}


