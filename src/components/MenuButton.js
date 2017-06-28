import React from 'react';
import './MenuButton.css';

export default function MenuButton ({toggleNav}) {
  return (
    <div className='nav-toggle'
      onClick={toggleNav}>
      <div className='shape'/>
      <div className="lines open">
        <div className="line"/>
        <div className="line"/>
        <div className="line"/>
      </div>
      <div className="lines close">
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  );
}
