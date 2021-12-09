import { put } from 'redux-saga/effects'
import {  ADD } from '../constant'


export function* setDetailAction({payload}) {
    yield put({ type:ADD, payload})
}