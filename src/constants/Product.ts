const products = [
  {
    idx: 0,
    thumbnail: "/Images/feat-1.jpg",
    title: "Microsoft 365",
    heading: "Empower Your Business with Microsoft 365",
    description:
      "Microsoft 365 suite provides a robust set of tools and services that can improve productivity, collaboration, and security.",
    hasList: true,
    list: [
      "Productivity tools including Word, Excel, PowerPoint and Outlook.",
      "Online meetings, cloud storage, and personalized email.",
      "Optimized for mobile devices, smartphones, and tablets.",
    ],
    buttonContent: "View Plans",
  },
  {
    idx: 1,
    thumbnail: "/Images/feat-2.jpg",
    title: "WordPress Hosting",
    heading: "Built for speed  and security.",
    description:
      "Get the most from your WordPress site with hosting designed to perform. From automated updates and backups to industry-leading load times, this is WordPress how it was meant to be.",
    buttonContent: "See Plans",
  },
  {
    idx: 2,
    thumbnail: "/Images/feat-3.jpg",
    title: "GoDaddy Pro Program",
    heading: "Free tools for designers and developers.",
    description:
      "Save hours with bulk WordPress updates and automated backups, manage multiple clients from a single dashboard, get exclusive members-only discounts and more — all for free.",
    buttonContent: "Learn More",
    showPlay: true,
  },
  {
    idx: 3,
    thumbnail: "/Images/feat-4.jpg",
    title: "GoDaddy Reseller Program",
    heading: "Start your business with our products.",
    description:
      "Our Reseller Program lets you open your own online business in a matter of hours. You choose which GoDaddy products you want to sell — and for how much — and we provide the rest, from the web store to payment processing.",
    buttonContent: "Choose Your Plan",
  },
];

export default products;
export type ProductType = (typeof products)[number];
