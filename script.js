var incorrectAnswers = [];
var flashcards = [
  {
    question: "What is Fela Kuti's full name?",
    answer: ["Olufela Olusegun Oludotun Ransome-Kuti", "fela olusegun oludotun ransome-kuti","fela segun dotun ransome-kuti", "Fela dotun segun ransome-kuti", "Olufela Oludotun Olusegun Ransome-Kuti"]
  },
  {
   question : "What year did Fela Kuti release his debut album?",
   answer: ["1969"]
  },
{
   question: "Which musical instrument did Fela Kuti primarily play?",
   answer: ["Saxophone"]
},
{
   question: "In what city was Fela Kuti born?",
   answer: ["Abeokuta"]
},
{
   question: "What was the name of Fela Kuti's influential band?",
   answer: ["Africa 70" ,"Egypt 80"]
},
{
  question: "Which musical genre did Fela Kuti pioneer?",
  answer: ["Afrobeat"]
},
{
  question: "What was the title of Fela Kuti's famous song that criticized the Nigerian government?",
  answer: ["Zombie"]
},
{ 
  question:"Fela Kuti's music blended African rhythms with elements of which Western genre?",
Answer: ["Jazz"]
},
{ 
  question:"What was the name of Fela Kuti's nightclub in Lagos?",
Answer: ["The Shrine"]
},
{
  question:"Which European city did Fela Kuti consider his spiritual home?",
Answer: ["Paris, France"]
},
{
  question:"What was the name of the Broadway musical based on Fela Kuti's life?",
 Answer: ["Fela"]
},
{
  question:"What political movement did Fela Kuti establish?",
 Answer: ["The Movement of the People"]
},
{
  question:"What was the name of Fela Kuti's commune and recording studio?",
 Answer: ["Kalakuta Republic"]
},
{
  question:"Which Fela Kuti song addresses the issue of colonialism in Africa?",
 Answer: ["Colonial Mentality"]
},
{
  question:"What was the title of Fela Kuti's longest song, lasting over 30 minutes?",
 Answer: ["Confusion Break Bones"]
},
{
  question:"Which influential American musician collaborated with Fela Kuti on the album Music of Many Colors?",
 Answer: ["Roy Ayers"]
},
{
  question:"What was the nickname given to Fela Kuti due to his rebellious nature?",
 Answer: ["Black President"]
},
{
  question:"Which Fela Kuti album is considered his breakthrough release?",
 Answer: ["Roforofo Fight"]
},
{
  question:"What was the title of the documentary film that explores Fela Kuti's life and legacy?",
 Answer: ["Finding Fela"]
},
{
  question:"Which international music festival did Fela Kuti perform at in 1984?",
 Answer: ["The Glastonbury Festival"]
},
{
  question:"What was the name of Fela Kuti's former wife and band member?",
 Answer: ["Fehintola Anikulapo-Kuti"]
},
{
  question:"Fela Kuti's music often conveyed messages of social and political __________.",
 Answer: ["Activism or Resistance"]
},
{
  question:"What was the title of Fela Kuti's 1985 album recorded with Egypt 80?",
 Answer: ["Army Arrangement"]
},
{
  question:"Which Fela Kuti song became a popular anthem for the anti-apartheid movement?",
 Answer: ["Lady"]
},
{
  question:"Fela Kuti's political activism often led to clashes with __________ authorities.",
 Answer: ["Nigerian", "Government"]
},
{
  question:"What was the name of Fela Kuti's youngest son, who is also a musician?",
 Answer: ["Seun Kuti"]
},
{
  question:"Which Fela Kuti song criticizes religious hypocrisy and blind faith?",
 Answer: ["Shuffering and Shmiling"]
},
{
  question:"What was the title of Fela Kuti's final studio album released before his death?",
 Answer: ["Underground System"]
},
{
  question:"Which influential musician from Ghana heavily influenced Fela Kuti's music?",
 Answer: ["E.T. Mensah"]
},
{
  question:"Fela Kuti's album Zombie criticized the actions of which group?",
 Answer: ["The Nigerian Military"]
},
{
  question:"Which controversial Nigerian organization did Fela Kuti openly criticize?",
 Answer: ["The Nigerian Police"]
},
{
  question:"What was the title of Fela Kuti's album released in 1977 that responded to his mother's death?",
 Answer: ["Coffin for Head of State"]
},
{
  question:"Which Fela Kuti song is a tribute to the Yoruba goddess of love and fertility?",
 Answer: ["Lady"]
},
{
  question:"Fela Kuti's music is characterized by infectious rhythms and __________ melodies.",
 Answer: ["Groovy or Catchy"]
},
{
  question:"What was the title of Fela Kuti's album released in 1976 that depicted himself as an African soldier?",
 Answer: ["Upside Down"]
},
{
  question:"Which international award did Fela Kuti receive posthumously in 2018?",
  answer: ["The Grammy Lifetime Achievement Award"]
},
{
  question:"What was the name of Fela Kuti's drummer and musical director?",
 Answer: ["Tony Allen"]
},
{
  question:"Which Fela Kuti song calls for African unity and pride?",
 Answer: ["Beasts of No Nation"]
},
{
  question:"Fela Kuti's music often featured extended instrumental __________.",
 Answer: ["Solos or Breaks"]
},
{
  question:"What was the title of Fela Kuti's album released in 1980 that criticized the Nigerian military regime?",
 Answer: ["International Thief Thief"]
},
{
  question:"Which Fela Kuti song is a scathing critique of corruption in Nigerian society?",
 Answer: ["Authority Stealing"]
},
{
  question:"What was the title of Fela Kuti's first solo album released in 1969?",
 Answer: ["Fela Fela Fela"]
},
{
  question:"Fela Kuti's album EXPENSIVE SHIT alluded to a real-life incident involving __________.",
 Answer: ["Fela being framed for possessing drugs"]
},
{
  question:"Which Fela Kuti song encourages people to think critically and question authority?",
 Answer: "Sorrow Tears and Blood"
},
{
  question:"Fela Kuti's mother, Funmilayo Ransome-Kuti, was a prominent __________.",
 Answer: "Nigerian Activist or Feminist"
},
{
  question:"What was the title of Fela Kuti's album released in 1975 that addressed themes of oppression and resistance?",
 Answer: "Expensive Shit"
},
{
  question:"Which Fela Kuti song explores the concept of Suffering and Smiling?",
 Answer: "Shuffering and Shmiling"
},
{
  question:"Fela Kuti's music was heavily influenced by the rhythms and traditions of the __________ people.",
 Answer: "Yoruba"
},
{
  question:"What was the name of Fela Kuti's saxophonist and musical collaborator?",
 Answer: "Lekan Animashaun"
},
{
  question:"Which Fela Kuti song expresses his frustration with the Nigerian government's mismanagement of the country's resources?",
 Answer: "Coffin for Head of State"
},
{
  question:"Fela Kuti's music continues to inspire and influence __________ musicians around the world.",
Answer: "Countless or Many"
},
{
  question:"What was the title of Fela Kuti's album released in 1971 that criticized the Nigerian government's corruption?",
Answer: "Na Poi"
},
{
  question:"Which Nigerian city did Fela Kuti relocate to in the late 1970s?",
Answer: "Lagos"
},
{
  question:"What was the name of Fela Kuti's mother, who was a feminist activist and a pivotal figure in his life?",
Answer: "Funmilayo Ransome-Kuti"
},
{
  question:"Which famous American musician featured Fela Kuti's song Water No Get Enemy in his movie soundtrack?",
Answer: "Spike Lee"
},
{
  question:"What was the title of Fela Kuti's 1973 album that addressed themes of poverty and social inequality?",
Answer: "Gentleman"
},
{
  question:"Fela Kuti was heavily influenced by the music and culture of which African country?",
Answer: "Ghana"
},
{
  question:"What was the title of the documentary film that chronicles Fela Kuti's life and music?",
Answer: "Fela: Music Is the Weapon"
},
{
  question:"Which Fela Kuti song criticizes the Nigerian government's oppressive tactics?",
Answer: "Sorrow Tears and Blood"
},
{
  question:"What was the name of Fela Kuti's father, who was a Protestant minister and educator?",
Answer: "Reverend Israel Oludotun Ransome-Kuti"
},
{
  question:"Which Fela Kuti song emphasizes the importance of education and knowledge?",
 Answer: "Teacher Don't Teach Me Nonsense"
},
{
  question:"What was the name of Fela Kuti's famous nightclub in the 1980s?",
 Answer: "The Afrika Shrine"
},
{
  question:"Which Fela Kuti song reflects his belief in the power and importance of African women?",
 Answer: "Lady"
},
{
  question:"What was the title of Fela Kuti's album released in 1975 that featured a fusion of Afrobeat and jazz?",
 Answer: "Expensive Shit"
},
{
  question:"Which international music festival did Fela Kuti headline in 1988?",
 Answer: "The Montreux Jazz Festival"
},
{
  question:"What was the name of Fela Kuti's older brother, who was a medical doctor and an activist?",
 Answer: "Olikoye Ransome-Kuti"
},
{
  question:"Which Fela Kuti song criticizes the African elite and their disconnection from the struggles of the common people?",
 Answer: "Coffin for Head of State"
},
{
  question:"What was the title of Fela Kuti's 1975 album that addressed themes of police brutality?",
 Answer: "Zombie"
},
{
  question:"Which country did Fela Kuti briefly visit and perform in, leading to his arrest and imprisonment?",
 Answer: "Ghana"
},
{
  question:"What was the name of the band formed by Fela Kuti's son, Femi Kuti, following in his father's footsteps?",
 Answer: "Positive Force"
},
{
  question:"Which Fela Kuti song expresses his love and admiration for his mother?",
 Answer: "Mama"
},
{
  question:"What was the title of Fela Kuti's 1976 album that highlights the struggles of the Nigerian people?",
 Answer: "Yellow Fever"
},
{
  question:"Which influential musician from South Africa collaborated with Fela Kuti on the song LADY?",
 Answer: "Miriam Makeba"
},
{
  question:"What was the name of Fela Kuti's drummer who played a key role in shaping the Afrobeat sound?",
 Answer: "Tony Allen"
},
{
  question:"Which Fela Kuti song conveys his message of self-empowerment and self-belief?",
 Answer: "Upside Down"
},
{
  question:"What was the title of Fela Kuti's album released in 1978 that criticized the Nigerian government's policies?",
 Answer: "Shuffering and Shmiling"
},
{
  question:"Which international city hosted the Fela Kuti-inspired music festival, Felabration?",
 Answer: "London"
},
{
  question:"What was the name of Fela Kuti's first wife, who was a member of his band and a key influence on his music?",
 Answer: "Remilekun Taylor"
},
{
  question:"Which Fela Kuti song addresses the issue of African cultural identity and pride?",
  answer: "Black Man's Cry"
},
{
  question:"What was the title of Fela Kuti's 1980 album that expressed his frustration with the Nigerian government?",
  answer: "Authority Stealing"
},
{
  question:"Which famous American rapper sampled Fela Kuti's music in one of his songs?",
  answer: "Jay-Z"
},
{
  question:"What was the name of Fela Kuti's record label?",
  answer: "Kalakuta Records"
},
{
  question:"Which Fela Kuti song calls for unity among African nations?",
  answer: "Africa Center of the World"
},
{
  question:"What was the title of Fela Kuti's 1989 album that focused on the environmental issues in Nigeria?",
  answer: "Beasts of No Nation"
},
{
  question:"Which famous British musician produced Fela Kuti's album Upside Down?",
  answer: "Ginger Baker"
},
{
  question:"What was the name of Fela Kuti's youngest son, who followed in his father's footsteps as a musician?",
  answer: "Seun Kuti"
},
{
  question:"Which Fela Kuti song criticizes the abuse of power and corruption in Nigerian society?",
  answer: "Shakara"
},
{
  question:"What was the title of Fela Kuti's 1972 album that highlighted the struggles of the Nigerian working class?",
  answer: "Roforofo Fight"
},
{
  question:"Which Nigerian activist and politician did Fela Kuti support during his presidential campaign?",
  answer: "Moshood Kashimawo Olawale Abiola"
},
{
  question:"What was the name of Fela Kuti's horn section in his band?",
  answer: "The Egypt 80 Horns"
},
{
  question:"Which Fela Kuti song expresses his disapproval of Western cultural influence in Africa?",
  answer: "International Thief Thief"
},
{
  question:"What was the title of Fela Kuti's album released in 1985 that criticized the military government?",
  answer: "Army Arrangement"
},
{
  question:"Which American musician collaborated with Fela Kuti on the album Music of Many Colors?",
   answer: "Roy Ayers"
},
{
  question:"What was the name of Fela Kuti's father's church, where Fela developed his musical talents?",
  answer: "Abeokuta Baptist Church"
},
{
  question:"Which Fela Kuti song calls for a revolution and change in Nigerian society?",
  answer: "Shakara Oloje"
},
{
  question:"What was the title of Fela Kuti's album released in 1974 that highlighted the struggles of the Nigerian people?",
  answer: "Alagbon Close"
},
{
  question:"Which international music festival did Fela Kuti perform at in 1986?",
  answer: "The WOMAD Festival"
},
{
  question:"What was the name of Fela Kuti's backup vocalists and dancers?",
  answer: "The Queens"
},
{
  question:"Which Fela Kuti song addresses the issue of African unity and the need for Pan-Africanism?",
  answer: "Blackman's Cry"
},
{
  question:"What was the title of Fela Kuti's album released in 1987 that criticized the Nigerian government's policies?",
  answer: "Beasts of No Nation"
},
{
  question:"Which influential musician and activist from the United States visited Fela Kuti in Nigeria?",
  answer: "James Brown"
}

];

var currentFlashcardIndex = 0;
var score = 0;
var timeRemaining = 180; //3 minutes in seconds
var timerInterval;


function showFlashcard() {
  var currentFlashcard = flashcards[currentFlashcardIndex];

  var questionText = document.getElementById("questionText");
  var answerInput = document.getElementById("answerInput");
  var resultMessage = document.getElementById("resultMessage");
  var scoreTracker = document.getElementById("scoreTracker");

  questionText.textContent = currentFlashcard.question;
  answerInput.value = "";
  resultMessage.textContent = "";

  answerInput.disabled = false;
  answerInput.classList.remove("answered");
  scoreTracker.textContent = "Score: " + score;

  startTimer();// Start timer
}
function startTimer() {
  timerInterval = setInterval(function () {
    timeRemaining--;
    var minutes = Math.floor(timeRemaining / 60);
    var seconds = timeRemaining % 60;
    document.getElementById("timer").textContent = "Time Remaining: " + minutes + ":" + seconds.toString().padStart(2, "0");

    if (timeRemaining <= 0) {
      endGame();
    }
  }, 1000);
}
var endGameButton = document.getElementById("endGameButton");
endGameButton.addEventListener("click", endGame);




function checkAnswer() {
  var currentFlashcard = flashcards[currentFlashcardIndex];

  var answerInput = document.getElementById("answerInput");
  var resultMessage = document.getElementById("resultMessage");
  var scoreTracker = document.getElementById("scoreTracker");

  var userAnswer = answerInput.value.trim().toLowerCase();
  var correctAnswers = currentFlashcard.answer.map(function (answer) {
    return answer.toLowerCase();
  });

  var correctSound = document.getElementById("correctSound");
  var wrongSound = document.getElementById("wrongSound");

  if (correctAnswers.includes(userAnswer)) {
    resultMessage.textContent = "Correct!";
    resultMessage.classList.remove("wrong");
    resultMessage.classList.add("correct");
    score++;
    correctSound.play();
  } else {
    resultMessage.textContent = "Wrong!";
    resultMessage.classList.remove("correct");
    resultMessage.classList.add("wrong");
    wrongSound.play();
    incorrectAnswers.push(currentFlashcard); // Store the incorrect answer
  }

  answerInput.disabled = true;
  answerInput.classList.add("answered");
  scoreTracker.textContent = "Score: " + score;

  currentFlashcardIndex++;
  if (currentFlashcardIndex < flashcards.length) {
    setTimeout(showFlashcard, 1500); // Delay to show next question
  } else {
    endGame();
  }

  clearInterval(timerInterval); //Stop the timer
}

function endGame() {
  clearInterval(timerInterval);
  alert("Time's up! Game Over. Final Score: " + score);

  if (incorrectAnswers.length > 0) {
    var incorrectAnswersMessage = "Incorrect Answers:\n";
    for (var i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersMessage += "Question: " + incorrectAnswers[i].question + "\n";
      incorrectAnswersMessage += "Correct Answer: " + incorrectAnswers[i].answer.join(", ") + "\n\n";
    }
    alert(incorrectAnswersMessage);
  }

  // Additional code for any other actions you want to take when the game ends
}



showFlashcard();
