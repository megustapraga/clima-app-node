const axios = require("axios");

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cf98eff45a8a617032dfb0f86df3e6a2`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}