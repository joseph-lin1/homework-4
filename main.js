// NOTE FOR TIM

// I changed it a bit accordingly to what we talked about, but still kind of stuck :/
// not sure why the If statements aren't working, but i was able to shorten code by a lot from last time



// What I want to see
// Move this script to a separate .js file
// Use a function constructor

// FUNCTION CONSTRUCTOR
function character(hp, attack, counterAttack) {
  this.hp = hp;
  this.attack = attack;
  this.counterAttack = counterAttack;

  return this;
}

var Han = new character(150, 100, 50);
var Ewok = new character(100, 70, 40);
var Three = new character(200, 100, 40);
var Emperor = new character(60, 80, 50);

// PSEUDO-CODE
// if (Han attacks Ewok) {
//   Ewok.hp = Ewok.hp - Han.attack;
// }

// Apply same class to all 

  // $(this) is how you get the specific character
  // If you want to stop clicking stuffz -> look into .off jQuery method



var firstfighter = "";
var enemylineup = "";
var enemy = "";


$(".character").click(function(){
  // if(".character" == this){

  $(this).appendTo(".hero");
  $(this).css("border", "5px solid green");


  // var firstfighter = this

// else {
    $(".enemy1").appendTo(".fighter");
    $(".enemy1").css("border"," 5px solid red");

    // var enemylineup = enemy ??
  // }
})

$(".enemy1").click(function(){
  // if(".character" == this){

  $(this).appendTo(".enemy");
  $(this).css("border", "5px solid green");

})

$(".button").on("click", function(){
  $(".health").html( character[0] - character[2])

  $(".enemy-health").html(character[0] - character[1])
})
