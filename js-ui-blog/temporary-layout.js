window.onload = function () {

    // just example, move to the angular directives
    var mBtn = document.getElementById('toggle-mobile-menu'),
        menuItems = document.getElementById('top-menu').getElementsByTagName('li');

    // setup listeners
    mBtn.addEventListener('click', toggleMenu, false );
    window.addEventListener('resize', onResizeApp, false );

    [].forEach.call(menuItems, function(item) {
        item.addEventListener('click', toggleMenu, false );
    });

    // Event handlers
    function onResizeApp () {
        document.getElementById('top-menu').className = 'nav-list';
    }

    function toggleMenu (e) {
        var el = e.target,
            isMobile = document.body.clientWidth <= 320 ? true : false,
            navList = el.rel === 'menu-toggler' ? el.previousElementSibling : el.parentNode.parentNode;

        if (isMobile) {
            navList.className === 'nav-list mobile-opened'
                ? navList.className = 'nav-list'
                : navList.className = 'nav-list mobile-opened';
        }
    }



}