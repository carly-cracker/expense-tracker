import React from 'react'
import NewExpense from './NewExpense'
import { expenses } from './expenses'
import SearchBar from './SearchBar'

const ExpenseTable = ({children,searchTerm,setSearchTerm})=> {
  return (
    <>
    <div className='table-section'> 
        <h3>ExpenseTable</h3>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <table>
            <thead>
              <tr>  
                <th>name</th>
                <th>description</th>
                <th>category</th>
                <th>expense</th>
                <th>dates</th>
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