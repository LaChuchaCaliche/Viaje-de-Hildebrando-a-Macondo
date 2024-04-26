let dinero = 2500000
while(true){
    alert("Dia viernes")
    alert("Vas de viaje a macondo, sales en la noche de este dia,deseas comer algo? 1. Almojabana + Gaseosa (15000$) 2. Subway + Gaseosa (23000$) 3.Nada(toca en medallo) ")
    console.log("test")
    while(true){
        let foodDecision= Number(prompt("Ingresa tu decision"))
        if (!isNaN(foodDecision) && 1<= foodDecision && foodDecision<=3){
            if (foodDecision === 1){
                dinero = dinero - 15000
                alert("Esa almojabana esta rancia lleva 395 dias en esa incubadora")
                alert("Tu dinero al momento "+dinero)
                break
            }
            else if(foodDecision === 2){
                dinero = dinero-23000
                alert("Vas con la barriguita llena mi rey, barriga llena corazon contento")
                alert("Tu dinero al momento "+ dinero)
                break
            }
            else if(foodDecision ===3){
                alert("A comprar en medello mas caro por los gringos")
                alert("Tu dinero al momento "+ dinero)
                break
            }}
            else{
            alert("Ingresa una opcion valida")
                }}
    

    alert("Sala de espera aeropuerto")
    alert("Control aeroportuario:Papi esa maleta esta muy grande")
    alert("Hildebrando: papi deja de ser exagerado")
    alert("Control aeroportuario: Papi, o me pone la maleta en la medida o suerte")
    alert("Hildebrando: YO LE HE SERVIDO DON HETOR,(tocara ver que saco hp se me tiro el diciembre esta gonorrea)")
    alert("Dimensiones actuales: 60cm x 40cm x 20cm")
    alert("Dimenciones reglamentarias: 55cm x 40cm x 20cm")
    const alto = 60
    const ancho = 40
    const largo = 20
    reductionFactorAl = 55/60
    reductionFactorAn = 40/40
    reductionFactorLa = 20/20
    const reduction =  Math.min(reductionFactorAl,reductionFactorAn,reductionFactorLa)
    newAlto = alto*reduction.toFixed(3)
    newAncho = ancho*reduction.toFixed(3)
    newLargo = largo*reduction.toFixed(3)
    alert("Hildebrando: Papi toco sacar los condones, toca a cuero pelado")
    alert("La maleta quedo de "+newAlto+" "+newAncho+" "+newLargo)
    alert("Buenas dias/tardes/noches queridos visitantes del aeropuerto Jose cobranzas cordoba, si desea acceder al wifi tiene un costo de 50000 pesos")
    alert("Hildebrando: rrrrrrrrrrrrrrrrrrrrrrrda pero que es esta vaina cole, toco necesito reservar el hotel")
    let wifi = "01110010_01101001_01110111_01101001"
    let array_wifi= wifi.split("_")
    clave = ""
    for(let i=0;i<array_wifi.length;i++){
        let binary = array_wifi[i]
        let decimal = parseInt(binary,2)
        let caracter = String.fromCharCode(decimal)
        clave = clave + caracter
        
    }
    alert("La clave del wifi es: "+clave)
    alert(dinero = dinero-  50000)
    alert("Goliamos la reserva")
    alert("Welcome to Macondo, mariposas amarillas hildebrando babiloniaaaa")
    alert("Voces de fondo : MIMIMIMIMIMIMIMIMINININILILILIJIJI")
    alert("Te das cuenta que aca el idioma cambia todas las vocales por la i, vamos a pedir un taxi a ver")
    taxi = "Taxi me puedes llevar al hotel mariposas amarillas ?"
    traduccion1 = taxi.replace(/a/g,"i")
    traduccion2 = traduccion1.replace(/e/g,"i")
    traduccion3 = traduccion2.replace(/o/g,"i")
    traduccion4 = traduccion3.replace(/u/g,"i")
    alert(traduccion4)
    alert("Taxista: Papi son 300 luquitas")
    alert("Hildrebrando: UY COMO GONORREA? No papi me vio cara de gringo gentrificador o que")
    alert("Taxista: Pipi ni ti higis il piisi qui vis tinis ciri di ixtrinjiri")
    alert("A esta gonorrea ya va a empezar a hablar raro otra vez")
    alert("Mi riy vimis i jigir pidri,pipil i tijiris si yi gini gritiniini si ti ginis ti pigi tis trisciintis liqis")
    alert("vi")
        let piedraPapelTijera = ["Piedra","Papel","Tijera"]
        const indiceAleatorio = Math.floor(Math.random() * 3)
        hildebrandoOption = parseInt(prompt("Prepare your anus , 1. Tijera , 2. Papel , 3. Piedra"))
        alert("El taxista escogio: "+piedraPapelTijera[indiceAleatorio])
        if (piedraPapelTijera[indiceAleatorio] == "Tijera"){

            if (hildebrandoOption === 1){
                alert("Toma tijereta como la lesbiana de anacleta")
                alert("Papi olvidese de esas trescientas luquitas 'cirichimbi'")
            }
            else if (hildebrandoOption===3){
                alert("Hildebrando recordo sus tiempos en la UDEA pa salir a ganarse un millon se emperra y ESCOGE la opcion de la revolucion")
                alert("Papi olvidese de esas trescientas luquitas 'cirichimbi'")
            }
            else if (hildebrandoOption===2){
                dinero = dinero -300000
                alert("Tu dinero es: "+ dinero )
                alert("Que gonorrea de vacaciones ome, me hubiera ido a comer mojarra de 1 millon")
        }
            
        }
        else if (piedraPapelTijera[indiceAleatorio] == "Papel"){

            if (hildebrandoOption === 1){
                alert("Toma tijereta como la lesbiana de anacleta")
                alert("Papi olvidese de esas trescientas luquitas 'cirichimbi'")
            }
            else if (hildebrandoOption===3){
                alert("Hildebrando recordo sus tiempos en la UDEA pa salir a ganarse un millon se emperra y ESCOGE la opcion de la revolucion")
                alert("Tu dinero es: "+ dinero )
                alert("Que gonorrea de vacaciones ome, me hubiera ido a comer mojarra de 1 millon")
            }
            
            else if (hildebrandoOption===2){
                dinero = dinero -300000
                alert("Hildebrando se acuerda que en el avion se metio un papel pa llegar sornero y abre la mano")
                alert("Papi olvidese de esas trescientas luquitas 'cirichimbi'")
            }
        }

        else if (piedraPapelTijera[indiceAleatorio] == "Piedra"){

            if (hildebrandoOption === 1){
                alert("Toma tijereta como la lesbiana de anacleta")
                dinero = dinero -300000
                alert("Que gonorrea de vacaciones ome, me hubiera ido a comer mojarra de 1 millon")
                }
            else if (hildebrandoOption===3){
                alert("Hildebrando recordo sus tiempos en la UDEA pa salir a ganarse un millon se emperra y ESCOGE la opcion de la revolucion")
                alert("Papi olvidese de esas trescientas luquitas 'cirichimbi'")
                }
                
            else if (hildebrandoOption===2){
                dinero = dinero -300000
                alert("Hildebrando se acuerda que en el avion se metio un papel pa llegar sornero y abre la mano")
                alert("Papi olvidese de esas trescientas luquitas 'cirichimbi'")
            }
        }
    deadAlive=true
    diasEnMacondo = 0
    while(deadAlive){
       
        
        Actividad = parseInt(prompt("Ingrese la opcion 1. Piscina , 2. Caminata , 3. Playa, 4. Actividades del hotel(Casino/Bingo) "))
        if (Actividad === 1){
            alert("La piscina huele a la casa de la tia cliotilde")
            diasEnMacondo +=1
            decisionPiscina = parseInt(prompt("1.Meterse a piscina , 2. Quedarse afuera y broncearse"))
            if (decisionPiscina === 1){
                alert("Esa piscina tenia como 70 bloques de patotanque, te intoxicaste y te moriste")
                alert("Tus vacaciones duraron " +diasEnMacondo)
                alert("gastaste"+2500000-dinero +"dias")
                deadAlive=false 
            }
            else if (decisionPiscina === 2){
                alert("Bronceado en tanga de jaguar")
            }
        }
        else if (Actividad === 2){
            diasEnMacondo+=1
            decisionCaminata = parseInt(prompt("1.Full caminata , 2. media caminata"))
            if (decisionCaminata === 1){
                alert("Te tomaste unas fotos tan chimbas, que nadie se fija en la barriga de yoyo que tenes, te habla la chimbita que queres hace rato")
            }
            else if (decisionCaminata === 2){
                alert("Sos un flojo digno de la barriga de yoyo que tenes te perdes y te come el mohan")
                alert("Tus vacaciones duraron "+ diasEnMacondo + "dias")
                alert("gastaste"+2500000-dinero)
                deadAlive=false
            }
        }
        else if (Actividad ==3){
            diasEnMacondo+=1
            decisionPlaya = parseInt(prompt("1.Voleibol en la playa , 2. Nadar y montar moto"))
            if (decisionPlaya === 1){
                alert("Jugaste voleibol y a una chimbita se le cayo el brasier y obviamente gatubelo le piyaste las tiringuistinguis")
            }
            else if (decisionPlaya === 2){
                alert("Nadaste en el mar y montaste Nmax")
            }
            else if(decisionPlaya ==3){
                alert("Tomaste coctelito de whiskey escoses pero eso sabe como a chirrinchi, te devolves ciego pa medallo mi papa")
                alert("Como diria el casique de la junta con las cosas que hay que ver en este mundo mejor no ver")
            }
        }
        else if(Actividad ==4){
            diasEnMacondo+=1
            decisionHotel=Number(prompt("Ingrese 1. Bingo, 2. Bailar, 3. Casino"))
            if(decisionHotel==1){
                bingo = ["win","lose"]
                const indiceAleatorio1 = Math.floor(Math.random() * 2)
                if (bingo[indiceAleatorio1]=="win"){
                    dinero = dinero + 300000
                    alert("Como le fue esta mañana?")
                    alert("250 que me hice esta mañana y 50 que me va a regalar moreno enseguida, 200 cien mil, todo melo papi")
                    alert("Dinero: "+dinero)
                }
                else if (bingo[indiceAleatorio1]=="lose"){
                    alert("Como en las tapitas de pony malta sigue intentando mi rey")
            }}
            else if(decisionHotel==2){
                alert("Quien la ve tan presumida ja y anoche baile con ella a dos cuadras del billar, nos dieron las 12 y carambola al mas alla")
            }
            else if(decisionHotel==3){
                alert("El que apuesta por necesidad pierde por obligacion")
                alert("Tu dinero es 600000 300 del taxi y 300 del avion" )
            }
            if(diasEnMacondo==4){
                alert("Sobreviviste al magico realismo del macondo")
                alert("gastaste"+2500000-dinero)
                break
            }
        }
        
    
    }
   
}
