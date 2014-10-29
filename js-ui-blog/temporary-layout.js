window.onload = function () {

    var mBtn = document.getElementById('toggle-mobile-menu');

    mBtn.onclick = function (e) {

        var el = e.target,
            navList = el.previousElementSibling;

        navList.className === 'nav-list mobile-opened'
            ? navList.className = 'nav-list'
            : navList.className = 'nav-list mobile-opened';
    }

    window.onresize = function () {
    var navList = document.getElementsByTagName('nav')[0].firstElementChild;
        navList.className = 'nav-list';
    }

}