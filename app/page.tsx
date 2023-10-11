import { Navbar } from "./_pages/Navbar";
import { Hero } from "./_pages/Hero";
import { About } from "./_pages/About";
import { Skills } from "./_pages/Skills";
import { Projects } from "./_pages/Projects";
import { Other } from "./_pages/Other";
import { Education } from "./_pages/Education";
import { Contact } from "./_pages/Contact";

interface Projects {
  id: Number;
  title: String;
  description: String;
  isFeatured: Boolean;
  github: String;
  deploy: String;
  image: String;
  tech_stack: Array<String>;
}

export default async function Home() {
  //const projects: Array<Projects> = await FetchAPI.getAllProjects();

  return (
    <main className="max-w-5xl px-7 text-white sm:px-10 xl:max-w-6xl">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Other />
      <Education />
      <Contact />
    </main>
  );
}
