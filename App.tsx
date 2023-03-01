import * as React from 'react';
import { useState } from 'react';
import './style.css';
import { Avatar, Popover } from '@mui/material';

export default function App() {
  const [anchor, setAnchor] = useState(null);
  const [state, setState] = useState(true);

  const popoverProfileButton = (e) => {
    setAnchor(e.currentTarget);
    setState(true);
  };
  const handleUserDetails = (e) => {
    setState(false);
  };
  return (
    state?<div className="container">
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        PaperProps={{
          style: {
            height: '10rem',
            width: '50%',
            marginTop: '-4em',
            marginLeft: '-3rem',
            borderRadius: '.5rem',
          },
        }}
      >
        <div className="header">
          <Avatar src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg" />
          <div className="headerContent" >
            <div>Food App</div>
            <div>Place Your Order</div>
          </div>
        </div>
        <div className="popoverContent">
          <div onClick={handleUserDetails}>Add user details</div>
          <div>See Status Of order</div>
        </div>
      </Popover>
      <button className="btn" onClick={popoverProfileButton}>
        +
      </button>
    </div>:
     <div className="container">
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        PaperProps={{
          style: {
            height: '50vh',
            width: '50%',
            marginTop: '-4em',
            marginLeft: '-3rem',
            borderRadius: '.5rem',
          },
        }}
      >
        <div className="header">
          <Avatar src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg" />
          <div className="headerContent" >
            <div>Food App</div>
            <div>Place Your Order</div>
          </div>
        </div>
        <div className="popoverContent1">
          <input placeholder="place your Food Name"/>
          <input placeholder="enter your Address"/>
          <button>next</button>
        </div>
      </Popover>
      <button className="btn" onClick={popoverProfileButton}>
        +
      </button>
    </div>
  );
}
