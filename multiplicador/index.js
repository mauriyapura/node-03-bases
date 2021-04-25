
const colors = require("colors");
const fs = require('fs');
const {logica} = require("./logica"); 

const multiplicar = (base, limite,visualizar) => {

    const resultado = logica(base, limite);

    if(visualizar){
        console.log(`==============`.blue);
        console.log(` Tabla del ${base}`.blue);
        console.log(`==============`.blue);   

        console.log(resultado); 
        
    }   
  
   
    const nombreArchivo = `tabla-del-${base}.txt`;  

    fs.writeFile(`tablas/${nombreArchivo}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fué creado!`.green);
      });


}

module.exports = {
    multiplicar
}


