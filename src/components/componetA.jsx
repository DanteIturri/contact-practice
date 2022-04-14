import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import ComponetB from "./componetB";

const ComponetA = ({ contact }) => {
  return (
    <div>
      <h1>Nombre: {contact.name}</h1>
      <h2>Apellido: {contact.lastname}</h2>
      <h3>Email: {contact.email}</h3>
      <ComponetB stateConexion={true} />
    </div>
  );
};

ComponetA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponetA;
