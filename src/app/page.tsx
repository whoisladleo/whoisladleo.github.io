import NavMenu from "@/components/nav-menu";
import Welcome from "@/components/welcome";
import { navItems, portfolioItems } from "@/lib/data";
import Skills from "@/components/skills";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavMenu links={navItems}/>
        <Welcome/>
        <Skills/>
        <Portfolio items={portfolioItems}/>
    </div>
  );
}
