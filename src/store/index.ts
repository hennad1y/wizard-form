import {combineReducers, createStore} from 'redux';
import {UserReducer} from './user/reducer';
import {IUserState} from './user/types';

export interface IRootState {
    user: IUserState
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        user: UserReducer
    })
);

export default store;