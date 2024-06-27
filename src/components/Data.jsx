export default function Data() {

    const data = fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => err);
  return (
    <p></p>
  )
}
