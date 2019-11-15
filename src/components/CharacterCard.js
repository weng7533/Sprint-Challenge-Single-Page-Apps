import React from "react";

export default function CharacterCard(props) {
  return (
    <div className='card ui'>

      <ui>
        <li>{props.character.name}</li>
        <li>{props.character.status}</li>
        <li>{props.character.species}</li>
        <li>{props.character.type}</li>
      </ui>
    </div>



  )
}
