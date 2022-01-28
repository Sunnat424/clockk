let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    minuteNumber = document.querySelector('.minutes'),
    hourNumber = document.querySelector('.hours');

function clock() {
    let time  = new Date();
    let minutes = time.getMinutes() * 6;
    let seconds = time.getSeconds() * 6;
    let hours = time.getHours() * 30;

    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;

    hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` :  time.getHours();
    minuteNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

    setTimeout(() => clock(), 1000);

}
clock();


// рекурсия это когда функция вызывает саму себя


let i = 0;
let n = -1;
let s =0;



let link = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
// console.log(link);

for(let i = 0; i < link.length;i++) {
    link[i].addEventListener('click', function(event) {
        event.preventDefault();
        for(let x = 0; x < link.length;x++) {
            link[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        this.classList.add('active');
        tabs[i].classList.add('active');
    })
}

let clik = document.querySelector('.stopwatch__btn');
let clik_sec = document.querySelector('.stopwatch__seconds');
let clik_min =document.querySelector('.stopwatch__minutes');
let clik_house = document.querySelector('.stopwatch__hours');
let sinn = document.querySelector('.sunnat');

clik.addEventListener('click', function(){
   if(clik.innerHTML== 'start'){
       clik.innerHTML ='stop'
    
   }else if (clik.innerHTML =='stop'){
       clik.innerHTML = 'clear'
   }else if(clik.innerHTML == 'clear'){
    clik.innerHTML = 'start'

   }
   if(clik.innerHTML == 'stop' ){
    sinn.classList.remove('mm')
    sinn.classList.add('sa');
   }else if(clik.innerHTML == 'clear'){
    sinn.classList.remove('sa');
    sinn.classList.add('nn')
   }else if(clik.innerHTML== 'start'){
    sinn.classList.remove('nn');
    sinn.classList.add('mm')
   }
   

    function rek() {
        if(clik.innerHTML =='stop'){
        if(i < 59) {
               i++
               setTimeout(() => rek(), 1000); 
           } 
           clik_sec.innerHTML = i;
           if(clik_sec.innerHTML == 59){
               i = 0;
           } 
        }
        clik.innerHTML == 'start' ? clik_sec.innerHTML = i =0 : '' ;
        
       }  
       rek() 

  
    
       
       if(clik_min.innerHTML == 0){
           
           function lolo(){
               if(clik.innerHTML =='stop'){

               
             if(n<59){
                 n++
                 setTimeout(()=>lolo(), 60000);
             }  
             clik_min.innerHTML=n=0;
             if(clik_min.innerHTML == 59){
                n = -1;
            }
        }
        clik.innerHTML == 'start' ? clik_min.innerHTML = 0 : '' ;
           }
           lolo()
       }
      

       
      
        

})




    









