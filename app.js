setInterval(setClock, 1000);


const hourHand=document.querySelector('[data-hour-hand]');
const minuteHand=document.querySelector('[data-minute-hand]');
const secondHand=document.querySelector('[data-second-hand]');
//console.log(secondHand); //console must be <div data-second-hand class="hand second" ></div>
function setClock() {
    const currentDate=new Date();
    const secondsRatio=currentDate.getSeconds()/60;
    const minutesRatio=(secondsRatio+currentDate.getMinutes())/60;
    const hoursRatio= (minutesRatio+currentDate.getHours())/12;
   // console.log(secondsRatio)
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

}
function setRotation(element, rotationRatio) {
    //console.log(element)//null???
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock();
