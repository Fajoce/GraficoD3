let data = [];
function Grafico() {
  let widthBar = 25;
  d3.select("div.chart")
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
  for (let i = 0; i = data.length; i++) {
    data.shift(data[i]);
  }
 if(datos != '' && datos > 0){
   data.push(datos);
    limpiar(); 
  Grafico();
 }
  else{
    alert('Introduzca un número válido')
  } 
}
function limpiar() {
  document.getElementById("valores").value = "";
}
//https://codepen.io/fajoce/pen/qBMaZPq
function updateData(){
  debugger;
  let actual = document.getElementById("valores");
  let nuevo = document.getElementById("nuevo");
while(data.indexOf(actual.value)!= -1){
  data.splice(data.indexOf(actual.value),1, nuevo.value)  
}
Grafico();
}

