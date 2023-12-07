export const MenuItems = [
  [
    {
      title: "Domain names",
      list: [
        "Domain Name Search",
        "Transfer Domain Names",
        "Privacy & Protection for Domains",
        "WHOIS",
        "Auctions for Domain Names",
        "Appraise Domain Name Value",
        "Investing in Domain Names",
      ],
    },
  ],
  [
    {
      title: "Hosting",
      list: [
        "Web Hosting",
        "GoDaddy Website Builder",
        "GoDaddy Online Store Builder",
        "Tools for Web Professionals",
      ],
      extra: "All Hosting Options",
    },
    {
      title: "WordPress Solutions",
      list: ["WordPress Hosting", "WordPress eCommerce Hosting"],
    },
    {
      title: "Servers",
      list: [
        "VPS Hosting",
        "VPS - Fully Managed",
        "Dedicated Servers",
        "Dedicated Server - Fully Managed",
      ],
    },
  ],
  [
    {
      title: "SSL Certificates",
      list: [
        "DV SSL Certificate",
        "EV SSL Certificate",
        "SAN SSL Certificate",
        "Wildcard SSL Certificate",
        "Managed SSL Certificate",
      ],
      extra: "All SSL Certificate Options",
    },
    {
      title: "Web Security",
      list: ["Backups", "Complete Website Security"],
      extra: "All Web Security Options",
    },
  ],
  [
    {
      title: "Email & marketing tools",
      list: [
        "Email & Microsoft 365",
        "Content & Photo Creator",
        "Free Logo Maker",
        "Digital Marketing Suite",
      ],
    },
  ],
];

export const MenuItemsImage = [
  {
    thumbnail: "/Images/domain-nav.jpg",
    title: "Transfer Your Domains",
    isItem: true,
  },
  {
    thumbnail: "",
    title: "",
    isItem: false,
  },
  {
    thumbnail: "/Images/security-nav.jpg",
    title: "Get help selecting the right type of SSL Certificate",
    isItem: true,
  },
  {
    thumbnail: "/Images/marketing-nav.jpg",
    title: "Learn to Grow Your Business",
    isItem: true,
  },
];

export type MenuItemsType = (typeof MenuItems)[number];
export type MenuItemsImageType = (typeof MenuItemsImage)[number];
