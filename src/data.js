import img1 from "./assets/webDesignBusiness.jpg";
import img2 from "./assets/webDesignCircle.png";
import img3 from "./assets/webDesignFood.jpg";
import img4 from "./assets/webDesignMovie.jpg";
import img5 from "./assets/webDesignProduct.jpg";
import img6 from "./assets/shoe.png";
import img7 from "./assets/bank.png";
import diamond from "./assets/diamondIcon.svg";
import Heart from "./assets/heartIcon.svg";
import profile from "./assets/profileIcon.svg";
import webIcon from "./assets/webAppIcon.svg";
import uk from "./assets/us.png";
import us from "./assets/uk.png";
import sg from "./assets/singapore.png";
import japan from "./assets/japan.png";
import korea from "./assets/korea.png";
import adrian from "./assets/adrian.png";
import lura from "./assets/lura.png";

export const Nav = [
  {
    tag: "#",
    name: "Home",
  },
  {
    tag: "#projects",
    name: "Projects",
  },
  {
    tag: "#services",
    name: "Services",
  },
  {
    tag: "#pricing",
    name: "Pricing",
  },
];

export const images = [
  {
    img: img1,
    alt: "webDesignBusiness",
    box: `0px 25px 50px 0px #433CD726`,
  },
  {
    img: img2,
    alt: "webDesignCircle",
    box: "0px 25px 50px 0px #072AC826",
  },
  {
    img: img3,
    alt: "webDesignFood",
    box: "0px 25px 50px 0px #F29F2A26",
  },
  {
    img: img4,
    alt: "webDesignMovie",
    box: "0px 25px 50px 0px #00000026",
  },
  {
    img: img5,
    alt: "webDesignProduct",
    box: "0px 25px 50px 0px #EB6A4226",
  },
  {
    img: img6,
    alt: "webDesignShoe",
    box: "0px 25px 50px 0px #FF6F7E26",
  },
  {
    img: img7,
    alt: "bank",
    box: "0px 25px 50px 0px #D7487326",
  },
];

export const images2 = [
  {
    img: img7,
    alt: "webDesignBank",
  },

  { img: img6, alt: "webDesignShoe" },

  {
    img: img5,
    alt: "webDesignProduct",
  },

  {
    img: img4,
    alt: "webDesignmovie",
  },

  {
    img: img2,
    alt: "webDesigncircle",
  },

  {
    img: img6,
    alt: "webDesignbusiness",
  },
];

export const Services = [
  {
    icon: diamond,
    title: "Digital Design",
    subTitle:
      "Some latest designs to build an outstanding website and make User Experience (UX) more interactive.",
  },
  {
    icon: Heart,
    title: "Awesome Support",
    subTitle:
      "We do care about every clients and promise to make you satisfied with our final result based on the plan you chose.",
  },
  {
    icon: profile,
    title: "Profile Website",
    subTitle:
      "Everyone needs to show their presence online and that’s where we come in. We build aesthetic websites that match your desired profile.",
  },
  {
    icon: webIcon,
    title: "Dynamic Web Application",
    subTitle:
      "You don’t need to know code to start a business. We are here to help to start your venture with maximum support.",
  },
];

//customerfeedback
export const feedback = {
  title: "We Charge Fairly Based On Your Currency.",
  subtitle:
    "We support everyone around the world. We will always negotiate the price to make you as much affordable as you can.",
  country: [uk, us, sg, japan, korea],

  adrian: {
    img: adrian,
    text: "Hi Laura. How can I help you?",
    text2: "Don’t worry. We can make you affordable.",
    time: "Adrian , 12:30 PM",
    time2: "Adrian , 12:32 PM",
  },

  lura: {
    img: lura,
    text: "I can’t afford too much as I’m from Indonesia.",
    time: "Laura , 12:31 PM",
  },
};

// pricing card


export const PriceCard = [
 {
    plan: "Budget",
    price: "$749/proj",
    body: "Start your online success with the least budget available of all time.",
    benefit: [
      "Single Page with unlimited section.",
      "Color theme is provided if the client doesn’t know what to choose.",
      "Price is negotiable.",
      "Help & Support",
    ],
    nonBenefit :[

      "Priority 24/7 support",
      "Outstanding Design",
      "Dynamic Websites",
    ],
    color : 'bg-dull',
    bodyWidth : "16rem",
    height : '904px',
  },
  {
    plan: "Premium",
    price: "$999/proj",
    body: "Priority support and multi web pages  to maximize your business.",
    benefit: [
     "1-3 Pages with unlimited section.",
     "Color theme is provided if the client doesn’t know what to choose.",
     "Price is negotiable.",
     "Help & Support",
     "Priority support",
     "Outstanding Design",
     "Priority Maintainance",
     "Dynamic Pages"
    ],
    nonBenefit:[],
    color : "bg-primary",
    bodyWidth : "17rem"
  },
  {
    plan: "Enterprise",
    price: "$4499/proj",
    body: "Most suitable for creative entrepreneurs and innovative companies",
    benefit: [
     "All from Premium Plan",
     "15% Discount up to $250 for next projects or partner business.",
     "Dynamic Web Application",
     "Desposit Plan is provided",
     "Priority 24/7 support",
     "Accept in different currencies",
    ],
    bodyWidth : "19rem",
    color : "bg-white",
    nonBenefit:[],
  }
]