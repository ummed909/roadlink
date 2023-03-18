import classes from './Body.module.css'
import Navbar from './SearchBar/Navbar'
import Shipment from './../Shipments/Shipment'
function Body(){
    return(
        <div className ={classes.body}>
            <Navbar/>
            <Shipment/>
        </div>
    )
}

export default Body