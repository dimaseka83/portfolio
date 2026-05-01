/**
 * Bilingual portfolio content. All variants pull from this single source.
 * Add fields cautiously — every variant uses these shapes.
 */
export const PORTFOLIO = {
  name: "Dhimas Eka Prasetya",
  shortName: "Dhimas",
  location: {
    en: "Malang, East Java, Indonesia",
    id: "Malang, Jawa Timur, Indonesia",
  },
  email: "dimaseka83@gmail.com",
  phone: "+62 895-3604-26592",
  waMessage: {
    en: "Hi Dhimas! I came across your portfolio and I'm interested in discussing a potential collaboration. Can we chat?",
    id: "Halo Dhimas! Saya tertarik untuk berdiskusi lebih lanjut mengenai peluang kerja sama. Boleh kita ngobrol?",
  },
  linkedin: "https://www.linkedin.com/in/dhimas-prasetya",
  website: "https://dhimasekaprasetya.netlify.app/",
  role: { en: "Full Stack Developer", id: "Full Stack Developer" },
  rotatingWords: {
    en: ["Ruby on Rails", "Vue.js", "Nuxt.js", "Laravel", "TypeScript", "Generative AI", "Prompt Engineering"],
    id: ["Ruby on Rails", "Vue.js", "Nuxt.js", "Laravel", "TypeScript", "Generative AI", "Prompt Engineering"],
  },
  summary: {
    en: "Full Stack Developer with 4+ years of experience building web applications across industries — from ERP systems to e-commerce platforms. Currently shipping scalable business solutions at PT Turboly with Ruby on Rails and Vue.js, leveraging AI-assisted tools to enhance development efficiency.",
    id: "Full Stack Developer dengan pengalaman 4+ tahun membangun aplikasi web lintas industri — dari sistem ERP hingga e-commerce. Saat ini membangun solusi bisnis yang scalable di PT Turboly dengan Ruby on Rails dan Vue.js, memanfaatkan tools berbasis AI untuk meningkatkan efisiensi pengembangan.",
  },
  about: {
    en: [
      "My journey spans front-end and back-end development — crafting responsive interfaces with Vue.js and Nuxt.js, and building robust back-end systems with Laravel and Ruby on Rails.",
      "I've contributed to enterprise-level ERP projects, POS systems, and e-commerce platforms. I also leverage AI-assisted coding tools in my daily workflow to improve efficiency and code quality. Open to connecting with fellow developers and exploring new opportunities.",
    ],
    id: [
      "Perjalanan saya mencakup pengembangan front-end dan back-end — membuat antarmuka responsif dengan Vue.js dan Nuxt.js, serta membangun sistem back-end yang tangguh dengan Laravel dan Ruby on Rails.",
      "Saya telah berkontribusi pada proyek ERP tingkat enterprise, sistem POS, dan platform e-commerce. Saya juga memanfaatkan tools berbasis AI dalam workflow sehari-hari untuk meningkatkan efisiensi dan kualitas kode. Terbuka untuk berjejaring dengan sesama developer dan peluang baru.",
    ],
  },
  stats: [
    { n: "4+", label: { en: "Years coding", id: "Tahun koding" } },
    { n: "4", label: { en: "Companies", id: "Perusahaan" } },
    { n: "10+", label: { en: "Projects shipped", id: "Proyek rilis" } },
    { n: "∞", label: { en: "Cups of coffee", id: "Cangkir kopi" } },
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Ruby", "PHP"],
    frontend: ["Vue.js", "Nuxt.js", "Tailwind", "Vuetify", "Bootstrap"],
    backend: ["Ruby on Rails", "Laravel", "MySQL"],
    tools: ["Git", "REST APIs", "Postman", "WooCommerce"],
    ai: ["Generative AI", "Prompt Engineering", "IBM Granite", "Microsoft Azure AI", "AWS AI"],
  },
  topSkills: ["Ruby on Rails", "Vue.js", "Nuxt.js", "Tailwind", "Laravel", "TypeScript", "MySQL", "Generative AI", "Prompt Engineering"],
  experience: [
    {
      company: "Turboly",
      role: { en: "Full-Stack Developer", id: "Full-Stack Developer" },
      period: { en: "Aug 2024 — Present", id: "Agu 2024 — Sekarang" },
      location: "West Jakarta, Indonesia",
      current: true,
      bullets: {
        en: [
          "Develop and maintain a cloud-based ERP platform with Ruby on Rails (back-end) and Vue.js (front-end).",
          "Revamp existing features into interactive, responsive UI while surfacing previously hidden data and maintaining performance.",
          "Leverage AI-assisted coding tools to enhance development efficiency and code quality.",
          "Collaborate with cross-functional teams to deliver features and optimize performance.",
        ],
        id: [
          "Mengembangkan dan memelihara platform ERP berbasis cloud dengan Ruby on Rails (back-end) dan Vue.js (front-end).",
          "Merombak fitur yang ada menjadi UI yang interaktif dan responsif, menampilkan data yang sebelumnya tersembunyi, serta menjaga performa aplikasi.",
          "Memanfaatkan tools berbasis AI untuk meningkatkan efisiensi pengembangan dan kualitas kode.",
          "Berkolaborasi dengan tim lintas fungsi untuk merilis fitur dan mengoptimalkan performa.",
        ],
      },
      tags: ["Ruby on Rails", "Vue.js", "Tailwind", "MySQL"],
    },
    {
      company: "Elitech Technovision",
      role: { en: "Frontend Developer", id: "Frontend Developer" },
      period: { en: "Nov 2021 — Jul 2024", id: "Nov 2021 — Jul 2024" },
      location: "Surabaya, Indonesia",
      bullets: {
        en: [
          "Built and maintained front-end modules for an ERP system serving Sinko Prima Alloy using Vue.js.",
          "Developed responsive, cross-browser interfaces with Vuetify and Bootstrap.",
          "Integrated REST APIs for efficient data fetching and real-time updates.",
        ],
        id: [
          "Membangun dan memelihara modul front-end sistem ERP untuk Sinko Prima Alloy menggunakan Vue.js.",
          "Mengembangkan antarmuka responsif dan cross-browser dengan Vuetify dan Bootstrap.",
          "Mengintegrasikan REST API untuk pengambilan data yang efisien dan update real-time.",
        ],
      },
      tags: ["Vue.js", "Vuetify", "MySQL"],
    },
    {
      company: "Pia Cap Mangkok Tidar Malang",
      role: { en: "Full Stack Engineer", id: "Full Stack Engineer" },
      period: { en: "May 2021 — Oct 2021", id: "Mei 2021 — Okt 2021" },
      location: "Malang, Indonesia",
      bullets: {
        en: [
          "Built and customized an e-commerce website (piatacamilan.com) using WordPress and WooCommerce, and developed a Point of Sales system using Laravel.",
          "Managed network infrastructure across two office locations.",
          "Handled the full development lifecycle — requirements to deployment.",
        ],
        id: [
          "Membangun dan mengkustomisasi website e-commerce (piatacamilan.com) menggunakan WordPress dan WooCommerce, serta mengembangkan sistem Point of Sales menggunakan Laravel.",
          "Mengelola infrastruktur jaringan di dua lokasi kantor.",
          "Menangani siklus pengembangan penuh — dari requirement hingga deployment.",
        ],
      },
      tags: ["Laravel", "MySQL", "E-commerce"],
    },
    {
      company: "Madrasah Aliyah Al Hayat Malang",
      role: { en: "Information Technology Teacher", id: "Guru Teknologi Informasi" },
      period: { en: "Jan 2021 — Apr 2021", id: "Jan 2021 — Apr 2021" },
      location: "Malang, Indonesia",
      bullets: {
        en: [
          "Taught Microsoft Office fundamentals to first-year students.",
          "Guided intermediate students in graphic design using Canva.",
          "Mentored senior students in building websites via CMS platforms.",
        ],
        id: [
          "Mengajar dasar Microsoft Office kepada siswa tahun pertama.",
          "Membimbing siswa menengah dalam desain grafis menggunakan Canva.",
          "Membimbing siswa senior membangun website melalui platform CMS.",
        ],
      },
      tags: ["Teaching", "Canva", "CMS"],
    },
  ],
  projects: [
    {
      name: "Turboly ERP",
      kind: { en: "Cloud ERP Platform", id: "Platform ERP Cloud" },
      blurb: {
        en: "Scalable cloud-based ERP serving enterprise clients — inventory, procurement, accounting and beyond.",
        id: "ERP berbasis cloud yang scalable untuk klien enterprise — inventori, procurement, akuntansi, dan lebih.",
      },
      stack: ["Ruby on Rails", "Vue.js", "Tailwind", "MySQL"],
      accent: "blue",
    },
    {
      name: "Sinko ERP",
      kind: { en: "Enterprise Resource Planning", id: "Enterprise Resource Planning" },
      blurb: {
        en: "Front-end modules for manufacturing ERP serving Sinko Prima Alloy — responsive and built for real-world use.",
        id: "Modul front-end ERP manufaktur untuk Sinko Prima Alloy — responsif dan dibangun untuk penggunaan nyata.",
      },
      stack: ["Vue.js", "Vuetify", "MySQL"],
      accent: "orange",
    },
    {
      name: "SIKMEN",
      kind: { en: "Health Tracking App", id: "Aplikasi Kesehatan" },
      blurb: {
        en: "A web-based health tracking application to help women track and monitor their menstrual cycle. Built as a capstone project for MBKM x Dicoding Academy.",
        id: "Aplikasi web untuk membantu wanita melacak dan memantau siklus menstruasi mereka. Dibangun sebagai proyek capstone MBKM x Dicoding Academy.",
      },
      stack: ["Nuxt.js", "TypeScript", "REST APIs"],
      accent: "pink",
    },
    {
      name: "Sistem Informasi Raport Online",
      kind: { en: "Academic Information System", id: "Sistem Informasi Akademik" },
      blurb: {
        en: "A full-stack web-based student report card management system for MA Al-Hayatul Islamiyah Malang, enabling digital grade management and online access for students and parents.",
        id: "Sistem manajemen raport siswa berbasis web untuk MA Al-Hayatul Islamiyah Malang, memungkinkan pengelolaan nilai digital dan akses online untuk siswa dan orang tua.",
      },
      stack: ["Laravel", "Nuxt.js", "MySQL"],
      accent: "purple",
    },
    {
      name: "Pia Tacamilan",
      kind: { en: "E-commerce + POS", id: "E-commerce + POS" },
      blurb: {
        en: "Full e-commerce site (piatacamilan.com) and Point of Sales system for a local pastry brand.",
        id: "Website e-commerce lengkap (piatacamilan.com) dan sistem Point of Sales untuk brand pastry lokal.",
      },
      stack: ["Laravel", "MySQL", "Bootstrap"],
      accent: "green",
    },
    {
      name: "ERP Pia Cap Mangkok",
      kind: { en: "Published Research — ERP", id: "Riset Terbit — ERP" },
      blurb: {
        en: "Web-based ERP design for Pia Cap Mangkok Malang — published research blending theory and practice.",
        id: "Desain ERP berbasis web untuk Pia Cap Mangkok Malang — riset terbit yang menggabungkan teori dan praktik.",
      },
      stack: ["Laravel", "Research", "UX"],
      accent: "yellow",
    },
  ],
  certifications: [
    "Code Generation and Optimization Using IBM Granite",
    "IBM Granite Models for Software Development",
    "Use Generative AI for Software Development",
    "Introduction to Generative AI",
    "Introduction to Artificial Intelligence",
    "Certificate of Competence in Programming and Software Development",
    "Frontend Developer (React)",
    "Software Engineer",
    "Junior Web Developer",
    "Full Stack Laravel and Vue JS",
    "Menjadi React Web Developer Expert",
    "Belajar Penggunaan Generative AI",
    "AI Praktis untuk Produktivitas",
    "Prompt Engineering untuk Software Developer",
    "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    "Belajar Fundamental Pemrosesan Data",
    "Spec-Driven Development dengan Kiro",
    "Belajar Pengembangan Web Intermediate",
    "Belajar Prinsip Pemrograman SOLID",
    "Belajar Dasar Cloud dan Gen AI di AWS",
  ],
  awards: [
    { en: "Innovative and Representative Projects", id: "Proyek Inovatif & Representatif" },
    { en: "Diploma III Tuition Scholarship", id: "Beasiswa Pendidikan Diploma III" },
  ],
  publications: [
    {
      title: "Perancangan Enterprise Resource Planning Berbasis Web Pia Cap Mangkok Malang",
      kind: { en: "Academic publication", id: "Publikasi akademik" },
    },
  ],
  education: [
    {
      school: "Institut Teknologi Adhi Tama Surabaya",
      degree: {
        en: "Bachelor's, Information Technology",
        id: "Sarjana, Teknologi Informasi",
      },
      period: "Feb 2022 — Feb 2024",
    },
    {
      school: "Politeknik Kota Malang",
      degree: {
        en: "Diploma of Education, Informatics",
        id: "Diploma Pendidikan, Informatika",
      },
      period: "2018 — 2021",
    },
  ],
};

/** Navigation sections — shared by all variants */
export const SECTIONS = [
  { id: "home",        n: 0, label: { en: "Home",         id: "Beranda" } },
  { id: "about",       n: 1, label: { en: "About",        id: "Tentang" } },
  { id: "skills",      n: 2, label: { en: "Skills",       id: "Skills" } },
  { id: "experience",  n: 3, label: { en: "Experience",   id: "Pengalaman" } },
  { id: "projects",    n: 4, label: { en: "Projects",     id: "Proyek" } },
  { id: "credentials", n: 5, label: { en: "Credentials",  id: "Kredensial" } },
  { id: "education",   n: 6, label: { en: "Education",    id: "Pendidikan" } },
  { id: "contact",     n: 7, label: { en: "Contact",      id: "Kontak" } },
];
