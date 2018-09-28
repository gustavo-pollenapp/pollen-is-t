import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createHashHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
export const hashHistory = createHashHistory()

const middleware = composeWithDevTools(
    applyMiddleware(thunk, logger, routerMiddleware(hashHistory))
)

const rootReducer = combineReducers({
    form: formReducer
})

export const store = createStore(
    connectRouter(hashHistory)(rootReducer),
    middleware
)
