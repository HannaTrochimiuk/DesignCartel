import App from '../App';

const axios = require('axios');

class TextService {
    getTextFromBackend = () => {
        return axios.get(App.baseURL + 'text')
            .then(function (res) {
                return res.data;
            });
    };
}

export default TextService;


