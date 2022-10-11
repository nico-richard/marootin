import { contentBlock1, contentBlock2, contentBlock3 } from "./content.js";

function App() {
  return (
    <div className="app">
      <Section1 />
      <Section2 title={"[ma·routine] visage essentielle"} />
      <Section3 title={"Le concept"} />
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
      <div className="list-content" key={index}>
        <span className="bolt-icon">{"⚡️"}</span>
        <div className="list-text">{element}</div>
      </div>
    );
  });
  return <div className="block-list">{renderedList}</div>;
}

function Section3({ title }) {
  return (
    <div className="section3">
      <div className="section2-title">{title}</div>
      <ConceptItem
        text={"Tournez & appliquez le stick directement sur le visage"}
        image={"simple"}
      />
      <ConceptItem
        text={"Dans la salle de bain ou votre sac. Emportez-le partout !"}
        image={"pratique"}
      />
      <ConceptItem
        text={"Produit terminé ? Gardez le stick et rechargez-le !"}
        image={"rechargeable"}
      />
    </div>
  );
}

function ConceptItem({ text, image }) {
  return (
    <div className="concept-item">
      <div
        style={{
          backgroundImage: `url("http://localhost:3000/images/${image}.png")`,
          width: "150px",
          height: "150px",
        }}
        className="rotate-item"
      ></div>
      <div className="legend-item">{text}</div>
    </div>
  );
}
