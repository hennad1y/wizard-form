import React from 'react';
import {useSelector} from "react-redux";
import {IUserState} from "./store/user/types";
import {IRootState} from "./store";


const App = () => {
    const {step, loading, error} = useSelector(({user}: IRootState): Pick<IUserState, "step" | "loading" | "error"> => (user));



    if(loading) return <div>Loading...</div>;

    return <div>App</div>
};

export default App;