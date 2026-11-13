
import HeroSection from "../components/home/HeroSection.jsx";
import TravelPlanningSection from "../components/home/TravelPlanningSection.jsx";
import TrustedTravelSection from "../components/home/TrustedTravelSection.jsx";
import RecommendedTripsSection from "../components/home/RecommendedTripsSection.jsx";
import WhyChooseSection from "../components/home/WhyChooseSection.jsx";
import TestimonialSection from "../components/home/TestimonialSection.jsx";
import SpecialOfferSection from "../components/home/SpecialOfferSection.jsx";
import NewsletterSection from "../components/home/NewsletterSection.jsx";
import FeaturedDestinations from "../components/home/Featureddestinations.jsx";
import Footer from "../components/home/Footer.jsx";

import Header from "../components/common/Header.jsx";

export default function HomePage() {
  return (
    <>

      <main>
    <Header/>
        <HeroSection />
            <TravelPlanningSection />  
                    <FeaturedDestinations/>
              <TrustedTravelSection />
      
                 <RecommendedTripsSection />
                   <WhyChooseSection />
                     <TestimonialSection />
                           <SpecialOfferSection />
                             <NewsletterSection />
                             <Footer/>
         
      </main>
    </>
  );
}