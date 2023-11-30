import { useState } from "react";
import Header from "./Header";
const Login =()=>{
    const [isSignInForm , setIsSignInForm] = useState(true);
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);

    }

    return(
        <div >
           <Header></Header>
           <div className="absolute">
           <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg"></img>
           </div>
           <form className="w-3/12 my-24 absolute p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl p-3">{isSignInForm?"Sign In":"SignUp"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900"></input>}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-900"></input>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900"></input>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" >{isSignInForm?"SignIn":"SignUp"}</button>
                <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign In Now":"Already a User"}</p>
           </form>
        </div>



    );
}

export default Login;