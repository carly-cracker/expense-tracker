import React from "react";
import Header from "./Header";
import ExpenseForm from "./NewExpense";
import ExpenseTable from "./ExpenseTable";

function App(){
    return(
        <>
        <Header/>
        <ExpenseForm/>
        {/* <ExpenseTable/> */}
        </>
    )
}

export default App