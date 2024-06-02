"use client";
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import EventCard from '@/components/EventCard';
import Link from 'next/link';

const page = () => {


  return (
    <div className='w-full pt-12 pb-20 px-12 grid gap-y-10'>
      <div className='text-lg text-gray-900 font-bold'>
        All Events
      </div>
      <div className='flex gap-8'>
        <div className='grid gap-6 w-1/3'>
            <div className='grid gap-2'>
                <Label htmlFor='search'>Search Events</Label>
                <Input id='search' type='text' placeholder='Search Events'/>
            </div>
            <div className='grid gap-8'>
                <h1 className='font-bold '>Filters</h1>
                <div className='grid gap-4'>
                    <Label>Sort by date</Label>
                    <div className='flex gap-4'>
                        <div>
                            <Label id='from'>From</Label>
                            <Input id='from' type='date' placeholder='Filters'/>
                        </div>
                        <div>
                            <Label id='to'>To</Label>
                            <Input id='to' type='date'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-2/3'>
            <Link href={`/events/all/${'something'}`}>
            <EventCard name='test-1' description='test-1 descriptn' date='05-06-2024'/>    
            </Link>
        </div>
      </div>
    </div>
  )
}

export default page
