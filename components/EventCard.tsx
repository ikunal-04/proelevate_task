import React from 'react'

const EventCard = ({name, description, date}: {name: string, description: string, date: string}) => {
  return (
    <div className='flex gap-4 p-6 bg-gray-50 hover:bg-gray-100 hover:shadow-lg rounded-xl hover:border-gray-50 cursor-pointer w-full'>
        <div className='flex rounded-full bg-muted justify-center items-center h-10 w-10'>
            {name.slice(0, 1)}
        </div>
        <div>
            <div className='text-lg font-bold'>
                {name}
            </div>
            <div>
                {description}
            </div>
            <div>
                {date}
            </div>
        </div>
    </div>
  )
}

export default EventCard
