"use client";
import React, { createContext, useState, useContext } from 'react';

interface EventDetails {
  name: string;
  description: string;
  date: string;
}

interface EventContextType {
  eventDetails: EventDetails | null;
  setEventDetails: (event: EventDetails | null) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [eventDetails, setEventDetails] = useState<EventDetails | null>(null);

    return (
        <EventContext.Provider value={{ eventDetails, setEventDetails }}>
            {children}
        </EventContext.Provider>
    );
};

export default EventContext;
