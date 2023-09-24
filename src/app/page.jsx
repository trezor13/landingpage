import Home from './components/Home/Home';
import Other from './components/Other/Other';
import Projects from './components/Projects/Projects';
import InterestsSection from './components/interests/InterestsSection';
import Team from './components/Team/Team';
import Advisors from './components/Advisors/Advisors';
import Partners from './components/Partners/Partners';
import Spark from './components/Spark/Spark';
import Footer from './components/Footer/Footer';

export default function Page() {
  return (
    <div className="bg-[#202124] text-white font-sans h-full">
      <Home />
      
      <div className="px-[3.5%] h-[100%] bg-[#081c1b]">
        <InterestsSection />
        <Projects />
      </div>
      <Other />
      <div className="px-[3.5%] h-[100%] bg-[#081c1b]">
        <Team />
        <Advisors />
        <Partners />
        <Spark />
        <Footer />
      </div>

      
    </div>
  );
}
