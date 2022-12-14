import React from 'react';
import BudgetOverview from './components/BudgetOverview';

const homeBudgets = [
  {
    budgeted : 500,
    spent : 200,
    category : "Food",
  },
  
  {
    budgeted : 1000,
    spent : 1500,
    category : "Utilities",
  }

]


const App = () => {
  return(
    <div className='App'>
      <header className='App-header'>  Budget table using Typescript & React </header>
      <BudgetOverview budgets = {homeBudgets} />
    </div>
  )
}
