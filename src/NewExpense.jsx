import React,{useState} from "react";
import ExpenseTable from "./ExpenseTable";
import { expenses,getNextId } from "./expenses";
import SearchBar from "./SearchBar";

let allExpenses;
function ExpenseForm(){

    const [searchTerm, setSearchTerm] = useState("");
    const [formData, setFormData] = useState(expenses)
    const [newEntry, setNewEntry] = useState({
        name:"",
        description:"",
        category:"",
        expense:"",
        dates:""
        })   


    function handleChange(e){
        const key = e.target.id
        setNewEntry({
            ...newEntry, 
            [key]:e.target.value
          }) 

    }
    function handleFormSubmit(e){
        e.preventDefault()
        //console.log("form submitted",newEntry)
        const newExpenseEntry = { 
            id: getNextId(),
            name: newEntry.name,
            description: newEntry.description,
            category: newEntry.category,
            expense: newEntry.expense,
            dates: newEntry.dates,
        }
        const updatedExpenses=[...formData,newExpenseEntry]
        allExpenses===updatedExpenses
        setFormData(updatedExpenses)
        setNewEntry({ name: "", description: "", category: "", expense: "", dates: "" })
        console.log(updatedExpenses)
        
    } 

    const filteredData = formData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return(
        <>
        <div className="container">
         <div className="form-card">
            <h3>Add Expense</h3>
            <span 
          style={{color:"grey"
          }}>
            Enter your expense details below
         </span>
            <form onSubmit={handleFormSubmit}>
                <input
                id="name"
                type="text"
                placeholder="name"
                onChange={handleChange}
                value={newEntry.name}
                />
                <br/>
                <input
                id="description"
                type="text"
                placeholder="expense description"
                onChange={handleChange}
                value={newEntry.description}
                />
                <br/>
                <input
                id="category"
                type="text"
                placeholder="expense category"
                onChange={handleChange}
                value={newEntry.category}
                />
                <br/>
                <input
                id="expense"
                type="text"
                placeholder="expense"
                onChange={handleChange}
                value={newEntry.expense}
                />
                <br/>
                <input
                id="dates"
                type="date"
                placeholder="dates"
                onChange={handleChange}
                value={newEntry.dates}
                />
                <br/>
                <button type="submit" style={{background:"black",borderRadius:"10px", color:"white"}}>
                    submit
                </button>
            </form>
            </div>
            <ExpenseTable searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
        {filteredData.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.category}</td>
            <td>{data.expense}</td>
            <td>{data.dates}</td>
          </tr>
        ))}
      </ExpenseTable>
         </div>  
         
        </>
    )

}

export default ExpenseForm
