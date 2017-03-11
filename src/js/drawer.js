$(document).ready(function () {

  const toggleButton = (function () {

    let drawer = $('.drawer');
    let toggleBtn = $('i#toggle');
    let showDrawerStyle = 'show-drawer';
    let hamburgerStyle = 'fa-bars';
    let backArrowStyle = 'fa-arrow-left';
    let showDrawer = false;

    let switchToggle = () => {
      let checkIfIconIsHamburger = toggleBtn.is('.fa-bars');

      if(checkIfIconIsHamburger) {
        showDrawer = true;
        switchToBackArrow();
        drawerSupport();
      } else {
        showDrawer = false;
        drawerToggleHideAnimation();
        drawerSupport();
      }
    };

    let drawerSupport = () => {
      if (showDrawer) {
        drawer.addClass(showDrawerStyle);
      } else {
        drawerHideAnimation();
      }
    };

    let drawerHideAnimation = () => {
      drawer.animate({
        left: '-=270'
      }, 600, () => {
        drawer.css('left', () => 0);
        drawer.removeClass(showDrawerStyle);
      })
    };

    let drawerToggleHideAnimation = () => {
      toggleBtn.animate({
        left: '-=270'
      }, 600, () => {
        toggleBtn.css('left', () => 30);
        switchIcon(hamburgerStyle);
      });
    };

    let switchToBackArrow = () => {
      switchIcon(backArrowStyle);
    };

    let switchIcon = (newStyle) => {
      let styleToRemove = (newStyle === hamburgerStyle) ? backArrowStyle : hamburgerStyle;

      toggleBtn.removeClass(styleToRemove)
              .addClass(newStyle);
    };

    let mountToggle = () => {
      toggleBtn.on('click', switchToggle);
    };

    return {
      mountToggle
    };

  })();

  toggleButton.mountToggle();

});
