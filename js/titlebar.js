
function closeWindow() {
  window.close();
}

function focusTitlebar(focus) {
  var bg_color = focus ? "#3a3d3d" : "#7a7c7c";
  var titlebar = document.getElementById("titlebar");
  if (titlebar) {
    titlebar.style.backgroundColor = bg_color;
  }
}

window.onfocus = function() { 
  console.log("focus");
  focusTitlebar(true);
}

window.onblur = function() { 
  console.log("blur");
  focusTitlebar(false);
}

window.onload = function() {
  document.getElementById("close-window-button").onclick = function() {
    closeWindow();
  }
}

