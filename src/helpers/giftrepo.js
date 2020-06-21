export const GetDataFromApi = async (criteria) => {
  console.log("from helper", criteria);
  console.log(criteria);
  const apiKey = "AzcFdNTOvh1NSCiGtH3RY1yngK4KNFLV";
  const uri = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    criteria
  )}&limit=10&api_key=${apiKey}&`;
  console.log(uri);
  const resp = await fetch(uri);
  const { data } = await resp.json();
  console.log(data);
  var gifts = data.map((img) => {
    return {
      id: img.id,
      url: img.images.original.url,
      title: img.title,
    };
  });

  return gifts;
};
