import italyImg from "../assets/images/destinations/italy.webp";
import maldivesImg from "../assets/images/destinations/maldives.webp";
import franceImg from "../assets/images/destinations/france.webp";
import indiaImg from "../assets/images/destinations/india.webp";
import romanImg from "../assets/images/destinations/roman.webp";
import londonImg from "../assets/images/destinations/london.webp";
import parisImg from "../assets/images/destinations/paris.webp";

const italy = { name: "Italy", slug: "italy", image: italyImg };
const maldives = { name: "Maldives", slug: "maldives", image: maldivesImg };
const france = { name: "France", slug: "france", image: franceImg };
const india = { name: "India", slug: "india", image: indiaImg };
const roman = { name: "Roman", slug: "roman", image: romanImg };
const london = { name: "London", slug: "london", image: londonImg };
const paris = { name: "Paris", slug: "paris", image: parisImg };

// The carousel is a row of columns, like the template:
// "pair" = two small cards stacked, "tall" = one tall card.
export const destinationColumns = [
  { type: "pair", items: [italy, maldives] },
  { type: "tall", items: [france] },
  { type: "pair", items: [india, roman] },
  { type: "tall", items: [london] },
  { type: "pair", items: [paris, italy] },
  { type: "tall", items: [maldives] },
  { type: "pair", items: [france, india] },
];