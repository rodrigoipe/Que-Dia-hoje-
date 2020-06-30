
function verificar() {
    var agora = new Date()
    var hora = agora.getHours()
    var diaSem = agora.getDay()
    var resp = window.document.querySelector('div.res')

        
    switch (diaSem) {
        
    case 0:
        resp.innerText = (`Domingo, ${hora} horas`)    
        break;
    case 1:
        resp.innerText = (`Segunda-feira,  ${hora} horas`)
            break;
        case 2:
        resp.innerText = (`Terça-feria,  ${hora} horas`)
        break;
    case 3:
        resp.innerText = (`Quarta-feira, ${hora} horas`)
        break;
    case 4:
        resp.innerText = (`Quinta-feira, ${hora} horas`)
        break;
    case 5:
        resp.innerText = (`Sexta-feira , ${hora} horas`)
        break;
    case 3:
        resp.innerText = (`Sabado, ${hora} horas`)
        break;            
    }

    
    /*if (hora <= 12) {
        return (boa)
    } else if (hora <= 18) {
        resp.innerText = ("Boa Tarde!")
    } else {
        resp.innerText = ("Boa noite!")
    }*/

    //resp.innerText = (diaSem) 
}


/*if (diaSem == 0 ) {
    resp.innerText("Domingo")
} else if (diaSem == 1 ){
    resp.innerText("Segunda-feirta")
}*/

