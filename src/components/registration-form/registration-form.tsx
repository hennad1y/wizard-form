import * as React from 'react';
import "./registration-form.scss";
import RegistrationFormStepOne from "./step-one";
import RegistrationFormStepTwo from "./step-two";
import RegistrationFormStepThree from "./step-three";
import RegistrationFormStepFour from "./step-four";
import Progress from "../progress";

const getFormByStep = (step: number) => {
    switch (step) {
        case 1:
            return <RegistrationFormStepOne/>;
        case 2:
            return <RegistrationFormStepTwo/>;
        case 3:
            return <RegistrationFormStepThree/>;
        case 4:
            return <RegistrationFormStepFour/>;
        default:
            return <RegistrationFormStepOne/>
    }
};

const RegistrationForm: React.FC<{ step: number }> = ({step}) => {
    return (
        <div className="form-registration">
            <Progress step={step} />
            {getFormByStep(step)}
        </div>
    )
};

export default RegistrationForm;