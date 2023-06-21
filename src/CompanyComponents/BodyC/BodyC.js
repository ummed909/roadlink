import classes from "./BodyC.module.css";
import Info from "./../Information/Info";
import FormC from "../Form/Form";
import ShipmentCard from "../WorksInfo/ShipmentCard";

function BodyC() {
  return (
    <div className={classes.bodyC}>
      <Info />
      <svg
        width="100%"
        height="70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          id="wavepath"
          d="M0,0  L110,0C35,150 35,0 0,100z"
          fill="#03c04a"
          
        ></path>
      </svg>
      <FormC/>
      <ShipmentCard />
    </div>
  );
}

export default BodyC;
