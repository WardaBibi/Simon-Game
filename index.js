//
// var arrayOfBtns=["green","red","yellow","blue"];
// var x=1;
// var randomNo;
// for(var i=0;x===1;i++)
// {
// randomNo=Math.random();
// randomNo= Math.floor(randomNo*4);
// $("body").keydown(function(){
//   $("." + arrayOfBtns[randomNo]).addClass("pressed");
//   setTimeout(function(){
//   $("." + arrayOfBtns[randomNo]).removeClass("pressed");
//   },100);
//
//
// });
// x=0;
// }
var arrayOfBtns=["green","red","yellow","blue"];

      var randomNo;
      var arrayClicked=[];
      var arrayGenerated=[];
      var randomChosencolor;
      var level=0;
        var started=1;
        var index=0;
        var countG;
        var countC;
          var lastIndexGenerated=-1;
          var lastindexPressed;
      function randomSequenceGenerator()
      {
              arrayClicked=[];
                level++;
              $("h1").text("Level  "+ level);
              randomNo=Math.random();
              randomNo= Math.floor(randomNo*4);

              var randomChosencolor=arrayOfBtns[randomNo];

              arrayGenerated.push(randomChosencolor);
              animatePress(randomChosencolor);
                PlayMusic(randomChosencolor);

      }
      var noOfclicks=0;
          $(".btn").click(function()
              {

                noOfclicks++;
                var btnClicked=$(this).attr("id");
                arrayClicked.push(btnClicked);
                PlayMusic(btnClicked);
                animatePress(btnClicked);
                lastindexPressed=(arrayClicked.length)-1;
                checkAnswer(lastindexPressed);
              }
           );

     function animatePress(name)
     {
     $("." +name).addClass("pressed");
     setTimeout(function()
             {
             $("." +name).removeClass("pressed");
             },100);
     }

     function PlayMusic(name)
           {
             var audio= new Audio ("sounds/"+name+".mp3");
             audio.play();
           }


    $("body").keydown(function(){

      if(started===1)
      {
         $("h1").text("Level  "+ level);
         randomSequenceGenerator();
             started=0;
     }
    });

   function checkAnswer(lastindexPressed)
   {
   lastIndexGenerated++;
      countG=arrayGenerated.length;
      countC=arrayClicked.length;
      // console.log("G " +  lastIndexGenerated +arrayGenerated[lastIndexGenerated]);
      // console.log("p " +  lastindexPressed + arrayClicked[lastindexPressed]);
        if(arrayClicked[lastindexPressed]===arrayGenerated[lastIndexGenerated])
        {
          // console.log(arrayClicked+"         cliked");
          // console.log(arrayGenerated+"        gener");
          // console.log("noOfclicks "+noOfclicks);
          //   console.log("countG "+countG);
          //    console.log("countC "+countC);
          if(noOfclicks<=countG)
          {
            console.log("success");
           }
            if(countG===countC && noOfclicks===countG)
            {
              console.log("final success genererate next colour");
              noOfclicks=0;
              lastIndexGenerated=-1;
            setTimeout(randomSequenceGenerator,1000);
            }

        }
        else{
          playmusic("wrong");
          $("body").addClassaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        // console.log("G " +  lastIndexGenerated +arrayGenerated[lastIndexGenerated]);
        // console.log("p " +  lastindexPressed + arrayClicked[lastindexPressed]);
           // console.log("try next time");
           $("h1").text("Game Over, Press Any Key to Restart");

        }
   }
