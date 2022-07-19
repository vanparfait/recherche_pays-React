import React from "react";

const Card = (props) => {
  const { country } = props; // const country = props.country  (destructuring)
  console.log(country);

  return (
    <li className="card">
      <ul>
        {country.name}
        {country.capital}
      </ul>
    </li>
  );
};

export default Card;
