/* Declare variables below to save the different sections (divs) of your story*/
let StoryOpeningOne = document.querySelector(".option-one-screen")
let Stay = document.querySelector(".option-one")
let StoryOpeningTwo = document.querySelector(".option-two-screen")
let FindHelp = document.querySelector(".option-two")
let StoryOpeningThree = document.querySelector(".option-three-screen")
let Sneak = document.querySelector(".option-three")
let StoryOpeningFour = document.querySelector(".option-four-screen")
let WakeUp = document.querySelector(".option-four")

Stay.onclick=function(){
  StoryOpeningOne.style.display = "block"
    
};

FindHelp.onclick=function(){
  StoryOpeningTwo.style.display = "block"

};

Sneak.onclick=function(){
   StoryOpeningThree.style.display = "block"
};

WakeUp.onclick=function(){
  StoryOpeningFour.style.display = "block"
};

