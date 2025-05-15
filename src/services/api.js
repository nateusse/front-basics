export async function getRestaurants() {
  const response = await fetch('/data.json'); 
  const data = await response.json();
  return data;
}