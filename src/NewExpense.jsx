import React,{useState} from "react";

function ExpenseForm(){

    const [formData, setFormData] = useState({
        name:"",
        description:"",
        category:"",
        expense:"",
        dates:""
        })
        

    function handleChange(e){
        const key = e.target.id
        setFormData({
            ...formData, 
            [key]:e.target.value
          }) 
    }
    function handleFormSubmit(e){
        e.preventDefault()
        console.log("form submitted",formData)
    }
    
    return(
        <>
         <div>
            <h3>Add Expense</h3>
            <form onSubmit={handleFormSubmit}>
                <input
                id="name"
                type="text"
                placeholder="name"
                onChange={handleChange}
                value={formData.name}
                />
                <br/>
                <input
                id="description"
                type="text"
                placeholder="expense description"
                onChange={handleChange}
                value={formData.description}
                />
                <br/>
                <input
                id="category"
                type="text"
                placeholder="expense category"
                onChange={handleChange}
                value={formData.category}
                />
                <br/>
                <input
                id="expense"
                type="text"
                placeholder="expense"
                onChange={handleChange}
                value={formData.expense}
                />
                <br/>
                <input
                id="dates"
                type="date"
                placeholder="dates"
                onChange={handleChange}
                value={formData.dates}
                />
                <br/>
                <button type="submit" style={{background:"black",borderRadius:"10px", color:"white"}}>
                    submit
                </button>
            </form>
         </div>   
        </>
    )

}

export default ExpenseForm