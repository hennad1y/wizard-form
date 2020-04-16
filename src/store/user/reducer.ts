import {IUserState, UserActions} from './types';
import {UserConstants} from './constants';

export const init: IUserState = {
    userContactData: {
        email: '',
        password: '',
        phone: ''
    },
    userInformationData: {
        address: '',
        city: '',
        country: ''
    },
    userCategoriesData: {
        categoryOne: '',
        categoryTwo: [],
        categoryThree: ''
    },
    step: 1,
    loading: true,
    error: ''
};

export const UserReducer = (state: IUserState = init, action: UserActions): IUserState => {
    switch (action.type) {
        case UserConstants.REQUEST_USER_DATA:
            return {
                ...state,
                error: '',
                loading: true
            };
        case UserConstants.REQUEST_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case UserConstants.REQUEST_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                error: '',
                loading: false
            };
        case UserConstants.ADD_USER_CONTACTS_DATA:
            return {
                ...state,
                userContactData: action.payload
            };
        case UserConstants.ADD_USER_INFORMATION_DATA:
            return {
                ...state,
                userInformationData: action.payload
            };
        case UserConstants.ADD_USER_CATEGORIES_DATA:
            return {
                ...state,
                userCategoriesData: action.payload
            };
        case UserConstants.SET_STEP:
            return {
                ...state,
                step: action.payload
            };
        case UserConstants.CLEAR_USER:
            return {
                ...state,
                userContactData: {
                    email: '',
                    password: '',
                    phone: ''
                },
                userInformationData: {
                    address: '',
                    city: '',
                    country: ''
                },
                userCategoriesData: {
                    categoryOne: '',
                    categoryTwo: [],
                    categoryThree: ''
                },
                step: 1
            };
        default:
            return state;
    }
};