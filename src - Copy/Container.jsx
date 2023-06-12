import App from "./components/App";
import Modal from "./components/Modal";
import "./container.scss";
import "./components/button.scss";
import "./modal.scss";
import { useState } from "react";

function Container() {
  const [store, setStore] = useState({
    showModal: false,
  });
  return (
    <>
      <App setStore={setStore} />
      <Modal store={store} />
    </>
  );
}

export default Container;
