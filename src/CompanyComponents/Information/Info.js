import classes from "./Info.module.css";

function Info() {
  return (
    <div className={classes.info}>
      <div className={classes.container}>
        <div></div>

        <div className={classes.buttons}>
          <button className={classes.button} id={classes.but1}>Create Shipment</button>
          <button className={classes.button} id={classes.but2}>Your Shipment</button>
          <button className={classes.button} id={classes.but3}>Invite Other</button>
        </div>
      </div>
      <div className={classes.heading}>
        <div className={classes.name}>Shree Krishna Transport Company</div>
      </div>
    </div>
  );
}

export default Info;
