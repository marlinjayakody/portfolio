import "./main.pcss";

window.onload = function() { 
            var all_links = document.getElementById("nav2").getElementsByTagName("a"),
                i=0, len=all_links.length,
                full_path = location.href.split('#')[0]; //Ignore hashes?
          
            // Loop through each link.
            for(; i<len; i++) {
                if(all_links[i].href.split("#")[0] == full_path) {
                    all_links[i].className += " border-b-2 border-warmgray-900";
                }
            }
            var all_links = document.getElementById("nav").getElementsByTagName("a"),
            i=0, len=all_links.length,
            full_path = location.href.split('#')[0]; //Ignore hashes?
      
        // Loop through each link.
        for(; i<len; i++) {
            if(all_links[i].href.split("#")[0] == full_path) {
                all_links[i].className += " font-bold transition-colors duration-200 pr-3 py-2 bg-warmgray-200";
            }
        }
          }
