import React from 'react'

export default function CategoryItems({title, onSelect, image}) {
  return (
     <div className="flex flex-col border-1 bg-white text-bold ml-7">
     <h1 style={{ textTransform: "uppercase" }} className="font-bold">
       { title }
     </h1>
     <img src={image} alt="bed image" />
     <a style={{ textTransform: "uppercase" }} className="text-center" href={onSelect}>
       see more
     </a>
   </div>
  )
}
