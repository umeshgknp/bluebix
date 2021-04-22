import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {persistStore} from "redux-persist";
import {rootReducer, rootSaga} from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [ sagaMiddleware ],
    devTools: process.env.NODE_ENV !== "production",
})

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;