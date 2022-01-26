import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2021");

  console.log(expenses);

  const onSelectedYearFilter = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={onSelectedYearFilter}
        />

        {filteredExpenses.length === 0 && <p>No Expense Found</p>}

        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}
