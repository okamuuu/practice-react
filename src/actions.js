import { createAction } from "redux-actions"
import api from './api'

export const FETCH_REQUESTED = "FETCH_REQUESTED"
export const FETCH_SUCCESSED = "FETCH_SUCCESSED"
export const FETCH_FAILED    = "FETCH_FAILED"

export const fetchRequested = createAction(FETCH_REQUESTED)
export const fetchSuccessed = createAction(FETCH_SUCCESSED)
export const fetchFailed    = createAction(FETCH_FAILED)

export function getPosts({userId}) {
  return fetchRequested(() => {
    return api.getPosts({userId})
  })
}

export function createPost({params}) {
  return fetchRequested(() => {
    return api.createPost({params})
  })
}
