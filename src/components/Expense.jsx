import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import FontAwesomeIcon from "./FontAwesomeIcon";

const Expense = ({ expense, deleteExpense }) => (
  <li className="gastos">
    <div className="d-flex justify-content-between">
      <p>{expense.name}</p>
      <div className="d-flex justify-content-center align-items-center">
        <p>
          <span className="gasto mr-2">$ {expense.amount}</span>
        </p>
        <Button
          className="btn btn-danger"
          onClick={() => deleteExpense(expense.id, expense.amount)}
        >
          <FontAwesomeIcon className="ml-1 mr-1" size="lg" icon="trash" />
        </Button>
      </div>
    </div>
  </li>
);

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
  deleteExpense: PropTypes.array.isRequired,
};

export default Expense;
