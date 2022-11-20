import { IconSearch } from "@tabler/icons"
import React from "react"
import classes from "./Filters.module.scss"

interface Props {
  countrySearch: string
  region: string
  setCountrySearch: (countrySearch: string) => void
  setRegion: (region: string) => void
}

export function Filters({ countrySearch, setCountrySearch, region, setRegion }: Props) {
  const onRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value)
  }

  const onCountrySearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountrySearch(e.target.value)
  }

  return (
    <div className={classes.filterOptions}>
      <div className={classes.searchContainer}>
        <IconSearch size={17} className={classes.iconSearch}></IconSearch>
        <input
          placeholder="Search for a country..."
          type="text"
          value={countrySearch}
          onChange={onCountrySearchChange}
          className={classes.countrySearch}
        ></input>
      </div>
      <div className={classes.selectContainer}>
        <select name="Select a region" className={classes.regionSelect} value={region} onChange={onRegionChange}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}
