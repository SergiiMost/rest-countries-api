import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router-dom"
import { fetchCountries } from "../../queries/fetchCountries"
import { CountryInterface } from "../Countries/Interfaces"
import { Error } from "../Error/Error"
import classes from "./Country.module.scss"

export function Country() {
  const { isLoading, isError, data, error } = useQuery(["countries"], fetchCountries)
  let params = useParams()
  const cca3 = params.cca3

  let countryData: CountryInterface | undefined = undefined
  let borderingCountries: CountryInterface[] = []
  if (data) {
    countryData = data.find((obj: CountryInterface) => obj.cca3 === cca3)
    borderingCountries = data.filter((country: CountryInterface) => countryData?.borders?.includes(country.cca3))
  }

  return (
    <main className="mainContentWrapper">
      <div className="container">
        {error && <Error />}
        {countryData && (
          <div className={classes.countryContainer}>
            <Link to="/" className={classes.buttonLink}>
              &larr; &nbsp; Back
            </Link>
            <div className={classes.contentWrapper}>
              <div className={classes.flagImageContainer}>
                <img src={countryData.flags.svg} className={classes.flagImage} alt="Flag"></img>
              </div>
              <div className={classes.textWrapper}>
                <h1>{countryData.name.common}</h1>
                <div className={classes.textColumnsWrapper}>
                  <div className={classes.textColumn}>
                    <span>
                      <span className={classes.label}>Population:</span>
                      {countryData.population.toLocaleString()}
                    </span>
                    <span>
                      <span className={classes.label}>Region:</span>
                      {countryData.region}
                    </span>

                    <span>
                      <span className={classes.label}>Sub Region:</span>
                      {countryData.subregion}
                    </span>
                    <span>
                      <span className={classes.label}>Capital:</span>
                      {countryData.capital?.join(", ")}
                    </span>
                  </div>
                  <div className={classes.textColumn}>
                    <span>
                      <span className={classes.label}>Top Level Domain:</span>
                      {countryData.tld?.join(", ")}
                    </span>
                    <span>
                      <span className={classes.label}>Currencies:</span>
                      {Object.keys(countryData.currencies).join(", ")}
                    </span>
                    <span>
                      <span className={classes.label}>Languages:</span>
                      {Object.values(countryData.languages).join(", ")}
                    </span>
                  </div>
                </div>
                <div className={classes.borderCountriesContainer}>
                  <p className={classes.label}>Border Countries:</p>
                  <div>
                    {borderingCountries.map((country) => (
                      <Link
                        to={`/country/${country.cca3}`}
                        key={country.cca3}
                        className={`${classes.buttonLink} ${classes.buttonLinkSm}`}
                      >
                        {country.name?.common}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
