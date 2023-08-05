import eznaza from "../images/banners/ezn-aza.webp";
import avaiehesgh from "../images/relegious/avaieh-esgh.jpeg";
import kartoonak from "../images/banners/kartoonak.webp";
import majarajooiie from "../images/banners/majara-jooiie.webp";
import sobhanehketab from "../images/banners/sobhaneh-ketab.webp";
import modirankanal from "../images/banners/modiran-kanal.webp";
import filmvaserial from "../images/categories/film-va-serial.png";
interface Offer {
  id: string;
  showAll: string;
  banner?: {
    image: string;
    alt: string;
  };
  data: {
    id: number;
    image: string;
    alt: string;
    title: string;
  }[];
}

export const offers: Offer[] = [
  {
    id: "مذهبی",
    showAll: "#",
    banner: {
      image: eznaza,
      alt: "A small banner",
    },
    data: [
      {
        id: 1,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 2,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 3,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 4,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 5,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 6,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 7,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 8,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 9,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 10,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
    ],
  },
  {
    id: "پرفروش هفته",
    showAll: "#",
    banner: {
      image: kartoonak,
      alt: "A small banner",
    },
    data: [
      {
        id: 1,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 2,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 3,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 4,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 5,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 6,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 7,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 8,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 9,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 10,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
    ],
  },
  {
    id: "سبک زندگی",
    showAll: "#",
    banner: {
      image: majarajooiie,
      alt: "A small banner",
    },
    data: [
      {
        id: 1,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 2,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 3,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 4,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 5,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 6,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 7,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 8,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 9,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 10,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
    ],
  },
  {
    id: "اخبار",
    showAll: "#",
    banner: {
      image: sobhanehketab,
      alt: "A small banner",
    },
    data: [
      {
        id: 1,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 2,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 3,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 4,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 5,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 6,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 7,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 8,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 9,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 10,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
    ],
  },
  {
    id: "تبلیغات",
    showAll: "#",
    banner: {
      image: modirankanal,
      alt: "A small banner",
    },
    data: [
      {
        id: 1,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 2,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 3,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 4,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 5,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 6,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 7,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 8,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 9,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 10,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
    ],
  },
  {
    id: "سروش پلاس",
    showAll: "#",
    data: [
      {
        id: 1,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 2,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 3,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 4,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 5,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 6,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 7,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 8,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 9,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: "آوای عشق",
      },
      {
        id: 10,
        image: avaiehesgh,
        alt: "Avayeh Eshgh",
        title: " آوای آرام عشق",
      },
    ],
  },
];

export const categories = [
  {
    id: "1",
    image: filmvaserial,
    title: "فیلم و سریال",
    alt: "Movies and Series",
  },
  {
    id: "2",
    image: filmvaserial,
    title: " سریال",
    alt: "Movies and Series",
  },
  {
    id: "3",
    image: filmvaserial,
    title: "فیلم و سریال",
    alt: "Movies and Series",
  },
  {
    id: "4",
    image: filmvaserial,
    title: "فیلم و سریال",
    alt: "Movies and Series",
  },
  {
    id: "5",
    image: filmvaserial,
    title: "فیلم و سریال",
    alt: "Movies and Series",
  },
  {
    id: "6",
    image: filmvaserial,
    title: "فیلم و سریال",
    alt: "Movies and Series",
  },
  {
    id: "7",
    image: filmvaserial,
    title: " سریال",
    alt: "Movies and Series",
  },
  {
    id: "8",
    image: filmvaserial,
    title: "فیلم و سریال",
    alt: "Movies and Series",
  },
];

export const best = [
  {
    id: "1",
    image: avaiehesgh,
    imageAlt: "offer image",
    href: "#",
    title: "آوای عشق",
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
  },
  {
    id: "2",
    image: avaiehesgh,
    imageAlt: "offer image",
    href: "#",
    title: "آوای عشق",
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
  },
  {
    id: "3",
    image: avaiehesgh,
    imageAlt: "offer image",
    href: "#",
    title: "آوای عشق",
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
  },
  {
    id: "4",
    image: avaiehesgh,
    imageAlt: "offer image",
    href: "#",
    title: "آوای عشق",
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
  },
  {
    id: "5",
    image: avaiehesgh,
    imageAlt: "offer image",
    href: "#",
    title: "آوای عشق",
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
  },
  {
    id: "6",
    image: avaiehesgh,
    imageAlt: "offer image",
    href: "#",
    title: "آوای عشق",
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
  },
];
