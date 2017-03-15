$(document).ready(function () {

    const postPage = (function () {

        let documentObj = $(document);
        let windowObj = $(window);
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
            documentObjHeight = documentObj.height();
        };

        let checkWatcherPosition = () => {
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
            setTimeout(() => {
                backToTopButton.removeClass('hidden-element');
                backToTopButton.css({
                    position: 'absolute',
                    display: 'block',
                    color: '#cb4b41',
                    top: topPos,
                    textAlign: 'center'
                });
            }, 0);
        };

        let scrollEventHandler = () => {
            setPosts();
            setDimensions();
            checkWatcherPosition();
            mountBackToTopButton();
            console.log('scroll');
        };

        return {
            scrollEventHandler
        }

    })();

    $(window).scroll(() => postPage.scrollEventHandler());

});
