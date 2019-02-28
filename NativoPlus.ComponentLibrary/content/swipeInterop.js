window.swiper = {
    swiperinit: function () {


        $(document).ready(function (obj) {
            // Bind the swiperightHandler callback function to the swipe event on div.box
            $("#swipetext").on("swiperight", swiperightHandler);

            $("#swipetext").on("swipeleft", swiperleftHandler);

            // Callback function references the event target and adds the 'swiperight' class to it
            async function swiperightHandler() {
                await DotNet.invokeMethodAsync('NativoPlus.ComponentLibrary', 'SwipeRight');
               
               
            }

            async function swiperleftHandler(event) {
                await DotNet.invokeMethodAsync('NativoPlus.ComponentLibrary', 'SwipeLeft');
             
            }
        });


        //$("#swipeContainer").swipe({
        //    //Generic swipe handler for all directions
        //    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        //        $("#title").text("You swiped " + direction);
        //    }
        //});
            
    },
    SwipedRight: function (obj) {
        obj.invokeMethodAsync('SwipedRight');
        //DotNet.invokeMethodAsync('NativoPlus.ComponentLibrary', 'SwipedRight');
     
    },
    SwipedLeft: function () {
        DotNet.invokeMethodAsync('SwipeLeft');
       

    }
};

