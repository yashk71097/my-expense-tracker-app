import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";
import ExpenseFilter from "./ExpenseFilter";

const DisplayExpenses = (props) => {
    const [filteredYear, setfilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            {filteredExpenses.length === 0 ? (
                <h3>No Expenses Found...</h3>
            ) : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            )}

            {/* <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
            ></ExpenseItem> */}
        </div>
    );
};

export default DisplayExpenses;
