import classes from "./SignUp.module.css";
import { NavLink } from "react-router-dom";

import FormImg from "./../../../Assets/formImg.jpg";

function SignInD() {
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <img className={classes.pic} src={FormImg}></img>

        <form className={classes.form}>
          <div className={classes.head}>Welcome To RoadLink</div>
          <input className={classes.input} type='text' placeholder='Full Name'></input>
          <br/>
          <input className={classes.input} type='text' placeholder='Set Username'></input>
          <br/>
          <input className={classes.input} type='email' placeholder='Email'></input>
          <br/>
          <input className={classes.input} type='password' placeholder='Set Password'></input>
          <br/>
          <input className={classes.input} type='password' placeholder='Confirm Password'></input>
          <br/>
          {/* <div className={classes.icon}>
            <div className={classes.icon1}><FcGoogle/></div>
            <div className={classes.icon1}><ImGithub/></div>
          </div> */}
          <button className={classes.button}>Submit</button>
          <div className={classes.link}><NavLink to='/' className={classes.navlink}>Not register yest? SignUp</NavLink></div>
        </form>
      </div>
    </div>
  );
}

export default SignInD;
