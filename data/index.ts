import testi from "../public/testi1.png";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a React AI Generative Web Application",
    description: "GENIFFY AI",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Turboax 5DE",
    des: "Start for free. Pay only when you file. No matter how you file, TurboTax backs your taxes for the full 7-year life of your tax return, guaranteed",
    img: "/Turbotax.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://turbotax.intuit.com/",
  },
  {
    id: 2,
    title: "Bendigo Bank",
    des: "Discover Bendigo Bank's large range of personal & business products. Credit cards, home loans, business loans, insurance, superannuation, bank accounts ...",
    img: "/bendigo.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.bendigoadelaide.com.au/",
  },
  {
    id: 3,
    title: "Feelo",
    des: "Feelo brings you the best food, wellness, and travel deals near you — all in one place. Explore your city's hottest offers in seconds while saving more ...",
    img: "/Feelo.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://feelo.ai/",
  },
  {
    id: 4,
    title: "Deqode Site",
    des: "Recreated the Deqode official website using Next.js, Tailwind CSS, and TypeScript.",
    img: "/Deqode.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://deqode.com/",
  },
];

export const testimonials = [
  {
    quote:
      "Bhuvnesh brought a rare mix of energy and precision to our project. His quick turnarounds and solid communication made collaboration easy and effective.",
    name: "Ujjval Karma",
    title: "Owner of SMM Agency/Freelancer",
    image: "/testi2.png",
  },
  {
    quote:
      "Working with Bhuvnesh was seamless. His technical skill and creative ideas helped push our freelance project to the next level.",
    name: "Mudit Tiwari",
    title: "Worked together in Freelance/SDE-3",
    image: "/testi1.png",
  },
  {
    quote:
      "Bhuvnesh consistently delivered high-quality work on time. His ability to handle pressure and keep a positive attitude was inspiring.",
    name: "Rajat Malviya",
    title: "Senior in My First company",
    image: "/testi3.png",
  },
  {
    quote:
      "Bhuvnesh’s commitment to excellence is unmatched. He delivered Our Website on time and Perfect Design. Highly recommended!",
    name: "Christophe Gerard",
    title: "French Yoga Tutor/Nutritionist",
    image: "/testi1.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Junior Frontend Developer",
    desc: "Assisted in the development of a Ssocial Media Web App using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Mobile App Developer",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    desc: "Developed the Frontend of a web application using Next.js and Tailwind CSS.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Solutions Engineer - Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/bhuvnesh-gupta",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/Bhuvnesh7135",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "www.linkedin.com/in/bhuvnesh1",
  },
];
