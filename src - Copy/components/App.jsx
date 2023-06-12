const modals = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const App = ({ store, setStore }) => {
  return (
    <div id="app">
      <h1>Modal</h1>
      <div className="container">
        {modals.map((modal, index) => {
          return (
            <button
              key={`modal-${index}`}
              onClick={() => {
                alert(`button with id of ${modal.id} clicked`);
                setStore({ showModal: true });
              }}
            >
              Modal {modal.id}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
