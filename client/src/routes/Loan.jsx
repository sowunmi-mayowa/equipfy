import React from 'react'
import { loanHeroImg, dollarIcon } from '../assets'
import { buyImg11, buyImg12, buyImg8, searchImg1 } from '../assets'
import { FiArrowUpRight, FiMap } from 'react-icons/fi'
import { FaCheck, FaPlus, FaRegCalendarCheck } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi"
import Hr from '../componennts/Hr';
import BuyCard from '../componennts/BuyCard';
import Footer from '../componennts/Footer';
import { Link} from 'react-scroll';
import { Link  as Lin  } from 'react-router-dom';
import LazyLoad from '../componennts/LazyLoad';

const LoanCalculator = () => {
  const [price, setPrice] = React.useState(0);
  const [down, setDown] = React.useState(20);
  const [rate, setRate] = React.useState(18);
  const [term, setTerm] = React.useState(36);

  const principal = price - (price * (down / 100));
  const monthlyRate = rate / 100 / 12;
  const months = term;
  const monthly = price > 0 && months > 0
    ? ((principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))).toFixed(0)
    : 0;

  return (
    <div className="bg-[#F7F7F6] p-6 rounded-md max-w-xl mx-auto mt-8">
      <h4 className="font-bold text-lg mb-4 text-eBlack">Loan Calculator</h4>
      <div className="flex flex-col gap-4">
        <label className="font-medium">Equipment Price (₦)
          <input type="number" className="w-full p-2 border mt-1" value={price} min={0} onChange={e => setPrice(Number(e.target.value))} />
        </label>
        <label className="font-medium">Down Payment (%)
          <input type="number" className="w-full p-2 border mt-1" value={down} min={0} max={90} onChange={e => setDown(Number(e.target.value))} />
        </label>
        <label className="font-medium">Interest Rate (% per annum)
          <input type="number" className="w-full p-2 border mt-1" value={rate} min={10} max={40} step={0.1} onChange={e => setRate(Number(e.target.value))} />
        </label>
        <label className="font-medium">Term (months)
          <input type="number" className="w-full p-2 border mt-1" value={term} min={12} max={60} onChange={e => setTerm(Number(e.target.value))} />
        </label>
        <div className="font-bold text-eBlack text-lg mt-2">Estimated Monthly Payment: ₦{monthly}</div>
      </div>
    </div>
  );
};

const Loan = () => {
  return (
    <div>
      <div className="pt-8 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl">
        <h1 className="text-eBlack text-2xl md:text-4xl lg:text-6xl text-center font-semibold font-plex mb-4">Financing Built for Your Ambition.</h1>
        <p className="text-center text-[#747474] font-aeonik text-lg md:text-xl max-w-2xl mx-auto mb-4">Get pre-qualified for an equipment loan in 5 minutes—without slowing down your operations.</p>
        <h2 className="text-eBlack text-xl md:text-2xl font-bold text-center mt-8 mb-2">Discover the Possibilities Within Your Budget</h2>
        <p className="text-center text-[#747474] font-aeonik text-base md:text-lg max-w-2xl mx-auto mb-4">Are you trying to figure out which machine fits your current capital? You can now find out exactly how much you qualify for before you even start your application. We’ll present you with a list of eligible equipment based on your status.</p>
        <div className="flex justify-center mb-8">
          <Lin to="/loan-form">
            <button className="bg-eBlack text-white px-6 py-3 rounded font-bold text-base flex items-center gap-2">Get Prequalified <FiArrowUpRight className="text-lg" /></button>
          </Lin>
        </div>
        <div className="bg-eYellow rounded-md p-6 mb-8">
          <h3 className="text-eBlack text-lg md:text-2xl font-bold mb-2">How It Works: 3 Steps to Funding</h3>
          <ol className="list-decimal ml-6 text-[#747474] font-aeonik text-base md:text-lg">
            <li className="mb-2"><span className="font-bold text-eBlack">Identify Yourself:</span> Provide your basic professional details to help us understand your business needs.</li>
            <li className="mb-2"><span className="font-bold text-eBlack">Confirm Your Eligibility:</span> Complete a short form with your business details and BVN to calculate your pre-qualification limit.</li>
            <li><span className="font-bold text-eBlack">Browse Your Eligible Fleet:</span> Access a personalized page showing all the equipment you can finance today based on your pre-qualification status.</li>
          </ol>
        </div>
        <div className="mb-8">
          <h3 className="text-eBlack text-lg md:text-2xl font-bold mb-2">Why Finance with eQuipfy?</h3>
          <ul className="list-disc ml-6 text-[#747474] font-aeonik text-base md:text-lg">
            <li className="mb-2"><span className="font-bold text-eBlack">Approvals up to ₦1.5 Billion:</span> Scalable funding for everything from single units to entire fleet expansions.</li>
            <li className="mb-2"><span className="font-bold text-eBlack">Diverse Lender Network:</span> We partner with leading Nigerian banks and asset-finance fintechs to find the best program for your business.</li>
            <li className="mb-2"><span className="font-bold text-eBlack">Zero-Impact Pre-Qualification:</span> Check your eligibility without affecting your professional credit standing.</li>
            <li><span className="font-bold text-eBlack">Flexible Payment Terms:</span> Choose terms from 12 to 60 months with competitive interest rates.</li>
          </ul>
        </div>
        <LoanCalculator />
      </div>
      <Footer />
    </div>
  );
}

export default Loan