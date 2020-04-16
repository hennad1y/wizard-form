import React, {useEffect} from "react";
import "./registration-form-step-three.scss";
import {useDispatch} from "react-redux";
import {IUserCategoriesData, IUserState} from "../../../store/user/types";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import M from "materialize-css";
import {addUserCategoriesData, setStep} from "../../../store/user/actions";

const schema = Yup.object().shape({
    categoryOne: Yup.string().required('Required'),
    categoryTwo: Yup.string().required('Required'),
    categoryThree: Yup.string().required('Required')
});

const RegistrationFormStepThree = () => {

    const dispatch = useDispatch();

    const initialValues: IUserCategoriesData = {
        categoryOne: '',
        categoryTwo: [],
        categoryThree: ''
    };

    useEffect(() => M.AutoInit(), []);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={values => {

                const {categoryOne, categoryTwo, categoryThree} = values;
                const userCategoriesData: IUserCategoriesData = {categoryOne, categoryTwo, categoryThree};

                const storage = sessionStorage.getItem('user');
                const user: Omit<IUserState, "loading" | "error"> = storage && JSON.parse(storage);

                sessionStorage.setItem('user', JSON.stringify({
                    ...user,
                    userCategoriesData: {...userCategoriesData},
                    step: user.step + 1
                }));

                dispatch(addUserCategoriesData(userCategoriesData));
                dispatch(setStep(user.step + 1))
            }}
        >
            {({errors, touched, values}) => (
                <Form className="col s12">

                    <div className="row">

                        <div className="input-field col s12">
                            <Field as="select"
                                   name="categoryOne"
                                   value={values.categoryOne ? values.categoryOne : ''}
                                   multiple={false}
                            >
                                <option value="" disabled>Category 1</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Field>
                            {
                                errors.categoryOne && touched.categoryOne
                                    ? (<span className="helper-text red-text">{errors.categoryOne}</span>)
                                    : null
                            }
                        </div>

                        <div className="input-field col s12">
                            <Field as="select"
                                   name="categoryTwo"
                                   value={values.categoryTwo ? values.categoryTwo : ''}
                                   multiple
                            >
                                <option value="" disabled>Category 2</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Field>
                            {
                                errors.categoryTwo && touched.categoryTwo
                                    ? (<span className="helper-text red-text">{errors.categoryTwo}</span>)
                                    : null
                            }
                        </div>

                        <div className="input-field col s12">
                            <Field as="select"
                                   name="categoryThree"
                                   value={values.categoryThree ? values.categoryThree : ''}
                                   multiple={false}
                            >
                                <option value="" disabled>Category 3</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Field>
                            {
                                errors.categoryThree && touched.categoryThree
                                    ? (<span className="helper-text red-text">{errors.categoryThree}</span>)
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
    )
};

export default RegistrationFormStepThree;