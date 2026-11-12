/* Central content for the salon. The salon name stays as the literal
   placeholder "[Salon name]" (and "[salonname]" inside the email and social
   handle) until the real name is filled in; prices, reviews and contact info
   are believable samples chosen during intake and should be swapped for the
   salon's real details before going live. */

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const assetPath = (path: string) => `${assetBasePath}${path}`;

export const brand = {
  name: "[Salon name]",
  legalName: "[Salon name] Hair & Nail Studio",
  tagline: "Hair and nail studio on South Congress",
  address: ["1204 South Congress Avenue", "Austin, TX 78704"],
  phone: "(512) 555 0138",
  phoneHref: "tel:+15125550138",
  email: "hello@[salonname].com",
  instagram: { label: "@[salonname]", href: "https://www.instagram.com/" },
  hours: [
    { day: "Tuesday", time: "9:00 to 7:00" },
    { day: "Wednesday", time: "9:00 to 7:00" },
    { day: "Thursday", time: "9:00 to 7:00" },
    { day: "Friday", time: "9:00 to 7:00" },
    { day: "Saturday", time: "9:00 to 5:00" },
    { day: "Sunday", time: "Closed" },
    { day: "Monday", time: "Closed" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "4.9", label: "Google rating" },
  { value: "237", label: "Reviews and counting" },
  { value: "9", label: "Years on South Congress" },
  { value: "12", label: "Stylists and nail artists" },
];

export const services = {
  hair: [
    { name: "Cut and style", price: "$65", duration: "60 min", note: "Shampoo, cut and a finish with styling tips." },
    { name: "Trim and refresh", price: "$52", duration: "45 min", note: "Dust the ends, keep the shape." },
    { name: "Blowout", price: "$48", duration: "45 min", note: "Round brush finish that lasts a few days." },
    { name: "Color retouch", price: "$118", duration: "120 min", note: "Roots matched and blended." },
    { name: "Balayage", price: "from $185", duration: "180 min", note: "Hand painted, mapped to your grow out." },
    { name: "Gloss and treatment", price: "$76", duration: "60 min", note: "Shine and bond repair in one visit." },
    { name: "Bridal styling", price: "from $135", duration: "90 min", note: "Trial included when booked as a package." },
  ],
  nails: [
    { name: "Gel manicure", price: "$42", duration: "50 min", note: "Thin sealed layers, over a dozen polish shades." },
    { name: "Classic manicure", price: "$34", duration: "40 min", note: "Shape, cuticle care and regular polish." },
    { name: "Gel pedicure", price: "$58", duration: "60 min", note: "Soak, callus care and gel color." },
    { name: "Structured manicure", price: "$54", duration: "65 min", note: "Builder gel for length and strength." },
    { name: "Nail art", price: "from $12 per nail", duration: "15 min", note: "Line work, chrome or minimal florals, added to any manicure." },
  ],
};

export const bookingServices = [
  "Free consultation",
  "Cut and style",
  "Trim and refresh",
  "Blowout",
  "Color retouch",
  "Balayage",
  "Gloss and treatment",
  "Bridal styling",
  "Gel manicure",
  "Classic manicure",
  "Gel pedicure",
  "Structured manicure",
  "Nail art",
];

export const timeSlots = [
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export const testimonials = [
  {
    quote:
      "Rosa mapped my balayage to my grow out, and eight weeks later it still looks deliberate. I stopped booking gloss appointments between visits, which tells you everything.",
    name: "Danielle Okafor",
    detail: "Balayage, cut and style",
    initials: "DO",
  },
  {
    quote:
      "Not one chip after three weeks of typing, dishes and the climbing gym. Amara seals the gel so thin I barely feel it on the nail.",
    name: "Priya Raghavan",
    detail: "Structured gel manicure",
    initials: "PR",
  },
  {
    quote:
      "My bridal trial took an hour and the updo held through dancing and a July porch. The written plan she sent made the morning feel settled.",
    name: "Marisol Delgado",
    detail: "Bridal styling",
    initials: "MD",
  },
];

export const faqs = [
  {
    q: "Is the consultation really free?",
    a: "Yes. New color and nail plans start with a 15 minute consultation at no charge. You get a written estimate before any service begins.",
  },
  {
    q: "What does balayage cost?",
    a: "Balayage starts at $185. The final price depends on length and density, and your stylist confirms it during the consultation before mixing anything.",
  },
  {
    q: "Can I reschedule or cancel my appointment?",
    a: "Up to 24 hours before your appointment, free of charge. Inside 24 hours we charge 50 percent of the service, because your stylist held the chair for you.",
  },
  {
    q: "Do you take same day appointments?",
    a: "Often. Blowouts and polish changes can usually fit the same day. Color needs more time, so book those ahead.",
  },
  {
    q: "Where do I park?",
    a: "There is a lot behind the studio off West Johanna Street, plus metered spots on South Congress Avenue. The front entrance is step free.",
  },
  {
    q: "Which products do you use?",
    a: "Color is bonded with Olaplex throughout, styling is Kevin Murphy, and nails use hypoallergenic gel brands. Bring your own products if you prefer, we will happily work with them.",
  },
  {
    q: "Do you do bridal parties?",
    a: "Yes, in studio or on site. Bridal trials are booked at least three weeks ahead and include a written style plan for the morning of.",
  },
  {
    q: "Do you cut kids hair?",
    a: "Cuts for ages 10 and up, seated in the main studio with the same care we give every guest.",
  },
];

export const galleryItems = [
  {
    src: assetPath("/images/gallery-color.png"),
    alt: "Close up of glossy lived in balayage with soft caramel tones",
    title: "Lived in balayage",
    tag: "Color",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    src: assetPath("/images/gallery-interior.png"),
    alt: "Arched brass mirror above a marble wash station with a forest green stool",
    title: "The brass corner",
    tag: "Studio",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    src: assetPath("/images/gallery-nails.png"),
    alt: "Gel manicure in warm nude terracotta resting on cream linen",
    title: "Warm nude gel",
    tag: "Nails",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    src: assetPath("/images/gallery-blowout.png"),
    alt: "Stylist giving a round brush blowout to a client with shoulder length hair",
    title: "Round brush finish",
    tag: "Styling",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    src: assetPath("/images/gallery-nailart.png"),
    alt: "Manicured nails in soft sage green with fine gold line art",
    title: "Sage and gold line art",
    tag: "Nails",
    span: "md:col-span-6",
    aspect: "aspect-[4/3]",
  },
  {
    src: assetPath("/images/gallery-bridal.png"),
    alt: "Back view of a low bridal updo with soft face framing pieces",
    title: "Bridal updo trial",
    tag: "Occasion",
    span: "md:col-span-6",
    aspect: "aspect-[3/4] md:aspect-[4/3]",
  },
];

export const team = [
  {
    name: "Rosa Whitfield",
    role: "Founder and color director",
    initials: "RW",
    note: "Maps every new color plan to the regrowth it has to live with.",
  },
  {
    name: "June Park",
    role: "Senior stylist",
    initials: "JP",
    note: "Precision cuts and the blowout regulars swear by.",
  },
  {
    name: "Amara Diallo",
    role: "Nail lead",
    initials: "AD",
    note: "Structured gel that survives typing, climbing and dishwater.",
  },
  {
    name: "Tessa Moreno",
    role: "Stylist and bridal lead",
    initials: "TM",
    note: "Updos planned around veils, porches and dance floors.",
  },
];
