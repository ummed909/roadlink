import classes from "./Head1.module.css";
import { TbTruckDelivery ,TbListSearch} from "react-icons/tb";

function Head1() {


  
  function MoveToCreate(){
    window.scrollTo({left:0,top:500,behavior:"smooth"});
  }

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <div className={classes.line1}>RoadLink</div>
        <div className={classes.line2}>Grow Your business with RoadLink</div>
        <div className={classes.headButtons}>
          <button className={classes.headButton} onClick={MoveToCreate}>Find Shipment <TbListSearch/></button>
          <button className={classes.headButton}>Create Shipment <TbTruckDelivery/></button>
        </div>
        <div className={classes.line3}>
          Invites yours Colleagues on RoadLink
        </div>
      </div>
      <svg
        width="100%"
        height="70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          id="wavepath"
          d="M0,0  L110,0C35,150 35,0 0,100z"
          fill="#6700b6"
        ></path>
      </svg>
    </div>
  );
}

export default Head1;
