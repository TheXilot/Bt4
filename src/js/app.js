(function () {
    const barBtn = document.getElementById('btnNav');
    const nav = document.querySelector('nav.navbar');


    const fixNav = () => {
        const scoX = window.scrollY
        const nav = document.querySelector('nav');
        if (scoX > 20)
            nav.classList.add('bg-navbar__light')
        else
            nav.classList.remove('bg-navbar__light')
    }

    const fixNavColor = () => {
        const barClass = barBtn.classList;
        const navClass = nav.classList;
        const hasDark = navClass.contains('bg-light');

        if (barClass.contains('collapsed') && !hasDark)
            navClass.add('bg-navbar__light');

        else if (!barClass.contains('collapsed') && hasDark)
            navClass.remove('bg-navbar__light');
    }

    if (document.body.contains(nav)) {
        barBtn.addEventListener('click', fixNavColor);
        window.addEventListener('scroll', fixNav);
    }

})()