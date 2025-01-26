
import Hero from "../components/Hero"
import CompanyLogos from "../components/CompanyLogos"
import Benefits from "../components/Benefits"
import GlobalPresence from "../components/GlobalPresence"
import Stats from "../components/Stats"
import CaseStudies from "../components/CaseStudies"
import BlogPosts from "../components/BlogPosts"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import Certifications from "../components/Certifications"
import DrivingResults from "../components/DrivingResults"
import "./home.scss"
const Home = () => {
  return (
    <div className="pt-16">
      {" "}
      {/* Add padding-top to account for fixed navbar */}
      <Hero />
      <CompanyLogos />
      <Benefits />
      <GlobalPresence />
      <Certifications/>
      <Stats />
      <CaseStudies />
      <BlogPosts />
      <DrivingResults/>
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home

