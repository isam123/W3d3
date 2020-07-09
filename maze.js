$(document).ready(function () {
    

let win =true;

    $("div.boundary").hover(function() {

        $("#maze >.boundary").addClass("youlose");
        $("#status").removeAttr("style").text("")
        win = false;        
    })



    $("#end").hover(() =>{

        if(win){ 
        $("#status")
            .removeClass("style")
            .css({'background' : 'green','color':'white' ,'visibility' : 'visible'})
            .text("You Win! :]");
     }
        else {     

            $("#status")
            .css({'background' : 'red' ,'visibility' : 'visible'})
            .text("You lose! :]");

         }
    })

    $("#start").click(function(e) {

        console.log("sdcad")
       $("#maze >.boundary").removeClass("youlose");
       $("#status")
       .css({'visibility' : 'hidden' })
       
       
    })


    

    

});

