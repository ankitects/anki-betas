// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="intro.html">Intro &amp; Downloads</a></li><li class="chapter-item expanded "><a href="2021-scheduler.html">2021 Scheduler</a></li><li class="chapter-item expanded "><a href="github.html">Changes in 23.12+</a></li><li class="chapter-item expanded "><a href="anki23.10.html">Changes in 23.10</a></li><li class="chapter-item expanded "><a href="anki2.1.66.html">Changes in 2.1.66</a></li><li class="chapter-item expanded "><a href="anki2.1.62.html">Changes in 2.1.62</a></li><li class="chapter-item expanded "><a href="anki2.1.61.html">Changes in 2.1.61</a></li><li class="chapter-item expanded "><a href="anki2.1.57.html">Changes in 2.1.57</a></li><li class="chapter-item expanded "><a href="anki2.1.56.html">Changes in 2.1.56</a></li><li class="chapter-item expanded "><a href="anki2.1.55.html">Changes in 2.1.55</a></li><li class="chapter-item expanded "><a href="anki2.1.54.html">Changes in 2.1.54</a></li><li class="chapter-item expanded "><a href="anki2.1.53.html">Changes in 2.1.53</a></li><li class="chapter-item expanded "><a href="anki2.1.52.html">Changes in 2.1.52</a></li><li class="chapter-item expanded "><a href="anki2.1.51.html">Changes in 2.1.51</a></li><li class="chapter-item expanded "><a href="anki2.1.50.html">Changes in 2.1.50</a></li><li class="chapter-item expanded "><a href="anki2.1.48.html">Changes in 2.1.48</a></li><li class="chapter-item expanded "><a href="anki2.1.47.html">Changes in 2.1.47</a></li><li class="chapter-item expanded "><a href="anki2.1.45.html">Changes in 2.1.45</a></li><li class="chapter-item expanded "><a href="anki2.1.44.html">Changes in 2.1.44</a></li><li class="chapter-item expanded "><a href="anki2.1.43.html">Changes in 2.1.43</a></li><li class="chapter-item expanded "><a href="anki2.1.41.html">Changes in 2.1.41</a></li><li class="chapter-item expanded "><a href="older.html">Older</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
