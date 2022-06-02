import React, { useState } from 'react';
import Greeting from './Greeting';

export default function DynamicGreeting() {
  const [name, setName] = useState("");

  const onNameInputChange = (value: string) => {
    console.log('onNameInputChange()->', value);
    setName(value);
  }

  return (
    <>
      <Greeting name={name} />
      <div>
        <label htmlFor="username">Please enter your name:&nbsp;</label>
        <input name="username" type="text" onChange={(event) => onNameInputChange(event.target.value)}/>
      </div>
    </>
  );
}