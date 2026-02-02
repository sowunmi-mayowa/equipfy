import React from 'react'
import Newsletter from '../componennts/aboutcomponents/Newsletter'
import Reviews from '../componennts/aboutcomponents/Reviews'
import Footer from '../componennts/Footer'
import LazyLoad from '../componennts/LazyLoad'
import { aboutHero, shieldIcon, userIcon, heartIcon, stockIcon, alex, kenny, triumph, bukharee, mayowa, samson, nannim, grace } from '../assets'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <div className='pt-8 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <p className='text-eYellow text-base font-semibold'>About Us</p>
          <h1 className='text-eBlack text-xl md:text-2xl lg:text-6xl text-center font-semibold font-plex md:leading-8'>About eQuipfy</h1>
          <p className='max-w-lg text-center text-[#747474] font-aeonik text-base font-medium'>Building Africa’s Most Trusted Equipment Marketplace.</p>
        </div>
      </div>
      <div className='my-8 flex justify-center items-center'>
        <LazyLoad image={aboutHero} alt="heroimg" />
      </div>
      <div className='pt-8 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-eBlack font-aeonik text-xl md:text-[36px] md:leading-[40px] mb-2 font-bold max-w-3xl'>The eQuipfy Standard</h1>
          <p className='text-gray-600 text-base font-medium'>Transparency. Fairness. Guarantees. We don't just list machines; we verify them. We earn the trust of our partners through a "Safety-First" approach, backed by technical data and a commitment to secure transactions.</p>
        </div>
        <div className='my-8'>
          <div className='flex flex-col lg:flex-row items-baseline justify-center gap-10'>
            <div className='flex flex-col justify-center items-center text-center'>
              <img src={shieldIcon} alt="icon" className='w-14 h-14 mb-4' />
              <h4 className='text-lg font-medium'>Integrity Over Commission</h4>
              <p className='text-base text-gray-500 font-aeonik text-center font-normal'>In a market full of middlemen, we choose to be partners. We provide honest valuations and unbiased technical reports. If a machine isn't right for your project, we tell you even if it costs us a sale.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <img src={userIcon} alt="icon" className='w-14 h-14 mb-4' />
              <h4 className='text-lg font-medium'>Boots on the Ground</h4>
              <p className='text-base text-gray-500 font-aeonik text-center font-normal'>We don’t just operate from behind a screen. To solve African infrastructure challenges, you have to "get your hands dirty." Our inspectors are in the yards, on the sites, and at the ports, ensuring that what you see online is exactly what is delivered to your site.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <img src={heartIcon} alt="icon" className='w-14 h-14 mb-4' />
              <h4 className='text-lg font-medium'>Solving for Low Trust</h4>
              <p className='text-base text-gray-500 font-aeonik text-center font-normal'>We recognize the risks of the local market. That’s why we’ve built a "Security-First" workflow. From escrow payment protection to 150-point physical inspections, we remove the "fear factor" from heavy equipment trading.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <img src={stockIcon} alt="icon" className='w-14 h-14 mb-4' />
              <h4 className='text-lg font-medium'>Empowering African Growth</h4>
              <p className='text-base text-gray-500 font-aeonik text-center font-normal'>We aren't just selling tractors; we are fueling development. By making high-quality equipment affordable and accessible, we help local contractors compete on a global scale and complete projects on time.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFB] py-8">
        <div className='mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
          <div className='flex flex-col justify-center items-center gap-4 mb-8'>
            <h1 className='text-eBlack font-aeonik text-xl md:text-[36px] md:leading-[40px] mb-2 font-bold max-w-3xl'>Our Story</h1>
          </div>
          <div className='flex flex-col md:flex-row items-start gap-8'>
            <div className='bg-white p-4 flex-shrink-0'>
              <div className='max-w-[250px]'>
                <img src={alex} alt="team" className='w-full h-full' />
              </div>
              <div className='font-aeonik py-4 text-[#121212]'>
                <p className='text-base'>Alexander C. Ovabor</p>
                <p className='text-base'>Founder & CTO</p>
              </div>
              <div className='flex gap-2 text-xl text-[#98A2B3]'>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
            <div className='flex-1'>
              <h2 className='text-2xl font-bold text-eBlack mb-4'>Why transparency in heavy equipment matters to us.</h2>
              <div className='text-gray-700 leading-relaxed space-y-4'>
                <p>
                  The idea for eQuipfy started within my own family. I watched my father manage his heavy equipment business in Nigeria and realized that finding reliable machinery and support was much harder than it should be. My siblings and I grew up helping him and saw firsthand that the industry was held back by a lack of trust and transparency.
                </p>
                <p>
                  We built eQuipfy to fix the core problems that equipment owners and operators face every day across Sub-Saharan Africa. Many owners have expensive machines sitting idle because they cannot find enough work or reliable buyers. At the same time, businesses struggle to find quality heavy equipment at fair prices. Traditional brokers often make this worse by hiding information or failing to guarantee the quality of the machines.
                </p>
                <p>
                  Our goal is to be the most trusted platform for heavy equipment sales and rentals. We go beyond just connecting people by taking responsibility for the quality of the gear. We perform 180-point inspections on every piece of equipment listed so that you know exactly what you are getting before you pay. We also provide secure contracts and insurance verification to protect your investment.
                </p>
                <p>
                  As we grow, we are expanding our mission to simplify the parts ordering process and repair services for heavy equipment fleets. By providing better supplier access and centralized communication in one platform, we aim to eliminate the downtime that keeps machines offline. Our vision includes a future where every fleet owner has access to digital tools and telematics to track their machines and manage maintenance from anywhere.
                </p>
                <p>
                  eQuipfy is built by people who understand this industry from the ground up. We are here to ensure that the equipment and parts you need are ready when you need them so you can focus on your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default About