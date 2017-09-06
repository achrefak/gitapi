import axios from 'axios'

export function getUserByUsername(username) {
     return axios.get('https://api.github.com/users/'+username)
     
  }