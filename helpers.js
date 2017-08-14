function makeObjectString(en, sp) {
    return '"' + en + '":"' + sp + '",'
}

function get() {

    for(i=1;i<l;i++){
        if(r[i].cells[0].colSpan == 1) {
            s+=makeObjectString(r[i].cells[1].innerText,r[i].cells[0].innerText)+ makeObjectString(r[i].cells[3].innerText,r[i].cells[2].innerText)
        }
    }
    var x = document.getElementsByTagName('table')[1].rows
for(i =0;i<l;i++){s += makeObjectString(document.getElementsByTagName('table')[1].rows[i].children[0].innerText, document.getElementsByTagName('table')[1].rows[i].children[1].innerText)}}

function changeDict(dictKey)
{
    words = dicts[dictKey]
    if (swapWords){
        words = swap(words)
    }
    baseKeys = shuffle(Object.keys(words))

    newGame()
    // Load the possible dictionaries
    newWord(numberOfChoices)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newGame() {
  wordIndex = 0
  answerRight = 0
  answerWrong = 0
  currentWordCount = 1
  wordsWrongInGame = []
  updateResults()
}

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

function nextWord() {
  wordIndex+=1
  if (baseKeys.length == wordIndex) {
      wordIndex = 0
  }
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
    var $div = $("<li>", {"class": "wordOption", "text": text, "correct": isAnswer});
    $div.click(function(){ checkAnswer(this) });
    $("#words").append($div);
}
