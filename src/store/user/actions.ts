import {action} from 'typesafe-actions';

import {UserConstants} from './constants';
import {IUserCategoriesData, IUserContactData, IUserInformationData, IUserState} from "./types";

const addUserContactData = (data: IUserContactData) => action(UserConstants.ADD_USER_CONTACTS_DATA, data);

const addUserInformationData = (data: IUserInformationData) => action(UserConstants.ADD_USER_INFORMATION_DATA, data);

const addUserCategoriesData = (data: IUserCategoriesData) => action(UserConstants.ADD_USER_CATEGORIES_DATA, data);

const requestUserData = () => action(UserConstants.REQUEST_USER_DATA);

const requestUserError = (error: string) => action(UserConstants.REQUEST_USER_ERROR, error);

const requestUserSuccess = (data: Omit<IUserState, "step" | "loading" | "error">) => action(UserConstants.REQUEST_USER_SUCCESS, data);

const setStep = (step: number) => action(UserConstants.SET_STEP, step);

const clearUser = () => action(UserConstants.CLEAR_USER);

export {
    addUserContactData,
    addUserInformationData,
    addUserCategoriesData,
    requestUserData,
    requestUserError,
    requestUserSuccess,
    setStep,
    clearUser
}
