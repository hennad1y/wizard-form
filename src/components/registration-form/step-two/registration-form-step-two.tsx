import React from "react";
import "./registration-form-step-two.scss";
import {useDispatch} from "react-redux";
import {IUserInformationData, IUserState} from "../../../store/user/types";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {addUserInformationData, setStep} from "../../../store/user/actions";

const schema = Yup.object().shape({
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    address: Yup.string().required('Required')
});

const RegistrationFormStepTwo = () => {

    const dispatch = useDispatch();

    const initialValues: IUserInformationData = {country: '', city: '', address: ''};

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={values => {

                const {country, city, address} = values;
                const userInformationData: IUserInformationData = {country, city, address};

                const storage = sessionStorage.getItem('user');
                const user: Omit<IUserState, "loading" | "error"> = storage && JSON.parse(storage);

                sessionStorage.setItem('user', JSON.stringify({
                    ...user,
                    userInformationData: {...userInformationData},
                    step: user.step + 1
                }));

                dispatch(addUserInformationData(userInformationData));
                dispatch(setStep(user.step + 1))

            }}
        >
            {({errors, touched}) => (
                <Form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <Field id="country" name="country" type="text" className="validate"/>
                            <label htmlFor="country">Country</label>
                            {
                                errors.country && touched.country
                                    ? (<span className="helper-text red-text">{errors.country}</span>)
                                    : null
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <Field id="city" name="city" type="text" className="validate"/>
                            <label htmlFor="city">City</label>
                            {
                                errors.city && touched.city
                                    ? (<span className="helper-text red-text">{errors.city}</span>)
                                    : null
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <Field id="address" name="address" type="text" className="validate"/>
                            <label htmlFor="address">Address</label>
                            {
                                errors.address && touched.address
                                    ? (<span className="helper-text red-text">{errors.address}</span>)
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

export default RegistrationFormStepTwo;