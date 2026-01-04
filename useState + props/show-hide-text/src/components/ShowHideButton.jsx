import React from 'react'

function ShowHideButton({setShow,show}) {
    function handleShowHide(){
        setShow((prev)=>!prev)
    }
  return (
    <div>
        <button style={{padding:"10px 15px",borderRadius:"10px",fontSize:"20px",marginBottom:"20px"}} onClick={handleShowHide}>{show?"Hide":"Show"}</button>
    </div>
  )
}

export default ShowHideButton