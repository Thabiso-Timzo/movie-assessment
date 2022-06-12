import React from 'react'
import { SpinnerCircular } from 'spinners-react';

import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spinner-cointainer">
      <SpinnerCircular />
    </div>
  )
}

export default Spinner