const turnOnOff = document.querySelector('#turn_on_off');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg'; 
        turnOnOff.textContent ='Desligar'  

    }
    
}

function lampOff() {
    if (!isLampBroken () ) {
        lamp.src = './img/desligada.jpg';  
        turnOnOff.textContent ='Ligar'
    }
    
}

function lampBroken () {
    lamp.src ="./img/quebrada.jpg"
}


function LampOnOff () {
    if (turnOnOff.textContent == 'Ligar'){
        lampOn();
    }else{
        lampOff();
    };
    
}

turnOnOff.addEventListener('click',LampOnOff);
lamp.addEventListener("mouseover",lampOn);
lamp.addEventListener("mouseleave",lampOff);
lamp.addEventListener("dblclick",lampBroken);