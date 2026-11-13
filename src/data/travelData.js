export const toursData = [
  {
    slug: "velouria-monte-sienna",
    title: "Velouria - Monte Sienna",
    location: "Bhutan",
    duration: "6 Days",
    nights: "3 Nights",
    countries: "08 Country",
    price: 859,
    originalPrice: 1200,
    mainImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=500&q=80",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=500&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500&q=80"
    ],
    specs: {
      accommodation: "5 Star Hotel",
      admissionFee: "No",
      arrivalCity: "London",
      bestSeason: "Autumn",
      departureCity: "Kathmandu",
      freeCancellation: "No",
      guide: "01 Guided",
      hotelTransfer: "Available",
      insurance: "Covered 60%",
      language: "English",
      maxAltitude: "500Ft",
      meals: "Breakfast and Dinner",
      meetingPoint: "Lounge",
      mineralWater: "Available",
      paymentMethod: "VISA, Master Card",
      tourAvailability: "Available",
      transportation: "Taxi",
      walkingHours: "4Hour",
      wifi: "Available"
    },
    overview:
      "Fringilla a praesent aliquam proin ultrices imperdiet erat. Cras vel fusce pulvinar ridiculus integer placerat senectus nostra per cursus. Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit.",
    highlights: [
      "Guided sightseeing across iconic valleys and cultural landmarks",
      "Luxury 5-star accommodation with daily breakfast and dinner",
      "Private airport transfers and dedicated local tour guide",
      "Travel through scenic villages and historic monasteries"
    ],
    itinerary: [
      { day: "Day 01 - Transportation", desc: "Arrival at airport, private transfer to your 5-star hotel, and welcome evening briefing." },
      { day: "Day 02 - Accommodation & Sightseeing", desc: "Full-day guided excursion exploring ancient landmarks and local cuisine." },
      { day: "Day 03 - Supplementary Services", desc: "Leisure morning followed by cultural valley tour and sunset viewpoint visit." }
    ]
  },
  {
    slug: "lithaniya-santa-cruza",
    title: "Lithaniya Santa Cruza",
    location: "Roman",
    duration: "4 Days",
    nights: "4 Nights",
    countries: "08 Country",
    price: 459,
    originalPrice: 699,
    mainImage: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=500&q=80"
    ],
    specs: {
      accommodation: "4 Star Boutique",
      admissionFee: "Included",
      arrivalCity: "Rome",
      bestSeason: "Spring",
      departureCity: "Rome",
      freeCancellation: "Yes",
      guide: "01 Guided",
      hotelTransfer: "Available",
      insurance: "Covered 80%",
      language: "English, Italian",
      maxAltitude: "200Ft",
      meals: "Breakfast Included",
      meetingPoint: "City Center",
      mineralWater: "Available",
      paymentMethod: "VISA, Master Card",
      tourAvailability: "Available",
      transportation: "Private Van",
      walkingHours: "3Hour",
      wifi: "Available"
    },
    overview:
      "Discover the timeless charm of Roman architecture, cobblestone piazzas, and coastal escapes with our curated 4-day getaway.",
    highlights: [
      "Skip-the-line access to historical Roman monuments",
      "Authentic culinary tasting tour in the historic district",
      "Boutique hotel stay in the heart of the city"
    ],
    itinerary: [
      { day: "Day 01 - Arrival in Rome", desc: "Check-in and evening walking tour through historic fountains and squares." },
      { day: "Day 02 - Ancient Landmarks", desc: "Guided tour of the Colosseum and Roman Forum." }
    ]
  }
];

export const destinationsData = [
  {
    slug: "italy",
    name: "Italy",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80",
    packages: [
      {
        id: 101,
        title: "Amalfi & Tuscany Escape",
        discount: "62% Off",
        featured: true,
        includes: "Accommodations, Flights, Transfers, Tours And Excursions, Activities",
        location: "Italy",
        duration: "9 Days",
        price: 699,
        originalPrice: 1250,
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80"
      },
      {
        id: 102,
        title: "Venice & Dolomites Adventure",
        discount: "40% Off",
        featured: false,
        includes: "Accommodations, Transfers, Guided Tours",
        location: "Italy",
        duration: "6 Days",
        price: 549,
        originalPrice: 899,
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80"
      }
    ]
  },
  {
    slug: "maldives",
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
    packages: [
      {
        id: 201,
        title: "Overwater Villa Retreat",
        discount: "50% Off",
        featured: true,
        includes: "All-Inclusive Resort, Speedboat Transfers, Snorkeling",
        location: "Maldives",
        duration: "5 Days",
        price: 999,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80"
      }
    ]
  },
  {
    slug: "france",
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    packages: [
      {
        id: 301,
        title: "Parisian Romance & Wine Tour",
        discount: "45% Off",
        featured: true,
        includes: "Hotel, Museum Passes, Wine Tasting, City Tour",
        location: "France",
        duration: "7 Days",
        price: 799,
        originalPrice: 1450,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80"
      }
    ]
  },
  {
    slug: "roman",
    name: "Roman",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80",
    packages: [
      {
        id: 401,
        title: "Ancient Rome Historical Journey",
        discount: "30% Off",
        featured: true,
        includes: "Boutique Stay, Guided Colosseum Tour, Meals",
        location: "Roman",
        duration: "4 Days",
        price: 459,
        originalPrice: 699,
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80"
      }
    ]
  },
  {
    slug: "india",
    name: "India",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    packages: [
      {
        id: 501,
        title: "Golden Triangle & Heritage Tour",
        discount: "55% Off",
        featured: true,
        includes: "5-Star Hotels, Private Driver, Monument Tickets",
        location: "India",
        duration: "8 Days",
        price: 599,
        originalPrice: 1350,
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"
      }
    ]
  },
  {
    slug: "london",
    name: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
    packages: [
      {
        id: 601,
        title: "Royal London & Thames Experience",
        discount: "35% Off",
        featured: true,
        includes: "Hotel, Afternoon Tea, City Pass, River Cruise",
        location: "London",
        duration: "5 Days",
        price: 650,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80"
      }
    ]
  }
];