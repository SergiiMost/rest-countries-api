import classes from "./Card.module.scss"

interface Props {
  countryName: string
  population: number
  region: string
  capital: string[]
  svgLink: string
}

export function Card({ countryName, population, region, capital, svgLink }: Props) {
  return (
    <div className={classes.card}>
      <div className={classes.cardImageContainer}>
        <img src={svgLink} className={classes.cardImage} alt="Flag"></img>
      </div>
      <div className={classes.cardTextContainer}>
        <span className={classes.cardCapital}>{countryName}</span>
        <span>
          <span className={classes.label}>Population:</span> {population.toLocaleString()}
        </span>
        <span>
          <span className={classes.label}>Region:</span> {region}
        </span>
        <span>
          <span className={classes.label}>Capital:</span> {capital?.join(", ")}
        </span>
      </div>
    </div>
  )
}
