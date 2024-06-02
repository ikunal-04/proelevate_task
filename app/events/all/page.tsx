"use client";
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import EventCard from '@/components/EventCard';
import Link from 'next/link';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  
const events = [
  {
    name: "React Conference 2024",
    description: "A conference for React enthusiasts to learn and share knowledge about React.js and its ecosystem.",
    date: "15-06-2024"
  },
  {
    name: "JavaScript Workshop",
    description: "An interactive workshop focusing on advanced JavaScript concepts and best practices.",
    date: "10-07-2024"
  },
  {
    name: "AI & ML Summit",
    description: "A summit discussing the latest trends and advancements in Artificial Intelligence and Machine Learning.",
    date: "20-08-2024"
  },
  {
    name: "Tech Meetup 2024",
    description: "A meetup for tech professionals to network and discuss emerging technologies.",
    date: "05-09-2024"
  },
  {
    name: "Web Development Bootcamp",
    description: "A bootcamp covering full-stack web development from front-end to back-end technologies.",
    date: "12-10-2024"
  },
  {
    name: "Cybersecurity Conference",
    description: "A conference focusing on the latest in cybersecurity threats, defenses, and best practices.",
    date: "18-11-2024"
  },
  {
    name: "Cloud Computing Expo",
    description: "An expo showcasing the latest in cloud computing technologies and services.",
    date: "01-12-2024"
  },
  {
    name: "Data Science Workshop",
    description: "A workshop for data scientists to discuss and learn about new tools and methodologies in data science.",
    date: "25-01-2025"
  },
  {
    name: "DevOps Summit",
    description: "A summit focusing on DevOps practices, tools, and cultural philosophies.",
    date: "14-02-2025"
  },
  {
    name: "Blockchain Conference",
    description: "A conference exploring the latest developments and applications of blockchain technology.",
    date: "10-03-2025"
  }
];

const handleSearchChange = (e: any) => setSearchTerm(e.target.value.toLowerCase());
const handleFromDateChange = (e: any) => setFromDate(e.target.value);
const handleToDateChange = (e: any) => setToDate(e.target.value);


const filteredEvents = events.filter(event => {
  const matchesSearch = event.name.toLowerCase().includes(searchTerm);
  const matchesFromDate = !fromDate || new Date(event.date) >= new Date(fromDate);
  const matchesToDate = !toDate || new Date(event.date) <= new Date(toDate);
  return matchesSearch && matchesFromDate && matchesToDate;
});

  return (
    <div className='w-full pt-12 pb-20 px-12 grid gap-y-10'>
      <div className='text-lg text-gray-900 font-bold'>
        All Events
      </div>
      <div className='flex gap-8'>
        <div className='grid gap-6 w-1/3 h-max'>
            <div className='grid gap-2'>
                <Label htmlFor='search'>Search Events</Label>
                <Input id='search' type='text' placeholder='Search Events' value={searchTerm} onChange={handleSearchChange}/>
            </div>
            <div className='grid gap-8'>
                <h1 className='font-semibold'>Filters</h1>
                <div className='grid gap-4'>
                    <Label>Sort by date</Label>
                    <div className='flex gap-4'>
                        <div>
                            <Label id='from'>From</Label>
                            <Input id='from' type='date' placeholder='Filters' value={fromDate} onChange={handleFromDateChange}/>
                        </div>
                        <div>
                            <Label id='to'>To</Label>
                            <Input id='to' type='date' value={toDate} onChange={handleToDateChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-2/3 grid gap-4'>
        {filteredEvents.map((event, index) => (
              <Link key={index} href={`/events/all/${event.name}`}>
                <EventCard name={event.name} description={event.description} date={event.date}/>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Page
