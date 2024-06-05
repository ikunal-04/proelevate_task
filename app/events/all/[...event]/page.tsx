// EventPage.tsx
"use client";
import React from 'react';
import { useEventContext } from '@/context/eventContext';

const EventPage: React.FC = () => {
  const { eventDetails } = useEventContext();

  if (!eventDetails) return null;

  return (
    <div className='p-5 md:p-0'>
      <div className='mt-4 grid justify-center'>
        <div className='flex justify-center'>
          <h1 className='text-2xl font-bold'>{eventDetails.name}</h1>
        </div>
        <p className='mt-6'>{eventDetails.description}</p>
        <p className='mt-2'>Date: {eventDetails.date}</p>
      </div>
    </div>
  );
};

export default EventPage;
