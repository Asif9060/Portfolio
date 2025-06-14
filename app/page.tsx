
// import me from "../app/HomePage/Images/ai-generated-8035998.png"
import Nav from '../app/HomePage/Nav';
import Hero from '../app/HomePage/Hero';
import SkillsShowcase from '@/components/SkillsShowcase';
import ProjectShowcase from './HomePage/ProjectsShowcase';
import Contact from './HomePage/Contact';
import Footer from './HomePage/Footer';
import MobileHero from './HomePage/MobileHero';
export default function Home() {
  return (
    <div className='scroll'>
      <Nav></Nav>
      <MobileHero></MobileHero>
      <Hero></Hero>
      <SkillsShowcase></SkillsShowcase>
      <ProjectShowcase />
      <Contact></Contact>
      <Footer></Footer>
      

    </div>
  );
}
