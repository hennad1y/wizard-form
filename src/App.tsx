import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {IUserState} from "./store/user/types";
import {IRootState} from "./store";
import "./App.scss";

import {requestUserData} from "./store/user/async-actions";
import RegistrationForm from "./components/registration-form";

const App: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const {loading, error, step} = useSelector(({user}: IRootState): Pick<IUserState, "loading" | "error" | "step"> => (user));

    useEffect(() => {
        if (!loading) return;

        requestUserData(dispatch)
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="page">
            <div className="container">
                <RegistrationForm step={step} />
            </div>
        </div>
    )
};

export default App;