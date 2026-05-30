import TripsListingClient from "../../components/TripsListingClient";
import { trips } from "../../lib/data/trips";

export const metadata = {
  title: "Trips • Infinity Tripsters",
  description: "Filter premium group travel experiences.",
};

export default function TripsPage() {
  return <TripsListingClient trips={trips} />;
}

