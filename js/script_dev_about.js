const terminalBody = document.getElementById("terminal-body");
const commandInput = document.getElementById("command-input");
const inputLine = document.querySelector(".input-line");



commandInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = commandInput.value.toLowerCase();
    if (command == "python perfil.py") {
      printCommand(command);
      printProfile()
    } else if(command == "help"){
      printHelp();
    }
     else {
      printCommand(command);
    }
  }




});


function printCommand(command) {
  const newLine = document.createElement("div");
  newLine.className = "terminal-line";
  newLine.innerHTML = `<span class="terminal-prompt">C:\\Users\\Edwin Arevalo\\portafolio&gt;</span> ${command}`;
  terminalBody.insertBefore(newLine, inputLine);
  commandInput.value = "";
  //commandInput.focus(); // Mantener el foco en el input
  //terminalBody.scrollTop = terminalBody.scrollHeight;
}

function printProfile() {



  let listData = [
    '▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼',
    '|| Desarrollador Fullstack Junior autodidacta ||',
    'Con experiencia en soluciones digitales',
    'para optimización de procesos en ingeniería civil',
    'y geotécnica.Así como en desarrollo de prototipos',
    'de hardware.',
    '▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲', 
    '╔═══════════════════════════════════════════════════╗',
    '&nbsp &nbsp &nbsp &nbsp SKILL:',
    '→→→ programming_language:',
    '&nbsp &nbsp ◄  Python, Java, VisualBasic, Arduino ►',
    '→→→ web_technologies:',
    '&nbsp &nbsp ◄  HTML, CSS, JavaScript, Python-Flask ►',
    '→→→ mobile_technologies:',
    '&nbsp &nbsp ◄  Android, Firebase ►',
    '→→→ databases:',
    '&nbsp &nbsp ◄  MySQL, MongoDB ►',
    '→→→ development_tools:',
    '&nbsp &nbsp ◄  Github, VS Code, Figma, Git, Scrum,',
    '&nbsp &nbsp Esp32, Arduino ide ►',
    '╚═══════════════════════════════════════════════════╝',




  ]

  for (let index = 0; index < listData.length; index++) {
    const textAdd = listData[index];

    const newLine = document.createElement("div");
    newLine.className = "terminal-line";
    if(index == 0 || index==6 || index==7 || index==20){
      newLine.innerHTML = `<span class="terminal-prompt-tag">${textAdd}</span>`;
    }else{
      newLine.innerHTML = `<span class="terminal-prompt-profile">${textAdd}</span>`;
    }

    terminalBody.insertBefore(newLine, inputLine);
  }

  commandInput.value = "";
}

function printHelp() {



  let listData = [
    '■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■',
    '||                        Ayuda                     ||',
    '¡hola! he creado este editor de texto interactivo con ',
    'la temática de Python para poder mostrarte mi perfil, ',
    'lamento que no tenga una compatibilidad de 100% con',
    'Python, pero estoy trabajando en ello :), por el',
    'momento el único comando valido es para ejecutar el ',
    'script, para lo cual en esta misma consola deberás ',
    'digitar python perfil.py ',
    '■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■',


  ]

  for (let index = 0; index < listData.length; index++) {
    const textAdd = listData[index];

    const newLine = document.createElement("div");
    newLine.className = "terminal-line";
    if(index == 0 || index==9 ){
      newLine.innerHTML = `<span class="terminal-help-tag">${textAdd}</span>`;
    }else{
      newLine.innerHTML = `<span class="terminal-help-profile">${textAdd}</span>`;
    }

    terminalBody.insertBefore(newLine, inputLine);
  }

  commandInput.value = "";
  //
  //commandInput.focus(); // Mantener el foco en el input
  //terminalBody.scrollTop = terminalBody.scrollHeight;

}

