import React, { Fragment, useState } from "react";
import { Form as Formulario, Button } from "reactstrap";
import MessageError from "./MessageError";
import PropTypes from "prop-types";

const Form = ({ setCurrentBudget, setResiduary, setShowQuestion }) => {
  const [budget, setBudget] = useState(0);
  const [error, setError] = useState(false);

  const defineBudget = (e) => {
    setBudget(parseInt(e.target.value));
  };

  const addBudget = (e) => {
    e.preventDefault();

    if (budget < 1 || isNaN(budget)) {
      setError(true);
      return;
    }
    setError(false);
    setCurrentBudget(budget);
    setResiduary(budget);
    setShowQuestion(false);
  };

  return (
    <Fragment>
      <div>
        <h2 className="w-100 mb-4">Colocar Presupuesto</h2>

        {error ? (
          <MessageError message={"El presupuesto es Incorrecto"} />
        ) : null}

        <Formulario onSubmit={addBudget}>
          <input
            type="number"
            className="w-100 mb-4"
            placeholder="Coloque su presupuesto"
            onChange={defineBudget}
          />

          <Button
            type="submit"
            color="primary"
            className="w-100 button-primary"
          >
            Definir Presupuesto
          </Button>
        </Formulario>
      </div>
    </Fragment>
  );
};

Form.propTypes = {
  setCurrentBudget: PropTypes.func.isRequired,
  setResiduary: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};

export default Form;
