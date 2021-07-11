import "./main.pcss";

window.onload = function () {
    var all_links = document.getElementById("nav2").getElementsByTagName("a"),
        i = 0,
        len = all_links.length,
        full_path = location.href.split('#')[0]; //Ignore hashes?

    // Loop through each link.
    for (; i < len; i++) {
        if (all_links[i].href.split("#")[0] == full_path) {
            all_links[i].className += " border-b-2 border-warmgray-900";
        }
    }
}
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, {
    passive: false
});