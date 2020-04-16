import React from "react";
import "./progress.scss";

const Progress: React.FC<{ step: number }> = ({step}) => {
    const allSteps = ['Contacts', 'Address', 'Categories', 'Success'];

    return (
        <div className="wizard-progress">
            {allSteps.map((item, index) => {

                const classProgress = index === step - 1
                    ? 'step in-progress'
                    : step -1 > index ? 'step complete' : 'step';

                return (
                    <div className={classProgress} key={index}>
                        {item}
                        <div className="node" />
                    </div>
                )
            })}
        </div>
    )
};

export default Progress;