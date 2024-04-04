import React from 'react'




export function Portfolio(){
return <img src='https://source.unsplash.com/250x250?Programming' alt='protfolio-pic'/>
}

const Gallery = () => {
  return (
    <div>
        <h1 className='m-2'>hello</h1>
        <Portfolio/>
        <Portfolio/>
        <Portfolio/>
    </div>
  )
}

export default Gallery
