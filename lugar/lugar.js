const axios = require("axios");

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDjGjIBsJYpjfGP7_l94yOLOvZh-0Mu2xQ`)
    
    if( resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${ direccion }`)
    }
    
    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        Direccion: location.formatted_address,
        Lat: coors.lat,
        Lng: coors.lng
    }
}


module.exports = {
    getLugarLatLng
}