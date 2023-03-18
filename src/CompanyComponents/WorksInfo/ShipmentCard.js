import classes from "./ShipmentCard.module.css";

function ShipmentCard() {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.head}>All shipment</div>
        <div className={classes.head}></div>
      </div>
    </div>
  );
}

export default ShipmentCard;
