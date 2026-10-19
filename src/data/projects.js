// EDIT ME. Screenshots live in /public/images. Only list facts that are true.
// `extras` are optional smaller screenshots of other pages you built.
export const site = {
  name: 'Merie Jane C. Lamata',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'meriejane111@gmail.com',
  // Add your Upwork profile URL to href. Links with an empty href are not shown.
  links: [{ label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0184f70194aea4abb8?mp_source=share' }],
  available: true,
  availability: 'Open to part-time projects',
  availabilityNote: 'Currently taking on part-time projects, about 3 to 4 hours a day. Timelines are planned around that.',
};
export const projects = [
  { id: 'ashford-homes', title: 'Ashford Homes Ohio', type: 'Custom home builder website', platform: 'WordPress, Elementor Pro',
    description: 'Collaborative project. My role: the homepage, About Us page, Process page and VIP Partner Incentive page.',
    image: '/images/ashford-home.jpg', width: 581, height: 360,
    live: 'https://www.ashfordhomesohio.com/', caseStudy: '', featured: true,
    extras: [
      { src: '/images/ashford-about.jpg', width: 839, height: 420, label: 'About Us page' },
      { src: '/images/ashford-process.jpg', width: 843, height: 640, label: 'Process page' },
      { src: '/images/ashford-vip.jpg', width: 1079, height: 640, label: 'VIP Partner Incentive page' },
    ] },
  { id: 'jk-custom-homes', title: 'J&K Custom Homes', type: 'Custom home builder website', platform: 'WordPress, Elementor Pro',
    description: 'Collaborative project. My role: the homepage, Custom Home Builder page, Areas We Build page and Homes For Sale page.',
    image: '/images/jk-home.jpg', width: 544, height: 470,
    live: 'https://www.jkcustomhomes.net/', caseStudy: '',
    extras: [
      { src: '/images/jk-for-sale.jpg', width: 864, height: 760, label: 'Homes For Sale page' },
      { src: '/images/jk-areas.jpg', width: 765, height: 740, label: 'Areas We Build page' },
      { src: '/images/jk-builder.jpg', width: 469, height: 520, label: 'Custom Home Builder page' },
    ] },
  { id: 'futurethink', title: 'Futurethink', type: 'Corporate training website', platform: 'WordPress, Elementor Pro',
    description: 'Collaborative project. My role: the Navigate Change page.',
    image: '/images/futurethink-hero.jpg', width: 520, height: 340,
    live: 'https://futurethink.com/navigate-change/', caseStudy: '',
    extras: [
      { src: '/images/futurethink-courses.jpg', width: 520, height: 440, label: 'Online courses section' },
    ] },
];
