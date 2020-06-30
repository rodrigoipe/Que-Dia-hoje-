
function verificar() {
    var agora = new Date()
    var hora = agora.getHours()
    var diaSem = agora.getDay()
    var resp = window.document.querySelector('div.res')

        
    switch (diaSem) {
        
    case 0: // Caso o dia da semana seja X, e se a hora for X, escreva o dia, a hora e dê bom dia, boa tarde ou boa noite.
        if (hora <= 12) {
            resp.innerText = (`Domingo,  ${hora} horas. Bom dia!`)
        } else if (hora <= 18) {
            resp.innerText = (`Domingo,  ${hora} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Domingo,  ${hora} horas. Boa noite!`)
        }          
        break;
    case 1:
        if (hora <= 12) {
            resp.innerText = (`Segunda-feira,  ${hora} horas. Bom dia!`)
        } else if (hora <= 18) {
            resp.innerText = (`Segunda-feira,  ${hora} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Segunda-feira,  ${hora} horas. Boa noite!`)
        }
            break;
        case 2:
        if (hora <= 12) {
            resp.innerText = (`Terça-feira,  ${hora} horas. Bom dia!`)
        } else if (hora <= 18) {
            resp.innerText = (`Terça-feira,  ${hora} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Terça-feira,  ${hora} horas. Boa noite`)
        }
        break;
    case 3:
        if (hora <= 12) {
            resp.innerText = (`Quarta-feira,  ${hora} horas. Bom dia!`)
        } else if (hora <= 18) {
            resp.innerText = (`Quarta-feira,  ${hora} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Quarta-feira,  ${hora} horas. Boa noite`)
        }
        break;
    case 4:
        if (hora <= 12) {
            resp.innerText = (`Quinta-feira,  ${hora} horas. Bom dia!`)
        } else if (hora <= 18) {
            resp.innerText = (`Quinta-feira,  ${hora} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Quinta-feira,  ${hora} horas. Boa noite!`)
        }
        break;
    case 5:
        if (hora <= 12) {
            resp.innerText = (`Sexta-feira,  ${hora} horas. Bom dia!`)
        } else if (hora <= 18) {
            resp.innerText = (`Sexta-feira,  ${hora} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Sexta-feira,  ${hora} horas. Boa noite!`)
        }
        break;
    case 6:
        if (hora <= 12) {
            resp.innerText = (`Sábado,  ${hora} horas. Bom dia!`)
        } else if (hora <= 18) {
            resp.innerText = (`Sábado,  ${hora} horas. Boa tarde!`)
        } else {
            resp.innerText = (`Sábado,  ${hora} horas. Boa noite!`)
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

