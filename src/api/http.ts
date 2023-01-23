import axios from 'axios'
import Config from 'react-native-config'

export default axios.create({
  baseURL: `http://${Config.API_HOST}:${Config.API_PORT}`,
  headers: {
    'Content-type': 'application/json',
  },
})
