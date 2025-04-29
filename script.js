// script.js

// Fonction pour basculer entre les modes jour/nuit
function toggleTheme() {
    const currentTheme = document.body.classList.contains('night-mode');
    if (currentTheme) {
        // Passer en mode jour
        document.body.classList.remove('night-mode');
        document.getElementById('theme-toggle').textContent = '🌙 Mode Nuit';
    } else {
        // Passer en mode nuit
        document.body.classList.add('night-mode');
        document.getElementById('theme-toggle').textContent = '🌞 Mode Jour';
    }
}

// Appliquer automatiquement le thème nuit si l'utilisateur préfère ce mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('night-mode');
    document.getElementById('theme-toggle').textContent = '🌞 Mode Jour';
    function playRadio(radio) {
  const player = document.getElementById("audioPlayer");
  player.src = radio.stream;
  player.play();

  document.getElementById("radioName").textContent = radio.name;
  document.getElementById("liveBadge").classList.remove("hidden");
}
function stopRadio() {
  const player = document.getElementById("audioPlayer");
  player.pause();
  player.src = "";

  document.getElementById("radioName").textContent = "Choisissez une radio";
  document.getElementById("liveBadge").classList.add("hidden");
}

}
