let start=document.querySelector('.start')
let stop=document.querySelector('.stop')
let reset=document.querySelector('.reset')
let h2=document.querySelector('h2')

let secs=0;
let mins=0;
let hrs=0;
let timerid=null;

start.addEventListener('click',()=>{
   timerid=setInterval(work,1000);
})

function work(){
    ++secs;
    if(secs==60)
    {
       ++mins;
       secs=0;
    }

    if(mins==60)
        {
           ++hrs;
           mins=0;
        }

        let formattedSecs = String(secs).padStart(2, '0');
        let formattedMins = String(mins).padStart(2, '0');
        let formattedHrs = String(hrs).padStart(2, '0');
    
        h2.innerHTML = formattedHrs + ':' + formattedMins + ':' + formattedSecs;




}

stop.addEventListener('click',()=>{
    clearInterval(timerid);
})

reset.addEventListener('click',()=>{
    secs=0;
    min=0;
    hrs=0;
    h2.innerHTML='00'+ ':' + '00'  +':'+ '00' 
})