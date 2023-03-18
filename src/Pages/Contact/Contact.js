import classes from "./Contact.module.css";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {NavLink} from 'react-router-dom'

function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.line1}>Hi i'am</div>
      <div className={classes.line2}>Ummed Choudhary</div>
      <div className={classes.line3}>I Build Thing For The Web</div>
      <div className={classes.line4}>I am React Devloper</div>
      <div className={classes.socialHandle}>
        <div className={classes.line5}>Let's Chet</div>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <a href="https://www.linkedin.com/in/ummed-choudhary-32387a222/">
              <FaLinkedin className={classes.Icon} />
            </a>
          </li>
          <li className={classes.listItem}>
            <a href="https://twitter.com/UmmedCh81619452">
              <FaTwitterSquare className={classes.Icon} />
            </a>
          </li>
          <li className={classes.listItem}>
            <a href="https://www.instagram.com/ummed303/">
              <FaInstagram className={classes.Icon} />
            </a>
          </li>
          <li className={classes.listItem}>
            <a href="https://github.com/ummed404">
              <FaGithubSquare className={classes.Icon} />
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.line6}>ummedchoudhary948@gmail.com</div>
      <NavLink to='/' className={classes.link}>Go back</NavLink>
    </div>
  );
}

export default Contact;
