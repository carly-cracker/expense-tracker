import React,{useState} from "react";
import ExpenseTable from "./ExpenseTable";
import { expenses,getNextId } from "./expenses";
import SearchBar from "./SearchBar";


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
    const [sortBy, setSortBy] = useState("none");

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
        setFormData(updatedExpenses)
        setNewEntry({ name: "", description: "", category: "", expense: "", dates: "" })
        console.log(updatedExpenses)
        
    } 

    const filteredData = formData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const handleExpenseDelete = (id) => {
        const updatedExpenses = formData.filter((expense)=> expense.id !==id)
        setFormData(updatedExpenses)
    }
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        } else if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else {
          return 0;
        }
        
      });
      console.log(sortedData)
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
                type="number"
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
            <ExpenseTable searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortBy={sortBy} 
  setSortBy={setSortBy}>
        {sortedData.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.category}</td>
            <td>{data.expense}</td>
            <td>{data.dates}</td>
            <td>
                <button onClick={()=>handleExpenseDelete(data.id)}>
                    delete
                </button>
            </td>
          </tr>
        ))}
      </ExpenseTable>
         </div>  
         
        </>
    )

}

export default ExpenseForm
