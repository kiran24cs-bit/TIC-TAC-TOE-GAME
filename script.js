let turn = "X";
let count = 0;
function playstart() {
  document.getElementById("playgame").style.display = "none";
  document.getElementById("containerr").style.display = "grid";
  document.getElementById("playagain").style.display = "block";
}

function markbox(boxid) {
  let box = document.getElementById(boxid).innerHTML;
  if (box == "X" || box == "O") {
    return;
  }
  document.getElementById(boxid).innerHTML = turn;
  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }
  count++;
  checkresult();
}
function checkresult() {
  let one = document.getElementById("one").innerHTML;
  let two = document.getElementById("two").innerHTML;
  let three = document.getElementById("three").innerHTML;
  let four = document.getElementById("four").innerHTML;
  let five = document.getElementById("five").innerHTML;
  let six = document.getElementById("six").innerHTML;
  let seven = document.getElementById("seven").innerHTML;
  let eight = document.getElementById("eight").innerHTML;
  let nine = document.getElementById("nine").innerHTML;
  if (document.getElementById("result").innerHTML =="") {
    if (one == two && two == three && (one == "X" || one == "O")) {
      document.getElementById("result").innerHTML = one + " WON ";
    } else if (four == five && five == six && (four == "X" || four == "O")) {
      document.getElementById("result").innerHTML = four + " WON ";
    }
     else if (seven == eight && eight == nine && (seven == "X" || seven == "O")) {
      document.getElementById("result").innerHTML = four + " WON ";
    }
     else if (one == four && four == seven && (one == "X" || one == "O")) {
      document.getElementById("result").innerHTML = one + " WON ";
    }
     else if (two == five && five == eight && (two == "X" || two == "O")) {
      document.getElementById("result").innerHTML = two + " WON ";
    }
     else if (three == six && six == nine && (three == "X" || three == "O")) {
      document.getElementById("result").innerHTML = three + " WON ";
    }
     else if (one == five && five == nine && (one == "X" || one == "O")) {
      document.getElementById("result").innerHTML = one + " WON ";
    }
     else if (three == five && five == seven && (three == "X" || three == "O")) {
      document.getElementById("result").innerHTML = three + " WON ";
    }
    else if (count==9){
      document.getElementById("result").innerHTML = "MATCH TIE";
      
    }
  }
}

function playagain() {
  let all = document.getElementById("containerr");
  let nboxes = all.querySelectorAll("div");
  for (let i = 0; i < nboxes.length; i++) {
    nboxes[i].innerHTML = null;
  }
  count=0;
  document.getElementById("result").innerHTML ="";
}
