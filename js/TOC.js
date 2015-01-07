var toc = {
    onReady: function() {
        var headings;
        var toc;
        var pageTop;
        var pageNav;
        
        toc = document.getElementById("toc");
        pageNav = document.getElementById("page-content");
       
        if (!toc) {
            // Insert "Content" title
            toc = document.createElement("div");
            toc.id = "page-content-title";
            toc.innerHTML = "Content";
            
            pageNav = document.getElementById("page-content");
            pageNav.appendChild(toc);
            
            toc = document.createElement("div");
            toc.id = "toc";
                    
            pageNav.appendChild(toc);
            
            // Create top of the page anchor
            pageTop = document.createElement("a");
            pageTop.name = "pageTopAnchor";
            
            document.body.insertBefore(pageTop, document.body.firstChild);
        }
        
        if (document.querySelectorAll){
            headings = document.querySelectorAll("h2,h3,h4,h5,h6");
        }
        
        var headingNumbers = [0, 0, 0, 0, 0, 0];
        
        for (var l = 0; l < headings.length; l++){
            var heading = headings[l];
            var headingNumber;
            
            // Build heading number, compensate to ignoring h1 headings
            var level = parseInt(heading.tagName.charAt(1)) - 1;
            if (level < 1 || level > 6){
                continue;
            }
            
            headingNumbers[level - 1]++;
            for (var t = level; t < 6; t++) {
                headingNumbers[t] = 0;
            }
            
            headingNumber = headingNumbers.slice(0, level).join(".");
            
            // Add the section number to the section header title.
            // We place the number in a <span> to make it styleable.
            var span = document.createElement("span");
            
            if (level > 2){
                span.className = "TOCSectNum" + headingNumbers.slice(0, 2).join(".");  
            }                  
            span.innerHTML = headingNumber + ". ";                
            heading.insertBefore(span, heading.firstChild);
            
            // Add anchor for each heading to be able to link to it
            var anc = document.createElement("a");
            anc.name = "TOC" + headingNumber + ".";
            
            if (level > 2){
                anc.className = "TOCDiv" + headingNumbers.slice(0, 2).join(".");
            }
            
            if (level === 1 && headingNumber != 1){
                // Create link to the top of the page
                var backToTop = document.createElement("p");
                backToTop.className = "text-right";

                pageTop = document.createElement("a");
                pageTop.href = "#pageTopAnchor";
                pageTop.innerHTML = "Back to top";

                backToTop.appendChild(pageTop);
                heading.parentNode.insertBefore(backToTop, heading);        
            }        
            
            heading.parentNode.insertBefore(anc, heading);
            anc.appendChild(heading);
            
            if (level < 3) 
            {
                // Build link with the paragraph reference for
                // all headers with level less than 3, link to
                // higher headers is built on low level header click
                
                var link = document.createElement("a");
                link.name = "TOCHeader" + headingNumber;
                link.href = "#TOC" + headingNumber + ".";
                link.innerHTML = heading.innerHTML;

                // Add expand/collapse function
                link.setAttribute("onclick","toggleMenu(" + headingNumber + "," + level + ")");

                var entry = document.createElement("div");
                entry.className = "TOCEntry TOCLevel" + level;
                entry.id = "TOCDivHeader" + headingNumber;
                entry.appendChild(link);
                

                toc.appendChild(entry);
            }
        }
    }
};

$(document).ready(toc.onReady);