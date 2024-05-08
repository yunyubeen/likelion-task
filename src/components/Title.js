import React from "react";

const Title = (props) => {
  const { title, subtitle } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};
export default Title;
