import classes from './Home.module.css'
import ProfileView from '../../Components/ProfileView/ProfileView';
import Body from '../../Components/Body/Body';
import BodyC from '../../CompanyComponents/BodyC/BodyC';
import Head1 from '../../Components/Head/Head1/Head1';
function Home(){
    return(
        <div className = {classes.home}>
            <Head1/>
            <Body/>
            <BodyC/>
        </div>
    )
}

export default Home;