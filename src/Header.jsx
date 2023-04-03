import React from 'react'

const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <header>
      <div className='flex justify-center'>
        <div>
          <h1 className='text-3xl font-bold text-center'>Team Member Allocation</h1>
          <h3 className='text-2xl text-center font-bold'>{selectedTeam} has {teamMemberCount > 0 ? teamMemberCount : 'no'} {teamMemberCount > 1 ? 'Members' : 'Member'}</h3>
        </div>
      </div>
    </header>
  )
}

export default Header
