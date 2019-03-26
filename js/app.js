"use strict";

var questionArray = ["Does my name contains letter 'g'?(y/n)", 
"My favourite basketball team is Celtics?(y/n)", "I am 23 years old ?(y/n)",
"I prefer dogs over cats(y/n)?", "I love snow (y/n)? "];

var answers = ["My names doesn't contain letter 'g'","My favourite team is Celtics","I am 27 years","I prefer dogs", "Don't like snow at all!"]

alert("Welcome! Question after this would require 'y'/'n' or 'yes'/'no' as response ");
var i = 0;
var response = [];

for(i; i<questionArray.length-1;i++)
{
 do{
  response = prompt(questionArray[i]);
  response = response.toLowerCase();
  }while(response!="y"&&response!="n"&&response!="yes"&&response!="no");
  console.log("For"+ questionArray[i] + " User responded: " + response);
  alert("Correct Answer:" + answers[i]);
}

