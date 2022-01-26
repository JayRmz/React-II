import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2022");

  const onSelectedYearFilter = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={onSelectedYearFilter}
        />
        <ExpenseItem
          title={expenses[0].title}
          date={expenses[0].date}
          amount={expenses[0].amount}
        />
        <ExpenseItem
          title={expenses[1].title}
          date={expenses[1].date}
          amount={expenses[1].amount}
        />
        <ExpenseItem
          title={expenses[2].title}
          date={expenses[2].date}
          amount={expenses[2].amount}
        />
        <ExpenseItem
          title={expenses[3].title}
          date={expenses[3].date}
          amount={expenses[3].amount}
        />
      </Card>
    </div>
  );
}
