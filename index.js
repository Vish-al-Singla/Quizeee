var chalk =require("chalk");
var score = 0
var readlineSync=require("readline-sync");
var userName=readlineSync.question(chalk.bold.rgb(255,128,0)("What's your name?\n -> "));
console.log("Welcome",chalk.bold.rgb(51,51,255)(userName),"!");
 console.log("Choose \n",chalk.redBright.bold("1.Relatives"),"\nor\n",chalk.cyan.bold("2. Friends"));
var userEnter=readlineSync.question("Choose Your Category: \n");

if(userEnter==2)
{
  console.log(chalk.yellowBright.bold("**********************"));
  console.log(chalk.rgb(0,255,255)("Let's Begin the Game!"));
  console.log(chalk.yellowBright.bold("**********************"));
  console.log("Quiz:",chalk.bold.rgb(255,255,255).bgRed( "Marvel Fans"));
 function quiz(Question,Answer)
{  
  
  var userAnswer=readlineSync.question(chalk.bold.rgb(51,51,255)(Question));
  if(userAnswer.toUpperCase()===Answer.toUpperCase())
  { score=score+1;
    console.log(chalk.bold.rgb(0,255,0)("Correct Answer!"));
  }
  else
  {
    console.log(chalk.bold.rgb(255,0,0)("Wrong Answer!"));
    console.log(chalk.bold.rgb(51,255,51)("Right answer is : ",Answer));
   
  }
   
   console.log(chalk.rgb(128,0,128)("-------------------------"));
}
var Questions= [{
  question: "1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\n a.2005\n b.2008 \n c.2010\n d.2012 \n ->",
  answer: "b",
},
{
  question: "2. What animal does Darren Cross unsuccessfully shrink in the Ant-Man?\n a.Mouse\n b.Sheep\n c.Duck\n d.Hamster\n ->",
  answer: "b",
},
{
   question:"3.What type of doctor is Stephen Strange?\n a.Neurosurgeon\n b.Cardiothoracic Surgeon\n c.Trauma Surgeon\n d.Plastic Surgeon\n ->",
   answer: "a",
},
{
  question:"4. Who is killed by Loki in the Avengers?\n a.Maria Hill\n b. Nick Fury\n c.Agent Coulson\n d.Doctor Erik Selvig\n -> ",
  answer: "c",
},
{
  question:"5. What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming?\n a.Washington Monument\n b.Statue of Liberty\n c.Mount Rushmore\n d.Golden Gate Bridge\n ->",
  answer: "a",
}]

for(var i=0;i<Questions.length;i++)
{
  var currentQuestion = Questions[i];
  quiz(currentQuestion.question,currentQuestion.answer)
}
console.log(chalk.rgb(128,0,128)("-------------------------"));
if(score==5|| score>3)
{
  console.log(chalk.bold.rgb(0,255,0)("Hurray! you Played Marvolous\n You scored: ",score));
}
else
{
  console.log(chalk.bold.rgb(255,0,0)("You Scored : ", score));
}
}
else
{
  console.log(chalk.yellowBright.bold("**********************"));
  console.log("Let's Begin the Game!");
  console.log(chalk.yellowBright.bold("**********************"));
  console.log("Quiz:",chalk.bold.bgBlue( "Self Introduction"));
  function quiz(Question,Answer)
{  
  
  var userAnswer=readlineSync.question(chalk.bold.rgb(51,51,255)(Question));
  if(userAnswer.toUpperCase()===Answer.toUpperCase())
  { score=score+1;
    console.log(chalk.rgb(0,255,0)("Correct Answer!"));
  }
  else
  {
    console.log(chalk.rgb(255,0,0)("Wrong Answer!"));
    console.log(chalk.rgb(0,255,0)("Right answer is : ",Answer));

  }
   console.log(chalk.bold.rgb(128,0,128)("-------------------------"));
}
var Questions= [{
  question: "Do I love Roller-costers?\na. Yes\nb. No\n ->",
  answer: "a",
},
{
  question: "2. What is my Nickname? \n ->",
  answer: "vishu",
},
{
   question:"3.When is my Birthday?\na.27 September?\nb. 5 January\nc.31 February\nd.None of these \n->",
   answer: "a",
},
{
  question:"4.What is My favourite Cartoon\na. Noddy\nb.Oswald\nc.Bob The builder\nd.All of these \n-> ",
  answer: "d",
},
{
  question:"5. What's your favorite family recipe?\na.Red Sauce Pasta\nb.Truffle Cake\nc.Spaghetti\nd. None of these\n ->",
  answer: "a",
}]

for(var i=0;i<Questions.length;i++)
{
  var currentQuestion = Questions[i];
  quiz(currentQuestion.question,currentQuestion.answer)
}
console.log(chalk.rgb(128,0,128)("-------------------------"));
if(score<=2)
{
  console.log(chalk.bold.redBright("Nice Played\n You scored: ",score));
}
else if(score==3)
{
  console.log(chalk.bold.yellowBright("Yay!! Well Played\n You scored: ", score));
}
else{
  console.log(chalk.green("Hurray!!\n You Scored: ",score));
}
}