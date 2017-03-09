$(document).ready(function () {

  var loadingPage = (function () {
    var loadingPage = $('#loading-page');

    var removeLoadingContent = function () {
      loadingPage.remove();
    };

    var hideLoadingContent = function () {
      loadingPage.delay(1500).fadeOut('slow', removeLoadingContent)
    };

    return {
      hideLoadingContent: hideLoadingContent,
    };

  })();

  loadingPage.hideLoadingContent();

});
