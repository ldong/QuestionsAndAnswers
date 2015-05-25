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
