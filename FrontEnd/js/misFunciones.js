function traerInformacionCategorias(){
    $.ajax({
        url:"http://129.151.112.152:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        url:"http://129.151.112.152:8080/api/Category/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function traerInformacionBikes(){
    $.ajax({
        url:"http://129.151.112.152:8080/api/Quadbike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaBikes(respuesta);
        }
    });
}

function pintarRespuestaBikes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionBikes(){
    let var3 = {
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://129.151.112.152:8080/api/Quadbike/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function traerInformacionClientes(){
    $.ajax({
        url:"http://129.151.112.152:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        url:"http://129.151.112.152:8080/api/Client/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

////////// MENSAJES ////////////
function traerInformacionMensajes(){
    $.ajax({
    url:"http://129.151.112.152:8080/api/Message/all",
    type:"GET",
    datatype:"JSON",
    success:function(respuesta){
        console.log(respuesta);
    pintarRespuestaMensajes(respuesta);
    }
    });
    
}

function pintarRespuestaMensajes(respuesta){
    
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var4={
        messageText:$("#MmessageText").val(),
            
    };
        
    $.ajax({
    type:"POST",
    contentType: "application/json; charset=utf-8",
    datatype:"JSON",
    data: JSON.stringify(var4),
    
    url:"http://129.151.112.152:8080/api/Message/save",
    success:function(response){
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente el Mensaje");
        window.location.reload()
                
    },
    
    error: function(jqXHR, textStatus, errorThtown){
        window.location.reload()
            alert("No se guardo correctamente el Mensaje")
            }
        });
}

///// RESERVACIÓN //////

function traerInformacionReservacion(){
    $.ajax({
    url:"http://129.151.112.152:8080/api/Reservation/all",
    type:"GET",
    datatype:"JSON",
    success:function(respuesta){
        console.log(respuesta);
    pintarRespuestaMensajes(respuesta);
    }
    });
    
}

function pintarRespuestaReservacion(respuesta){
    
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionReservacion(){
    let var4={
        messageText:$("#MmessageText").val(),
            
    };
        
    $.ajax({
    type:"POST",
    contentType: "application/json; charset=utf-8",
    datatype:"JSON",
    data: JSON.stringify(var4),
    
    url:"http://129.151.112.152:8080/api/Reservation/save",
    success:function(response){
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente el Mensaje");
        window.location.reload()
                
    },
    
    error: function(jqXHR, textStatus, errorThtown){
        window.location.reload()
            alert("No se guardo correctamente el Mensaje")
            }
        });
}