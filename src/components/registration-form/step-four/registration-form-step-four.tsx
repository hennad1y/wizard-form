import React from "react";
import "./registration-form-step-four.scss";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../store";
import {IUserState} from "../../../store/user/types";
import {clearUser} from "../../../store/user/actions";

const RegistrationFormStepFour = () => {
    const dispatch = useDispatch();
    const {userContactData, userInformationData, userCategoriesData} = useSelector(({user}: IRootState): Omit<IUserState, "loading" | "error" | "step"> => (user));

    const userClear = () => {
        sessionStorage.removeItem('user');
        dispatch(clearUser())
    };

    return (
        <div>
            <h3>Success</h3>
            <table>
                <tbody>
                <tr>
                    <td>Email</td>
                    <td>{userContactData.email}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{userContactData.phone}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{userInformationData.country}</td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>{userInformationData.city}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{userInformationData.address}</td>
                </tr>
                <tr>
                    <td>Category 1</td>
                    <td>{userCategoriesData.categoryTwo}</td>
                </tr>
                <tr>
                    <td>Category 2</td>
                    <td>{userCategoriesData.categoryTwo.map(item => item + ' ')}</td>
                </tr>
                <tr>
                    <td>Category 3</td>
                    <td>{userCategoriesData.categoryThree}</td>
                </tr>
                </tbody>
            </table>
            <button type="button" onClick={() => userClear()}>
                Ок
            </button>
        </div>
    )
};

export default RegistrationFormStepFour;