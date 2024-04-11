import React from 'react'

export default function CategoriesType(props) {
  return (
    <div className="flex flex-col text-black items-center justify-center">
          <img src={props.image} style={{ width: "12px" }} alt={ props.title} />
          <p>{props.title}</p>
        </div>  )
}
