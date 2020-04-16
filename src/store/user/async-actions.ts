import {Dispatch} from 'redux';
import * as actions from './actions';
import {IUserState, UserActions} from './types';
import {init} from "./reducer";

const requestUserData = (dispatch: Dispatch<UserActions>) => {
    dispatch(actions.requestUserData());

    if (Math.random() > 0.95) dispatch(actions.requestUserError('Error Request User'));

    if (!sessionStorage.getItem('user')) {
        const {userContactData, userInformationData, userCategoriesData, step} = init;

        const storage: Omit<IUserState, "loading" | "error"> = {
            userContactData, userInformationData, userCategoriesData, step
        };

        sessionStorage.setItem('user', JSON.stringify(storage));
        dispatch(actions.requestUserSuccess(storage));
    } else {
        const storage = sessionStorage.getItem('user');
        const user: Omit<IUserState, "loading" | "error"> = storage && JSON.parse(storage);

        dispatch(actions.requestUserSuccess(user));
    }

};

export {
    requestUserData
}