import { contentBlock1, contentBlock2, contentBlock3 } from "./content.js";

function App() {
  return (
    <div className="app">
      <Section1 />
      <Section2 title={"[ma·routine] visage essentielle"} />
    </div>
  );
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

function Section2({ title }) {
  return (
    <div className="section2">
      <div className="section2-title">{title}</div>
      <div className="block-container">
        <Block id={1} content={contentBlock1} />
        <Block id={2} content={contentBlock2} />
        <Block id={3} content={contentBlock3} />
      </div>
    </div>
  );
}

function Block({ content, id }) {
  return (
    <div className={`block${id}`}>
      <div className="block-title">{content.title}</div>
      <div className="block-intro">{content.intro}</div>
      <List content={content.list} />
    </div>
  );
}

function List({ content }) {
  let renderedList = content.map((element, index) => {
    return (
      <div className="list-content">
        <span>{"⚡️"}</span>
        <div className="list-text" key={index}>
          {element}
        </div>
      </div>
    );
  });
  return <div className="block-list">{renderedList}</div>;
}
