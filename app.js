setInterval(setClock, 1000);


const hourHand=document.querySelector('[data-hour-hand]');
const minuteHand=document.querySelector('[data-minute-hand]');
const secondHand=document.querySelector('[data-second-hand]');
//console.log(secondHand); //console must be <div data-second-hand class="hand second" ></div>, cannot be null, if here is null, the element will be null
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
    //console.log(element);//elements are 3 '<div data-second-hand class="hand second" ></div>'=> second&hour&minute
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock();
