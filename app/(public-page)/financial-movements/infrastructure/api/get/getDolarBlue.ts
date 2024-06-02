export const getDolarBlueInfra = async () => {
  console.log("1",'gfdg');
  const response = await fetch('https://dolarapi.com/v1/dolares/blue',{next:{revalidate:2}});
  console.log("2",response);
  const data = await response.json();
  return data;
}