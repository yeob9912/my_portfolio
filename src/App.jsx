import Contact from "./components/Contact"
import Home from "./components/Home"
import Layout from "./components/Layout"
import Project from "./components/Project"
import Skills from "./components/Skills"
import About from "./components/About"
import FadeInSection from "./components/FadeInSection"

function App() {
  return (
    <>
      <Layout>
        {/* ABOUT SECTIONS (Hero Intro + Detailed About Columns) */}
        <FadeInSection>
          <Home/>
        </FadeInSection>
        <FadeInSection>
          <About/>
        </FadeInSection>
        
        {/* SKILLS SECTION */}
        <FadeInSection>
          <Skills/>
        </FadeInSection>
        
        {/* PROJECTS SECTION */}
        <FadeInSection>
          <Project/>
        </FadeInSection>
        
        {/* CONTACT SECTION */}
        <FadeInSection>
          <Contact/>
        </FadeInSection>
      </Layout>
    </>
  )
}

export default App
