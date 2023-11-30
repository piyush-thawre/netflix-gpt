import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";
const Login =()=>{
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errMessage , setErrMessage]  = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null);
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);

    }
    const handleButtonOnClick = ()=>{
        //Validate the form data 
        const message =  checkValidData(email.current.value ,password.current.value , fullname.current.value );
        console.log(message);
         console.log(fullname.current.value);
        // console.log(password.current.value);
        if(message!==null){
            setErrMessage(message);
        }


    }

    return(
        <div >
           <Header></Header>
           <div className="absolute">
           <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg"></img>
           </div>
           <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 my-24 absolute p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl p-3">{isSignInForm?"Sign In":"SignUp"}</h1>
                {!isSignInForm && <input ref={fullname} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900"></input>}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-900"></input>
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900"></input>
                {errMessage!==null?<p className="text-red-900 font-bold text-lg">{errMessage}</p>:""       }
                
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonOnClick}>{isSignInForm?"SignIn":"SignUp"}</button>
                <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign In Now":"Already a User"}</p>
           </form>
        </div>



    );
}

export default Login;