import React from 'react'

const Footer = () => {

  var today = new Date();
  return (
    <footer className='flex justify-center'>
      <div>
        <div>
          <h5>Team Member Allocation App - {today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer
