import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Layout from "./components/Layout"
import Project from "./components/Project"
import Skills from "./components/Skills"
function App() {

  return (
    <>
      <Layout>
         <Home/>
         <Skills/>
         <Project/>
         <Contact/>
         <Footer/>
      </Layout>
    </>
  )
}

export default App
