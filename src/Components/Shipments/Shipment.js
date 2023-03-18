import classes from './Shipment.module.css'
import ShipmentBlock from './ShipmentBlock'
function Shipment(){
    return(
        <div className = {classes.shipment}>
            <ShipmentBlock/>
            <ShipmentBlock/>
            <ShipmentBlock/>
            <ShipmentBlock/>
            <ShipmentBlock/>
            <ShipmentBlock/>
            <ShipmentBlock/>
        </div>
    )
}

export default Shipment