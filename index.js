var buttonOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<buttonOfDrums; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
var buttonInnerHTML = this.innerHTML;
var makeAnimation = this.innerHTML;
var currentKey = this.innerHTML.event.key;
makeSound(buttonInnerHTML);


});
}
document.addEventListener("keypress",function(event){
makeSound(event.key);
animation(event.key);
});



function makeSound(key){
  switch (key) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
  //------------2-------------
    case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
  //----------3-------------
  case "s":
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
  break;
  //4
  case "d":
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
  break;
  //5
  case "j":
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
  break;
  //6
  case "k":
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
  break;
  //7
  case "l":
  var audio = new Audio('sounds/crash.mp3');
  audio.play();
  break;
  default:
}
}


function animation(currentKey){

var activeButton = document.querySelector("." + currentKey);


activeButton.classList.add("pressed");
setTimeout(function (currentKey) {
  activeButton.classList.remove("pressed");
}, 100);


}
