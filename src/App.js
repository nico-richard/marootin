function App() {
  return <Section1 />;
}

export default App;

function Section1() {
  return (
    <div className="section1">
      <div className="title" />
      <div className="container1">
        <div className="description">
          [ma·routine] visage en stick rechargeable.
        </div>
        <div className="slogan" />
        <Button name={"test"} text={"Tester nos produits"} />
      </div>
    </div>
  );
}

function Button({ name, text }) {
  return (
    <div>
      <button className={`${name}-button`}>{text}</button>
    </div>
  );
}
