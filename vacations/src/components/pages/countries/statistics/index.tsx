import React, { useMemo } from "react"

export default function CountriesStats(props: { countries: Array<any> }) {
    const population = useMemo(() => calcPopulation(props.countries), [props.countries.length]);
    // const population = calcPopulation(props.countries)



    return <div>
        <h2> Statistics </h2>
        <span> total population: {population} </span>
    </div>
}

function calcPopulation(arr: Array<{ population: number }>) {
    console.log("calculation")
    const result: number = arr.reduce((pop, item) => {
        const current = pop + (item.population && Number(item.population)) || 0
        return current;
    }, 0)
    return result;
}