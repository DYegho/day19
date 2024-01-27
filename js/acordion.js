
var action_btn = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < action_btn.length; i++) {
  action_btn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}