window.swiper = {
    swiperinit: function () {




     
     
        


        $(document).ready(function (obj) {
            // Bind the swiperightHandler callback function to the swipe event on div.box
            //$("#swipeContainer").on("swiperight", _.throttle(swiperightHandler, 200));

            //$("#swipeContainer").on("swipeleft", _.throttle(swiperleftHandler, 200));

            $("#swipeContainer").on('swipeleft', _.throttle(function (event, data) {

                event.stopImmediatePropagation();
                swipeleftHandler();
            
            }, 200));

            $("#swipeContainer").on('swiperight', _.throttle(function (event, data) {

                event.stopImmediatePropagation();
                swiperightHandler();
           
            }, 200));

            // Callback function references the event target and adds the 'swiperight' class to it
            async function swiperightHandler() {
      
                $("#swipeRightBtn").trigger("click");
                //await DotNet.invokeMethodAsync('NativoPlus.ComponentLibrary', 'SwipeRight');
               
               
            }

            async function swipeleftHandler() {
           
                $("#swipeLeftBtn").trigger("click");
                //await DotNet.invokeMethodAsync('NativoPlus.ComponentLibrary', 'SwipeLeft');
             
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

