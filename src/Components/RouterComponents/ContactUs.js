import CartContext from "../store/CartContext";
import React, { useContext,useState,useRef } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const cartCtx=useContext(CartContext); 
  const [login,setLogin]=useState(false);
  const [form, setForm] = useState("Submit");
  // const nameInputRef= useRef();
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const navigate = useNavigate ();
  const onSubmit =(e) => {
    e.preventDefault();
    setForm("Submitting...")
    const enterEmail=emailInputRef.current.value;
    const enterPassword=passwordInputRef.current.value;
      let url;
      console.log(cartCtx.isLoggedIn)
      if(login){
          url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3H70FTTwTGSuNuJjexlHiIPj4MAsZR10'
      }else{
          url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3H70FTTwTGSuNuJjexlHiIPj4MAsZR10'
      }
      fetch(
        url,
        {
          method: "POST",
          body:JSON.stringify({
            email:enterEmail,
            password:enterPassword,
            returnSecureToken: true
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(res=>{
        if(res.ok){
          return res.json();
        }else{
         return res.json().then(data =>{
          let errorMessage='Authentucation failed';
          if(data&& data.error && data.error.message){
            errorMessage=data.error.message;
          }

          throw new Error(errorMessage)
          }) 
        }
       }).then((data)=>{
        cartCtx.login(data.idToken);
        setForm("Submit");
        navigate('/AvailableProduct');
        console.log(data);
       }).catch((err)=>{
          alert(err.message);
       })
      }
       const switchAuthModeHandler= ()=>{
        if(login)
        setLogin(false)
        else
        setLogin(true)
       }
  
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="number">
            Password
          </label>
          <input className="form-control" type="password" id="number" required ref={passwordInputRef} />
        </div>
        <Button className="btn btn-dark " type="submit">
          {form}
        </Button>
        <Button
            variant="link"
            onClick={switchAuthModeHandler}
           >
            {login ?  'Login with existing account' : 'Create new account'}
          </Button>
      </form>
    
    </div>
  );
};

export default Login;