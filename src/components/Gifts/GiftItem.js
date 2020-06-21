import React from "react";

export const GiftItem = ({ title, url }) => {
  //{id,url,title}
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p className="card-p">{title}</p>
    </div>
  );
};
