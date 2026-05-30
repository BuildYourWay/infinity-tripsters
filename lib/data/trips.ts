export type TripItineraryItem = {
  day: number;
  title: string;
  detail: string;
  highlights: string[];
};

export type TripFAQ = { q: string; a: string };

export type TripTestimonial = {
  quote: string;
  name: string;
  title: string;
};

export type Trip = {
  slug: string;
  title: string;
  destination: string;
  overview: string;
  tags: string[];
  priceFromUSD: number;
  durationDays: number;
  days: number;
  nights: number;
  groupSize: string;
  imageHero: string;
  imageThumb: string;
  galleryImages: string[];
  itinerary: TripItineraryItem[];
  included: string[];
  excluded: string[];
  faqs: TripFAQ[];
  testimonials: TripTestimonial[];
};

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const trips: Trip[] = [
  {
    slug: "odissa-temple-package-july-2026",
    title: "Odissa Temple Package July 2026",
    destination: "Odissa",
    overview:
      "Visit the Odissa Temple in July 2026 and experience the beauty of the temple and the surrounding area. We will start the trip in Chennai and end in Odissa covering Puri, Kolkata, Bhubaneswar, Konark, Cuttack.",
    tags: ["Odissa", "Luxury", "Group-led", "Cozy", "Temple"],
    priceFromUSD: 24000,
    durationDays: 6,
    days: 6,
    nights: 5,
    groupSize: "No Limit",
    imageHero: "/assets/images/odissa-temple-july-hero.jpg",
    imageThumb: "/assets/images/odissa-temple-july-hero.jpg",
    galleryImages: [
      unsplash("photo-1447752875215-b27642fc2c5a", 1200),
      unsplash("photo-1501785888041-af3ef285b470", 1200),
      unsplash("photo-1470770841072-f978cf4d019e", 1200),
      unsplash("photo-1441974231531-c6227db76b6e", 1200),
      unsplash("photo-1500534623283-312aade485b7", 1200),
      unsplash("photo-1491553895911-0055eca6402d", 1200),
      unsplash("photo-1516466723121-88c7c6e0ed52", 1200),
      unsplash("photo-1500534623283-312aade485b7", 1200),
      unsplash("photo-1451187580459-43490279c0fa", 1200),
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive • Puri",
        detail:
          "Check in to a Hotel stay, fresh-up, and a welcome breakfast with story-led local tips.Visit temples of Puri.",
        highlights: ["Hotel check-in", "Fresh-up", "Welcome breakfast"],
      },
      {
        day: 2,
        title: "Visit temples of Kolkata",
        detail:
          "Visit temples of Kolkata.",
        highlights: ["Temple of Kolkata"],
      },
      {
        day: 3,
        title: "Travel to Bhubaneswar",
        detail:
          "Travel to Bhubaneswar & Konark.",
        highlights: ["Travel to Bhubaneswar", "Travel to Konark"],
      },
      {
        day: 4,
        title: "Visit temples of Bhubaneswar & Konark",
        detail:
          "Visit temples of Bhubaneswar & Konark.",
        highlights: ["Temple of Bhubaneswar", "Temple of Konark"],
      },
      {
        day: 5,
        title: "Travel to Cuttack",
        detail:
          "Travel to Cuttack.",
        highlights: ["Travel to Cuttack"],
      },
      {
        day: 6,
        title: "Final Departure to Chennai",
        detail:
          "Final Departure to Chennai.",
        highlights: ["Departure to Chennai"],
      },
    ],
    included: [
      "UP & Down 3rd AC Train Tickets",
      "All Days South Indian Food",
      "AC Bus Transportation",
      "Daily Water Bottle",
      "3-star Hotel Accommodations",
      "Tamil Tour Manager",
    ],
    excluded: [
      "Any other expenses not mentioned in the itinerary",
      "Higher Class of Train Tickets",
      "Personal expenses",
      "Food Choice Preferences apart from the Menu provided",
    ],
    faqs: [
      {
        q: "Is this trip beginner-friendly?",
        a: "Yes. The trip is designed for comfort, with optional walk segments and plenty of breaks.",
      },
      {
        q: "What if the weather is not good?",
        a: "We build flexibility into the itinerary. If the weather is not good, we will adjust the itinerary accordingly.",
      },
    ],
    testimonials: [
      // {
      //   quote:
      //     "It felt like luxury meets content creation. We got the weather and the photos looked unreal.",
      //   name: "Ethan M.",
      //   title: "Marketing Manager",
      // },
      // {
      //   quote:
      //     "The itinerary had flow. Every stop was intentional, and the vibe was effortless.",
      //   name: "Sana R.",
      //   title: "Product Analyst",
      // },
    ],
  },
  {
    slug: "kerala-summar-may-2026",
    title: "Kerala Summar Package May 2026",
    destination: "Kerala",
    overview:
      "A premium coastal story: cliffside views, private boat moments, and editorial dining with your group.",
    tags: ["Kerala", "Luxury", "Food", "Boat"],
    priceFromUSD: 14000,
    durationDays: 6,
    days: 5,
    nights: 6,
    groupSize: "10–14",
    imageHero: "/assets/images/kerala-summar-may-hero.jpg",
    imageThumb: "/assets/images/kerala-summar-may-hero.jpg",
    galleryImages: [
      unsplash("photo-1504711434969-e33886168f5c", 1200),
      unsplash("photo-1523906834658-6e24ef2386f9", 1200),
      unsplash("photo-1506973035872-a4ec16b8ac7f", 1200),
      unsplash("photo-1512918728675-ed5a9ecdebfd", 1200),
      unsplash("photo-1526772662000-3f88f10405ff", 1200),
      unsplash("photo-1500530855697-b586d89ba3ee", 1200),
      unsplash("photo-1469796466635-455ede028aca", 1200),
      unsplash("photo-1496307653780-42ee777d4833", 1200),
      unsplash("photo-1500375592092-40eb2168fd21", 1200),
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive • Munnar welcome",
        detail:
          "Check in to a Hotel stay, fresh-up, and a welcome breakfast with story-led local tips.Visit temples of Munnar. Visit the Munnar Hill Station, Tea Museum, and Eravikulam National Park.",
        highlights: ["Hotel check-in", "Fresh-up", "Welcome breakfast", "Visit temples of Munnar", "Visit the Munnar Hill Station", "Tea Museum", "Eravikulam National Park"],
      },
      {
        day: 2,
        title: "Start to Alappuzha and Check-in to hotel",
        detail:
          "Start to Alappuzha and Check-in to hotel.",
        highlights: ["Start to Alappuzha", "Check-in to hotel"],
      },
      {
        day: 3,
        title: "Alappuzha Boat Ride & Visit to Alleppey Beach, Backwaters among other attractions",
        detail:
          "Alappuzha Boat Ride & Visit to Alleppey Beach, Backwaters among other attractions.",
        highlights: ["Alappuzha Boat Ride", "Visit to Alleppey Beach", "Backwaters among other attractions"],
      },
      {
        day: 4,
        title: "Reach Vagamon and Check-in to hotel",
        detail:
          "Reach Vagamon and Check-in to hotel.",
        highlights: ["Reach Vagamon", "Check-in to hotel"],
      },
      {
        day: 5,
        title: "Reach Thekkady and Visit attractions at Thekkady",
        detail:
          "Reach Thekkady and Visit attractions at Thekkady.",
        highlights: ["Reach Thekkady", "Visit attractions at Thekkady"],
      },
    ],
    included: [
      "UP & Down 3rd AC Train Tickets",
      "AC Transportation",
      "3-star Resort Accommodations",
      "All Days Food",
      "Boat House Lunch Cruise",
      "Tamil Tour Manager",
    ],
    excluded: [
      "Any other expenses not mentioned in the itinerary",
      "Higher Class of Train Tickets",
      "Personal expenses",
      "Food Choice Preferences apart from the Menu provided",
    ],
    faqs: [
      { q: "Is this trip beginner-friendly?", a: "Yes. The trip is designed for comfort, with optional walk segments and plenty of breaks." },
      { q: "What if the weather is not good?", a: "We build flexibility into the itinerary. If the weather is not good, we will adjust the itinerary accordingly." },
    ],
    testimonials: [
      // {
      //   quote:
      //     "It felt like luxury meets content creation. We got the weather and the photos looked unreal.",
      //   name: "Ethan M.",
      //   title: "Marketing Manager",
      // },
    ],
  },
  {
    slug: "goa-luxury-package-may-2026",
    title: "Goa Luxury Package May 2026",
    destination: "Goa",
    overview:
      "Luxury beach resort & Dinner Cruise Package",
    tags: ["Goa", "Luxury", "Food"],
    priceFromUSD: 12000,
    durationDays: 5,
    days: 5,
    nights: 4,
    groupSize: "10–14",
    imageHero: "/assets/images/goa-luxury-group-package-hero.jpg",
    imageThumb: "/assets/images/goa-luxury-group-package-hero.jpg",
    galleryImages: [
      unsplash("photo-1504711434969-e33886168f5c", 1200),
      unsplash("photo-1523906834658-6e24ef2386f9", 1200),
      unsplash("photo-1506973035872-a4ec16b8ac7f", 1200),
      unsplash("photo-1512918728675-ed5a9ecdebfd", 1200),
      unsplash("photo-1526772662000-3f88f10405ff", 1200),
      unsplash("photo-1500530855697-b586d89ba3ee", 1200),
      unsplash("photo-1469796466635-455ede028aca", 1200),
      unsplash("photo-1496307653780-42ee777d4833", 1200),
      unsplash("photo-1500375592092-40eb2168fd21", 1200),
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Goa • Luxury Beach Resort Check-in • Dinner Cruise",
        detail:
          "Arrival at Goa • Transfer to luxury beach resort • Check-in and leisure time • Evening Dinner Cruise on the Mandovi River with music, dance, and dinner.",
        highlights: [
          "Arrival at Goa",
          "Luxury Beach Resort Check-in",
          "Beach Leisure Time",
          "Mandovi River Dinner Cruise",
          "Live Music & Entertainment"
        ],
      },
      {
        day: 2,
        title: "North Goa Sightseeing",
        detail:
          "Explore the most popular attractions of North Goa including beaches, forts, and scenic viewpoints.",
        highlights: [
          "Calangute Beach",
          "Baga Beach",
          "Anjuna Beach",
          "Fort Aguada",
          "Vagator Beach",
          "Chapora Fort"
        ],
      },
      {
        day: 3,
        title: "South Goa Sightseeing",
        detail:
          "Discover Goa's cultural and heritage landmarks along with its peaceful southern coastline.",
        highlights: [
          "Basilica of Bom Jesus",
          "Se Cathedral",
          "Dona Paula View Point",
          "Miramar Beach",
          "Mangeshi Temple",
          "Colva Beach"
        ],
      },
      {
        day: 4,
        title: "Water Sports & Grand Island Excursion",
        detail:
          "Enjoy thrilling water sports activities and a memorable island excursion with scenic coastal experiences.",
        highlights: [
          "Jet Ski Ride",
          "Parasailing",
          "Banana Boat Ride",
          "Grand Island Trip",
          "Snorkeling Experience",
          "Dolphin Spotting"
        ],
      },
      {
        day: 5,
        title: "Shopping • Resort Check-out • Departure",
        detail:
          "Spend the morning exploring Goa's local markets before checking out from the resort and beginning the return journey.",
        highlights: [
          "Panjim Market",
          "Mapusa Market",
          "Goan Cashew Shopping",
          "Local Handicrafts",
          "Resort Check-out",
          "Departure from Goa"
        ],
      }
    ],
    included: [
      "UP & Down 3rd AC Train Tickets",
      "AC Bus Transportation",
      "3-star Beach Resort Accommodations",
      "All Days 3-times Food",
      "Night Dinner Cruise",
      "Free Night Club entry",
      "Up & Down Train Food",
      "Tamil Tour Manager",
    ],
    excluded: [
      "Any other expenses not mentioned in the itinerary",
      "Higher Class of Train/Flight(if preferred) Tickets",
      "Personal expenses",
      "Food Choice Preferences apart from the Menu provided",
      "Higher Class of Hotel Booking",
      "Expenses at Night Club excluding the Entrance"
    ],
    faqs: [
      {
        q: "What is included in the package?",
        a: "The package includes accommodation at a luxury beach resort, daily breakfast, sightseeing as per itinerary, dinner cruise experience, and transportation for scheduled tours."
      },
      {
        q: "Are water sports included in the package cost?",
        a: "Water sports may be included or available at an additional cost depending on the selected package. Please confirm with the tour coordinator before booking."
      },
      {
        q: "What should I carry for the Goa trip?",
        a: "Carry light cotton clothing, swimwear, sunscreen, sunglasses, a hat, comfortable footwear, and valid government-issued ID proof."
      },
      {
        q: "Is the Dinner Cruise suitable for families?",
        a: "Yes. The Dinner Cruise is family-friendly and includes entertainment, music, and scenic views suitable for guests of all ages."
      },
      {
        q: "Can solo travelers join this trip?",
        a: "Absolutely. Solo travelers are welcome and can choose either single-occupancy or shared accommodation options."
      },
      {
        q: "Are airport or railway station transfers provided?",
        a: "Yes. Arrival and departure transfers are provided as per the package inclusions and scheduled timings."
      },
      {
        q: "What type of accommodation is provided?",
        a: "Guests stay in a premium luxury beach resort with modern amenities, comfortable rooms, and easy access to nearby beaches."
      },
      {
        q: "Is this trip suitable for senior citizens?",
        a: "Yes. The itinerary is relaxed and includes comfortable transportation, making it suitable for senior travelers."
      },
      {
        q: "Can I customize the sightseeing itinerary?",
        a: "Customization may be possible for private groups, subject to availability and additional charges."
      },
      {
        q: "What is the best time to visit Goa?",
        a: "October to March is considered the best season, offering pleasant weather, beach activities, and vibrant local events."
      }
    ],
    testimonials: [
      // {
      //   quote:
      //     "It felt like luxury meets content creation. We got the weather and the photos looked unreal.",
      //   name: "Ethan M.",
      //   title: "Marketing Manager",
      // },
    ],
  },
  // {
  //   slug: "japan-tokyo-kyoto-inked-journeys",
  //   title: "Tokyo → Kyoto • Inked Journeys",
  //   destination: "Japan",
  //   overview:
  //     "A story-driven blend of neon nights, temple calm, and chef-curated dining—built for travelers who care about aesthetics.",
  //   tags: ["City Nights", "Culture", "Food", "Luxury"],
  //   priceFromUSD: 3490,
  //   durationDays: 9,
  //   groupSize: "10–14",
  //   imageHero: unsplash("photo-1549692520-acc6669e2f0c", 1800),
  //   imageThumb: unsplash("photo-1546302744-1c3bb2f0d0c9", 900),
  //   galleryImages: [
  //     unsplash("photo-1549692520-acc6669e2f0c", 1200),
  //     unsplash("photo-1548013146-72479768bada", 1200),
  //     unsplash("photo-1504754524776-8f4f37790ca0", 1200),
  //     unsplash("photo-1526481280695-3c687fd643ed", 1200),
  //     unsplash("photo-1526676037777-6a1a4a3f7e44", 1200),
  //     unsplash("photo-1511895426328-dc8714192c78", 1200),
  //     unsplash("photo-1503676260728-1c00da094a0b", 1200),
  //     unsplash("photo-1518837695005-2083093ee35b", 1200),
  //     unsplash("photo-1518544887873-1f6a1f9e4f7b", 1200),
  //   ],
  //   itinerary: [
  //     { day: 1, title: "Arrive • Neon welcome", detail: "First night in Tokyo with a curated skyline walk and ramen ritual.", highlights: ["Skyline stop", "Ramen tasting", "Photo moments"] },
  //     { day: 2, title: "Design district • Street styling", detail: "Aesthetic-led exploration with styling time and guided photo stops.", highlights: ["Styling time", "Market snacks", "Editorial route"] },
  //     { day: 3, title: "Temple calm • Slow morning", detail: "A gentle morning around iconic temples, ending with a tea pause.", highlights: ["Temple walk", "Tea ritual", "Local crafts"] },
  //     { day: 4, title: "Chef-led dining", detail: "A chef-curated meal paired with story and regional secrets.", highlights: ["Chef session", "Pairing notes", "Night stroll"] },
  //     { day: 5, title: "Kyoto transfer • Calm change", detail: "Switch the vibe: gardens, calm streets, and lantern-lit moments.", highlights: ["Garden time", "Lantern walk", "Guided photos"] },
  //     { day: 6, title: "Cultural storytelling day", detail: "Hands-on cultural experience plus a photography briefing for the best shots.", highlights: ["Hands-on session", "Photo briefing", "Local tasting"] },
  //     { day: 7, title: "Optional slow day", detail: "Choose between a scenic hike, spa afternoon, or craft shopping.", highlights: ["Choose your adventure", "Optional hike", "Recovery time"] },
  //     { day: 8, title: "Final night • Group story reel", detail: "We assemble your best moments with a final guided dinner.", highlights: ["Group dinner", "Story recap", "Reel-worthy photos"] },
  //     { day: 9, title: "Depart • Carry the ink", detail: "Breakfast and depart with your favorite memories ready to share.", highlights: ["Breakfast", "Departure transfer", "Photo handoff"] },
  //   ],
  //   included: ["Premium accommodations", "Guided experiences daily", "Breakfasts + select dinners", "Chef-led dining moments", "Photo handoff"],
  //   excluded: ["International flights", "Travel insurance", "Personal shopping"],
  //   faqs: [
  //     { q: "Do we travel a lot between cities?", a: "Yes—without stress. Transfers are planned so you experience the best of each place." },
  //     { q: "Is the pace hectic?", a: "It’s youthful but comfortable. We build breaks into every day." },
  //     { q: "Are meals included?", a: "Breakfasts and select dinners are included, with curated options for the rest." },
  //   ],
  //   testimonials: [
  //     { quote: "Everything felt like it was designed for us to remember. The dining stories were a highlight.", name: "Noah T.", title: "Operations" },
  //     { quote: "The group vibe was premium—elegant and fun. Kyoto at night was unreal.", name: "Mei W.", title: "Engineer" },
  //   ],
  // },
  // {
  //   slug: "greek-islands-blue-ceremony",
  //   title: "Greek Islands • Blue Ceremony",
  //   destination: "Greece",
  //   overview:
  //     "Whitewashed streets, sea-blue horizons, and a premium island rhythm for travelers who love storytelling.",
  //   tags: ["Islands", "Luxury", "Boat", "Romantic"],
  //   priceFromUSD: 2790,
  //   durationDays: 6,
  //   groupSize: "10–14",
  //   imageHero: unsplash("photo-1500375592092-40eb2168fd21", 1800),
  //   imageThumb: unsplash("photo-1502685104226-ee32379fefbe", 900),
  //   galleryImages: [
  //     unsplash("photo-1502685104226-ee32379fefbe", 1200),
  //     unsplash("photo-1500375592092-40eb2168fd21", 1200),
  //     unsplash("photo-1526772662000-3f88f10405ff", 1200),
  //     unsplash("photo-1506973035872-a4ec16b8ac7f", 1200),
  //     unsplash("photo-1469796466635-455ede028aca", 1200),
  //     unsplash("photo-1470770841072-f978cf4d019e", 1200),
  //     unsplash("photo-1451187580459-43490279c0fa", 1200),
  //     unsplash("photo-1496307653780-42ee777d4833", 1200),
  //     unsplash("photo-1516466723121-88c7c6e0ed52", 1200),
  //   ],
  //   itinerary: [
  //     { day: 1, title: "Arrive • Blue-hour welcome", detail: "A welcome walk through white streets and a rooftop aperitivo.", highlights: ["Blue hour", "Rooftop aperitivo", "Group introduction"] },
  //     { day: 2, title: "Island boat day", detail: "Sea-blue routes with swim stops and a deckside photo session.", highlights: ["Boat route", "Swim stop", "Photo session"] },
  //     { day: 3, title: "Chef-inspired dinner", detail: "A curated dining experience with local flavors and story context.", highlights: ["Local tasting", "Chef notes", "Night stroll"] },
  //     { day: 4, title: "Village storytelling", detail: "Guided village time with editorial photo opportunities.", highlights: ["Guided walk", "Editorial shots", "Craft shop"] },
  //     { day: 5, title: "Choose your day", detail: "Pick a relaxed spa morning, scenic hike, or sea-view café day.", highlights: ["Choose your adventure", "Recovery time", "Sea-view cafés"] },
  //     { day: 6, title: "Depart • Blue ceremony ends", detail: "Breakfast and depart with your group’s highlights ready to replay.", highlights: ["Breakfast", "Departure transfer", "Photo handoff"] },
  //   ],
  //   included: ["Premium island accommodations", "Boat day", "Breakfasts + select dinners", "Photo moments", "Transfers on-trip"],
  //   excluded: ["International flights", "Travel insurance", "Personal expenses"],
  //   faqs: [
  //     { q: "Is this suitable for first-time travelers?", a: "Yes. It’s friendly, story-led, and paced for comfort." },
  //     { q: "What’s the weather plan?", a: "We keep experiences flexible so you still get incredible views even if conditions shift." },
  //     { q: "Are there vegetarian options?", a: "Absolutely. We coordinate meal preferences with your group booking." },
  //   ],
  //   testimonials: [
  //     { quote: "It felt romantic without being cheesy. The group made it special.", name: "Chloe N.", title: "Brand Strategist" },
  //     { quote: "Every day had a visual story. The pacing felt luxurious and modern.", name: "Rahul P.", title: "Consultant" },
  //   ],
  // },
  // {
  //   slug: "switzerland-alpine-luxury-rail",
  //   title: "Swiss Alps • Alpine Luxury by Rail",
  //   destination: "Switzerland",
  //   overview:
  //     "Cinematic alpine views, modern rail comfort, and curated chalets—premium travel with an Instagram-ready finish.",
  //   tags: ["Alpine", "Rail", "Luxury", "Scenic"],
  //   priceFromUSD: 3790,
  //   durationDays: 8,
  //   groupSize: "10–14",
  //   imageHero: unsplash("photo-1501785888041-af3ef285b470", 1800),
  //   imageThumb: unsplash("photo-1441974231531-c6227db76b6e", 900),
  //   galleryImages: [
  //     unsplash("photo-1441974231531-c6227db76b6e", 1200),
  //     unsplash("photo-1501785888041-af3ef285b470", 1200),
  //     unsplash("photo-1506973035872-a4ec16b8ac7f", 1200),
  //     unsplash("photo-1470770841072-f978cf4d019e", 1200),
  //     unsplash("photo-1519681393784-d120267933ba", 1200),
  //     unsplash("photo-1491553895911-0055eca6402d", 1200),
  //     unsplash("photo-1451187580459-43490279c0fa", 1200),
  //     unsplash("photo-1516466723121-88c7c6e0ed52", 1200),
  //     unsplash("photo-1512918728675-ed5a9ecdebfd", 1200),
  //   ],
  //   itinerary: [
  //     { day: 1, title: "Arrive • Chalet welcome", detail: "Settle into a premium alpine stay and enjoy a curated first meal.", highlights: ["Chalet check-in", "Welcome tasting", "Stargazing intro"] },
  //     { day: 2, title: "Rail route day", detail: "Experience comfort-by-design rail routes with scenic stops and photo time.", highlights: ["Rail journey", "Scenic pauses", "Photo briefing"] },
  //     { day: 3, title: "Waterfalls & valleys", detail: "Guided valley time with optional short walks and cinematic viewpoints.", highlights: ["Valley views", "Optional walks", "Café stop"] },
  //     { day: 4, title: "Snow day (optional)", detail: "Choose between scenic snow activities or cozy spa recovery.", highlights: ["Choose your pace", "Spa time", "Mountain photography"] },
  //     { day: 5, title: "Lake serenity", detail: "A calm day around alpine lakes with an editorial lunch view.", highlights: ["Lake time", "Editorial lunch", "Golden hour photos"] },
  //     { day: 6, title: "Modern city + alpine edge", detail: "A sleek city day that balances the mountain mood.", highlights: ["City stroll", "Local craft", "Night ambience"] },
  //     { day: 7, title: "Final alpine moments", detail: "Your last guided moments—flexible for photos, shopping, or slow living.", highlights: ["Flexible final day", "Photo recap", "Group dinner"] },
  //     { day: 8, title: "Depart • Carry the altitude", detail: "Breakfast and depart with your group story ready to share.", highlights: ["Breakfast", "Departure transfer", "Photo handoff"] },
  //   ],
  //   included: ["Premium accommodations", "Rail-inspired curated experiences", "Breakfasts + select dinners", "Photo moments", "Transfers on-trip"],
  //   excluded: ["International flights", "Travel insurance", "Personal shopping"],
  //   faqs: [
  //     { q: "Is this mostly walking?", a: "It’s balanced. We include optional walk segments and frequent photo stops." },
  //     { q: "What about pace in colder months?", a: "We plan indoor recovery windows so you stay comfortable while still chasing the views." },
  //     { q: "How’s the group size?", a: "Typically 10–14, designed for easy movement and premium vibe." },
  //   ],
  //   testimonials: [
  //     { quote: "The rail day felt like a luxury experience movie scene. Premium from start to finish.", name: "Aisha D.", title: "Product Manager" },
  //     { quote: "We loved the balance of city edge and alpine calm. It was so well curated.", name: "Ben C.", title: "Founder" },
  //   ],
  // },
];

export function getTripBySlug(slug: string) {
  return trips.find((t) => t.slug === slug) ?? null;
}

