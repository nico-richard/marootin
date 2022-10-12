import pratique from "./images/concept-item/pratique.png";
import rechargeable from "./images/concept-item/rechargeable.png";
import simple from "./images/concept-item/simple.png";
import coCreation from "./images/company/co-creation.png";
import ecoEmballage from "./images/company/eco-emballage.png";
import formuleVegan from "./images/company/formule-vegan.png";
import internDevelopment from "./images/company/intern-development.png";

const titleBlock1 = "1. Nettoyer";
const introBlock1 = `Le stick 2en1 nettoyant – démaquillant se transforme en lait au 
    contact de l’eau, éliminant les impuretés et le maquillage en douceur. 
    Son pH est adapté à votre peau afin de respecter son équilibre.`;
const listBlock1 = [
  `Le decyl glucoside d’origine végétale nettoie les peaux les plus sensibles.`,
  `Les algues rouges luttent contre les agressions de la pollution.`,
  `L’extrait de pamplemousse rose riche en vitamine C antioxydant et tonifiant.`,
];
const colorBlock1 = "#d9f6fa";

const contentBlock1 = {
  title: titleBlock1,
  intro: introBlock1,
  list: listBlock1,
  color: colorBlock1,
};
// ---------------------------------------------------------------------------------
const titleBlock2 = "2. Nourir";
const introBlock2 = `La crème est un soin du quotidien. Sa texture pénètre sans 
laisser de fini collant. Elle nourrit, préserve l’élasticité pour une peau plus 
douce et repulpée. Riche en bêta-carotène pour un teint bonne mine et éclatant .`;
const listBlock2 = [
  `La Vitamine F maintient la barrière hydro-lipidique en bonne santé.`,
  `Le beurre de karité nourrit et préserve l’élasticité de la peau.`,
  `L’extrait de carotte et huile de noyau d’abricot ravivent l’éclat du teint.`,
];
const colorBlock2 = "#fdd2bb";

const contentBlock2 = {
  title: titleBlock2,
  intro: introBlock2,
  list: listBlock2,
  color: colorBlock2,
};
// ---------------------------------------------------------------------------------
const titleBlock3 = "3. Exfolier";
const introBlock3 = `Le masque peeling aux acides de fruits (A.H.A) exfolie en 
douceur les cellules mortes favorisant la régénération de la peau. Boosté par 
l’extrait de pamplemousse rose et l’argile rose pour un teint détoxifié, lisse et éclatant.`;
const listBlock3 = [
  `Les A.H.A (pêche, pomme et framboise) atténuent les irrégularités et uniformisent le teint.`,
  `L’argile rose purifie et redonne de l’éclat au teint.`,
  `L’extrait de pamplemousse rose riche en Vitamine C antioxydant et tonifiant.`,
];
const colorBlock3 = "#d7f6e7";

const contentBlock3 = {
  title: titleBlock3,
  intro: introBlock3,
  list: listBlock3,
  color: colorBlock3,
};
// ---------------------------------------------------------------------------------
const companyImage1 = formuleVegan;
const companyImage2 = internDevelopment;
const companyImage3 = ecoEmballage;
const companyImage4 = coCreation;

const companyText1 = `Formules véganes 100% d’origine naturelle, 
aux actifs innovants & sensoriels.`;
const companyText2 = `Développement et formulation en interne par 
Clémence notre co- fondatrice.`;
const companyText3 = `Emballages éco-responsables. Le concept de 
recharge limite l’emballage à usage unique.`;
const companyText4 = `Co-création des produits avec notre communauté.`;

const companyItem1 = { image: companyImage1, text: companyText1 };
const companyItem2 = { image: companyImage2, text: companyText2 };
const companyItem3 = { image: companyImage3, text: companyText3 };
const companyItem4 = { image: companyImage4, text: companyText4 };
// ---------------------------------------------------------------------------------
const conceptImage1 = simple;
const conceptImage2 = pratique;
const conceptImage3 = rechargeable;

const conceptText1 = "Tournez & appliquez le stick directement sur le visage";
const conceptText2 =
  "Dans la salle de bain ou votre sac. Emportez-le partout !";
const conceptText3 = "Produit terminé ? Gardez le stick et rechargez-le !";

const conceptItem1 = { image: conceptImage1, text: conceptText1 };
const conceptItem2 = { image: conceptImage2, text: conceptText2 };
const conceptItem3 = { image: conceptImage3, text: conceptText3 };
// ---------------------------------------------------------------------------------
const formTitle = "Participez à la co-conception de nos produits.";
const formParagraph1 = {
  header: `Testez notre routine complète :`,
  text: ` 50 personnes 
seront sélectionées chaque mois jusqu'au lancement de la marque.`,
};
const formParagraph2 = {
  header: `Conditions :`,
  text: ` Vous inscrire ➕ Être abonné à 
notre compte Instagram ou/et Facebook (mettre votre pseudo à la place du nom).`,
};
const formTerms = `En validant ce formulaire, vous autorisez Maroot'in à utiliser 
vos données personnelles pour vous tenir informer des nouveautés par email.`;

const formContent = {
  title: formTitle,
  paragraph1: formParagraph1,
  paragraph2: formParagraph2,
  terms: formTerms,
};

export {
  contentBlock1,
  contentBlock2,
  contentBlock3,
  companyItem1,
  companyItem2,
  companyItem3,
  companyItem4,
  formContent,
  conceptItem1,
  conceptItem2,
  conceptItem3,
};
