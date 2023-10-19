import React, { useRef, useState } from 'react'
import Header from './Header';
import {checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const[isSignInForm,setIsSignInForm] =useState(true);
 const [errorMessage, setErrorMessage] = useState(null);
  const dispatch =useDispatch();

 const fullName = useRef(null);
 const email = useRef(null);
 const password = useRef(null);
 
  const handleButtonclick=()=>{
  //Validate the form data
  const message = checkValidData(email.current.value, password.current.value);
  setErrorMessage(message); 
  if(message) return;

  if(!isSignInForm){
    createUserWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: fullName.current.value, 
      photoURL: USER_AVATAR
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser(
            {uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL,
            }));
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+errorMessage);
   
  });

  }
  else{
    //sign in logic
    signInWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+errorMessage);
  });
  }
};
 
  const toggleSignInForm=()=>{
  setIsSignInForm(!isSignInForm);
 };
 
  return (
    <div>
    <Header />
    <div className="absolute">
        <img className=' max-w-full' 
        src={BG_URL}
    alt = "Logo" />
     </div>
    <form 
    onSubmit={(e)=>e.preventDefault()}
    className=" w-full md:w-3/12 absolute p-12
     bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg  bg-opacity-80">
      <h1 className=' font-bold text-3xl py-4'>
        {isSignInForm? "Sign In":"Sign Up"}
        </h1>
        
        {!isSignInForm && (
     <input 
     ref={fullName}
     type="text"
     placeholder="Full Name" 
     className="p-4 my-4 w-full bg-gray-700"/>
    )}
    <input 
    ref={email}
    type="text"
     placeholder="Email Address" 
     className="p-4 my-4 w-full bg-gray-700"/>
   
    <input 
    ref={password}
    type="password"
     placeholder="Password"
      className="p-4 my-4 w-full bg-gray-700"/>
      <p className=' text-red-500'>{errorMessage}</p>
    <button 
    className="p-4 my-6 w-full rounded-lg bg-red-600  text-white" onClick={handleButtonclick}>
     {isSignInForm? "Sign In":"Sign Up"}</button>
      <p className='py-4 cursor-pointer' 
      onClick={toggleSignInForm} >
        {isSignInForm? "New to Netflix? Sign Up Now":"Already registered? Sign In Now."}</p>
    </form>
    </div>

  );
};

export default Login