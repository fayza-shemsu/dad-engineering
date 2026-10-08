export const content = {
  company: {
    name: "DAD Engineering Workshop",
    nameLegal: "DAD Engineering Workshop PLC",
    nameAmharic: "ዳድ ኢንጂነሪንግ ወርክሾፕ ኃላ/የተ/የግ/ማህበር",
    founded: "1993 E.C.",
    owner: "Dr. Deraje Fekade",
    managingDirector: "Ato Dagnachew Fekade",
    phone: "+251 911 406 719",
    email: "workshopdadengineering@gmail.com",
    address: "Gelan Street, behind Chere (Mekelakeya) Condominium, Addis Ababa, Ethiopia",
    // poBox: "7871",
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      telegram: "https://t.me",
      whatsapp: "https://wa.me/251911406719?text=Hello%20DAD%20Engineering%20Workshop%2C%20I%20would%20like%20to%20request%20a%20quote."
    },
    vision: "To be a highly appreciated, trustworthy, well-intentioned Ethiopian company with world-class execution, creating a good working environment and growing value for the Ethiopian economy.",
    mission: "To deliver dependable service to customers and improve the company's wealth-generating capability in a comprehensive environment.",
    aboutShort: "Founded in 1993 E.C., DAD Engineering Workshop provides world-class mechanical and crane-rental engineering services in Ethiopia. With over 120 specialized machines under one roof, our skilled craftsmen deliver precision machining, gear manufacturing, and heavy equipment support."
  },
  hero: {
    headline: "Precision Manufacturing & Heavy Crane Rental in Ethiopia",
    subheadline: "Your reliable partner for industrial spare parts, custom machining, and 30–100 ton crane rentals. Over 120 machines ready to serve your most demanding projects.",
    stats: [
      { number: "120+", label: "Machines" },
      { number: "1993", label: "Founded (E.C.)" },
      { number: "30-100t", label: "Crane Capacity" }
    ],
    bgImage: "/images/web/20261002_083100.webp", // Updated to the 100t crane photo
    fallbackBgImage: "/images/web/20261002_082916.webp"
  },
  services: [
    {
      id: "machining",
      title: "Machining & Spare Part Manufacturing",
      description: "Precision manufacturing for industrial and construction machines. From drawing or sample, including urgent breakdown jobs.",
      details: ["Turning", "Milling", "CNC Machining", "Band Sawing"],
      image: "/images/web/20261002_082506.webp"
    },
    {
      id: "cold-forming",
      title: "Cold Forming",
      description: "Comprehensive sheet metal and profile forming services with high-capacity hydraulic presses and rollers.",
      details: ["Plate & Sheet Bending", "Rolling", "Profile & Pipe Bending", "Shearing", "Punching"],
      image: "/images/web/20261002_082916.webp"
    },
    {
      id: "gear-manufacturing",
      title: "Gear Manufacturing",
      description: "Custom gears for aircraft, automotive, medical, and defense. Materials include steel, cast iron, plastics, bronze, and more.",
      details: ["Gear Hobbing", "Slotting", "Shaping", "Heat Treatment", "Hardness Testing"],
      image: "/images/web/20261002_082730.webp" // Used as stand-in for gear machine
    },
    {
      id: "engine-repair",
      title: "Engine Repair",
      description: "Professional engine reconditioning supervised by an expert with 12+ years of experience.",
      details: ["Boring & Honing", "Crankshaft & Surface Grinding", "Engine Alignment", "Cylinder Head Pressure Testing", "Valve Grinding"],
      image: "/images/web/20261002_082730.webp" // Used as stand-in
    }
  ],
  cranes: [
    { 
      capacity: "100 Ton Mobile Crane", 
      spec: "Our heaviest lifting capacity for steel erection, machinery installation and large construction projects.", 
      image: "/images/web/20261002_083100.webp",
      facts: ["100 ton class", "DAD-owned fleet", "Based in Addis Ababa"]
    },
    { capacity: "FAUN Mobile Crane", spec: "Mobile lifting for construction and plants", image: "/images/web/20261002_083219.webp" },
    { capacity: "Truck-Mounted Loader Crane", spec: "Loading, unloading and site deliveries", image: "/images/web/20261002_083143_0.webp" },
    { capacity: "Small Truck Crane", spec: "Light lifting and transport on one truck", image: "/images/web/20261002_083121.webp" },
  ],
  craneRentalSteps: [
    { title: "Tell us your load and site", num: "1" },
    { title: "We recommend the right crane", num: "2" },
    { title: "Get a quote", num: "3" },
    { title: "Crane, operator and lift on site", num: "4" }
  ],
  equipmentCategories: [
    {
      category: "Presses, Flanging & Dishing",
      machines: [
        { brand: "Boldrini", model: "PAO 300 dishing machine" },
        { brand: "Boldrini", model: "PAO 165x3500 dishing machine" },
        { brand: "Boldrini", model: "RIBO 25/4000 flanging machine" },
        { brand: "Boldrini", model: "RIBO 10 NSF flanging machine" },
        { brand: "Beyeler", model: "CNC press brake 360t x 4000" },
        { brand: "Unknown", model: "CNC press brake 110t x 3600" },
        { brand: "Unknown", model: "CNC press brake 200t x 3500" }
      ]
    },
    {
      category: "Lathes & Turning",
      machines: [
        { brand: "Wohlenberg", model: "W57 B lathe (1250x6000 mm)" },
        { brand: "Stanko", model: "1512 carousel vertical lathe" },
        { brand: "Traub", model: "TND 360 CNC lathe" },
        { brand: "Traub", model: "TND 630 CNC lathe" },
        { brand: "Index", model: "DFG 250 CNC lathe" }
      ]
    },
    {
      category: "Milling & Grinding",
      machines: [
        { brand: "Unitech", model: "TW560QTNC CNC milling machine" },
        { brand: "WMW", model: "heavy-duty double-column bed-type milling machine" },
        { brand: "WMW", model: "Si6 internal grinding machine" }
      ]
    },
    {
      category: "Punching, Shearing & Rolling",
      machines: [
        { brand: "Trumpf", model: "Trumatic 240 punching machine" },
        { brand: "Trumpf", model: "Trumatic 260 punching machine" },
        { brand: "Trumpf", model: "Trumatic 500 punching machine" },
        { brand: "HAEUSLER", model: "VRM HY 2000-6 4-roll sheet rolling machine" },
        { brand: "Schaefer", model: "SPVS 90 heavy-duty rolling machine" },
        { brand: "WMW", model: "thread rolling UPS 12.1" },
        { brand: "Durma", model: "VS6013 CNC table shear" }
      ]
    },
    {
      category: "Gear Machining & Sawing",
      machines: [
        { brand: "Unknown", model: "Gear hobbing machine (Module 16)" },
        { brand: "Staehly", model: "SRF Module 5 gear hobbing machine" },
        { brand: "Unknown", model: "Gear hobbing machine (Module 5)" },
        { brand: "Meba", model: "560 A band saw (700 mm capacity)" },
        { brand: "Kasto", model: "HBA 340x380 band saw" }
      ]
    },
    {
      category: "Support & Lifting",
      machines: [
        { brand: "Vietz", model: "Mobile welding generators" },
        { brand: "Abus", model: "Slewing jib crane" }
      ]
    }
  ],
  whyUs: [
    { title: "120+ Machines", desc: "Unmatched capacity under one roof." },
    { title: "Fast Turnaround", desc: "Urgent breakdown jobs handled swiftly." },
    { title: "Precision Tolerances", desc: "World-class execution by skilled craftsmen." },
    { title: "One-Stop Solution", desc: "Manufacturing, repair, and rental in one place." }
  ],
  promo: {
    text: "Special Offer: Great discounts available for mass service and repeat contracts.",
    button: "Contact for details"
  },
  testimonials: [
    { quote: "DAD Engineering provided exceptional precision on our gear manufacturing project. Highly reliable.", name: "[Replace with real client]" },
    { quote: "Their crane rental service and fast turnaround saved our construction timeline. True professionals.", name: "[Replace with real client]" }
  ],
  gallery: [ // Replaced with our explicit image list that we will display in Gallery/Machinery
  ]
};
