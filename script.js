var cm = document.getElementById("currentMark")
var ew = document.getElementById("examWorth")
var em = document.getElementById("expectedMark")
var finalGrade = document.getElementById("finalGrade")

function calculateGrade(){
  console.log("hello")
  var cmNumber = cm.value
  var ewNumber = ew.value
  var emNumber = em.value

  cmNumber /= 100
  ewNumber /= 100
  emNumber /= 100

  var answer
  answer = (cmNumber * (1-ewNumber)) + (emNumber * ewNumber)
  answer *= 100
  finalGrade.textContent = answer + " %"
}//end calculateGrade
