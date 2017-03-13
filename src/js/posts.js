$(document).ready(function () {

    const postPage = (function () {

        let windowObj = $(window);
        let body = $('body');
        let containerPosts = $('.container-posts');
        let singlePost = $('.single-post');
        let watcher = $('#peeper');

        let containerPostsHeight,
            singlePostHeight,
            postCounter,
            gapBetweenPosts,
            containerPostsTopPos,
            watcherTopPos,
            toggleTopPos;

        let windowHeight = windowObj.height();


        let countPosts = () => {
            let allPosts = containerPosts.children();
            let visiblePosts = allPosts.filter((i, el) => el.className === 'single-post');
            let arrayOfPosts = visiblePosts.map(el => el);

            return arrayOfPosts.length;
        };

        let setDimensions = () => {
            let visiblePostCounter = countPosts();

            containerPostsTopPos = containerPosts.offset().top;
            watcherTopPos = watcher.offset().top;

            containerPostsHeight = containerPosts.height();
            singlePostHeight = singlePost.outerHeight();
            gapBetweenPosts = (containerPostsHeight - singlePostHeight * visiblePostCounter) / visiblePostCounter;
            
        };

        let checkTogglePosition = () => {
            if (watcherTopPos > containerPostsTopPos) {
                console.log('more');
                showNextHiddenPost();
            } else {
                console.log('even');
            }
        };

        let showNextHiddenPost = () => {

        };

        // let setWatcher = () => {
        //     watcher.css('top', () => containerPostsTopPos);
        //     watcherTopPos = containerPostsTopPos;
        // };

        let scrollEventHandler = () => {
            setDimensions();
            checkTogglePosition();
            // console.log(watcher.offset());
            // if (watcherTopPos === undefined) { setWatcher(); }
        };

        return {
            scrollEventHandler
        }

    })();

    $(window).scroll(() => postPage.scrollEventHandler());

});
