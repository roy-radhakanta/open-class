import React from 'react';

function LoginModal(props){
    return(
        <div className={`oc-login-dropdown ${props.active ? 'active' : ''}`}>
    <div className="oc-login-dropdown__form">
        <form action="">
            <div className="oc-login-form__group">
                <input type="text" placeholder="Enter user id" />
            </div>
            <div className="oc-login-form__group">
                <input type="password" placeholder="********" />
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