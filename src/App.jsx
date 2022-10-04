import roseDiag from './images/rose-diagonal.png';
import interRoses from './images/rose-double.png';
import finalRoses from './images/rose-four.png';


import heroSmall from './images/hero.png';
import redHouse from './images/house.png';
import driveWay from './images/mulch.png';

import HeroText from './components/heroText';
import ImageCard from './components/imageCard';
import SectionDividerIcon from './components/sectionDividerIcon';
import Paragraph from './components/paragraph';
import StarterParagraph from './components/starterParagraph'
import MainHeader from './components/mainHeader';
import Gallery from './components/gallery';

import PhoneIcon from './components/phoneIcon';
import EmailIcon from './components/emailIcon';


function App() {
  return (
    <div className='bg-gradient-to-r from-teal-200 to-green-200 -green-200 h-screen py-2 px-2 overflow-y-hidden'>
      <div
        className="h-full overflow-y-scroll no-scrollbar overflow-x-clip scroll bg-gradient-to-br from-green-500 to-teal-600 
        text-white font-['Spectral'] mx-auto rounded-md
        shadow-black shadow-sm max-w-5xl"
      >
        <figure className='h-full mb-4'>
           <img className='h-1/2 self-start sm:hidden' src={roseDiag} alt="Diagonal rose." />
           <div className='h-1/2 hidden sm:flex sm:justify-between'>
            <img className='' src={roseDiag} alt="Diagonal rose." />
            <img className='h-2/3 rotate-[135deg] mt-52' src={roseDiag} alt="Diagonal rose." />
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
            text="White Flower is a landscaping firm dedicated to keeping your garden beautiful, whatever the season. 
            We're based in the Loudoun and Fauquier County, VA area." 
          />

          <ImageCard src={redHouse} alt="Garden with red house."/>

          <Paragraph
            text="Whether we're starting from scratch or there's already something to work with,
              we'll quickly get to work on your garden goals."
          />

          <ImageCard src={driveWay} alt='A driveway by a garden' />

          <Paragraph
            text="Once the initial job is done, we can set up a maintenance schedule. 
            We also cover garden beds with compost, when they come to need it. And more!"
          />

          <SectionDividerIcon src={interRoses}/>
          
          <MainHeader text="Gallery" />

          <Gallery />

          <SectionDividerIcon src={interRoses}/>

          <MainHeader text="Contact Us" />

          <div className='my-16'>
            <p className='flex items-center justify-center mb-6'>
              <PhoneIcon />
              <a href="tel:+">540 316 7059</a>
            </p>
            <p className='flex items-center justify-center'>
              <EmailIcon />
              <a href="mailto:">noelmachado868@gmail.com</a>
            </p>
          </div>
          

          <SectionDividerIcon src={finalRoses} imgClasses="rotate-90"/>

        </div>
        
        
          
      </div>
    </div>

  );
}

export default App;
