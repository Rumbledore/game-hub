import axios from "axios"

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4b57dd970dfe4d39bc493de40cd38faa'
  }
})