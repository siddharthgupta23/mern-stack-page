
import GlobalPresence from "../components/GlobalPresence"
import BlogPosts from "../components/BlogPosts"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import Certifications from "../components/Certifications"
import DrivingResults from "../components/DrivingResults"
import Partnerss from "../components/partnerspage"
import Partners_pageee from "../components/partners_pageee"
import OnboardingSteps from "../components/onboarding"
import PreferredPartners from "../components/preferrred_partners" 
import "./home.scss"
const Partners = () => {
  return (
    <div className="pt-16">
      {" "}
      {/* Add padding-top to account for fixed navbar */}
     <Partnerss/>
     <Partners_pageee/>
      <GlobalPresence />
      <OnboardingSteps/>
     <PreferredPartners/>
      <Certifications/>
      
     
      <DrivingResults/>
      <BlogPosts />
      <CallToAction />
      <Footer />
    </div>
  )
}
export default Partners