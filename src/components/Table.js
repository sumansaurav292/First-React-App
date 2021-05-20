import Logout from "./Logout";
import { Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import classes from './Table.module.css';
import Rows from './Rows.js'

function Table(props){

    /*var t = [["Dept 1","Cat 1","2.2M","50.00%"],
             ["Dept 1","Cat 2","2.2M","50.00%"],
             ["Dept 1","Cat 3","2.2M","50.00%"],
             ["Dept 1","Cat 4","2.2M","50.00%"],
             ["Dept 1","Cat 5","2.2M","50.00%"],
             ["Dept 1","Cat 6","2.2M","50.00%"]];
    for(var i = 0; i<t.length; i++){

    }*/

    const history = useHistory();
    function back(){
        history.replace('/dashboard')
    }
    console.log(props.dept);
    console.log(props.cat);
    /*
    if(props.dept === "Dept 1" && props.cat === "All"){
        var tr = document.getElementsByTagName('tr');
        for(var i=1; i<tr.length;i++){
            tr[i].style.display = "block";
        }
    }*/
    /*
    var tr = document.getElementsByTagName('tr');
    console.log(tr);
    for(var i=1; i < tr.length; i++){
        var td1 = tr[i].getElementsByTagName("td")[0];
        var td2 = tr[i].getElementsByTagName("td")[1];
        console.log(td1.textContent);
        console.log(td2.textContent);
        //console.log("Hi")
        if(td1 === props.dept && td2 === props.cat){
            tr[i].style.display = "block";
        }
    }*/
    return(
        <div>
           {/*<button onClick = {back} className = {classes.back}>Back</button>*/}
           <table border = "5" className = {classes.table}>
               <thead className = {classes.head}>
                   <tr>
                       <th>Dept</th>
                       <th>Cat</th>
                       <th>Net Sales ($)</th>
                       <th>% Sales</th>
                   </tr>
               </thead>
               <tbody>
                   {/*<tr className = {classes.hide}>
                       <td>Dept 1</td>
                       <td>Cat 1</td>
                       <td>2.2M</td>
                       <td className = {classes.green}>50.00%</td>
                   </tr>
                   <tr className = {classes.hide}>
                       <td>Dept 1</td>
                       <td>Cat 2</td>
                       <td>2M</td>
                       <td className = {classes.green}>30.00%</td>
                   </tr >
                   <tr className = {classes.hide}>
                       <td>Dept 1</td>
                       <td>Cat 3</td>
                       <td>300K</td>
                       <td className = {classes.red}>-20.00%</td>
                   </tr>
                   <tr className = {classes.hide}>
                       <td>Dept 1</td>
                       <td>Cat 4</td>
                       <td>2M</td>
                       <td className = {classes.green}>30.00%</td>
                   </tr>
                   <tr className = {classes.hide}>
                       <td>Dept 1</td>
                       <td>Cat 5</td>
                       <td>2M</td>
                       <td className = {classes.green}>30.00%</td>
                   </tr>
                   <tr className = {classes.hide}>
                       <td>Dept 1</td>
                       <td>Cat 6</td>
                       <td>2M</td>
                       <td className = {classes.green}>30.00%</td>
                   </tr>*/}
                    <Rows td1 = {props.dept} td2 = {props.cat} />
               </tbody>
           </table>
           <Logout />
        </div>
    );
}

export default Table;