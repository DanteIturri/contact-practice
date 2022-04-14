import logo from "./logo.svg";
import "./App.css";
import ComponetA from "./components/componetA";
import { Contact } from "./models/contact.class";

function App() {
  const contact = new Contact("Juan", "Perez", "juanperez@email.com", true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponetA contact={contact} />
      </header>
    </div>
  );
}

export default App;
