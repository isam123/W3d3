$(document).ready(function () {
    

let win =true;
let mazeOut = false;
let lastWin =false;

    $("div.boundary").hover(function() {

        $("#maze >.boundary").addClass("youlose");
        $("#status").removeAttr("style").text("")
        win = false;        
    })


    $("#maze").mouseleave(function() {
        if(mazeOut ==true) 
        {
            $("#maze >.boundary").addClass("youlose");
            $("#status")
            .css({'color' : 'red','visibility' : 'visible'})
            .text("You lose! :]");
            
        }
    })


    $("#end").hover(() =>{

        if(win){ 
        $("#status")
            .removeClass("style")
            .css({'color':'green' ,'visibility' : 'visible'})
            .text("You Win! :]");
            
     }
        else {     

            $("#status")
            .css({'color' : 'red','visibility' : 'visible'})
            .text("You lose! :]");

         }
    })

    $("#start").click(function(e) {

        console.log("sdcad")
        mazeOut = true;
       $("#maze >.boundary").removeClass("youlose");
       $("#status")
       .css({'visibility' : 'hidden' })
       
       
    })


    

    

});

