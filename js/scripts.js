// var score = 0;
 $(document).ready(function() {
   function team(players, results, total){
     this.player = players ;
   }
   var score = 0;
   $("#buttonRoll").click(function() {
     var dice = Math.floor(Math.random() * 6 + 1);
     score += dice;
     document.getElementById('scoreOne').innerHTML = dice;
     document.getElementById('noo').innerHTML = score;
     // document.getElementById('scoreTwo').innerHTML = dice;
     // document.getElementById('noo1').innerHTML = score;
     // if (dice == 1) {
     //
     // } else {
     //
     // }
   });


 });
