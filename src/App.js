import roseDiag from './images/accessories/rose-diagonal.png';
import interRoses from './images/accessories/rose-double.png';
import finalRoses from './images/accessories/rose-four.png';


import heroSmall from './images/hero-small.JPG';
import redHouse from './images/gardens/red-house.jpg';
import driveWay from './images/gardens/driveway.jpg';

import HeroText from './components/heroText';
import ImageCard from './components/imageCard';
import SectionDividerIcon from './components/sectionDividerIcon';
import Paragraph from './components/paragraph';
import StarterParagraph from './components/starterParagraph'
import MainHeader from './mainHeader';





function App() {
  return (
    <div className='bg-red-200 h-screen py-2 overflow-y-hidden shadow m-w-[380px]'>
      <div
        className="h-full overflow-y-scroll bg-rose-600
        text-red-200 font-['Spectral'] mx-2 rounded-md
        shadow-red-800 shadow-md"
      >
        <figure className='flex flex-col h-full mb-4'>
           <img className='h-1/2 self-start sm:hidden' src={roseDiag} alt="Diagonal rose." />
           <div className='h-1/2 hidden sm:flex'>
            <img className='' src={roseDiag} alt="Diagonal rose." />
            <img className='rotate' src={roseDiag} alt="Diagonal rose." />
           </div>

          <div className="h-1/2 shrink-0 flex flex-col justify-center items-stretch mx-auto px-10 max-w-[340px] min-w-[340px] font-['Aref Ruqaa Ink']">
            <HeroText text="White" classes='self-start mb-5' />
            <HeroText text="Flower" classes="self-end ml-2" />
          </div>
        </figure>
       
        <div className='mx-4'>
          <ImageCard src={heroSmall} alt="A woman tending a garden."/>

          <MainHeader text="About Us" />

          <StarterParagraph
            text="White Flower is a landscaping firm dedicated to keeping your garden in tip top shape, whatever the season. 
            We're based in the Loudoun and Fauquier County, VA area." 
          />

          <ImageCard src={redHouse} alt="Garden with red house."/>

          <Paragraph
            text="We provide many services in order to ensure a neat and healthy garden. 
            We can start by having a conversation about your goals. 
            Optionally, we'll provide you with a quick draw up of the design. 
            Then we'll get started."
          />

          <ImageCard src={driveWay} alt='A driveway by a garden' />

          <Paragraph
            text="Once the initial job is done, we can set up a maintenance schedule. 
            We also cover garden beds with compost when they come to need it."
          />

          <SectionDividerIcon src={interRoses}/>
          
          <MainHeader text="Gallery" />

          <SectionDividerIcon src={interRoses}/>

          {/* <Gallery /> */}

          <MainHeader text="Contact Us" />

          <SectionDividerIcon src={finalRoses} imgClasses="rotate-90"/>

        </div>
        
        
          
      </div>
    </div>

  );
}

export default App;
