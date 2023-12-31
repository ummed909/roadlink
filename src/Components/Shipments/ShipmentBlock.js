import { type } from "@testing-library/user-event/dist/type";
import classes from "./ShipmentBlock.module.css";
import { useSelector,useDispatch } from "react-redux";

function ShipmentBlock() {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);

  const incrementHandler=()=>{
    dispatch({type:"increment"})
  }



  return (
    <div className={classes.container}>
      <div className={classes.shipmentBlock}>
        <div className={classes.heading}>
          <div className={classes.transporterName}>
            SHREE KRISHNA TRANSPORT COMPANY
          </div>
        </div>
        <div className={classes.split}>
          <div className={classes.shipmentInfo}>
            <div className={classes.info1}>
              There is a wheat of weight 30 tons
            </div>
            <div className={classes.info1}>Goods Type : Wheat</div>
            <div className={classes.info1}>Total Weight : 30 ton</div>
            <div className={classes.root}>
              <div className={classes.root1}>From : JODHPUT</div>
              <div className={classes.root1}>To: MUMBAI</div>
            </div>
          </div>
          <div className={classes.number}>
            <div className={classes.bidInfo}>Total Bid : 30</div>
            <div className={classes.num1}>2000 km</div>
            <div className={classes.num1}>400 $<spam className={classes.num3}>min bid</spam></div>
          </div>
        </div>
        <div className={classes.buttons}>
          <input className={classes.bidInput} placeholder="Your Bid" type='number'/>
          <button className={classes.button} onClick={incrementHandler}>APPLY</button>{" "}
        </div>
      </div>
    </div>
  );
}

export default ShipmentBlock;
