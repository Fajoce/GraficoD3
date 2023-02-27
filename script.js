let data = [];
var gr;
function Grafico() {
  gr = d3.select("div.chart")
    .selectAll("svg")
    .data(data)
    .enter()
    .append("div")
    .text(function (d, i) {
      return d;
    })
    .attr("style", function (d, i) {
      return "width: " + d * 20 + "px;";
    });
}

function addData() {
  let datos = document.getElementById("valores").value;
  for (let i = 0; i <= data.length; i++) {
    data.shift(data[i]);
  }
  data = datos.split(",");
  if (datos != "") {
    for (let i = 0; i <= data.lenght; i++) {
      data.push(datos[i]);
    }
  } else {
    alert("No hay datos");
  }
  limpiar();
  Grafico();
}
function limpiar() {
  document.getElementById("valores").value = "";
  document.getElementById("nuevo").value = "";
}
//https://codepen.io/fajoce/pen/qBMaZPq
function updateData() {
  debugger;

  let actual = document.getElementById("valores")
  let nuevo = document.getElementById("nuevo")
  if (actual.value != '' && nuevo.value != '') {
    while (data.indexOf(actual.value) != -1) {
      data.splice(data.indexOf(actual.value), 1, nuevo.value);
    }
    gr.remove();
    limpiar();
    Grafico();
  }
  else if (nuevo.value != '') {
    updateAllData();
  }
  else {
    alert('Nada que actualizar')

  }
}
function deleteData() {
  debugger;
  let a = document.getElementById("valores");
  if (a.value != "") {
    while (data.indexOf(a.value) != -1) {
      data.splice(data.indexOf(a.value), 1);
    }
    gr.remove();
    limpiar();
    Grafico();
    alert("graph edited successfully!");
  }
  else {
    alert("Nothing to remove!");
  }
}
//Actualizar todos los items
function updateAllData() {
  let datos = document.getElementById("nuevo").value;
  gr.remove()
  data = datos.split(",");
  if (datos != "") {
    for (let i = 0; i <= data.lenght; i++) {
      data.push(datos[i]);
    }
  } else {
    alert("No data or should use commas!");
    limpiar();
    gr.remove();
  }
  limpiar();
  Grafico();
}

function instructions() {
  alert('1. Para llenar el array introduzca los datos separados '+
  'por comas en el primer input y luego dar cilck en el boton Add'+
   'Data\n 2.Para actualizar un item solo introduzca el valor a '+
   'editar en el primer input y en el segundo escribir el  nuevo valor'+
   '\n 3. Para actualizar todos los datos introduzcalos en el segundo input'+
   ' separados por comas y dar clic en el boton update Data \n'+
   '4. Para eliminar un item itroduzca el valor en el primer input'+
   'y luego dar clic en el botón delete Data')
}



