window.onload = function () {

    // just example, move to the angular directives
    var mBtn = document.getElementById('toggle-mobile-menu'),
        menuItems = document.getElementById('top-menu').getElementsByTagName('li'),
        servicesMenu = document.getElementById('services-menu').getElementsByTagName('li'),
        servicesContent = document.getElementById('services-content').getElementsByTagName('div');

    // setup listeners
    mBtn.addEventListener('click', toggleMenu, false);
    window.addEventListener('resize', onResizeApp, false);

    [].forEach.call(menuItems, function(item) {
        item.addEventListener('click', toggleMenu, false);
    });

    [].forEach.call(servicesMenu, function(item) {
        item.addEventListener('click', toggleServices, false);
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

    function toggleServices (e) {
        var contentName = e.target.getAttribute('data-content');
        [].forEach.call(servicesContent, function(service) {
            if (contentName !== service.getAttribute('data-content')) {
                service.className = '';
            } else {
                service.className === 'active' ? service.className = '' : service.className = 'active';
            }
       });
    }
}