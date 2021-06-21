import React, { useState } from "react";
import { Form, Label, Button } from "reactstrap";
import MessageError from "./MessageError";
import shortid from "shortid";
import PropTypes from "prop-types";

const FormBudget = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const [error, setError] = useState(false);
  const [errorAmount, setErrorAmount] = useState(false);

  const addSpending = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError(true);
      return;
    }
    if (amount < 1 || isNaN(amount)) {
      setError(false);
      setErrorAmount(true);
      return;
    }
    setErrorAmount(false);

    const spending = {
      name,
      amount,
      id: shortid.generate(),
    };

    addExpense(spending);

    setName("");
    setAmount(0);
  };

  return (
    <>
      <Form onSubmit={addSpending}>
        <h2 className="mb-3">Agregar gastos aqui</h2>

        {error ? (
          <MessageError message="Ambos campos son obligatorios" />
        ) : null}

        {errorAmount ? <MessageError message="Presupuesto Incorrecto" /> : null}

        <div className="campo">
          <Label>Nombre del Gasto</Label>

          <input
            type="text"
            className="w-100 mb-2"
            placeholder="Ej. Transporte"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="campo">
          <Label>Cantidad del Gasto</Label>

          <input
            type="number"
            className="w-100 mb-2"
            placeholder="Ej. 300"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>

        <Button type="submit" color="primary" className="w-100 button-primary">
          Agregar Gasto
        </Button>
      </Form>
    </>
  );
};

FormBudget.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default FormBudget;
