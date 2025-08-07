var my__exam = [
  { Id: 1,  question: "2*5 = ?",                     answer: "10",  Score: 3 },
  { Id: 2,  question: "Where are you from?",         answer: "Iran",  Score: 1 },
  { Id: 3,  question: "Capital of France?",          answer: "Paris",  Score: 2 },
  { Id: 4,  question: "Largest planet in our solar system?", answer: "Jupiter",  Score: 4 },
  { Id: 5,  question: "Chemical symbol for gold?",   answer: "Au",  Score: 5 },
  { Id: 6,  question: "√144 = ?",                    answer: "12",  Score: 3 },
  { Id: 7,  question: "Who painted the Mona Lisa?",  answer: "Leonardo da Vinci",  Score: 6 },
  { Id: 8,  question: "Speed of light (m/s)?",       answer: "299792458",  Score: 8 },
  { Id: 9,  question: "First element in the periodic table?", answer: "Hydrogen",  Score: 4 },
  { Id: 10, question: "Number of continents?",       answer: "7",  Score: 2 },
  { Id: 11, question: "Longest river in the world?", answer: "Nile",  Score: 7 },
  { Id: 12, question: "5! (5 factorial) = ?",        answer: "120",  Score: 5 },
  { Id: 13, question: "Largest ocean?",              answer: "Pacific",  Score: 3 },
  { Id: 14, question: "Inventor of the telephone?",  answer: "Alexander Graham Bell",  Score: 6 },
  { Id: 15, question: "H2O is the formula for?",     answer: "Water",  Score: 2 },
  { Id: 16, question: "Closest star to Earth?",      answer: "Sun",  Score: 1 },
  { Id: 17, question: "First human on the moon?",    answer: "Neil Armstrong",  Score: 7 },
  { Id: 18, question: "Programming language created in 1995?", answer: "JavaScript",  Score: 9 }
];
var Scores = 0;
var Normalamswer = '';
var A = my__exam.map(quest => {
  Normalamswer = prompt(quest.question);
  if(Normalamswer == quest.answer) {
    Scores = Scores + quest.Score
   }
  return Scores
  
});
console.log(Scores);
