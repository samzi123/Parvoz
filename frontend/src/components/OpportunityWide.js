import React from 'react'

const OpportunityWide = ({ opportunity }) => {
    return (
        <a href={opportunity.href}>

        <div className="flex flex-col w-full justify-left">
        <div
        key={opportunity.id}
        className="bg-white border border-gray-200 rounded-lg overflow-hidden justify-left text-left items-left justify-left inline-block"
        >
            <div className="aspect-auto h-80 bg-gray-200 group-hover:opacity-75 sm:aspect-none justify-left inline-block">
                <img
                src={opportunity.imageSrc}
                alt={opportunity.imageAlt}
                className="object-left object-cover sm:h-full h-64"
                />
            </div>
            <div className="p-4 space-y-2 justify-left text-left inline-block align-top">
                <h3 className="text-lg font-lg text-gray-900">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {opportunity.name}
                </h3>
                <p className="text-md text-gray-500">{opportunity.description}</p>
                <div className="justify-end">
                <p className="text-md italic text-gray-500">{opportunity.notes}</p>
                </div>
            </div>
        </div>
        </div>
        </a>

        )
}

export default OpportunityWide