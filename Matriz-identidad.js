
function crearMatrizIdentidad(){
    var tamaño_matriz = new Array(document.getElementById("texto1").value);
            tamaño_matriz.length = document.getElementById("texto1").value;
            console.log(tamaño_matriz.length);

            let matrizIdentidad = [];

            for(let i = 0; i < tamaño_matriz.length; i++){
                let fila = [];

                for(let j = 0; j < tamaño_matriz.length; j++){
                    if(i==j){
                        fila.push(1);
                    }else{
                        fila.push(0);
                    }
                }
                matrizIdentidad.push(fila);
            }
            console.log(matrizIdentidad);
}