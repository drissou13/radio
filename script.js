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
  function playRadio(radio) {
  const player = document.getElementById("audioPlayer");
  player.src = radio.stream;
  player.play();

  // Affiche le lecteur flottant
  document.getElementById("floatingPlayer").style.display = "flex";
  document.getElementById("radioName").textContent = radio.name;
  document.getElementById("liveBadge").classList.remove("hidden");

  // Supprimer l'effet "glow" de toutes les radios
  const cards = document.querySelectorAll(".radio-item");
  cards.forEach(card => card.classList.remove("glow"));

  // Trouver la carte correspondant à la radio choisie
  const selectedCard = Array.from(cards).find(card =>
    card.querySelector("p").textContent === radio.name
  );

  // Appliquer l'effet "glow" uniquement sur cette radio
  if (selectedCard) {
    selectedCard.classList.add("glow");
  }
}

}

}
// Vérifier l'état de toutes les radios
radios.forEach(radio => {
  checkRadioStatus(radio);
});
