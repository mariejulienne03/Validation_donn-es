let nom = document.querySelector('input[type="text"]');
let email = document.querySelector('input[type="email"]');
let mdp = document.querySelector('input[type="password"]');
let confMdp = document.querySelector("#conf-mdp");

let form = document.querySelector(".formulaire");

let erreurNom = document.getElementById("error-nom");
let erreurEmail = document.getElementById("error-email");
let erreurMdp = document.getElementById("mdp-consigne");
let erreurConfMdp = document.getElementById("error-confMdp");

let boutton = document.querySelector("#envoyer");

// test pour afficher message erreur si nom < 3 caractères 

nom.addEventListener("input", validerNom);
email.addEventListener("keydown", validerEmail);
mdp.addEventListener("keydown", validerMdp);
confMdp.addEventListener("input", validerConfMdp);

//fonction validerNom 
function validerNom() {
  let valeurNom = nom.value;

  if (valeurNom.length < 3) {
    erreurNom.innerHTML = "veuillez saisir un moins 3 caracrères";
  } else {
    erreurNom.innerHTML = "✅";
  }
}

//function validerEmail 
function validerEmail() {
  let regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

  if (!regex.test(email.value)) {
    erreurEmail.innerHTML = "Veuillez saisir un email valide";
  } else {
    erreurEmail.innerHTML = "✅";
  }
}

// fonction validerMdp 
function validerMdp() {
  let symboles = /[$&@!]/;
  let chiffre = /\d/;

  if (mdp.value.length >= 6 && mdp.value.match(symboles) && mdp.value.match(chiffre)) {
    erreurMdp.textContent = '✅'
  } else {
    erreurMdp.textContent = '❌';
  }
}

// fonction validerConfMdp 
function validerConfMdp() {
  if (confMdp.value === mdp.value) {
    erreurConfMdp.textContent = '✅';
  } else {
    erreurConfMdp.textContent = '❌';
  }
}

// secouement de la page 
form.addEventListener("submit", shakePage);

// Fonction pour secouer la page
function shakePage(event) {
  // Vérifiez si au moins un des inputs n'est pas valide
  if (erreurNom.innerHTML !== "✅" || erreurEmail.innerHTML !== "✅" || erreurMdp.textContent !== "✅" || erreurConfMdp.textContent !== "✅") {
    // Ajoutez la classe "shake" au corps de la page
    document.body.classList.add("shakeX");
    setTimeout(() => {
      document.body.classList.remove("shakeX");
    }, 3000);
  }
}
