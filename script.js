var acc = document.getElementsByClassName("acc");
var icons = document.getElementsByClassName("icon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "25px 0 0 0";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding = "25px 0 25px 0";
    }
    let icon = this.firstElementChild;
    icon.classList.toggle("icon-active");
  });
}
