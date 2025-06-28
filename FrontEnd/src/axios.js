import axios from 'axios'


const instance =axios.create({
  baseURL:'http://localhost:4000/api/v1/user'
})

export default instance