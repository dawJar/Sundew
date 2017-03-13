$(document).ready(function () {

    const postPage = (function () {

        let windowObj = $(window);
        let body = $('body');
        let containerPosts = $('.container-posts');
        let singlePost = $('.single-post');

        let windowHeight = windowObj.height();
        let currentHighestPost = 0;
        let singlePostHeight,
            gapBetweenPosts,
            containerPostsTopPos,
            scrollTopPos,
            visiblePosts;


        let setPosts = () => {
            let allPosts = containerPosts.children();
            visiblePosts = allPosts.filter((i, el) => el.className === 'single-post');
        };

        let setDimensions = () => {
            let visiblePostCounter = visiblePosts.length;

            containerPostsTopPos = containerPosts.offset().top;
            scrollTopPos = windowObj.scrollTop();

            let containerPostsHeight = containerPosts.height();
            singlePostHeight = singlePost.outerHeight();
            gapBetweenPosts = (containerPostsHeight - (singlePostHeight * visiblePostCounter)) / visiblePostCounter;
        };

        let checkWatcherPosition = () => {
            let postWithBottomPadding = singlePostHeight + gapBetweenPosts;
            let halfOfPostHeight = postWithBottomPadding / 2;
            let basicHeight = containerPostsTopPos;
            let highestPostBottomPos = (currentHighestPost === 0) ?
                    basicHeight : basicHeight + (postWithBottomPadding * currentHighestPost);

            if (scrollTopPos > highestPostBottomPos) {
                showNextHiddenPost();
            }
        };

        let showNextHiddenPost = () => {
            let whichOneToShow = visiblePosts.length;
            singlePost.eq(whichOneToShow).fadeIn('slow').removeClass('hidden-post');
            currentHighestPost++;
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
