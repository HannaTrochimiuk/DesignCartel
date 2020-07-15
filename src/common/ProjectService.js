import App from '../App';

const axios = require('axios');

class ProjectService {
    getProjectsFromBackend = () => {
         return axios.get(App.baseURL + 'projects')
            .then(function(res) {
                return res.data;
            });
    };
}

export default ProjectService;
