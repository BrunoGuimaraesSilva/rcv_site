import React from "react";
import { Provider } from "react-redux";
import store from "./Form/store";
import ContatoForm from "./Form/ContatoForm";
import PropTypes from "prop-types";

const sendConsole = (data) => {
  console.log(data);
};

export default function Contato(props) {

  return (
    <React.Fragment>
      <Provider store={store}>
        <div style={{ padding: 15 }}>
          <ContatoForm onSubmit={sendConsole} />
        </div>
      </Provider>
    </React.Fragment>
  );
}

Contato.propTypes = {
  headersData: PropTypes.array,
};
