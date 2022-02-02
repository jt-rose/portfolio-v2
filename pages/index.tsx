import { Head } from "../components/Head";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Skills } from "../components/Skills";
import { AboutMe } from "../components/AboutMe";
import { ProjectsModal, ProjectsListing } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
//import Gallery from "../components/Gallery";

//const Index = () => <Gallery />;

// main
// components
// /main

const Index = () => {
  return (
    <main>
      <Head />
      <Header />
      <Intro />
      <Skills />
      <AboutMe />
      <ProjectsModal />
      <ProjectsListing />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
