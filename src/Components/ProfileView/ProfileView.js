import classes from './ProfileView.module.css'
import ummed from './../../Assets/ummed.jpg'

function ProfileView(){
    return(
        <div className = {classes.profile}>
            <div className={classes.profilePhoto}>
                <img className={classes.profilePic} src={ummed}/>
            </div>
            <div className={classes.userName}>ummed choudhary</div>
            <div className={classes.rating}>RATING : 4 star</div>
            <div className={classes.status}>STATUS</div>
            <div className={classes.earning}>EARNING : 45363$</div>
            <div className={classes.capacity}>LOAD CAPICITY:30 ton</div>
            <div className={classes.capacity}>TOTAL DELIVERY:30 ton</div>
            <button className={classes.logoutButton}>Logout</button>
        </div>
    )
}

export default ProfileView