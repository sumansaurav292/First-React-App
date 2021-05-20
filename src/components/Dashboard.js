
import { useHistory } from 'react-router-dom';
import classes from './Dashboard.module.css';
import Logout from './Logout';
import Table from './Table';
import { useState } from 'react';

function Dashboard(props){
    
    //const history = useHistory();
    const [showResults, setShowResults] = useState(false)
    //var flag = false;
    function handleSubmit(){
        //history.replace('/table')
        //return true;
        //flag = true;
        setShowResults(true);
    }

    
         
    return (
    <div>
        Welcome User!<br /><br />
        <div>
            <label for="dept">Choose a Department:</label> &nbsp;&nbsp;
            <select name="dept" id="dept">
                <option value="Dept 1">Dept 1</option>
                {/*<option value="Dept2">Dept 2</option>*/}
            </select> &nbsp;&nbsp;
            <label for="cat">Choose a Category:</label> &nbsp;&nbsp;
            <select name="cat" id="cat">
                {/*<option value="All">All</option>*/}
                <option value="Cat 1">Cat 1</option>
                <option value="Cat 2">Cat 2</option>
                <option value="Cat 3">Cat 3</option>
                <option value="Cat 4">Cat 4</option>
                <option value="Cat 5">Cat 5</option>
                <option value="Cat 6">Cat 6</option>
            </select> &nbsp;&nbsp;
            <label for="year">Choose a Year:</label> &nbsp;&nbsp;
            <select name="year" id="year">
                <option value="2019">2019</option>
                {/*<option value="2020">2020</option>*/}
            </select>
            <input type = "button" value = "Submit" className = {classes.submit} onClick = {handleSubmit}/>
            {showResults ? <Table dept = {document.getElementById("dept").value} cat = {document.getElementById("cat").value} /> : null}
        </div>
        <Logout />
    </div>
    );
    
}

export default Dashboard;