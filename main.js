function darkMode(){
    if(document.getElementById("dark-symbol").className === "bi bi-moon-stars-fill"){
        document.body.className = ""
        document.getElementById("dark-symbol").className = "bi bi-sun-fill"
    } else {
        document.body.className = "darkmode"
        document.getElementById("dark-symbol").className = "bi bi-moon-stars-fill"
    }
}

document.querySelectorAll('.panel').forEach(panel => {
    ['tl', 'tr', 'bl', 'br'].forEach(pos => {
      const corner = document.createElement('span');
      corner.className = `hud-corner ${pos}`;
      panel.appendChild(corner);
    });
  });