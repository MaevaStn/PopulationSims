var simsBeta = 5000000;
var simsAlpha = 10000000;
var annee = 0;

btn.addEventListener("click", function() {
  let button = document.getElementById("btn");
  setInterval(anneeAgmt, 100) // execute la func anneeAgmt chaque 100ms
});

function anneeAgmt() {
  while (simsBeta < simsAlpha) { // tant que la population beta est inférieur à la population  alpha
    simsAlpha = simsAlpha + 500000; // population alpha augmente de 500000 chaque 100ms
    simsBeta = Math.round(simsBeta + (3 / 100) * simsBeta); // population beta augmente de 3% chaque 100ms
    annee++; // chaque 100ms l'année augmente
    document.getElementById("result").innerHTML = "Dans " + annee + " ans, la population des Sims Beta aura depassé celle des Sims Alpha.";
    document.getElementById("resultAlpha").innerHTML = "Dans " + annee + " ans, la population des Sims Alpha sera de " + simsAlpha + " habitants.";
    document.getElementById("resultBeta").innerHTML = "Dans " + annee + " ans, la population des Sims Alpha sera de " + simsBeta + " habitants.";
  }
}
