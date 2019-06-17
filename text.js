// OUVRIR LE MODAL ME

function clickMe() {

  let modal = document.getElementById('myModalMe');
  let btn = document.getElementById('me');

  let span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  function extraire() {
    if (++i < message.length) { // On incremente i et on compare a la taille du message.
      // Si i ne depasse pas le nombre de caracteres dans le message
      // Note : le premier caractere de la chaine commence a l'index 0
      if (message[i] == '\n') {
        // Si saut de ligne on remplace par l'equivalent HTML : "<br/>".
        document.getElementById("aboutme").innerHTML += '<br/>';
      } else {
        // Sinon on ajoute simplement le caractere a l'emplacement courant.
        document.getElementById("aboutme").innerHTML += message[i];
      }
    } else {
      // Sinon on arrete le timer car le texte a fini de s'afficher.
      clearTimeout(interval);
    }
  }

  var i = -1; // On incremente i en debut de fonction, il vaudra donc 0 a la premiere execution.
  var message = "Bonjour !\nJe m'appelle Benoît, je suis né à Cherbourg (Manche) le 5 décembre 1985.\nJe vis à Paris, au 66 boulevard Rochechouart, 18ème arrondissement.\nN'hésitez pas à m'écrire à l'adresse suivante: benoitbalcon@hotmail.fr\nou à me téléphoner au 06 85 45 31 02.\nBienvenue chez moi !"; // Message a afficher, on utilise le caractere \n pour le retour a la ligne.
  var interval = setInterval(extraire, 100); // On declanche le timer et on le garde dans une variable pour l'arreter plus tard.

}

// OUVRIR LE MODAL BACKGROUND

function clickBackground() {

  let modal = document.getElementById('myModalBackground');
  let btn = document.getElementById('background');

  let span = document.getElementsByClassName("close")[1];

  btn.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  function extraire() {
    if (++i < message.length) { // On incremente i et on compare a la taille du message.
      // Si i ne depasse pas le nombre de caracteres dans le message
      // Note : le premier caractere de la chaine commence a l'index 0
      if (message[i] == '\n') {
        // Si saut de ligne on remplace par l'equivalent HTML : "<br/>".
        document.getElementById("aboutbackground").innerHTML += '<br/>';
      } else {
        // Sinon on ajoute simplement le caractere a l'emplacement courant.
        document.getElementById("aboutbackground").innerHTML += message[i];
      }
    } else {
      // Sinon on arrete le timer car le texte a fini de s'afficher.
      clearTimeout(interval);
    }
  }

  var i = -1; // On incremente i en debut de fonction, il vaudra donc 0 a la premiere execution.
  var message = "Actuellement : Formation Web Développeur (Simplon), \n en alternance chez Renault Digital, jusqu'en février 2021.\n\nDe novembre 2016 à avril 2017 : Institut National de l'Audiovisuel (INA), Bry Sur Marne, \nFormation certifiante 'Opérateur de prise de vues vidéo, un métier', niveau Bac +2\n\nDe 2005 à 2007 : CinéCréatis, Nantes - Option Image\nEcole supérieure Technique privée des Métiers de l'Audiovisuel.\n\n2004 : Bac S, physique-chimie, mention AB, Valognes (Manche)."; // Message a afficher, on utilise le caractere \n pour le retour a la ligne.
  var interval = setInterval(extraire, 100); // On declenche le timer et on le garde dans une variable pour l'arreter plus tard.

}

// OUVRIR LE MODAL SKILLS

function clickSkills() {

  let modal = document.getElementById('myModalSkills');
  let btn = document.getElementById('skills');

  let span = document.getElementsByClassName("close")[2];

  btn.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  function extraire() {
    if (++i < message.length) { // On incremente i et on compare a la taille du message.
      // Si i ne depasse pas le nombre de caracteres dans le message
      // Note : le premier caractere de la chaine commence a l'index 0
      if (message[i] == '\n') {
        // Si saut de ligne on remplace par l'equivalent HTML : "<br/>".
        document.getElementById("aboutskills").innerHTML += '<br/>';
      } else {
        // Sinon on ajoute simplement le caractere a l'emplacement courant.
        document.getElementById("aboutskills").innerHTML += message[i];
      }
    } else {
      // Sinon on arrete le timer car le texte a fini de s'afficher.
      clearTimeout(interval);
    }
  }

  var i = -1; // On incremente i en debut de fonction, il vaudra donc 0 a la premiere execution.
  var message = "Techniques : HTML, CSS, Javascript\n\nTechniques de prise de vues : caméras HD (Sony PMW400 et HXC-100) et caméras Grand Capteur (Canon C300, Sony F5).\n\nHumaines : Sens du travail en équipe, esprit d'initiative, à l'écoute, sérieux, curieux, motivé.\n\nAutres : Permis B depuis 2005.";
  var interval = setInterval(extraire, 100); // On declenche le timer et on le garde dans une variable pour l'arreter plus tard.

}

// OUVRIR LE MODAL EXPERIENCE

function clickExperience() {

  let modal = document.getElementById('myModalExperience');
  let btn = document.getElementById('experience');

  let span = document.getElementsByClassName("close")[3];

  btn.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  function extraire() {
    if (++i < message.length) { // On incremente i et on compare a la taille du message.
      // Si i ne depasse pas le nombre de caracteres dans le message
      // Note : le premier caractere de la chaine commence a l'index 0
      if (message[i] == '\n') {
        // Si saut de ligne on remplace par l'equivalent HTML : "<br/>".
        document.getElementById("aboutexperience").innerHTML += '<br/>';
      } else {
        // Sinon on ajoute simplement le caractere a l'emplacement courant.
        document.getElementById("aboutexperience").innerHTML += message[i];
      }
    } else {
      // Sinon on arrete le timer car le texte a fini de s'afficher.
      clearTimeout(interval);
    }
  }

  var i = -1; // On incremente i en debut de fonction, il vaudra donc 0 a la premiere execution.
  var message = "Mai 2017 à Mars 2019 :\nCadreur pour FMC Productions, captations de conférences médicales et d'opérations chirurgicales.\nRenfort Régie ou Electro sur différents projets de fiction.\n\nOctobre 2009 à Juin 2017 :\nVendeur de produits éditoriaux au rayon vidéo, Fnac des Ternes, Paris.\n\nAnnée 2007 :\nStagiaire cadreur pour Nantes7, chaîne de télé locale et pour le Centre de Communication de l'Ouest, Nantes.\nStagiaire assistant de production pour LibrisFilms et pour Les Films au Long Cours.";
  var interval = setInterval(extraire, 100); // On declenche le timer et on le garde dans une variable pour l'arreter plus tard.

}

// OUVRIR LE MODAL HOBBIES

function clickHobbies() {

  let modal = document.getElementById('myModalHobbies');
  let btn = document.getElementById('hobbies');

  let span = document.getElementsByClassName("close")[4];

  btn.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  function extraire() {
    if (++i < message.length) { // On incremente i et on compare a la taille du message.
      // Si i ne depasse pas le nombre de caracteres dans le message
      // Note : le premier caractere de la chaine commence a l'index 0
      if (message[i] == '\n') {
        // Si saut de ligne on remplace par l'equivalent HTML : "<br/>".
        document.getElementById("abouthobbies").innerHTML += '<br/>';
      } else {
        // Sinon on ajoute simplement le caractere a l'emplacement courant.
        document.getElementById("abouthobbies").innerHTML += message[i];
      }
    } else {
      // Sinon on arrete le timer car le texte a fini de s'afficher.
      clearTimeout(interval);
    }
  }

  var i = -1; // On incremente i en debut de fonction, il vaudra donc 0 a la premiere execution.
  var message = "Cinéma\n\nBande-dessinée\n\nLittérature\n\nSport\n\nVoyages";
  var interval = setInterval(extraire, 100); // On declenche le timer et on le garde dans une variable pour l'arreter plus tard.

}