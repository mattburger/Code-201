'use strict';

//Storing all the questions on Array
var questionArray = ['Does my name contains letter g?(y/n)',
  'My favourite basketball team is Celtics?(y/n)',
  'I am 23 years old ?(y/n)',
  'I prefer dogs over cats(y/n)?',
  'I love snow (y/n)? ',
  'Please! enter a positive number',
  'Guess what foods I eat yesterday?'];

//answer to question seven
var answer=['egg','bacon','oatmeal','orange','cookie','steak','noodles','water'];

//track all question with correct answers
var correctAnswer =[];

//index for for loop
var i=0;
//random number user should guess
var ranNum = 53;
//number of tries user gets
var count = 4;
//to store how many correct answer user has given
var correctCount = 0; 
//to identify is user's answer is correct
var isCorrect = 0;
//to count how many correct answers for Q#7
var qSevenCount = 0;
//to collect user's response
var response ='';
//to create custome message based on user's performance
var userMessage =' ';

/* This function asks users the Q1 - Q5 from questionArray
Parameters: None
Returns:Nones
*/
function q1to5(){
  alert('Welcome! Question after this would require only (y/n) or (yes/no) as response ');
  //Show prompt until user enter correct answers ;Q1-Q5
  for(i; i<5;i++)
  {
    do{
      response = prompt(questionArray[i]);
      response = response.toLowerCase();
      //if corrent input isn't inserted then shows user a alert
      if(response!=='y'&&response!=='n'&&response!=='yes'&&response!=='no')
      {
        alert('Plese enter either (y/n) or (yes/no) as response');
      }
    }while(response!=='y'&&response!=='n'&&response!=='yes'&&response!=='no');
    //loggin user's response
    console.log('For'+ questionArray[i] + ' User responded: ' + response);
    // to check the reponses from user if submitted response is true or false
    if(i%2===0)
    {
      if(response==='y'||response==='yes')
      {
        alert('Sorry! Incorrect!!');
      }
      else
      {
        alert('Correct');
        correctCount++;
        //tracking the quetions which were correct
        correctAnswer.push(i+1);
      }//end of inner if-else loop
    }
    else
    {
      if(response==='y'||response==='yes')
      {
        alert('Correct!');
        correctCount++;
      }
      else
      {
        alert('Incorrect!!');
      }//end of if-else iner looop
    }//end of if-else outter loop
  }// end of for loop
//start of 6th Question
}//end of function Q1to5
/* This function asks users the Q6 which is guessing number from questionArray
Parameters: None
Returns:Nones
*/
function q6(){
  alert('Now let us play something different. A guessing game!!\nYou have to guess number I am thinking and you get 4 tries. ');
  //user's input and user get 4 chances
  do{
    var guessedNum = prompt(questionArray[5]);
    guessedNum = parseInt(guessedNum);
    if(ranNum>guessedNum)
    {
      count--;
      alert('It is greater than ' + guessedNum+'\nTires left: '+count);
    }
    else if(ranNum===guessedNum)
    {
      isCorrect = 1;
      alert('Bulls Eye!!');
      correctAnswer.push(6);
      correctCount++;
    }
    else
    {
      count--;
      alert('It is lower than ' + guessedNum+ '\nTires left: '+count);
    }
  }while(count !== 0 && isCorrect=== 0 );
}//enf of Q6
/* This function asks users the Q6 from questionArray
Parameters: None
Returns:Nones
*/
function q7(){
   //setting chances to 6 for question#7
  count = 7;
  //user's input for 7th Quetions  and user get 4 chances
  alert('Moving to next game!\nFor this question you get to guess 6 time but you can only enter each correct answers once.');
  do{
    var guessFood = prompt(questionArray[6]);
    guessFood = guessFood.toLowerCase();
    if(answer.includes(guessFood))
    {
      alert('You guessed correct.');
      //removed elements from array
      answer.splice(answer.indexOf(guessFood),1);
      correctCount++;
      qSevenCount++;
    }
    else
    {
      count--;
      alert('Sorry! You have ' + count + ' tries left');
    } 
  }while(count !== 0 && answer.length > 0);
}
/* This function collects all the results from other functions
and displays proper results to end user
Parameters: None
Returns:Nones
*/
function endUserOutPut(){
  //counting how many questions were right in total
  if(correctCount>=7)
  {
    userMessage = 'Great Job on the game! You Rock';
  }
  else if(correctCount <7 && correctCount >3)
  {
    userMessage = 'Not Bad!! Better luck next time';
  }
  else{
    userMessage = 'Sorry! I know you can do great next time!'
  }
  //end of game
  alert('You have completed the game\nTotal Questions: 14\nCorrect Answers: ' + correctCount+'\n'+userMessage+'\nThank you!Hope you enjoyed');
  document.getElementById('ul1').innerHTML = 'Total Questions Asked: 14';
  document.getElementById('ol1').innerHTML = 'Total Correct Response: '+ correctCount;
  var ans ='';
  if(correctAnswer.length>0){
    ans = 'Question# ';
    for(i=0;i<correctAnswer.length;i++){
      ans = ans + '   ' + correctAnswer[i];
    }
    //logic behind selecting 'were' or 'was'
    if(correctAnswer.length>1){
      ans += ' were correct';
    }
    else{
      ans += ' was correct';
    }  
  }  
  else
  {
    ans ='None of the questions from 1-6 were correct';
  }
  //Over all results of the game
  document.getElementById('span1').innerHTML = ans + '\nOut of 6 chances in Q7,' + qSevenCount + ' responses were correct';
}//end of endUerOutput

//qestiion 1 to 5
q1to5();
//questions 6
q6();
//question 7
q7();
//displaying results to user.
endUserOutPut();


