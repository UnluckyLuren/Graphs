// Constantes

const initCont = document.getElementById("initCont");
const startEdit = document.getElementById("startEdit");
const editCont = document.getElementById("editCont");
const bgSecond = document.getElementById("background");
const sideMenu = document.getElementById("menu");
const grafMusic = document.getElementById("grafMusic");
const contGeGrafs = document.getElementById("contGeGrafs");

// Variables





// Funciones

const estilosInit= () => {
  let libreriaScript = document.getElementById("https://d3js.org/d3.v4.min.js");
  initCont.classList.add("ocult");
  editCont.classList.remove("ocult");
  editCont.style.background = "transparent";
  bgSecond.classList.remove("ocult");
  sideMenu.classList.remove("ocult");
  grafMusic.classList.add("ocult");
  contGeGrafs.classList.remove("ocult");
  desactivarLibreria(libreriaScript);
}

// Menu acordeon

// Obtener todos los elementos <a> directos bajo ".sub-menu" en "#leftside-navigation"
var subMenuLinks = document.querySelectorAll("#leftside-navigation .sub-menu > a");

// Iterar a través de cada enlace y agregar un manejador de clic
subMenuLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Ocultar todos los elementos ul ul bajo "#leftside-navigation"
    var allSubMenus = document.querySelectorAll("#leftside-navigation ul ul");
    allSubMenus.forEach(function (subMenu) {
      subMenu.style.display = "none";
    });

    // Mostrar el submenú siguiente solo si no está visible actualmente
    var nextSubMenu = this.nextElementSibling;
    if (window.getComputedStyle(nextSubMenu).display !== "block") {
      nextSubMenu.style.display = "block";
    }

    // Detener la propagación del evento
    e.stopPropagation();
  });
});


// Activar y desactivar las librerias 

function activarLibreria(url, libreriaScript) {
  if (!libreriaScript) {
    libreriaScript = document.createElement("script");
    libreriaScript.id = `${url}`;
    libreriaScript.src = url;
    document.body.appendChild(libreriaScript);
  }
}

function desactivarLibreria(libreriaScript) {
  if (libreriaScript) {
    libreriaScript.parentNode.removeChild(libreriaScript);
    libreriaScript = null;
  }
}

// Eventos

startEdit.addEventListener("click", () => {
  estilosInit();
  setTimeout(() => {
    initCont.style.display = "none";
  }, 500);
});

// Eventos subMenu

const ejecGrafosMusic = () => {
  grafMusic.classList.remove("ocult");
  contGeGrafs.classList.add("ocult");
  let libreriaScript = document.getElementById("https://d3js.org/d3.v4.min.js");
  activarLibreria("https://d3js.org/d3.v4.min.js",libreriaScript);
}

