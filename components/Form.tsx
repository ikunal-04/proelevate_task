"use client";
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { z } from 'zod';
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from 'next/navigation';

// Define Zod schema
const formSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  date: z.string(),
});

// Define type for form data
type FormDataType = z.infer<typeof formSchema>;

const Form = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    description: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate form data
      formSchema.parse(formData);
      // Handle form submission here
      router.push('/events/all');
      toast({
        title: "Success",
        description: "Redirecting to the events page",     
      });
      console.log(formData);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Enter all the fields correctly",
        description: "Please enter the correct details to proceed",
      })
      // Handle validation errors
    }
  };

  return (
    <form onSubmit={handleSubmit} className='grid gap-7'>
      <div className='grid gap-3'>
        <Label htmlFor='name'>Event Name</Label>
        <Input
          id='name'
          type='text'
          placeholder='Enter event name'
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className='grid gap-3'>
        <Label htmlFor='description'>Description</Label>
        <Input
          id='description'
          type='text'
          placeholder='Enter event description'
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className='grid gap-3'>
        <Label htmlFor='date'>Submission Deadline</Label>
        <Input
          id='date'
          type='date'
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      
      <Button type='submit' className='bg-orange-500 hover:bg-orange-600 rounded-full text-white'>Submit</Button>
      {/* <Link href='/events/all' passHref>
        <Button className='bg-orange-500 hover:bg-orange-600 rounded-full text-white'>Cancel</Button>
      </Link> */}
      <Toaster />
    </form>
  )
}

export default Form;
