import About from "@/components/layout/about/About";
import ContactForm from "@/components/sections/contact/ContactForm";
import Header from "@/components/layout/header/Header";
import { Icon } from "@/components/ui/icon/Icon";
import ProjectList from "@/components/projects/project-list/ProjectList";
import Section from "@/components/sections/section/Section";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import ThemeToggle from "@/components/ui/theme-toggle/ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Spotlight from "@/components/layout/spotlight/Spotlight";

export default function Home() {
  return (
    <ThemeProvider>
      <Spotlight/>
      <div className="container px-6 md:px-12">
        <div className="lg:flex lg:justify-between lg:gap-4">

          <div className="py-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between">
            <Header/>
            <Sidebar/>
            <ul className="flex gap-4 mt-6 text-2xl">
              <li className="shrink-0"><Link className="block w-fit" target="_blank" href={"https://github.com/raph-bard"}><Icon name="github"/></Link></li>
              <li className="shrink-0"><Link className="block w-fit" target="_blank" href={"https://www.linkedin.com/in/rapha%C3%ABl-bard-8b1ba2133/"}><Icon name="linkedin"/></Link></li>
            </ul>
          </div>

          <main className="flex min-h-screen items-center justify-center lg:w-[52%]">
            <div className="container pt-24">
              <Section id="about">
                <About className="pb-16" />
              </Section>
              <Section id="projects">
                <ProjectList />
              </Section>
              <Section id="contact">
                <ContactForm />
              </Section>
            </div>
          </main>

        </div>
      </div>
    </ThemeProvider>
  );
}
