
function jumpBox(list) {
   location.href = list.options[list.selectedIndex].value
   }

//Daniel C. Peterson, 1997  All Rights Reserved
//User fee required for commercial pages
//email webmaster@webwinder.com for a quote

function init() 
              {

                             

              questions = new Array()
              questions[1] = "What was the name of David's gigantic opponent?"
              questions[2] = "What was the name of the Sea that Moses parted?"
              questions[3] = "What did moses throw to the ground that became a serpent?"
              questions[4] = "How many times did Samson lie to Delilah before telling her the truth?"
              questions[5] = "''Thus saith the Lord, The heaven is my throne, and the earth is my..."
              questions[6] = "What king reluctantly commanded Daniel be cast into the den of lions?"
              questions[7] = "What city did Joseph take Mary and the young child to following his dream?"
              questions[8] = "What were Shadrach, Meshach, and Abednego cast into?"
              questions[9] = "How many loaves of bread did Jesus feed four-thousand men (plus women and children) with?"
              questions[10] = "Jesus said, ''it's easier for a camel to go through the eye of a needle, than for...''"
              questions[11] = "Where was Jesus crucified?"
              questions[12] = "How old was Noah when the flood waters were upon the earth?"
              questions[13] = "Thou shalt love thy _______ as thyself."
              questions[14] = "''The Lord is my shepherd; I shall not want'' is found in what book?"
              questions[15] = "How long was Jonah in the belly of the fish?"

              answerA = new Array()
              answerA[1] = "Solomon."
              answerA[2] = "Red."
              answerA[3] = "a crown made of thistles."
              answerA[4] = "once."
              answerA[5] = "domain"
              answerA[6] = "Nebuchadnezzar"
              answerA[7] = "Nazareth"
              answerA[8] = "a tar pit"
              answerA[9] = "four"
              answerA[10] = "a rich man to enter in the kingdom of God."
              answerA[11] = "Cyrene."
              answerA[12] = "600."
              answerA[13] = "wife."
              answerA[14] = "Psalms."
              answerA[15] = "two nights and two days."

              answerB = new Array()
              answerB[1] = "Joseph."
              answerB[2] = "Atlantic."
              answerB[3] = "a staff."
              answerB[4] = "twice."
              answerB[5] = "creation."
              answerB[6] = "Solomon."
              answerB[7] = "Bethlehem."
              answerB[8] = "a bottomless pit."
              answerB[9] = "seven."
              answerB[10] = "a fool to accumulate wealth."
              answerB[11] = "Arimatheae."
              answerB[12] = "400."
              answerB[13] = "family."
              answerB[14] = "Job."
              answerB[15] = "three nights and three days."

              answerC = new Array()
              answerC[1] = "Goliath."
              answerC[2] = "Baltic."
              answerC[3] = "a stone tablet."
              answerC[4] = "three times."
              answerC[5] = "temple."
              answerC[6] = "Darius."
              answerC[7] = "Jerusalem."
              answerC[8] = "quicksand."
              answerC[9] = "eleven."
              answerC[10] = "a non-believer to aquire faith."
              answerC[11] = "Golgotha."
              answerC[12] = "500."
              answerC[13] = "neighbor."
              answerC[14] = "Exodus."
              answerC[15] = "four nights and four days."

              answerD = new Array()
              answerD[1] = "Job."
              answerD[2] = "Dead."
              answerD[3] = "a necklace made of beads."
              answerD[4] = "four times."
              answerD[5] = "footstool."
              answerD[6] = "Belshazzar."
              answerD[7] = "Babylon."
              answerD[8] = "a fiery furnace."
              answerD[9] = "fifteen."
              answerD[10] = "a king to control his temptations."
              answerD[11] = "Galilee."
              answerD[12] = "900."
              answerD[13] = "mother."
              answerD[14] = "Luke."
              answerD[15] = "five nights and five days."

              rightAns = new Array
              rightAns[1] = "c"
              rightAns[2] = "a"
              rightAns[3] = "b"
              rightAns[4] = "c"
              rightAns[5] = "d"
              rightAns[6] = "c"
              rightAns[7] = "a"
              rightAns[8] = "d"
              rightAns[9] = "b"
              rightAns[10] = "a"
              rightAns[11] = "c"
              rightAns[12] = "a"
              rightAns[13] = "c"
              rightAns[14] = "a"
              rightAns[15] = "b"

              reference = new Array()
              reference[1] = "1 Samuel 17:4"
              reference[2] = "Exodus 15:22"
              reference[3] = "Exodus 4:2,3"
              reference[4] = "Judges 16:15"
              reference[5] = "Isaiah 66:1"
              reference[6] = "Daniel 6:9"
              reference[7] = "Mathew 2:23"
              reference[8] = "Daniel 3:20"
              reference[9] = "Mathew 15:38"
              reference[10] = "Mark 10:25"
              reference[11] = "Mathew 27:33"
              reference[12] = "Genesis 7:6"
              reference[13] = "Romans 13:9"
              reference[14] = "Psalms 23:1"
              reference[15] = "Jonah 1:17"

              } 

function nextQuestion(form)

//set the total number of questions equal to quizend

{   var quizEnd = eval(15 * 1);

    if(form.questNo.value == quizEnd) {

       form.question.value = "";

       form.choiceA.value = "";

       form.choiceB.value = "";

       form.choiceC.value = "";

       form.choiceD.value = "";

       form.yourChoice.value = "";

       form.results.value = "End of Quiz.  Your final results are listed below."; } else {

    if(form.questNo.value == "") {form.questNo.value = 1} else {
    
       form.questNo.value = eval(form.questNo.value) + 1;

    }

    form.question.value = questions[form.questNo.value];

    form.choiceA.value = answerA[form.questNo.value];

    form.choiceB.value = answerB[form.questNo.value];

    form.choiceC.value = answerC[form.questNo.value];

    form.choiceD.value = answerD[form.questNo.value];

    form.yourChoice.value = "";

    form.results.value = "";

    if(form.myScore.value == "") {form.myScore.value = 0; } else {
                                                  form.myScore.value = form.myScore.value; }

   }

}

   function checkAnswer(form) {
      
      var myScore = 0;
      var curve = 0;

      if(form.results.value != "") {form.results.value = "Sorry, no guessing allowed.  In order to retry this question you will have to start the quiz over.  Click on ''Next Question'' to continue."; }

      else if(form.yourChoice.value == rightAns[form.questNo.value]) {
      form.myScore.value = eval(form.myScore.value) + eval(1);
      form.results.value = "Conratulations!  You are correct. That brings your cumulative score to " + form.myScore.value + " out of a possible " + form.questNo.value + ".  Click on ''Next Question'' to continue."; } else {
      
      form.results.value = "Sorry, you are incorrect. Please refer to " + reference[form.questNo.value] + " before retaking the quiz.  This brings your cumulative score to " + form.myScore.value + " out of a possible " + form.questNo.value + ".  Click on ''Next Question'' to continue." }

   
   curve = form.myScore.value / form.questNo.value;

   form.percent.value = parseInt(curve * 100,10);
   
   if(curve > .90) {form.grade.value = "A"; } else if(curve > .80) {form.grade.value = "B"; } else if(curve > .70) {form.grade.value = "C"; } else if(curve > .60) {form.grade.value = "D"; } else {form.grade.value = "F"; }
    }


function clearForm(form)

{

    
    form.questNo.value = "";
    form.question.value = "";
    form.choiceA.value = "";
    form.choiceB.value = "";
    form.choiceC.value = "";
    form.choiceD.value = "";
    form.yourChoice.value = "";
    form.results.value = "";
    form.myScore.value = "";
    form.percent.value = "";
    form.grade.value = "";
    

}

