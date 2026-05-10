let time = 1500;

let timerRunning = false;

let interval;

let sessions = 0;

/* TIMER */

function updateTimer(){

  let minutes =
  Math.floor(time / 60);

  let seconds =
  time % 60;

  seconds =
  seconds < 10
  ? "0" + seconds
  : seconds;

  document.getElementById("timer").innerText =
  `${minutes}:${seconds}`;

  if(time > 0){

    time--;

  }else{

    clearInterval(interval);

    timerRunning = false;

    alert("Focus Session Completed!");

    sessions++;

    document.getElementById("sessions").innerText =
    sessions;

    updateProgress();
  }
}

function startTimer(){

  if(!timerRunning){

    interval =
    setInterval(updateTimer,1000);

    timerRunning = true;
  }
}

function pauseTimer(){

  clearInterval(interval);

  timerRunning = false;
}

function resetTimer(){

  clearInterval(interval);

  timerRunning = false;

  time = 1500;

  document.getElementById("timer").innerText =
  "25:00";
}

/* GOALS */

function saveGoal(){

  let goal =
  document.getElementById("goalInput").value;

  document.getElementById("goalText").innerText =
  "Today's Goal: " + goal;
}

/* NOTES */

function saveNotes(){

  let notes =
  document.getElementById("notesInput").value;

  localStorage.setItem(
    "studyNotes",
    notes
  );

  alert("Notes Saved!");
}

/* TASKS */

function addTask(){

  let taskInput =
  document.getElementById("taskInput");

  let task =
  taskInput.value;

  if(task === "") return;

  let li =
  document.createElement("li");

  li.innerText =
  "✔ " + task;

  li.onclick = function(){

    li.style.textDecoration =
    "line-through";

    li.style.opacity =
    "0.5";
  }

  document.getElementById("taskList")
  .appendChild(li);

  taskInput.value = "";
}

/* PROGRESS */

function updateProgress(){

  let progress =
  sessions * 10;

  if(progress > 100){

    progress = 100;
  }

  document.getElementById("progressFill")
  .style.width =
  progress + "%";
}

/* LOAD SAVED NOTES */

window.onload = function(){

  let savedNotes =
  localStorage.getItem(
    "studyNotes"
  );

  if(savedNotes){

    document.getElementById("notesInput")
    .value = savedNotes;
  }
}

/* THEME TOGGLE */

function toggleTheme(){

  document.body.classList.toggle(
    "light-mode"
  );
}