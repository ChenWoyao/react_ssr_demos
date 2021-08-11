import React, {
    createContext
} from 'react'
import ReactDOM from 'react-dom'

export function createStore(initStore = {}) {
    return createContext(initStore)
}

export function createReducer(initState, reducer, name = '') {
    return function (state, action) {
        const {
            type
        } = action
        const handler = reducer(initState)[type]
        const unHandled = !type || !handler
        if (unHandled) {
            throw new Error('unhandled reducer action' + type)
            return
        }
        const nextState = unHandled ? initState : handler.call(null, state, action)
        return nextState
    }
}
