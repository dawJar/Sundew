$(document).ready(function () {

    let windowObj = $(window);

    const postPage = (function () {

        let documentObj = $(document);
        let body = $('body');
        let containerPosts = $('.container-posts');
        let singlePost = $('.single-post');
        let backToTopButton = $('.fa-chevron-up');

        let windowHeight = windowObj.height();
        let whichHiddenPostToShow = 0;
        let backToTopListenerMounted = false;
        let scrollBottomPos,
            documentObjHeight,
            visiblePosts;


        let setPosts = () => {
            let allPosts = containerPosts.children();
            visiblePosts = allPosts.filter((i, el) => el.className === 'single-post');
        };

        let setDimensions = () => {
            let visiblePostCounter = visiblePosts.length;
            scrollBottomPos = windowObj.scrollTop() + windowObj.height()
            setOnResizeDocumentHeight();
        };

        let setOnResizeDocumentHeight = () => {
            documentObjHeight = documentObj.height();
        };

        let checkPosition = () => {
            if (scrollBottomPos > documentObjHeight - 30) {
                showNextHiddenPost();
            }
        };

        let showNextHiddenPost = () => {
            let whichOneToShow = visiblePosts.length;
            singlePost.eq(whichOneToShow).fadeIn('slow').removeClass('hidden-element');
            whichHiddenPostToShow++;
        };

        let handleClickBackToTop = () => {
            body.animate({ scrollTop: 0 }, 'slow');
            backToTopListenerMounted = true;
        };

        let mountBackToTopButton = () => {
            if (backToTopButton.hasClass('hidden-element') &&
                     whichHiddenPostToShow >= visiblePosts.length) {

                if (!backToTopListenerMounted) {
                    backToTopButton.on('click', handleClickBackToTop);
                }
                setBackToTopPosition();
            }
        };

        let setBackToTopPosition = () => {
            let topPos = documentObjHeight - 70;
            backToTopButton.removeClass('hidden-element');
            backToTopButton.css({
                position: 'absolute',
                display: 'block',
                color: '#cb4b41',
                top: topPos,
                textAlign: 'center'
            });
        };

        let scrollEventHandler = () => {
            setPosts();
            setDimensions();
            checkPosition();
            mountBackToTopButton();
        };

        let resizeEventHandler = () => {
            setOnResizeDocumentHeight();
            setBackToTopPosition();
        };

        return {
            scrollEventHandler,
            resizeEventHandler
        };

    })();

    windowObj.scroll(() => postPage.scrollEventHandler());
    windowObj.resize(() => postPage.resizeEventHandler());

});
