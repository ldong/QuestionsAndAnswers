(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){
  var url = './qa.txt';
  var handleData = function(data){
    var quizzes = data.trim().split('\n\n');
    var parsedQuizzes = [];
    quizzes.forEach(function(quiz, index){
      var parsedQuiz = quiz.split('\n');
      quiz = {};
      quiz['question'] = parsedQuiz[0] || "";
      quiz['answer'] = parsedQuiz[1] || "";
      parsedQuizzes.push(quiz);
    });
    console.log(parsedQuizzes);
  };

  var r = new XMLHttpRequest();
  r.open("GET", url, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200){
      return;
    }
    handleData(r.responseText);
  };
  r.send();

}());

},{}]},{},[1])