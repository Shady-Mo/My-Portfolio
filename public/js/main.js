$(document).ready(function() {
    let open = false;
    let t1 = gsap.timeline(), t2 = gsap.timeline();
    function loading() {
        let headline = document.querySelector("header .container .headline");
        let upScroll = document.querySelector("header .scrolling a .up-scroll");
        if (headline.getBoundingClientRect().bottom < 0) {
            upScroll.classList.add("show");
        }
        else {
            upScroll.classList.remove("show");
        }

        let slider = document.querySelector("header .slider");
        let infoImage = document.querySelector("header .container .info .image");
        if (infoImage.getBoundingClientRect().bottom < 0 && open) {
            t2.clear();
            t1.to(slider, {y: 0, duration: 1, ease: 'bounce.out'});
        }
        else {
            t1.clear();
            t2.to(slider, {y: '-100%', duration: 1, ease: 'bounce.in'});
        }
    }

    function findCssRule(selectorString) {
        // helper function searches through the document stylesheets looking for selectorString
        // will also recurse through sub-rules (such as rules inside media queries)
        function recurse(node, selectorString) {
            if (node.cssRules) {
                for (var i = 0; i < node.cssRules.length; i++) {
                    if (node.cssRules[i].selectorText == selectorString) {
                        return node.cssRules[i].style;
                    }
                    if (node.cssRules[i].cssRules) {
                        var found = recurse(node.cssRules[i], selectorString);
                        if (found) return found;
                    }
                }
            }
            return false;
        }
        
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            if (sheet.cssRules) {
                var found = recurse(sheet,selectorString);
                if (found) return found;
            }
        }
        
        return false;
    }

    function startAnimation() {
        let timeline = gsap.timeline();
        timeline.from('header .container .headline', {duration: 2, y: '-200%', ease: 'bounce.out'});
        timeline.from('header .container .headline .links li', {duration: 2, opacity: 0, stagger: 0.5});
    }
    startAnimation();

    function autoTyping() {
        var typed = new Typed(".auto-type", {
            strings: ["Software Engineer", "Front-End Developer", "Competitive Programmer"],
            typeSpeed: 40,
            backSpeed: 40,
            loop: true,
        });
    }
    setTimeout(autoTyping, 2000);

    $(window).scroll(function() {
        let headline = document.querySelector("header .container .headline");
        let upScroll = document.querySelector("header .scrolling a .up-scroll");
        if (headline.getBoundingClientRect().bottom < 0) {
            upScroll.classList.add("show");
        }
        else {
            if (upScroll.classList.contains("show")) {
                upScroll.classList.remove("show");
            }
        }
    });
    setInterval(loading, 500);
    setTimeout(function() {
        let slider = findCssRule("header .slider");
        slider.setProperty("display", "block");
        open = true;
    }, 2000);
});