import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { fetchCountries } from "../../queries/fetchCountries"
import { Filters } from "../Filters/Filters"
import { Card } from "../Card/Card"
import { LoadingAnimation } from "../LoadingAnimantion/LoadingAnimation"
import { CountryInterface } from "./Interfaces"
import { Link } from "react-router-dom"
import { Error } from "../Error/Error"
import classes from "./Countries.module.scss"

export function Countries() {
  const [countrySearch, setCountrySearch] = useState("")
  const [region, setRegion] = useState("")
  const { isLoading, isError, data, error } = useQuery(["countries"], fetchCountries)
  let searchCountries
  if (data) {
    searchCountries = [...data]
  }
  if (countrySearch) {
    searchCountries = data.filter((obj: CountryInterface) => {
      return obj.name.common.toLowerCase().startsWith(countrySearch.toLowerCase())
    })
  }
  if (region) {
    searchCountries = searchCountries.filter((obj: CountryInterface) => obj.region === region)
  }

  return (
    <main className="mainContentWrapper">
      <div className="container">
        <Filters
          countrySearch={countrySearch}
          setCountrySearch={setCountrySearch}
          region={region}
          setRegion={setRegion}
        ></Filters>

        {error && <Error />}
        {isLoading && <LoadingAnimation></LoadingAnimation>}
        <div className={classes.cardsWrapper}>
          {data &&
            searchCountries.map((obj: CountryInterface) => (
              <Link to={`/country/${obj.cca3}`} key={obj.cca3}>
                <Card
                  countryName={obj.name.common}
                  population={obj.population}
                  region={obj.region}
                  capital={obj.capital}
                  svgLink={obj.flags.svg}
                />
              </Link>
            ))}
        </div>
      </div>
    </main>
  )
}
