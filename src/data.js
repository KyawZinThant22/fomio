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
import king from "./assets/king.png"
import pig from "./assets/pig.png"
import rocket from "./assets/rocket.png"
import fb from "./assets/fbIcon.svg"
import ig from "./assets/instagramIcon.svg"
import mes from "./assets/messengerIcon.svg"
import fbI from "./assets/facebook.png"
import mail from "./assets/mail.png"
import phone from "./assets/phone.png"
import home from "./assets/home.png"

export const Nav = [
  {
    tag: "#",
    name: "Home",
  },
  {
    tag: "#project",
    name: "Projects",
  },
  {
    tag: "#service",
    name: "Services",
  },
  {
    tag: "#questions",
    name: "FAQ",
  },
];


export const MobileNav = [
  {
    tag: "#",
    name: "Home",
  },
  {
    tag: "#project",
    name: "Projects",
  },
  {
    tag: "#service",
    name: "Services",
  },
  {
    tag: "#questions",
    name: "FAQ",
  },
  {
    tag: "#contact",
    name : "Contact Us"
  },
  {
    tag : "About",
    name : 'About'
  }
];

export const socialIcon = [{img:fb},{img:ig},{img:mes}]

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
      "Everyone needs to show their presence online and that???s where we come in. We build aesthetic websites that match your desired profile.",
  },
  {
    icon: webIcon,
    title: "Dynamic Web Application",
    subTitle:
      "You don???t need to know code to start a business. We are here to help to start your venture with maximum support.",
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
    text2: "Don???t worry. We can make you affordable.",
    time: "Adrian , 12:30 PM",
    time2: "Adrian , 12:32 PM",
  },

  lura: {
    img: lura,
    text: "I can???t afford too much as I???m from Indonesia.",
    time: "Laura , 12:31 PM",
  },
};

// pricing card


export const PriceCard = [
 {
   img: pig,
    plan: "Budget",
    price: "749",
    body: "Start with minimum price.",
    benefit: [
      "Single Page with unlimited section.",
      "Color theme is provided if the client doesn???t know what to choose.",
      "Price is negotiable.",
      "Help & Support",
    ],
    color : 'bg-dull',
    height : '650px',
    borderColor : "border-nonWhite"
  },
  {
    img: king,
    plan: "Premium",
    price: "999",
    body: "Best value, Most popular",
    benefit: [
     "1-3 Pages with unlimited section.",
     "All features from Budget plan.",
     "Priority support & maintainance",
     "Outstanding Design",
     "Dynamic Pages"
    ],
    color : "bg-dark",
    height: '674px',
    textColor : "text-white",
    borderColor : "border-primary"

  },
  {
    img: rocket,
    plan: "Enterprise",
    price: "4499",
    body: "Potential starts here.",
    benefit: [
     "All features from Premium Plan",
     "15% Discount for future projects",
     "Dynamic Web Application",
     "Desposit Plan is provided",
      "Other additional values"
    ],
    color : "bg-primary",
    height: 'h-[645px]',
    borderColor : "border-white"

  }
]


export const QNA = [
  {
    question : "What makes Fomio different from others?",
    answer : "Fomio is a Web Development freelance service which charge based on the clients where they came from. Our service is always affordable when compared to your local service.",
    id : 1
  },

  {
    question : "Can I have refund if I change my mind? ",
    answer : "We do care about every clients. If you change your mind after 1 week when the final project is handed to you, we do not refund. But if you want to cancel the project while it???s being processed, you can. But you can???t do it again next time.",
    id: 2 
  },
  {
    question : "Does domain purchase include in the payment?",
    answer : "No, you have to pay for it. It will be additional charge to you.",
    id : 3 ,
  },
  {
    question : "How does the affiliate program work?",
    answer : "When you offer someone our service and as soon as we  finish their project, you will get 7% commission.",
    id : 4
  },
  {
    question : "What will happen if my website went something wrong?",
    answer : "You can always request help via contact.fomio@gmail.com and our team will consider your request very carefully. If the issue is caused by our needs, we will prioritize to fix as soon as possible. But we DO NOT provide services when someone has made changes to our code without our permission.",
    id:5
  }
]

export const ContactData = [
  {
    icon : phone,
    info : "09407788533 , 09784419896"
  },
  {
    icon : mail,
    info : "kyawthant035@gmail.com"
  },
  {
    icon : fbI,
    info : "Fomio",
    link : "https://www.facebook.com/Fomio26"
  },
  {
    icon : home,
    info : "102A x 62B Ta3/34"
  }
]