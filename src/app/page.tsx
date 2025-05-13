import About from "@/components/layout/about/About";
import ContactForm from "@/components/sections/contact/ContactForm";
import ProjectList from "@/components/projects/project-list/ProjectList";
import Section from "@/components/sections/section/Section";

export default function Home() {
  return (
    <>
      <Section id="about">
        <About className="pb-16" />
      </Section>
      <Section id="projects">
        <ProjectList />
      </Section>
      <Section id="contact">
        <ContactForm />
      </Section>
    </>
  );
}
