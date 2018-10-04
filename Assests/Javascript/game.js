

$(document).ready(function () {

    var target = $("#targetScore");
    var score = $("#userScore");
    var win = $("#win");
    var lose = $("#lose");
    var addedScore = []
    var gem1 = $("#gem1");
    var gem2 = $("#gem2");
    var gem3 = $("#gem3");
    var gem4 = $("#gem4");
    var addedLoss = 0;
    var addedWin = 0;

    //  This starts the game
    function startGame() {

        target.val((Math.floor(Math.random() * 120)));
        target.html(target.val());
        score.val(0);
        score.html(score.val());
        lose.val(0);
        win.val(0);

      
        
      













    }
    function gemVal(){ 
        gem1.val((Math.floor(Math.random() * 120)));
        gem2.val((Math.floor(Math.random() * 120)));
        gem3.val((Math.floor(Math.random() * 120)));
        gem4.val((Math.floor(Math.random() * 120)));
    
    }

    startGame();
    gemVal();

    //  



    // Here is the event when I click on the gem

    $(".gem").on('click', function () {

        var total = 0;
        for (var i = 0; i < addedScore.length; i++) {
            total += addedScore[i] << 0;
        }
    
        s = 0

   
        s += parseInt(this.value);
        addedScore.push(parseInt(s));
        score.html(total);
        console.log(total);
        


        if (total > target.val()) { 
          
            addedLoss++

            

            alert("I did not want that much at all!");
           console.log("done");
           addedScore = [];
           total = 0;
           lose.html(addedLoss);
           gemVal();
           
        target.val((Math.floor(Math.random() * 120)));
        target.html(target.val());
           
          
        }

        if (total === target.val()){

            addedWin++
            alert("That is the perfect amount");
            addedScore = [];
            total = 0;
            win.html(addedWin);
            gemVal();





        }



















    })






})


