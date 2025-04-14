import React from 'react'
import NewExpense from './NewExpense'
import { expenses } from './expenses'
import SearchBar from './SearchBar'

const ExpenseTable = ({children,searchTerm,setSearchTerm,sortBy, setSortBy})=> {
  return (
    <>
    <div className='table-section'> 
        <h3>ExpenseTable</h3>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="sort">Sort by: </label>
          <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
           <option value="none">None</option>
           <option value="category">Category</option>
           <option value="name">Name</option>
          </select>
        </div>
        
        <table>
            <thead>
              <tr>  
                <th>name</th>
                <th>description</th>
                <th>category</th>
                <th>expense</th>
                <th>dates</th>
                <th>clear</th>
              </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ExpenseTable