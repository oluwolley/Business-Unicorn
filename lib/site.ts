export const siteConfig = {
  name: "The Business Unicorn",
  founder: "Tallie",
  tagline: "Automate & elevate your email marketing with Ontraport",
  description:
    "Certified Ontraport Expert helping business owners build confident, converting email automations — without the overwhelm.",
  url: "https://thebusinessunicorn.co.uk",
  email: "hello@thebusinessunicorn.co.uk",
  links: {
    freeCourse: "https://thebusinessunicorn.co.uk/unleash-your-inner-unicorn",
    community: "https://www.facebook.com/groups/",
    ontraportTrial: "https://ontraport.com/",
    coursesAccess: "https://thebusinessunicorn.co.uk/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/free-stuff", label: "Free Stuff" },
  { href: "/training", label: "Training" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const culprits = [
  {
    number: "01",
    title: "Foundations that were never set",
    body: "When you first set up Ontraport, you may have skipped the foundations that make campaigns scale. Those gaps quietly limit everything that comes after.",
  },
  {
    number: "02",
    title: "Features you are not fully using",
    body: "You are paying for powerful tools but are unsure what is possible — so automations stay basic and results stay average.",
  },
  {
    number: "03",
    title: "Lists and automations in disarray",
    body: "Unsegmented leads cool off, inactive contacts clog your sends, and your best offers never reach the people ready to buy.",
  },
] as const;
