var targetURL = "",
    extraText = "",
    notSafePageEnabled = false,
    longURL = "",
    longificationLoops = 3,
    out = document.getElementById("out"),
    search = location.search;

{
    let paramStrs = search.slice(1, search.length).split("&"),
        paramStrsLen = paramStrs.length;

    for (let i = 0; i < paramStrsLen; i++) {
        let [key, value] = paramStrs[i].split("=");
        value = decodeURIComponent(value).replace(/\+/g, ' ');

        if (key == "u") {
            targetURL = value;
        } else if (key == "e") {
            extraText = value;
        } else if (key == "n") {
            if (value == "on") {
                notSafePageEnabled = true;
            } else {
                notSafePageEnabled = false;
            }
        } else if (key == "l") {
            longificationLoops = parseInt(value);
        }
    }
}

for (let i = 0; i < longificationLoops; i++) {
    targetURL = btoa(targetURL);
}

targetURL = targetURL
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

extraText = extraText
    .replace(/[^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_]/g, "-");

longURL =
    location.protocol + "//" + location.host +
    location.pathname.substr(0, location.pathname.slice(0, location.pathname.length - 1).lastIndexOf('/')) +
    "/aM4Kwlp04-AA_fM1?aLw=" + (extraText || "aWm24LsZ") +
    "&Za2=" + targetURL +
    "&Se23f=" + (notSafePageEnabled ? "aZ43" : "l4Pq") +
    "&Vop42ui=" + (longificationLoops * 3164344681);

console.log(longURL);

out.value = longURL;
out.addEventListener("click", function () {
    out.select();
});