import React from "react";
import './App.css'

function Header(){
    return(
        <>
         <h1 style={{fontFamily:"sans-serif"}}>Expense Tracker</h1>
         <br/>
         <span 
          style={{color:"grey",
            fontFamily:"sans-serif"
          }}>
             Start taking controll of your finances and life. record, <br/>
             categorize and analyse your spending.
         </span>
        </>

    )
}

export default Header