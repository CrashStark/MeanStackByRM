import React from 'react';
import './Homepage.css';
import { SideNav } from './Navigation/SideNav';
import { Timeline } from './Timeline/Timeline';

export const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage_nav'>
            <SideNav/>
        </div>
        <div className='homepage__Timeline'>
            <Timeline/>
        </div>
    </div>
  )
}
