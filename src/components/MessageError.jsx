import React from "react";
import PropTypes from "prop-types";

const MessageError = ({ message }) => (
  <p className="alert alert-danger error">Ocurrio un error; {message}</p>
);

MessageError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageError;
