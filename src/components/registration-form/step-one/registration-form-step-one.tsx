import * as React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

import "./registration-form-step-one.scss";
import {IUserContactData, IUserState} from "../../../store/user/types";
import {useDispatch} from "react-redux";
import {addUserContactData, setStep} from "../../../store/user/actions";

// +380 Ukraine
const phoneRegExp = /^\+?3?8?(0\d{9})$/;

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short Password!')
        .required('Required'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
});

const RegistrationFormStepOne: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const initialValues: IUserContactData = {email: '', password: '', phone: ''};

    return (
        <Formik
            initialValues={{...initialValues, passwordConfirm: ''}}
            validationSchema={schema}
            onSubmit={values => {

                const {email, password, phone} = values;
                const userContactData: IUserContactData = {email, password, phone};

                const storage = sessionStorage.getItem('user');
                const user: Omit<IUserState, "loading" | "error"> = storage && JSON.parse(storage);

                sessionStorage.setItem('user', JSON.stringify({
                    ...user,
                    userContactData: {...userContactData},
                    step: user.step + 1
                }));

                dispatch(addUserContactData(userContactData));
                dispatch(setStep(user.step + 1))
            }}
        >
            {({errors, touched}) => (
                <Form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <Field id="email" name="email" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                            {
                                errors.email && touched.email
                                    ? (<span className="helper-text red-text">{errors.email}</span>)
                                    : null
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <Field id="phone" name="phone" type="text" className="validate"/>
                            <label htmlFor="phone">Phone</label>
                            <span className="helper-text">+380 Ukraine</span>
                            {
                                errors.phone && touched.phone
                                    ? (<span className="helper-text red-text">{errors.phone}</span>)
                                    : null
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <Field id="password" name="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                            {
                                errors.password && touched.password
                                    ? (<span className="helper-text red-text">{errors.password}</span>)
                                    : null
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <Field id="passwordConfirm" name="passwordConfirm" type="password"
                                   className="validate"/>
                            <label htmlFor="passwordConfirm">Confirm password</label>
                            {
                                errors.passwordConfirm && touched.passwordConfirm
                                    ? (<span className="helper-text red-text">{errors.passwordConfirm}</span>)
                                    : null
                            }
                        </div>
                    </div>

                    <div className="row">
                        <button type="submit">
                            Next
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationFormStepOne;