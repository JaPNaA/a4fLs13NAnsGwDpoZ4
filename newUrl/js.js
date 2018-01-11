var url = "",
    extra = "",
    ns = false,
    longURL = "",
    out = document.getElementById("out"),
    search = location.search;

{
    let a = search.slice(1, search.length).split("&"),
        al = a.length;

    for (let i = 0; i < al; i++) {
        a[i] = a[i].split("=");
        a[i][1] = decodeURIComponent(a[i][1]).replace(/\+/g, ' ');

        if (a[i][0] == "u") {
            url = a[i][1];
        } else if (a[i][0] == "e") {
            extra = a[i][1];
        }
        if (a[i][0] == "n") {
            if (a[i][1] == "on") {
                ns = true;
            } else {
                ns = false;
            }
        }
    }
}

url = btoa(btoa(btoa(url)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

extra = extra
    .replace(/[^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_]/g, "-");

longURL = location.host + location.pathname.substr(0, location.pathname.slice(0, location.pathname.length - 1).lastIndexOf('/')) + "/aM4Kwlp04-AA_fM1?aLw=" + (extra || "aWm24LsZ") + "&Za2=" + url + "&Se23f=" + (ns ? "aZ43" : "l4Pq");

console.log(longURL);

out.value = longURL;
out.addEventListener("click", () => out.select());