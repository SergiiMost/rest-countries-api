export async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all")
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return response.json()
}
