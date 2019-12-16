import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;


class ProjectService {  

  getAllProjects() {
    return axios.get(`${baseUrl}/api/projects`)
    .then( ({data}) => data )
  }

  getProjectById(id) {
    return axios.get(`${baseUrl}/api/projects/${id}`)
      .then(({data}) => data)
  }

  addProject(newProject) {
    return axios
    .post(`${baseUrl}/api/projects`, newProject)
      .then(({data}) => data);
  }

  updateProject(id, projectData) {
      return axios
      .put(`${baseUrl}/api/projects/${id}`, projectData)
        .then(({data}) => data);
  } 

  deleteProject(id) {
    return axios
    .delete(`${baseUrl}/api/projects/${id}`)
      .then(({data}) => data);
  }

}

let projects = new ProjectService();

export default projects;