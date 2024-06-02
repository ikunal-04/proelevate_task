import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"  

const Banner = () => {
  return (
    <div className=''>
        <div className='relative'>
            <img src="https://www.proelevate.in/assets/Common/green.svg" alt="banner" className='h-screen md:h-full object-cover' />
            <div className='hidden md:flex absolute inset-0 p-9'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            <p className='cursor-pointer underline'>Home</p>
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Events</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
            <div className="absolute inset-0 grid items-center justify-center">
                <h1 className="text-orange-500 text-3xl font-bold">headingg!! is here</h1>               
            </div>
        </div>
    </div>
  )
}

export default Banner
