import React, {useReducer} from 'react';

const userNameReducer = (lastState, actionDispt)=>{
    if(actionDispt.type === "USER_INPUT"){
        return {value: actionDispt.val, isValid: actionDispt.val.includes('@')};
    }
    return {value: '', isValid: false};
}

function LoginModal(props){

    const [userNameState, dispatchUserNameState] = useReducer(userNameReducer, {value: "", isValid: false});

    function takeFormData(e){
        e.preventDefault();
    }

    const handleUserIdOnChange = (e)=>{
        console.log(e.target.value);
        dispatchUserNameState({type: 'USER_INPUT', val: e.target.value});
    }

    const handlePasswordOnChange = (e)=>{
        console.log(e.target.value);
    }

    return(
        <div className={`oc-login-dropdown ${props.active ? 'active' : ''}`}>
    <div className="oc-login-dropdown__form">
        <form onSubmit={takeFormData}>
            <div className="oc-login-form__group">
                <input type="text" placeholder="Enter user id" onChange={handleUserIdOnChange} />
            </div>
            <div className="oc-login-form__group">
                <input type="password" placeholder="********" onChange={handlePasswordOnChange} />
            </div>
            <div className="oc-login-form__button">
                <button className="button fill-secondary">Login</button>
                <button className="button outline-secondary" onClick={props.inactive}>Close</button>
            </div>
        </form>
    </div>
</div>
    );
}

export default LoginModal;