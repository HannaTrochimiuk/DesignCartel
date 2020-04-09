
const axios = require('axios');

class TextService {
    getTextFromBackend = () => {
        return axios.get('http://localhost:5000/text')
            .then(function (res) {
                return res.data;
            });
    };
}

export default TextService;


