import axios from 'axios'

const BASE_URL = window.location.origin

export function getPosts({userId}) {
  return axios.get(`${BASE_URL}/api/posts?userId=${userId}`).then((res) => {
    return { "posts": res.data }
  })
}

export function createPost({params}) {
  return axios.post(`${BASE_URL}/api/posts`, params).then((res) => {
    return { "post": res.data }
  })
}

export default { getPosts, createPost }
