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
       
{/* <svg width="800px" height="800px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><title>Ecommerce copia 3</title><polygon points="96.5 63.42 92.5 71.75 84.5 71.75 80.5 59.75 86.5 63.42 90.16 48.42 92.16 64.08 96.5 63.42" fill="#e1f6fa"/><polygon points="31.04 59.93 31.04 73.01 25.5 67.83 19.95 73.01 19.95 59.93 31.04 59.93" fill="#9ae3f0"/><polygon points="30 39.75 30 49.75 25.5 45.58 21 49.75 21 39.75 30 39.75" fill="#9ae3f0"/><path d="M75.5,85.75h-2v-81h-52v34h-2v-35a1,1,0,0,1,1-1h54a1,1,0,0,1,1,1v82Z" fill="#495771"/><path d="M97.5,97.25H2.5a1,1,0,0,1-1-1V85.75a1,1,0,0,1,1-1h81v2H3.5v8.5h93v-8.5h-3v-2h4a1,1,0,0,1,1,1v10.5A1,1,0,0,1,97.5,97.25Z" fill="#495771"/><path d="M40.5,58.35h-2V39.85h-26v18.5h-2V38.85a1,1,0,0,1,1-1h28a1,1,0,0,1,1,1v19.5Z" fill="#495771"/><path d="M45.5,85.72h-2v-26H7.5v26h-2v-27a1,1,0,0,1,1-1h38a1,1,0,0,1,1,1v27Z" fill="#495771"/><path d="M67.5,50.75h-7a1,1,0,0,1-1-1v-16a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v16A1,1,0,0,1,67.5,50.75Zm-6-2h5v-14h-5v14Z" fill="#495771"/><rect x="52.83" y="39.75" width="12" height="2" fill="#495771"/><path d="M93.5,86.75h-10a1,1,0,0,1-1-.86l-2-14a1,1,0,0,1,1-1.14h14a1,1,0,0,1,1,1.14l-2,14A1,1,0,0,1,93.5,86.75Zm-9.13-2h8.27l1.71-12H82.65Z" fill="#495771"/><path d="M93.4,72.18l-1.8-.87,3.18-6.62-2.47.38a1,1,0,0,1-1.14-.86L89.85,53.9l-2.38,9.76a1,1,0,0,1-1.49.62L82.31,62l3.13,9.4-1.9.63-4-12A1,1,0,0,1,81,58.9l4.83,3,3.33-13.67a1,1,0,0,1,1-.76,1,1,0,0,1,.94.87L93,62.94l3.33-.51a1,1,0,0,1,1.05,1.42Z" fill="#495771"/><rect width="100" height="100" fill="none"/></svg> */}
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
        className={classes.svg}
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
