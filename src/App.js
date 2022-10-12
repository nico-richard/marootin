import { useState, useEffect } from "react";

import {
  contentBlock1,
  contentBlock2,
  contentBlock3,
  companyItem1,
  companyItem2,
  companyItem3,
  companyItem4,
  formContent,
} from "./content.js";

function App() {
  return (
    <div className="app">
      <Section1 />
      <Section2 title={"[ma·routine] visage essentielle"} />
      <Section3 title={"Le concept"} />
      <Section4 />
      <Socials />
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
        <Button name={"test1"} text={"Tester nos produits"} />
      </div>
    </div>
  );
}

function Button({ name, text }) {
  return (
    <a className={`${name}-button`} href="#form">
      {text}
    </a>
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
      <div className="section3-title">{title}</div>
      <div className="concept-container">
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
      <div className="button-container">
        <Button name={"test2"} text={"Tester nos produits"} />
      </div>
      <div className="section35-title">{"Maroot’in c’est…"}</div>
      <div className="company-item-container">
        <CompanyItem item={companyItem1} />
        <CompanyItem item={companyItem2} />
        <CompanyItem item={companyItem3} />
        <CompanyItem item={companyItem4} />
      </div>
    </div>
  );
}

function ConceptItem({ text, image }) {
  const [angle, setAngle] = useState(0);

  function setTheAngle() {
    if (window.scrollY > 800 && window.scrollY < 1800) {
      setAngle(window.scrollY / 3);
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", setTheAngle);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", setTheAngle);
    };
  });

  return (
    <div className="concept-item">
      <div
        style={{
          backgroundImage: `url("../public/images/concept-item/${image}.png")`,
          backgroundSize: "contain",
          width: "220px",
          height: "220px",
          transform: `rotate(${angle}deg)`,
        }}
        className="rotate-item"
      ></div>
      <div className="legend-item">{text}</div>
    </div>
  );
}

function CompanyItem({ item }) {
  return (
    <div className="company-item">
      <div
        className="company-image"
        style={{
          backgroundImage: `url("../public/images/company/${item.image}.png")`,
          backgroundSize: "contain",
          width: "180px",
          height: "180px",
        }}
      ></div>
      <div className="image-description">{item.text}</div>
    </div>
  );
}

function Section4() {
  return (
    <div className="section4" id="form">
      <Form content={formContent} />
    </div>
  );
}

function Form({ content }) {
  return (
    <div className="form-container">
      <div className="form-title">{content.title}</div>
      <div className="paragraph1">
        <b style={{ fontWeight: "700" }}>{content.paragraph1.header}</b>
        {content.paragraph1.text}
      </div>
      <div className="paragraph2">
        <b style={{ fontWeight: "700" }}>{content.paragraph2.header}</b>
        {content.paragraph2.text}
      </div>
      <form className="test-product-form" method="post">
        <fieldset>
          <input type="text" className="input-name" placeholder="Nom" />
        </fieldset>
        <fieldset>
          <input type="text" className="input-email" placeholder="E-mail" />
        </fieldset>
        <fieldset>
          <input type="submit" className="submit" value="VALIDER" />
        </fieldset>
      </form>
      <div className="form-terms">{content.terms}</div>
      <div className="follow-us-title">
        {"Suivez nos aventures sur les réseaux sociaux"}
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="social-container">
      <a
        href="https://www.instagram.com/maroot_in/"
        title="Suivez nous sur Instagram"
        className="instagram"
      >
        <></>
      </a>
      <a
        href="https://www.facebook.com/maroutinecosmetique"
        title="Suivez nous sur Facebook"
        className="facebook"
      >
        <></>
      </a>
      <a
        href="https://www.linkedin.com/company/maroot-in"
        title="Suivez nous sur LinkedIn"
        className="linkedin"
      >
        <></>
      </a>
    </div>
  );
}
