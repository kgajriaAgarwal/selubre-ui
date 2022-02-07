const snackbar = document.querySelector("[data-js=snackbar]");
const floatField = document.getElementById('floatField');
const floatContainer = document.getElementById('floatContainer');

floatField.addEventListener('focus', () => {
  floatContainer.classList.add('active');
});
floatField.addEventListener('blur', () => {
  floatContainer.classList.remove('active');
});

function handleSnackbarAction(){
    snackbar.classList.add("snackbar-open");
    setTimeout(() =>{
        snackbar.classList.remove("snackbar-open")
        },2000);
}

//SLIDER - COMPONENT
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}