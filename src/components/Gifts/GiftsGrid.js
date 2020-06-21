import React,{useState, useEffect} from "react";
import { GiftItem } from "./GiftItem";

export const GiftsGrid = ({ criteria }) => {
 const [itmes, setitmes] = useState([])

  //==================================================
  //   Get all gift base on parameter
  //==================================================
  const handleCriteria = async () => {
    try {
      const apiKey = "AzcFdNTOvh1NSCiGtH3RY1yngK4KNFLV";
      const resp = await fetch(
        `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${criteria}&limit=10`
      );
      const { data } = await resp.json();
     console.log(data)
      var gifts =   data.map( img=>{
              return {
                id: img.id,
                url: img.images.original.url  ,
                title:img.title            }

      });
      setitmes(gifts);
    
    } catch (error) {
      // manejo del error
      console.error(error);
    }
  };
 useEffect(()=>{
  handleCriteria();
 },[]);
   

  return <div>
    <ol>
      {itmes.map( item =>{
      return <GiftItem {...item} key={item.id}  />
    } )}
    </ol>
    
  </div>;
};
