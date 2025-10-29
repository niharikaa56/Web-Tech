const images=document.querySelectorAll('.gallery img');
let current=0;
//function to change highlight
function highlightNext(){
    images.forEach(img => img.classList.remove('active'));
    current=(current+1)% images.length;
}
//Automatically swicth every 2 seconds(relay effect)
setInterval(highlightNext,2000);