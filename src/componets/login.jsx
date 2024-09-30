import React from "react";
import style from './Login.module.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate=useNavigate();
  const handlesumbit=()=>{
    navigate('/home');

  }
  return (
    <div className={style.loginPage}>

      <h2 className={style.title}>Login in to Spendly</h2><br /><br /><br />
      <label htmlFor="text" className={style.label1}>Email</label><br />
      <form onSubmit={handlesumbit}>
      <input type="text" name="text" id="text" className={style.text} required/><br />
      <label htmlFor="password">Password</label><br />
      <input type="password" name="password" id="password" className={style.text} required /><br />
      <a href="#" className={style.link}>Forgot Password?</a><br /><br />
      <input type="submit" value="login" className={style.submit}/></form>

    </div>
  );
}
