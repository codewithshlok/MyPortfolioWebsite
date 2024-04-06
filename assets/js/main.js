var typed = new Typed(".text-span",{
    strings:["Frontend Developer","Full Stack Web Developer","UI / UX Designer"],
    typeSpeed: 30,
    backSpeed:30,
    backDelay:1000,
    loop:true 
})


let number = document.getElementsByClassName("number")
let counter = 0
setInterval(()=>{
    if(counter== 90 || counter == 75){
        clearInterval()
    }
    else{
        counter+=1
        number.innerHTML =counter + "%"
    }
},5)


// Add event listeners for the buttons
document.getElementById("downloadCV").addEventListener("click", function() {
    // Change "cv.pdf" to your CV file name
    window.location.href = "./assets/js/MyResume.pdf";
  });
  
//   document.getElementById("viewCV").addEventListener("click", function() {
//     // Change "cv.pdf" to your CV file name
//     window.open("cv.pdf", "_blank");
//   });