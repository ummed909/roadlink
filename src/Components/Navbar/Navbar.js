import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./../../Assets/roadLine.png";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const toogle = classes.dropdownMenu;

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={Logo} className={classes.logoImg}></img>
        <div className={classes.logoName}>RoadLink</div>
      </div>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : classes.dea
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : classes.dea
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? classes.active : classes.dea
            }
          >
            CONTACT
          </NavLink>
        </li>
        <li>
        <div className={classes.dropdown}>
            <button className={classes.dropbtnx}>
              POJECTS
              <IoMdArrowDropdown/>
            </button>
            <div className={classes.dropdownContent}>
              <NavLink to="/ragistrationD">Project1</NavLink>
              <NavLink to='/ragistrationC'>Project2</NavLink>
              <NavLink to='/ragistrationC'>Project3</NavLink>
            </div>
          </div>
        </li>
      </ul>
      <div className={classes.buttons}>
        <button className={classes.profile}>
          <NavLink className={classes.buttonLink}>PROFILE</NavLink>
        </button>
        <div className={classes.dropdown}>
            <button className={classes.dropbtn}>
              RAGISTRATION
              <IoMdArrowDropdown/>
            </button>
            <div className={classes.dropdownContent}>
              <NavLink to="/ragistrationD">ragister as driver</NavLink>
              <NavLink to='/ragistrationC'>Ragister as company</NavLink>
            </div>
          </div>
      </div>
      <div className={classes.toogleButton}>Toogle</div>

      <div className={toogle}>
        <li>
          <NavLink to="/home" className={classes.item}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={classes.item}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={classes.item}>
            CONTACT
          </NavLink>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
