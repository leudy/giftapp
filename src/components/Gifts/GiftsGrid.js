import React from "react";
import { GiftItem } from "./GiftItem";
import { useFectGift } from "../../hooks/useFectGift";

export const GiftsGrid = ({ criteria }) => {
  console.log(criteria);
  const { data, loading } = useFectGift(criteria);
  return (
    <div className="card-grid">
      <h3>{criteria}</h3>
      <p>{loading && <p>Loading </p>}</p>
      <div className="card-grid">
        {data && data.map((item) => <GiftItem {...item} key={item.id} />)};
      </div>
    </div>
  );
};
