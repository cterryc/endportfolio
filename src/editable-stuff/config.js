// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Daniel",
  middleName: "",
  lastName: "Martel",
  message: " Developer Full-Stack. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/cterryc",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/martelchavezdaniel",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/lterr1/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/daniel-martel-chavez-866481238/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/STerryS",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Acerca de mí",
  imageLink: require("../editable-stuff/terrydos.jpg"),
  imageSize: 375,
  message:
    "¡Hola! Soy Daniel Martel, un entusiasta desarrollador full-stack junior con un certificado en desarrollo web obtenido en 'Soy Henry', un destacado bootcamp de programación. Me formé en el 'Instituto Tecnológico IDAT', adquiriendo conocimientos sólidos en una amplia gama de tecnologías y metodologías de desarrollo. Me apasiona especialmente el ensamblaje de computadoras y comprendo la importancia de una base sólida en hardware para el desarrollo de software. Esto me permite tener una comprensión profunda de cómo interactúan los componentes de hardware y software para crear aplicaciones eficientes y robustas.",
  message2: "Aunque tuve un revés en mi carrera cuando mi negocio se vio afectado por la pandemia de COVID-19 en 2020, esta experiencia me enseñó la importancia de la resiliencia y la adaptabilidad en el campo tecnológico. Aprendí a superar obstáculos y a buscar nuevas oportunidades para crecer y mejorar mis habilidades.",
  // resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
  resume: ""
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Proyectos",
  gitHubUsername: "cterryc", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Contactame",
  message: "Hola soy Terry Martel desarrollador",
  // message:
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/terrydos.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/terrydos.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Habilidades",
  hardSkills: [
    { name: "Express", value: 90 },
    { name: "PosrgreSQL", value: 70 },
    { name: "Sequelize", value: 85 },
    { name: "Node.Js", value: 75 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 70 },
    { name: "Redux", value: 80 },
  ],
  softSkills: [
    { name: "Objetividad", value: 80 },
    { name: "Colaboración", value: 90 },
    { name: "Optimismo", value: 88 },
    { name: "Adaptabilidad", value: 85 },
    { name: "Resolución de problemas", value: 75 },
    { name: "Empatía", value: 90 },
    { name: "Organización", value: 70 },
    { name: "Creatividad", value: 65 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contactame",
  message:
  "¡Actualmente estoy buscando oportunidades como desarrollador full-stack de tiempo completo! Si conoce algún puesto disponible, si tiene alguna pregunta o si solo quiere saludar, no dude en enviarme un correo electrónico a",
  email: "danyel.martel@gmail.com",
};

const experiences = {
  show: true,
  heading: "Educación",
  data: [
    {
      role: 'Henry Bootcamp',// Here Add Company Name
      companylogo: require('../assets/img/logo-whiteTres.png'),
      date: 'Septiembre 2022 – Marzo 2023',
    },
    {
      role: 'Instituto Tecnologico IDAT',
      companylogo: require('../assets/img/idattres.png'),
      date: 'May 2016 – Junio 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
