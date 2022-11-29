function zona(num){
    let precio, total, porcentaje;
    switch (num) {
        case 12:
            precio=2
            porcentaje=precio*0.10
            total=precio-porcentaje

            console.log("Usted selecciono America del norte el precio por minuto es de $2.00, si su llamada tiene una duracion menor a 30 minutos el precio por minuto es de "+ total )
            
            break;
    
            case 15:
                precio=2.20
                porcentaje=precio*0.10
                total=precio-porcentaje
    
                console.log("Usted selecciono America central el precio por minuto es de $2.20, si su llamada tiene una duracion menor a 30 minutos el precio por minuto es de "+ total )


    
            break;
    
            case 18:
                precio=4.50
                porcentaje=precio*0.10
                total=precio-porcentaje
    
                console.log("Usted selecciono America del sur el precio por minuto es de $4.50, si su llamada tiene una duracion menor a 30 minutos el precio por minuto es de "+ total )
            break;
    
            case 19:
                precio=3.50
                porcentaje=precio*0.10
                total=precio-porcentaje
    
                console.log("Usted selecciono Europa  el precio por minuto es de $3.50, si su llamada tiene una duracion menor a 30 minutos el precio por minuto es de "+ total )
    
                    break;
            case 23:
                precio=6
                porcentaje=precio*0.10
                total=precio-porcentaje
    
                console.log("Usted selecciono Asia el precio por minuto es de $6.00, si su llamada tiene una duracion menor a 30 minutos el precio por minuto es de "+ total )
    
            break;
    
            case 25:
                precio=6
                porcentaje=precio*0.10
                total=precio-porcentaje
    
                console.log("Usted selecciono Africa el precio por minuto es de $6.00, si su llamada tiene una duracion menor a 30 minutos el precio por minuto es de "+ total )
    
                break;
    
          case 29:
            precio=5
            porcentaje=precio*0.10
            total=precio-porcentaje

            console.log("Usted selecciono Oceania el precio por minuto es de $5.00, si su llamada tiene una duracion menor a 30 minutos el precio por minuto es de "+ total )
    
          break;
    
          default:
            console.log("la zona ingresada no es valida")
    
            break;
    }
    
    }
    
  zona(12);