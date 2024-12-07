import ContactForm from "./Form";

const App = () => {
  console.log("Start");
  setTimeout(() => console.log("Timeout"), 0);
  setImmediate(() => console.log("Immediate"));
  console.log("End");

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h1>Contact Form</h1>
      <ContactForm />
    </div>
  );
};

export default App;
