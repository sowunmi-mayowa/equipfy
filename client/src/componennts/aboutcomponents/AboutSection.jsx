import React from 'react'

const AboutSection = () => {
  return (
    <div className='py-12 mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl'>
      <h2 className='text-3xl md:text-4xl font-bold text-eBlack mb-6'>About eQuipfy</h2>
      <p className='text-lg text-gray-700 mb-8'>
        Building Africa’s Most Trusted Equipment Marketplace.
      </p>
      <p className='text-base text-gray-600 mb-6'>
        At eQuipfy, we believe that building the future of Africa shouldn't be stalled by a lack of reliable machinery. Founded on the principle of radical transparency, we are solving the low-trust crisis in the used equipment market.
      </p>
      <p className='text-base text-gray-600 mb-6'>
        Buying or selling heavy machinery in Africa is traditionally a headache of unverified agents, hidden mechanical faults, and payment risks. eQuipfy was built to change that. We combine world-class technology with local expertise to ensure that every transaction is safe, fair, and efficient.
      </p>

      <h3 className='text-2xl font-semibold text-eBlack mb-4'>The eQuipfy Standard</h3>
      <p className='text-base text-gray-600 mb-6'>
        Transparency. Fairness. Guarantees. We don't just list machines; we verify them. We earn the trust of our partners through a safety-first approach, backed by technical data and a commitment to secure transactions.
      </p>

      <h3 className='text-2xl font-semibold text-eBlack mb-4'>Our Culture & Values</h3>
      <p className='text-base text-gray-600 mb-6'>
        Our values define how we serve the Nigerian construction and mining industries and how we set expectations for our team.
      </p>

      <div className='space-y-6'>
        <div>
          <h4 className='text-xl font-medium text-eBlack mb-2'>Integrity Over Commission</h4>
          <p className='text-base text-gray-600'>
            In a market full of middlemen, we choose to be partners. We provide honest valuations and unbiased technical reports. If a machine isn't right for your project, we tell you even if it costs us a sale.
          </p>
        </div>
        <div>
          <h4 className='text-xl font-medium text-eBlack mb-2'>Boots on the Ground</h4>
          <p className='text-base text-gray-600'>
            We don’t just operate from behind a screen. To solve African infrastructure challenges, you have to get your hands dirty. Our inspectors are in the yards, on the sites, and at the ports, ensuring that what you see online is exactly what is delivered to your site.
          </p>
        </div>
        <div>
          <h4 className='text-xl font-medium text-eBlack mb-2'>Solving for Low Trust</h4>
          <p className='text-base text-gray-600'>
            We recognize the risks of the local market. That’s why we’ve built a security-first workflow. From escrow payment protection to 150-point physical inspections, we remove the fear factor from used heavy equipment trading.
          </p>
        </div>
        <div>
          <h4 className='text-xl font-medium text-eBlack mb-2'>Empowering African Growth</h4>
          <p className='text-base text-gray-600'>
            We aren't just selling bulldozers; we are fueling development. By making high-quality used equipment affordable and accessible, we help local contractors compete on a global scale and complete projects on time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection