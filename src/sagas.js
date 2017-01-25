import { takeEvery } from "redux-saga"
import { put, call } from "redux-saga/effects"
import { addNotification as notify } from 'reapop'

import {
  FETCH_REQUESTED,
  fetchSuccessed,
  fetchFailed,
} from "./actions"

function notifySuccess(message) {
  return notify({
    message,
    position: 'tc',
    status: 'success',
    dismissAfter: 3000
  })
}

function notifyError(message) {
  return notify({
    message,
    position: 'tc',
    status: 'error',
    dismissAfter: 3000
  })
}

function* fetch(action) {
  try {
    const data = yield call(action.payload)
    yield put(fetchSuccessed(data))
    yield put(notifySuccess("fetch success"))
  } catch (err) {
    yield put(fetchFailed(err))
    yield put(notifyError(err.message))
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_REQUESTED, fetch)
}
