import {takeEvery, all} from "redux-saga/effects"
import { ADD_REQ } from '../constant'
import { setDetailAction } from './detail.action'


function* watchAddAction(){
    yield takeEvery(ADD_REQ, setDetailAction)
}

export default function* rootSaga() {
    yield all([
        watchAddAction()
    ])
}