import React from 'react'

const OpportunityWide = ({ opportunity }) => {
    return (
        <div className="grid grid-cols-2 min-w-full justify-left">
        <div
        key={opportunity.id}
        className="bg-white border border-gray-200 rounded-lg overflow-hidden justify-left text-left items-left grid grid-cols-2 justify-left"
        >
            <div className="aspect-auto h-64 bg-gray-200 group-hover:opacity-75 sm:aspect-none w-1/2 justify-left">
                <img
                src={opportunity.imageSrc}
                alt={opportunity.imageAlt}
                className="object-left object-cover sm:h-full h-64"
                />
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col justify-left text-left w-1/2">
                <h3 className="text-sm font-medium text-gray-900">
                <a href={opportunity.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {opportunity.name}
                </a>
                </h3>
                <p className="text-sm text-gray-500 h-20">{opportunity.description}</p>
                <div className="flex-1 flex flex-col justify-end">
                <p className="text-sm italic text-gray-500">{opportunity.notes}</p>
                </div>
            </div>
        </div>
        </div>
        )
}

export default OpportunityWide