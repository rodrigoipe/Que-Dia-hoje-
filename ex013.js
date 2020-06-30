
function verificar() {
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var dia  = agora.getDate() 
    var diaSem = agora.getDay()
    var mes  = agora.getMonth()          // 0-11 (zero=janeiro)
    var ano  = agora.getFullYear()       
    var resp = window.document.querySelector('div.res')

        
    switch (diaSem) {
        
    case 0:
        if (hora <= 11) {
            resp.innerText = (`Domingo, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Bom dia!`)
        } else if (hora <= 17) {
            resp.innerText = (`Domingo, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Domingo, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa noite!`)
        }          
        break;
    case 1:
        if (hora <= 11) {
            resp.innerText = (`Segunda-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Bom dia!`)
        } else if (hora <= 17) {
            resp.innerText = (`Segunda-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Segunda-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa noite!`)
        }
            break;
        case 2:
        if (hora <= 11) {
            resp.innerText = (`Terça-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} hs. Bom dia!`)
        } else if (hora <= 17) {
            resp.innerText = (`Terça-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} hs. Boa tarde!`)
        } else {
            resp.innerText = (`Terça-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} hs. Boa noite`)
        }
        break;
    case 3:
        if (hora <= 11) {
            resp.innerText = (`Quarta-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Bom dia!`)
        } else if (hora <= 17) {
            resp.innerText = (`Quarta-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Quarta-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa noite`)
        }
        break;
    case 4:
        if (hora <= 11) {
            resp.innerText = (`Quinta-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Bom dia!`)
        } else if (hora <= 17) {
            resp.innerText = (`Quinta-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Quinta-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa noite!`)
        }
        break;
    case 5:
        if (hora <= 11) {
            resp.innerText = (`Sexta-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Bom dia!`)
        } else if (hora <= 17) {
            resp.innerText = (`Sexta-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Sexta-feira, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa noite!`)
        }
        break;
    case 6:
        if (hora <= 11) {
            resp.innerText = (`Sábado, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Bom dia!`)
        } else if (hora <= 17) {
            resp.innerText = (`Sábado, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Sábado, dia ${dia}/${mes + 1}/${ano}, ${hora + ':' + min} horas. Boa noite!`)
        }
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

