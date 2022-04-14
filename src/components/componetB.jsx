import React, { useState } from "react";
import PropTypes from "prop-types";

const ComponetB = ({ stateConexion }) => {
  const [conected, setConectedState] = useState(stateConexion);
  return (
    <div>
      <h3>
        {" "}
        {conected === false
          ? "contacto no disponible "
          : "contacto disponible"}{" "}
      </h3>
      <button onClick={() => setConectedState(!conected)}>
        {conected === false ? "conectado" : "Desconectado"}
      </button>
    </div>
  );
};

ComponetB.propTypes = {
  stateConexion: PropTypes.bool,
};

export default ComponetB;
