import React from 'react'
import Opportunity from './../components/Opportunity'
import OpportunityWide from './../components/OpportunityWide'
import opportunities from '../OpportunitiesJSON'
import { FaArrowRight } from 'react-icons/fa'

const HomeScreen = () => {
  //get top few opportunities
  var opportunitiesTop = opportunities.slice(0, 3)

  return (
    <>
      <div className='bg-slate-900'>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='lg:flex'>
            <div className='lg:w-1/2'>
              <h1 className='text-4xl font-extrabold tracking-tight text-gray-200 mb-4'>
                Connecting you with opportunities
              </h1>

              {/* <h1 className="font-bold text-lg"></h1> */}
              <p className='text-gray-200'>
                Parvoz helps connect the youth in Tajikistan with top
                educational opportunities. We believe in a bright future for the
                country, and the youth will help make that happen!
              </p>
            </div>
            <div className='lg:w-1/3 px-12 py-6 min-w-640 '>
              <Opportunity
                opportunity={opportunities[0]}
                className='min-w-full'
              />
            </div>
          </div>
          <h1 className='text-3xl font-extrabold tracking-tight text-gray-200 mb-8'>
            Recent Opportunities Posted
          </h1>

          <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
            {opportunitiesTop.map((opportunity) => (
              <Opportunity opportunity={opportunity} />
            ))}
          </div>
          <a
            href='/opportunities'
            className='flex items-center justify-center mt-6 text-lg text-gray-200'
          >
            View more opportunities <FaArrowRight className='ml-2' />
          </a>

          <h1 className='text-3xl font-extrabold tracking-tight text-gray-200 mb-8'>
            Most Popular Courses
          </h1>
          <OpportunityWide
            opportunity={opportunities[3]}
            className='min-w-full'
          />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
