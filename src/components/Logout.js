
import classes from './Logout.module.css';
import { useHistory } from 'react-router-dom';

function Logout(){
    const history = useHistory();

    const handleLogout = () => {    
        history.replace('/login')
    }    
    return(
        <div>
             <input type="button" onClick={handleLogout} value="Logout" className = {classes.logout}/>
        </div>
    );
}

export default Logout;