export interface Template {
  link: string;
  year: string;
  client: string;
  type: string;
};
const one: Template = {
   link: "/work/case-study",
  year: "2022",
  client: "voxtrio",
  type: "Brand identity, Digital design system",
};

const two: Template = {
   link: "/work/case-study",
  year: "2022",
  client: "Lumina Innovations",
  type: "Brand identity, Website",
};
const three: Template = {
   link: "/work/case-study",
  year: "2022",
  client: "Stellar Tech",
  type: "Brand identity, Digital product",
};

const four: Template = {
   link: "/work/case-study",
  year: "2017-2022",
  client: "VentureLink",
  type: "Brand identity, Website, Print",
};
const five: Template = {
   link: "/work/case-study",
  year: "2021",
  client: "TechWave",
  type: "Website, App",
};

const six: Template = {
   link: "/work/case-study",
  year: "2020-2021",
  client: "ArtNova",
  type: "Digital design system, Brand identity",
};

const seven: Template = {
   link: "/work/case-study",
  year: "2020",
  client: "InnovaCorp",
  type: "Brand identity, Packaging",
};

const eight: Template = {
   link: "/work/case-study",
  year: "2019",
  client: "EcoSolutions",
  type: "Website, Print",
};

const nine: Template = {
   link: "/work/case-study",
  year: "2018-2020",
  client: "SwiftTech",
  type: "Brand identity, Website, App",
};
const ten: Template = {
  year: "2019",
  client: "PixelCraft",
  type: "Brand identity, Website",
};

const eleven: Template = {
  year: "2020-2021",
  client: "EcoGlobe",
  type: "Brand identity, App",
};

const twelve: Template = {
  year: "2018",
  client: "WaveTech",
  type: "Digital design system, Website",
};

const thirteen: Template = {
  year: "2021",
  client: "SpaceInnovate",
  type: "Website, Print",
};

const fourteen: Template = {
  year: "2019-2022",
  client: "FutureScape",
  type: "Brand identity, Website, Digital product",
};

const fifteen: Template = {
  year: "2016",
  client: "TimeWarp",
  type: "Brand identity",
};

export const byclient = {
  one,
  two,
   three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen

};
export const moreprojects = Object.values(byclient);
