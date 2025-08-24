function timing(){
const timer=document.getElementById("root")
const time =new Date().toLocaleTimeString();
timer.innerHTML=time
}


setInterval(timing,1000)


const timer=document.getElementById("root")
timer.style.fontSize="200px"
timer.style.display="flex"
timer.style.justifyContent="center"
timer.style.alignItems="center"
timer.style.height="100vh"




