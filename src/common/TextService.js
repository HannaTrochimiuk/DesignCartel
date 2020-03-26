
const axios = require('axios');

class TextService {
    getTextFromBackend = () => {
        return axios.get('http://192.168.0.122:5000/text')
            .then(function (res) {
                return res.data;
            });
    };
}

export default TextService;


