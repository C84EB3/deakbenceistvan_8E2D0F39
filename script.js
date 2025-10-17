const tippek = [
  "Igyál sok vizet!",
  "Aludj eleget!",
  "Mozogj minden nap!",
  "Egyél sok zöldséget!",

];

function megjelenitTippek() {
  let lista = document.getElementById("tippekLista");
  lista.innerHTML = "";

  for (let i = 0; i < tippek.length; i++) {
    let elem = document.createElement("li");
    elem.textContent = tippek[i];
    lista.appendChild(elem);
  }

  alert("Összesen " + tippek.length + " tipp van.");
}

function ellenorizEtel() {
  let egeszsegesEtelek = ["alma", "zöldség", "hal", "zabpehely", "csirke"];
  let etel = document.getElementById("etelInput").value.toLowerCase();
  let valasz = document.getElementById("etelValasz");

  if (egeszsegesEtelek.includes(etel)) {
    valasz.textContent = "Ez egy egészséges étel!";
  } else {
    valasz.textContent = "Ez nem biztos, hogy egészséges.";
  }
}

function kaloriaSzamitas() {
  let suly = document.getElementById("suly").value;
  let ido = document.getElementById("ido").value;
  let eredmeny = document.getElementById("kaloriaEredmeny");

  if (suly > 0 && ido > 0) {
    let kaloria = suly * ido * 0.1;
    eredmeny.textContent = "Elégetett kalória: " + kaloria.toFixed(1) + " kcal";
  } else {
    eredmeny.textContent = "Írj be érvényes számokat!";
  }
}
