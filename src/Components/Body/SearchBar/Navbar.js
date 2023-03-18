import classes from "./Navbar.module.css";
import { TiArrowUnsorted, TiFilter } from "react-icons/ti";
import { BiSort } from "react-icons/bi";
function Navbar() {
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.data} id={classes.data1}>
          ALL SHIPMENTS
        </div>
        <div className={classes.sortData}>
          <div className={classes.data}>
            SORT <BiSort />
          </div>
          <div className={classes.data}>
            FILTER <TiFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
