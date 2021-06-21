import React, { Fragment } from "react";
import { checkBudget } from "../helpers";
import PropTypes from "prop-types";

const ControlBudget = ({ currentBudget, residuary }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto: <strong> {currentBudget}</strong>
      </div>
      <div className={checkBudget(currentBudget, residuary)}>
        Restante: <strong>{residuary}</strong>
      </div>
    </Fragment>
  );
};

ControlBudget.propTypes = {
  currentBudget: PropTypes.number.isRequired,
  residuary: PropTypes.number.isRequired,
};

export default ControlBudget;
