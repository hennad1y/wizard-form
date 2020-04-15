import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

export type UserActions = ActionType<typeof actions>;

export interface IUserContactData {
    email: string
    phone: string
    password: string
}

export interface IUserInformationData {
    country: string
    city: string
    address: string
}

export interface IUserCategoriesData {
    categoryOne: string
    categoryTwo: number[]
    categoryThree: string
}

export interface IUserState {
    userContactData: IUserContactData
    userInformationData: IUserInformationData
    userCategoriesData: IUserCategoriesData
    step: number
    loading: boolean
    error: string
}