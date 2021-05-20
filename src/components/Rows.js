

function Rows(props){
    var sales, salesPct;
    
    var td1 = props.td1;
    var td2 = props.td2;
    if((td1 === "Dept 1") && (td2 === "Cat 1")){
        sales = "2.2M";
        salesPct = "50.00%";
    } 
    if((td1 === "Dept 1") && (td2 === "Cat 2")){
        sales = "2M";
        salesPct = "30.00%";
        
    }
    if((td1 === "Dept 1") && (td2 === "Cat 3")){
        sales = "300K";
        salesPct = "-20.00%";
        
    }
    if((td1 === "Dept 1") && (td2 === "Cat 4")){
        sales = "2M";
        salesPct = "30.00%";
        
    }
    if((td1 === "Dept 1") && (td2 === "Cat 5")){
        sales = "2M";
        salesPct = "30.00%";
        
    }
    if((td1 === "Dept 1") && (td2 === "Cat 6")){
        sales = "2M";
        salesPct = "30.00%";
        
    }
    return(
        <tr>
            <td>{td1}</td>
            <td>{td2}</td>
            <td>{sales}</td>
            <td>{salesPct}</td>
        </tr >
    );
}

export default Rows;