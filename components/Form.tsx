import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Form = () => {
  return (
    <div className='grid gap-7'>
      <div className='grid gap-3'>
        <Label htmlFor='name'>Event Name</Label>
        <Input id='name' type='text' placeholder='Enter event name'/>
      </div>
      <div className='grid gap-3'>
        <Label htmlFor='description'>Description</Label>
        <Input id='description' type='text' placeholder='Enter event description'/>
      </div>
      <div className='grid gap-3'>
        <Label htmlFor='date'>Submission Deadline</Label>
        <Input id='date' type='date'/>
      </div>
      
      <Link href='/events/all' className='flex w-max'>
        <Button className='bg-orange-500 hover:bg-orange-600 rounded-full text-white'>Submit</Button>
      </Link>
    </div>
  )
}

export default Form
