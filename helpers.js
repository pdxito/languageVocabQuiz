function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function newGame() {
  answerRight = 0
  answerWrong = 0
  currentWordCount = 1
  wordsWrongInGame = []
}



function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

function nextWord() {
  wordIndex+=1
  return baseKeys[wordIndex]
}

function checkAnswer(element) {
  if (element.attributes["correct"].value == "true") {
    answerRight+=1
    currentWordCount+=1
    newWord(numberOfChoices)
  }
  else {
    wordsWrongInGame[$('.quizWord').text()] = ""
    answerWrong+=1
  }

  updateResults()
}

function updateResults() {
  document.getElementById("correctAns").innerText = answerRight
  document.getElementById("wrongAns").innerText = answerWrong
  document.getElementById("totalWordsAns").innerText = currentWordCount
}


		function addWordOption(text, isAnswer) {
			var $div = $("<div>", {"class": "wordOption", "text": text, "correct": isAnswer});
			$div.click(function(){ checkAnswer(this) });
			$("#words").append($div);
		}
