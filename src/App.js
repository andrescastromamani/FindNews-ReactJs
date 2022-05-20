import { Fragment } from "react";
import { Form } from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header
        title="Hello World"
      />
      <div className="container">
        <Form
          title="Form"
        />
      </div>
    </Fragment>
  );
}

export default App;
