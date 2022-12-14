
function myFunction() {
  alert("Advertencia.. Estas accediendo a ver las calificaciones de un alumno");
}

  function generarTable() {
    var myTableDiv = document.getElementById("metric_results")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')
    
    table.border = '1'
    table.appendChild(tableBody);
    
    var heading = new Array();
    heading[0] = "Asignaturas"
    heading[1] = "Sistemas informaticos"
    heading[2] = "Programacion"
    heading[3] = "Lenguaje de marcas"
    heading[4] = "Entorno desarrollo"
    heading[5] = "Base de datos"
    
    var stock = new Array()
    stock[0] = new Array("1º Trimestre", "8", "3", "8", "5", "8")
    stock[1] = new Array("2º Trimestre", "8", "5", "9", "5", "8")
    stock[2] = new Array("3º Trimestre", "9", "8", "8", "5","8")
    stock[3] = new Array("evaluacion final", "9", "8", "9", "5","8")
    
    //COLUMNAS DE LA TABLA
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }
    
    //FILAS DE LA TABLA
    for (i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < stock[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(stock[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }  
    myTableDiv.appendChild(table)
    } 

/* Segunda tabla */

    function generarTable2() {
      var myTableDiv = document.getElementById("metric_results")
      var table = document.createElement('TABLE')
      var tableBody = document.createElement('TBODY')
      
      table.border = '1'
      table.appendChild(tableBody);
      
      var heading = new Array();
      heading[0] = "Evaluacion en cursoS"
      heading[0] = "Asignaturas"
      heading[1] = "Despliegue de app web"
      heading[2] = "Empresa e iniciativa web "
      heading[4] = "Ingles"
      heading[5] = "Entorno Servidor"
     
      
      var stock = new Array()
      
      stock[0] = new Array("1º" )
      stock[1] = new Array("2º")
      stock[2] = new Array("3º")
      stock[3] = new Array("4º")
      stock[4] = new Array("quinta columna")
      
      
      //COLUMNAS DE LA TABLA
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
      for (i = 0; i < heading.length; i++) {
          var th = document.createElement('TH')
          th.width = '75';
          th.appendChild(document.createTextNode(heading[i]));
          tr.appendChild(th);
      }
      
      //FILAS DE LA TABLA
      for (i = 0; i < stock.length; i++) {
          var tr = document.createElement('TR');
          for (j = 0; j < stock[i].length; j++) {
              var td = document.createElement('TD')
              td.appendChild(document.createTextNode(stock[i][j]));
              tr.appendChild(td)
          }
          tableBody.appendChild(tr);
      }  
      myTableDiv.appendChild(table)
      } 

