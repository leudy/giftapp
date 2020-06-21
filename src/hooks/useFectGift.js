import { useState, useEffect } from "react";
import { GetDataFromApi } from "../helpers/giftrepo";

export const useFectGift = (criteria) => {
  console.log(criteria);
  const intialstate = {
    data: [],
    loading: true,
  };
  useEffect(() => {
    GetDataFromApi(criteria).then((resp) => {
      setstate({ data: resp, loading: false });
    });
  }, [criteria]);

  const [state, setstate] = useState(intialstate);

  return state;
};
