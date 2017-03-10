$(document).ready(function () {

  const loadingPage = (function () {
    let loadingPage = $('#loading-page');

    let removeLoadingContent = function () {
      loadingPage.remove();
    };

    let hideLoadingContent = function () {
      loadingPage.delay(1500).fadeOut('slow', removeLoadingContent)
    };

    return {
      hideLoadingContent
    };

  })();

  loadingPage.hideLoadingContent();

});
