import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";


const Search = ({ onSearchChange }) => {

    const [Search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/locations/33.832213-118.387099/nearbyCities?radius=100'${inputValue}`,
      geoApiOptions
    )
            .then((response )=> response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude}, ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,

                        };

                    }),
                };
            });
           
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={Search}
            onChange={handleOnChange}
            loadOptions={loadOptions}

        />
    )

}

export default Search;