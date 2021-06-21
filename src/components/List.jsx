import React from "react";
import Expense from "./Expense";
import PropTypes from "prop-types";

const List = ({ expenses, deleteExpense }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
};

List.propTypes = {
  expenses: PropTypes.array.isRequired,
  deleteExpense: PropTypes.array.isRequired,
};

export default List;
