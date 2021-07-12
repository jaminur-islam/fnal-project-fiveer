$(document).ready(function(){


    // STICKY MENU
   $(".js--services-section").waypoint(function(direction){
       if (direction == "down") {
        $("nav").addClass("sticky")
       }
    
       else {
           $("nav").removeClass("sticky")

       }
   });

  


});

// (E) SMOTH SCROOL//

$("a").on('click', function(event){
    
    if (this.hash !== "") {
         event.preventDefault();

         var hash = this.hash;

         $('html,body').animate({
             scrollTop: $(hash).offset().top
            }, 800, function(){  
                window.location.hash = hash;
         });
    }

});


 