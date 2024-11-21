import { useState } from "react"

const SignupFrom = () =>{
 
    const [value, setValue] = useState("");
    const hadleChange = (e) =>{
        setValue(e.target.value);
    }

    const formdata = new FormData(
        []
    )

    return(
        <div>
            <form>
                <div className="formInput">
                    <label></label>
                    <input type='text' value={value} onChange={hadleChange}/>
                </div>
                <div className="formInput">
                    <label></label>
                    <input type='password' value={value} onChange={hadleChange}/>
                </div>
                <div className="formInput">
                    <label></label>
                    <input type='password' value={value} onChange={hadleChange}/>
                </div>
                <div className="formInput">
                    <label></label>
                    <input type='text' value={value} onChange={hadleChange}/>
                    <input type='text' value={value} onChange={hadleChange}/>
                </div>
                <div className="formInput">
                    <label></label>
                    <input type='text' value={value} onChange={hadleChange}/>
                </div>
                <div className="formInput">
                    <label></label>
                    <label type='text' value={value} onChange={hadleChange}/>
                </div>
            </form>
        </div>
    )
}