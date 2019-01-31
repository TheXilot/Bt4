// console.log('App is mounted !')
(function () {
    const barBtn = document.getElementById('btnNav');


    const fixNav = () => {
        const scoX = window.scrollY
        const nav = document.querySelector('nav');
        if (scoX > 20)
            nav.classList.add('bg-navbar__light')
        else
            nav.classList.remove('bg-navbar__light')
    }

    const fixNavColor = () => {
        const nav = document.querySelector('nav.navbar');
        // const navLink = document.querySelectorAll('a.nav-link');
        const barClass = barBtn.classList;
        const navClass = nav.classList;
        const hasDark = navClass.contains('bg-light');

        if (barClass.contains('collapsed') && !hasDark) {
            navClass.add('bg-navbar__light');
            // navLink.forEach(el => {
            //     el.style.color = 'black'
            // });
        }
        else if (!barClass.contains('collapsed') && hasDark) {
            navClass.remove('bg-navbar__light');
            // navLink.forEach(el => {
            //     el.style.color = 'white'
            // });
        }
    }

    barBtn.addEventListener('click', fixNavColor);
    window.addEventListener('scroll', fixNav);

    window.flow = function () {
        var sizes = ["s", "m", "l"],
            iconLWidth = 256,
            container = document.getElementById("integration-list"),
            icons = document.querySelectorAll("#integration-list img"),
            resizeTimer,
            w, h;

        // debounce the re-init so it doesn't totally freak out while draging
        window.addEventListener('resize', resizeDebounce);

        function resizeDebounce() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(init, 250);
        }

        function init() {
            w = container.offsetWidth;
            h = container.offsetHeight;

            icons.forEach(function (icon, i) {
                var size = sizes[Math.ceil(Math.random() * 3) - 1];
                TweenMax.set(
                    icon, {
                        attr: {
                            class: size
                        },
                        y: R(50, h - 150),
                        x: R(w, w + 50)
                    }
                );
                animate(icon, i);
            });
        }

        // animate x and y values at different rates
        function animate(element, i) {
            TweenMax.to(
                element,
                R(110, 120), {
                    x: -1500,
                    ease: Linear.easeNone,
                    repeat: -1,
                    delay: -115 / icons.length * i
                }
            );

            TweenMax.to(
                element,
                R(6, 16), {
                    y: '+=50',
                    repeat: -1,
                    yoyo: true,
                    ease: Sine.easeInOut,
                    delay: R(-16, -6)
                }
            );
        };

        function R(min, max) {
            return min + Math.random() * (max - min)
        };

        return {
            init: init
        }
    }().init();
})()