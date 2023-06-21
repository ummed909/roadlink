import classes from './Home.module.css'
import Body from '../../Components/Body/Body';
import BodyC from '../../CompanyComponents/BodyC/BodyC';
import Head1 from '../../Components/Head/Head1/Head1';
import { useSelector} from "react-redux";



function Home(){


    const Rstatus = useSelector(state => state.Rstatus);

    
    if(Rstatus==='cr'){
        return(
            <div className = {classes.home}>
                <Head1/>
                <BodyC/>
            </div>
        )
    }
    return(
        <div className = {classes.home}>
            <Head1/>
            <Body/>
        </div>
    )



    
}

export default Home;