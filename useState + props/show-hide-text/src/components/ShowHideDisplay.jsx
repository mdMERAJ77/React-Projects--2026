import React from 'react'

function ShowHideDisplay({show}) {
  return (
    <div style={{fontSize:"20px"}}>{show?"Show state: arr yaar muhe hide karo":"Hide"}</div>
  )
}

export default ShowHideDisplay