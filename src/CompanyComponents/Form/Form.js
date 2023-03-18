import classes from "./Form.module.css";
import { TbTruckDelivery } from "react-icons/tb";


function FormC() {
  return (
    <div className={classes.container}>
      <form>
        <div className={classes.form}>
          <div className={classes.head}>Create Shipment</div>


          <div className={classes.line}>

          <lable className={classes.lable}>Type of Goods</lable>
          <input className={classes.input} type="text"></input>
          <lable className={classes.lable} id={classes.right}>Total Weight</lable>
          <input className={classes.input} type="number"></input>
          </div>
          <div className={classes.line} id={classes.line1}>
          <lable className={classes.lable}>From</lable>
          <input className={classes.input} type="text"></input>
          <lable className={classes.lable} id={classes.right1}>To</lable>
          <input className={classes.input} type="text"></input>
          </div>

          <div className={classes.line}>
          <lable className={classes.lable}>Dead Line</lable>
          <input
            className={classes.input}
            placeholder="Dead Line"
            type="date"
          ></input>
          <lable className={classes.lable} id={classes.right2}>Set Price</lable>
          <input className={classes.input} type='number'></input>
          </div>
          <lable className={classes.lable}>Any Instruction:</lable>
          <textarea className={classes.input1} rows='1' cols='75'></textarea>
          <br/>
          <div className={classes.buttons}>
          <button className={classes.button} type='clear'>Cancel</button>
          <button className={classes.button} type='submit'>Create</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormC;
