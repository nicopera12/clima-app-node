const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0a8836271d66e3dbc4f4a03851a6dab3`);
    if (resp.code === '400') throw new Error('No se pudo obtener la temperatura');

    return resp.data.main.temp
}

module.exports = {
    getClima
}