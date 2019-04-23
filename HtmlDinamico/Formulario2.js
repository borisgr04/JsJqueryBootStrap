function CalcularEdad()
{
    var nombre;
    nombre=document.getElementById("nombre").value;
    var sexo=document.querySelector('#sexo').value;
    var fechanacimiento=document.querySelector('#fechanacimiento').value;
    var prefijo;
    if(sexo=="M")
    {
        prefijo ="Sr";
    }
    else
    {
        prefijo ="Sra";
    }
    var resultadoEdad=calcular_edad(fechanacimiento);//para utilizar esta fuction debe agregar el archivo js correspondiente anterior a quien lo use. 
    alert(`${prefijo} ${nombre} su edad es ${resultadoEdad}`);   
}


//

$(document).ready(function(){
   
    $("#BtnAgregar").click(function(){
        
    var nombre=$('#nombre').val();
    var fechanacimiento=$('#fechanacimiento').val();
    var sexo=$('#sexo').val();
    var prefijo;
    if(sexo=="M")
    {
        prefijo ="Sr";
    }
    else
    {
        prefijo ="Sra";
    }
    
    var resultadoEdad=calcular_edad(fechanacimiento);//para utilizar esta fuction debe agregar el archivo js correspondiente anterior a quien lo use. 
    alert(`${prefijo} ${nombre} su edad es ${resultadoEdad}`);   
    
    });
    
    var personas=[];
    $("#BtnJson").click(function(){

        var persona={};
        persona.identificacion=$('#identificacion').val();
        persona.nombre=$('#nombre').val();
        persona.email=$('#email').val();
        persona.fechanacimiento=$('#fechanacimiento').val();
        persona.sexo=$('#sexo').val();
        personas.push(persona);
        
        $("#resultado").text(JSON.stringify(persona));
        
        $("#resultadoArray").text(JSON.stringify(personas));
        
        $("#modalResultado").modal(); 
        
    });

    

    


});