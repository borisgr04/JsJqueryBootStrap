//calcular la edad de una persona 
//recibe la fecha como un string en formato español 
//devuelve un entero con la edad. Devuelve false en caso de que la fecha sea incorrecta o mayor que el dia actual 
function calcular_edad(fecha){ 

    //calculo la fecha de hoy 
    hoy=new Date() 
    //alert(hoy) 

    //calculo la fecha que recibo 
    //La descompongo en un array 
    var array_fecha = fecha.split("-") 
    //si el array no tiene tres partes, la fecha es incorrecta 
    if (array_fecha.length!=3) 
       return false 

    //compruebo que los ano, mes, dia son correctos 
    var ano 
    ano = parseInt(array_fecha[0]); 
    if (isNaN(ano)) 
       return false 

    var mes 
    mes = parseInt(array_fecha[1]); 
    if (isNaN(mes)) 
       return false 

    var dia 
    dia = parseInt(array_fecha[2]);	
    if (isNaN(dia)) 
       return false 


    //si el año de la fecha que recibo solo tiene 2 cifras hay que cambiarlo a 4 
    if (ano<=99) 
       ano +=1900 

    //resto los años de las dos fechas 
    edad=hoy.getFullYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año 

    //si resto los meses y me da menor que 0 entonces no ha cumplido años. Si da mayor si ha cumplido 
    if (hoy.getMonth() + 1 - mes < 0) //+ 1 porque los meses empiezan en 0 
       return edad 
    if (hoy.getMonth() + 1 - mes > 0) 
       return edad+1 

    //entonces es que eran iguales. miro los dias 
    //si resto los dias y me da menor que 0 entonces no ha cumplido años. Si da mayor o igual si ha cumplido 
    if (hoy.getUTCDate() - dia >= 0) 
       return edad + 1 

    return edad 
}