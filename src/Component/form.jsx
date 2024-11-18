import { useRef } from "react";


const Signup = () => {

    const userId = useRef();
    const userpwd = useRef();
    
    return(
        <form>
            <input ref={userId} type="text"/>
            <input ref={userpwd} type="password"/>
        </form>
    )
};

export default Signup;