export type GalleryItem = {
  id: string;
  title: string;
  location: string;
  image: string;
  tag: string;
};

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Aurora Desk Light", location: "Iceland", tag: "Aurora", image: img("photo-1447752875215-b27642fc2c5a") },
  { id: "g2", title: "Cliffside Aperitivo", location: "Amalfi", tag: "Coast", image: img("photo-1523906834658-6e24ef2386f9") },
  { id: "g3", title: "Neon Night Walk", location: "Tokyo", tag: "City", image: img("photo-1549692520-acc6669e2f0c") },
  { id: "g4", title: "White Streets Glow", location: "Greece", tag: "Islands", image: img("photo-1502685104226-ee32379fefbe") },
  { id: "g5", title: "Alpine Rail Comfort", location: "Switzerland", tag: "Alpine", image: img("photo-1501785888041-af3ef285b470") },
  { id: "g6", title: "Lantern Calm", location: "Kyoto", tag: "Culture", image: img("photo-1511895426328-dc8714192c78") },
  { id: "g7", title: "Golden Waterfall Frame", location: "Iceland", tag: "Nature", image: img("photo-1491553895911-0055eca6402d") },
  { id: "g8", title: "Boat Deck Sunset", location: "Amalfi", tag: "Boat", image: img("photo-1500375592092-40eb2168fd21") },
  { id: "g9", title: "Mountain Spa Recovery", location: "Switzerland", tag: "Spa", image: img("photo-1516466723121-88c7c6e0ed52") },
  { id: "g10", title: "Chef-led Dining Notes", location: "Italy", tag: "Food", image: img("photo-1469796466635-455ede028aca") },
  { id: "g11", title: "Cinematic Valley Views", location: "Switzerland", tag: "Scenic", image: img("photo-1441974231531-c6227db76b6e") },
  { id: "g12", title: "Lemon Garden Texture", location: "Amalfi", tag: "Local", image: img("photo-1526772662000-3f88f10405ff") },
];

