$(document).ready(function () {

  const toggleButton = (function () {

    let toggleBtn = $('i#toggle');
    let hamburgerStyle = 'fa-bars';
    let backArrowStyle = 'fa-arrow-left';

    let switchToggle = () => {
      let checkIfIconIsHamburger = toggleBtn.is('.fa-bars');
      console.log(checkIfIconIsHamburger);

      if(checkIfIconIsHamburger) {
        switchToBackArrow();
      } else {
        switchToHamburger();
      }
    };

    let switchToHamburger = () => {
      toggleBtn.animate({
        left: '-=170'
      }, 600, () => {
        toggleBtn.css('left', () => {
          return 30;
        })
        switchIcon(hamburgerStyle);
      });
    }

    let switchToBackArrow = () => {
      switchIcon(backArrowStyle);
    }

    let switchIcon = (newStyle) => {
      let styleToRemove = (newStyle === hamburgerStyle) ? backArrowStyle : hamburgerStyle;

      toggleBtn.removeClass(styleToRemove)
              .addClass(newStyle)
              .fadeIn();
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
