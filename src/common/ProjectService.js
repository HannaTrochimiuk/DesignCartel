
const axios = require('axios');

class ProjectService {
    getProjectsFromBackend = () => {
         return axios.get('http://localhost:5000/projects')
            .then(function(res) {
                return res.data;
            });
    };
}

export default ProjectService;
