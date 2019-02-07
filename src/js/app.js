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


})()