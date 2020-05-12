
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async (direccion) => {

  try {
  
    let coors = await lugar.getLugarLatLng(direccion);
  
    let temp = await clima.getClima(coors.Lat, coors.Lng);
  
    return `El clima en ${coors.Direccion} es de ${temp} C`;

  } catch (e) {
    return `No se pudo determinar el clima en ${direccion}`;
  }

}

getInfo(argv.direccion)
  .then( mensaje => console.log(mensaje))
  .catch( e => console.log(e));


// lugar.getLugarLatLng(argv.direccion)
//   .then(resp => {
//     console.log(resp);
//   })
//   .catch(e => console.log(e));

//   // api.openweathermap.org/data/2.5/weather?lat=19.4326077&lon=-99.133208&units=metric&appid=cf98eff45a8a617032dfb0f86df3e6a2

// clima.getClima(19.4326077, -99.133208)
//     .then(temp => console.log(temp))
//     .catch( e => console.log(e));