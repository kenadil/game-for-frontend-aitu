let timer = 0;

function enemy() {
  stop();
  obst = setInterval(() => {
    spawn();
  }, 20);
}

function stop() {
  clearInterval(enemy);
}

function spawn() {
  const bug = document.getElementById("badnik1");
  const fly = document.getElementById("badnik2");
  if (!isGameOver) {
    if ((timer += 10) == 2000) {
      bug.classList.add("block");
    }
    if (timer == 3200) {
      timer = 0;
      fly.classList.add("flying");
    }
    bug.addEventListener("animationend", bugRespawn);
    fly.addEventListener("animationend", flyRespawn);
  } else {
    bug.removeEventListener("animationend", bugRespawn);
    fly.removeEventListener("animationend", flyRespawn);
    bug.classList.add("hidden");
    fly.classList.add("hidden");
  }
}

function bugRespawn() {
  const bug = document.getElementById("badnik1");
  var minDuration;
  var maxDuration;
  if (window.innerWidth <= 800) {
    minDuration = 1200;
    maxDuration = 2000;
  } else {
    minDuration = 2500;
    maxDuration = 3500;
  }
  const randomDuration =
    Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;
  const animationDuration = `${randomDuration / 1000}s`;
  bug.style.animationDuration = animationDuration;

  bug.classList.remove("block");
  bug.removeEventListener("animationend", bugRespawn);
}

function flyRespawn() {
  const fly = document.getElementById("badnik2");
  var minDuration;
  var maxDuration;
  if (window.innerWidth <= 800) {
    minDuration = 1000;
    maxDuration = 1600;
  } else {
    minDuration = 2000;
    maxDuration = 2500;
  }
  const randomDuration =
    Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;
  const animationDuration = `${randomDuration / 1000}s`;
  fly.style.animationDuration = animationDuration;

  fly.classList.remove("flying");
  fly.removeEventListener("animationend", flyRespawn);
}
