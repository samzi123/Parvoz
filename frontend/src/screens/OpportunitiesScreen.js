import React from 'react'
import Opportunity from './../components/Opportunity'
import OpportunityWide from './../components/OpportunityWide'
import opportunities from '../OpportunitiesJSON'
import { FaArrowRight } from 'react-icons/fa';

const OpportunitiesScreen = () => {
  return (
      <>
        <div className="bg-slate-900">
            <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-200 mb-8">Opportunities</h1>

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {opportunities.map((opportunity) => (
                      <Opportunity opportunity={opportunity}/>
                    ))}
                    
                </div>
            </div>
        </div>
    
    </>
  )
}

export default OpportunitiesScreen