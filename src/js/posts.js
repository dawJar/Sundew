$(document).ready(function () {

    const postPage = (function () {

        let documentObj = $(document);
        let windowObj = $(window);
        let body = $('body');
        let containerPosts = $('.container-posts');
        let singlePost = $('.single-post');

        let windowHeight = windowObj.height();
        let whichHiddenPostToShow = 0;
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
            documentObjHeight = documentObj.height();
        };

        let checkWatcherPosition = () => {
            if (scrollBottomPos > documentObjHeight - 30) {
                showNextHiddenPost();
            }
        };

        let showNextHiddenPost = () => {
            let whichOneToShow = visiblePosts.length;
            singlePost.eq(whichOneToShow).fadeIn('slow').removeClass('hidden-post');
            whichHiddenPostToShow++;
        };

        let scrollEventHandler = () => {
            setPosts();
            setDimensions();
            checkWatcherPosition();
        };

        return {
            scrollEventHandler
        }

    })();

    $(window).scroll(() => postPage.scrollEventHandler());

});
