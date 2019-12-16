import axios from 'axios';

const baseUrl = 'http://localhost:5000';

class TaskService {  

  getTaskById(projectId, taskId) {
    return axios.get(`${baseUrl}/api/projects/${projectId}/tasks/${taskId}`)
      .then(({data}) => data)
  }

  addTask(task) {
    return axios.post(`${baseUrl}/api/tasks`, task)
      .then(({data}) => data);
  }

}

let tasks = new TaskService();

export default tasks;