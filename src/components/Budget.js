import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const {currency} = useContext(AppContext);
    const updateBudget = (newBudget) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if(newBudget < totalExpenses) {
            alert("Budget can't be lower than spendings !");
        }
        else if(newBudget>20000){
            alert("Budget cannot exceed 20000");
        }
        else {
            dispatch({type:'SET_BUDGET', payload: newBudget});
        }

    };
    return (
        <div className='alert alert-secondary'>
            Budget:{currency}
            <input type="number" 
            max="20000" step="10" value={budget}
            onChange={(e)=>{updateBudget(e.target.value)}}></input>
        </div>
    )
};
export default Budget;
