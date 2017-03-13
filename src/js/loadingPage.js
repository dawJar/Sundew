$(document).ready(function () {

  const loadingPage = (function () {

    let loadingPage = $('#loading-page');
    let fakeLoading = $('#fake-loading');

    let removeLoadingContent = () => {
      loadingPage.remove();
    };

    let hideLoadingContent = () => {
      loadingPage.delay(1500).fadeOut('slow', removeLoadingContent)
    };

    let showContentAfterLoading = () => {
      setTimeout(() => {
        fakeLoading.css('display', () => 'block');
      }, 1500);
    };

    return {
      hideLoadingContent,
      showContentAfterLoading
    };

  })();

  loadingPage.hideLoadingContent();
  loadingPage.showContentAfterLoading();

});
