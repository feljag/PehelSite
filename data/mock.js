// Mock data for Jagran Pehel NGO Website

export const heroData = {
  tagline: "Empowering Communities, Transforming Lives",
  subtitle: "Join us in our mission to create lasting change through education, healthcare, and community development",
  heroImage: "https://images.unsplash.com/photo-1774504798113-a03e2aa24789",
  ctaButtons: [
    { text: "Donate Now", link: "/get-involved#donate", primary: true },
    { text: "Volunteer", link: "/get-involved#volunteer", primary: false },
    { text: "Learn More", link: "/about", primary: false }
  ]
};

export const impactStats = [
  { number: "50,000+", label: "Lives Impacted" },
  { number: "150+", label: "Programs Run" },
  { number: "25+", label: "Communities Served" },
  { number: "500+", label: "Active Volunteers" }
];

export const programsData = [
  {
    id: 1,
    title: "Education for All",
    icon: "BookOpen",
    shortDescription: "Providing quality education to underprivileged children and promoting literacy in rural areas.",
    fullDescription: "Our Education for All program focuses on bridging the educational gap by providing free schooling, learning materials, and digital literacy programs to children from economically disadvantaged backgrounds. We run 50+ learning centers across rural communities.",
    image: "https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg",
    stats: { beneficiaries: "15,000+", centers: "50+" }
  },
  {
    id: 2,
    title: "Healthcare Access",
    icon: "Heart",
    shortDescription: "Delivering essential healthcare services and organizing medical camps in underserved regions.",
    fullDescription: "Through mobile health clinics and partnerships with medical professionals, we provide preventive care, health screenings, and treatment to communities lacking healthcare infrastructure. Our initiative includes maternal health, child nutrition, and disease prevention programs.",
    image: "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753",
    stats: { beneficiaries: "20,000+", camps: "200+" }
  },
  {
    id: 3,
    title: "Women Empowerment",
    icon: "Users",
    shortDescription: "Empowering women through skill development, financial literacy, and leadership training.",
    fullDescription: "We believe in the power of women to transform communities. Our programs provide vocational training, microfinance support, and leadership development to help women become financially independent and active community leaders.",
    image: "https://images.pexels.com/photos/7203387/pexels-photo-7203387.jpeg",
    stats: { beneficiaries: "8,000+", groups: "100+" }
  },
  {
    id: 4,
    title: "Skill Development",
    icon: "Briefcase",
    shortDescription: "Building employable skills and creating livelihood opportunities for youth and adults.",
    fullDescription: "Our skill development centers offer training in various trades including tailoring, computer skills, handicrafts, and entrepreneurship. We partner with industries to ensure job placements and sustainable livelihoods.",
    image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6",
    stats: { trained: "12,000+", placed: "5,000+" }
  }
];

export const aboutData = {
  story: "Jagran Pehel was founded in 2010 with a simple yet powerful vision: to create opportunities for those left behind by social and economic inequalities. What started as a small initiative to educate children in one village has grown into a movement touching thousands of lives across multiple states.",
  mission: "To empower marginalized communities through sustainable programs in education, healthcare, and livelihood development, fostering dignity and self-reliance.",
  vision: "A society where every individual has equal access to opportunities, resources, and the power to shape their own future.",
  values: [
    { title: "Integrity", description: "We operate with transparency and accountability in all our actions." },
    { title: "Compassion", description: "We approach every community with empathy and understanding." },
    { title: "Sustainability", description: "We build programs that create lasting, long-term impact." },
    { title: "Inclusivity", description: "We believe in equal opportunity regardless of gender, caste, or creed." }
  ],
  milestones: [
    { year: "2010", event: "Jagran Pehel founded with first education center" },
    { year: "2013", event: "Launched healthcare initiative, conducted first medical camp" },
    { year: "2015", event: "Expanded to 10 villages, 5,000 lives impacted" },
    { year: "2018", event: "Women empowerment program started, 100+ SHGs formed" },
    { year: "2020", event: "COVID relief efforts, distributed rations to 10,000 families" },
    { year: "2023", event: "50,000+ lives impacted milestone achieved" }
  ]
};

export const teamData = [
  { name: "Dr. Priya Sharma", role: "Founder & Director", image: "https://images.pexels.com/photos/5998477/pexels-photo-5998477.jpeg" },
  { name: "Rajesh Kumar", role: "Program Manager", image: "https://images.pexels.com/photos/6591738/pexels-photo-6591738.jpeg" },
  { name: "Anita Desai", role: "Healthcare Coordinator", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433" },
  { name: "Vikram Singh", role: "Education Head", image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg" }
];

export const storiesData = [
  {
    id: 1,
    title: "From Dropout to Graduate: Meera's Journey",
    category: "Education",
    date: "2024-11-15",
    excerpt: "How a 14-year-old girl who dropped out of school became the first graduate in her family.",
    image: "https://images.pexels.com/photos/8423008/pexels-photo-8423008.jpeg",
    content: "Meera had to leave school at age 12 to work in fields. Through our Education for All program, she rejoined school, received tutoring support, and recently graduated with honors. She now inspires other girls in her village to pursue education.",
    impact: "Inspired 50+ girls to return to school"
  },
  {
    id: 2,
    title: "A Village's Health Transformation",
    category: "Healthcare",
    date: "2024-10-28",
    excerpt: "How regular health camps reduced maternal mortality by 60% in Rampur village.",
    image: "https://images.pexels.com/photos/5998477/pexels-photo-5998477.jpeg",
    content: "Rampur village had no healthcare facility within 30 km. Our mobile health clinics and maternal health program brought medical care to doorsteps, conducted health education, and established a network of trained community health workers.",
    impact: "200+ successful deliveries, zero maternal deaths in 2 years"
  },
  {
    id: 3,
    title: "Sunita's Self-Help Revolution",
    category: "Women Empowerment",
    date: "2024-09-20",
    excerpt: "A homemaker becomes an entrepreneur, uplifting 20 women in her community.",
    image: "https://images.pexels.com/photos/7203387/pexels-photo-7203387.jpeg",
    content: "Sunita joined our women's empowerment program in 2020. After receiving training in tailoring and financial literacy, she started a small garment business. Today, she employs 20 women from her village, all trained through our program.",
    impact: "Created employment for 20 women, Rs. 5 lakh annual revenue"
  },
  {
    id: 4,
    title: "Digital Literacy Changes Lives",
    category: "Skill Development",
    date: "2024-08-10",
    excerpt: "How computer training helped rural youth secure urban jobs.",
    image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6",
    content: "Our digital literacy center in Kasturba village trained 100+ youth in basic computer skills, online tools, and digital payments. 60% of them secured jobs in nearby towns, sending remittances back home and uplifting their families.",
    impact: "100+ youth trained, 60+ employed in IT/BPO sectors"
  }
];

export const testimonialsData = [
  {
    name: "Meera Patel",
    role: "Program Beneficiary",
    quote: "Jagran Pehel gave me a second chance at education. Today I am proud to be the first graduate in my family.",
    image: "https://images.unsplash.com/photo-1495837174058-628aafc7d610"
  },
  {
    name: "Dr. Amit Verma",
    role: "Medical Volunteer",
    quote: "Working with Jagran Pehel has been the most fulfilling experience. The impact we create together is truly remarkable.",
    image: "https://images.pexels.com/photos/6591738/pexels-photo-6591738.jpeg"
  },
  {
    name: "Sunita Devi",
    role: "Women's SHG Leader",
    quote: "I never imagined I could run my own business. This organization believed in me when I didn't believe in myself.",
    image: "https://images.pexels.com/photos/7203387/pexels-photo-7203387.jpeg"
  }
];

export const getInvolvedData = {
  volunteer: {
    title: "Become a Volunteer",
    description: "Join our community of changemakers. Whether you can spare a few hours a month or want to commit long-term, your time and skills can make a real difference.",
    opportunities: [
      "Teaching & Mentoring",
      "Healthcare Support",
      "Skill Training",
      "Event Organization",
      "Social Media & Marketing",
      "Fundraising"
    ],
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433"
  },
  donate: {
    title: "Support Our Cause",
    description: "Your generous contribution helps us expand our reach and deepen our impact. Every rupee counts in transforming lives.",
    amounts: [500, 1000, 2500, 5000],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
  },
  partner: {
    title: "Partner With Us",
    description: "We collaborate with corporations, foundations, and institutions to scale our impact. Let's work together for social change.",
    types: ["Corporate CSR", "Foundation Grants", "Academic Partnerships", "In-kind Donations"],
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
  }
};

export const contactData = {
  email: "info@jagranpehel.org",
  phone: "+91 98765 43210",
  address: "123 Community Center, Sector 12, New Delhi - 110001",
  socialMedia: [
    { platform: "Facebook", url: "https://facebook.com/jagranpehel" },
    { platform: "Twitter", url: "https://twitter.com/jagranpehel" },
    { platform: "Instagram", url: "https://instagram.com/jagranpehel" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/jagranpehel" }
  ]
};
