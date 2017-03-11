$(document).ready(function () {

  const loadingPage = (function () {
    let loadingPage = $('#loading-page');

    let removeLoadingContent = () => {
      loadingPage.remove();
    };

    let hideLoadingContent = () => {
      loadingPage.delay(1500).fadeOut('slow', removeLoadingContent)
    };

    return {
      hideLoadingContent
    };

  })();

  loadingPage.hideLoadingContent();

});
