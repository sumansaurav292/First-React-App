//import Dashboard from './Dashboard.js'
import { Link } from 'react-router-dom';
import Logout from './Logout';
import classes from './UserManagement.module.css'

function UserManagaement(){

    function myFunction() {
        
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
        
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
              document.getElementById('hide').style.display = "block";
              //var par = document.createElement("P");
              //par.innerHTML = "No";
              //document.body.appendChild(par);
            }
          }
        }
        
      }

    return(
        <div>
            <h2>Hello Admin!</h2>
            <button className = {classes.dash}><Link to = "/dashboard" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>Dashboard</Link></button>
            <div>
                <input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for user.."  style = {{width: "20%"}} />

                <table id="myTable">
                    <thead>
                        <tr className={classes.header}>
                            <th> User Name</th>
                            <th>User Role</th>
                            <th>User Email</th>  
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Divya Kumari</td>
                            <td>Senior Developer</td>
                            <td>divya.kumari10@tcs.com</td>
                        </tr>
                        <tr>
                            <td>Suman Saurav</td>
                            <td>Developer</td>
                            <td>suman.saurav3@tcs.com</td>
                        </tr>
                        <tr>
                            <td>Abhishek Chand</td>
                            <td>Developer</td>
                            <td>abhishek.chand@tcs.com</td>
                        </tr>
                        <tr>
                            <td>Berglunds snabbkop</td>
                            <td>Developer</td>
                            <td>def@xyz.com</td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Tester</td>
                            <td>ghi@xyz.com</td>
                        </tr>
                        <tr>
                            <td>Koniglich Essen</td>
                            <td>Manager</td>
                            <td>jkl@xyz.com</td>
                        </tr>
                        <tr id = "hide" style = {{display: "none"}}>
                            <td style = {{color: "red"}}><b>No Records Found!</b></td>
                        </tr>
                    </tbody>
                
                </table>
            </div>
            <Logout />
        </div>
    );
}

export default UserManagaement;