import Home from "./Home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Waterproofing Contractor in Dubai & UAE",
  description: "ISFS Technical Services LLC provides roof, PU and membrane waterproofing, epoxy flooring and building maintenance in Dubai and across the UAE. Request a quote.",
  path: "",
  translatedHome: true,
});

export default function HomePage() {
  return <Home />;
}
