import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


function SignButton() {

    const [redirect, setRedirect] = useState(false);

    const clickHandler = () => {
        if (redirect) {
            return <Redirect to="/login" />
        }
    }
    return (
        <>
            <div >
                {clickHandler()}
                <button onClick={() => { setRedirect(true) }} style={{ flex: "2" }} className="btn btn-outline-primary">Sign in</button>
            </div>
        </>
    );
}
export default SignButton;