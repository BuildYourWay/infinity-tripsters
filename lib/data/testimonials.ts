export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number; // 1-5
};

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Aanya S.",
    title: "Software Lead",
    rating: 5,
    quote:
      "Infinity Tripsters felt like a private film set—every day had a story, and every detail was handled.",
  },
  {
    id: "t-2",
    name: "Marco R.",
    title: "Product Designer",
    rating: 5,
    quote:
      "The group energy was unmatched. We traveled with taste, style, and zero stress. The photos are unreal.",
  },
  {
    id: "t-3",
    name: "Priya K.",
    title: "Founder",
    rating: 5,
    quote:
      "From itinerary pacing to local experiences, it was premium through and through. Already planning our next trip.",
  },
];

