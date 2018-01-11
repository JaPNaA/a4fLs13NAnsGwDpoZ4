var url = "",
    extra = "",
    ns = false,
    search = location.search

{
    let a = search.slice(1, search.length).split("&"),
        al = a.length;

    for (let i = 0; i < al; i++) {
        a[i] = a[i].split("=");
        a[i][1] = decodeURIComponent(a[i][1]).replace(/\+/g, ' ');

        if (a[i][0] == "Za2") {
            url = atob(atob(atob(a[i][1])));
        } else if (a[i][0] == "Se23f") {
            if (a[i][1] == "aZ43") {
                ns = true;
            } else {
                ns = false;
            }
        }
    }
}

document.getElementById("a").href = url;

if(ns) {
    document.body.classList.add("sec");
    document.getElementById("cb").addEventListener("change", function(){
        if(this.checked) {
            document.getElementById("c").disabled = false;
        } else {
            document.getElementById("c").disabled = true;
        }
    });
    document.getElementById("c").addEventListener("click", function(){
        location.replace(url);
    });
} else {
    location.replace(url);
}