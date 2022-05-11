import React from 'react'

const Opportunity = ({ opportunity }) => {
    return (
        <div className="min-w-full">
        <div
        key={opportunity.id}
        className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden justify-left text-left items-center"
        >
            <div className="aspect-auto h-64 bg-gray-200 group-hover:opacity-75 sm:aspect-none">
                    <img
                    src={opportunity.imageSrc}
                    alt={opportunity.imageAlt}
                    className="object-center object-cover sm:h-full h-64"
                    />
                </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col justify-left text-left w-full">
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

export default Opportunity