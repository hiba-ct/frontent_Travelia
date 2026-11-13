import t1 from "../assets/images/testimonials/t-1.jpg";
import t3 from "../assets/images/testimonials/t-3.jpg";

// To use a real photo: put it in assets/images/testimonials/ and change the import above.
// The second name, role and quote are sample text. Replace them with real ones.
// To add a customer: import another photo and copy one { ... } block below.
export const testimonials = [
  {
    id: 1,
    name: "Cameron William",
    role: "Marketing Director, Oliver's LAB llc.",
    image: t1,
    quote:
      "This tour was everything I hoped for and more! The guides were knowledgeable, the itinerary was well-organized, and the experiences were unforgettable. It felt like a dream come true. Highly recommend to anyone looking for an adventure!",
  },
  {
    id: 2,
    name: "Sophia Martin",
    role: "Product Designer, Studio North",
    image: t3,
    quote:
      "I travelled alone for the first time and felt safe and looked after the whole way. The booking was simple, the prices were fair, and the views were even better than the photos. Thank you for an amazing week!",
  },
];