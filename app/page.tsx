import { Navbar } from "@/components/Navbar";
import { PremiumHome } from "@/components/PremiumHome";
import { SkipLink } from "@/components/SkipLink";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  return <><SkipLink /><StructuredData /><Navbar /><div id="main-content"><PremiumHome /></div></>;
}