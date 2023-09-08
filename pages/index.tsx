import { Stack } from "@mui/material";
import About from "../src/components/pages/index/About";
import FAQ from "../src/components/pages/index/FAQ";
import Footer from "../src/components/pages/index/Footer";
import RoadmapSegment from "../src/components/pages/index/RoadmapSegment";
import Team from "../src/components/pages/index/Team";
import Tools from "../src/components/pages/index/Tools";
import BigBanner from "../src/components/shared/BigBanner";

export default function Home() {
  return (
    <Stack>
      <BigBanner />
      <Tools />
      <About />
      <RoadmapSegment />
      <Team />
      <FAQ />
      <Footer />
    </Stack>
  );
}
