import React, { useEffect, useState } from 'react';
import ServicesComponent from '../components/ServicesComponent';
import HeaderComponent from '../components/Header_Footer_elements/HeaderComponent'
import Request from '../helpers/request'
import axios from 'axios';

const ServicesContainer = () => {

    const headerCopy = "Find a Service"
    const headerBanner = "/gp-surgery.jpg";

    const [serviceSearchResult, setServiceSearchResult] = useState(null);

    const handleSearchRequest = function(searchTerm) {
        // const request = new Request();
        // const body = {
        //     "filter": "(OrganisationTypeID eq 'DEN') or (OrganisationTypeID eq 'GPB') or (OrganisationTypeID eq 'HOS')",
        //     "top": 25,
        //     "skip": 0,
        //     "count": true
        // }
        // const searchRequest = request.post("https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=lacock", body)
        // .then((data) => {setServiceSearchResult(data)})

        let body = {
            "filter": "(OrganisationTypeID eq 'DEN')",
            "top": 10,
            "skip": 0,
            "count": true
        };
         
        const searchRequest = axios.post("https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=" + searchTerm, body, {
            headers: {
                "Content-Type": "application/json",
                "subscription-key": "ca7e563eca174a80ad82eef61fc40776"
            }
        });
    }

    useEffect(() => {
        handleSearchRequest("Manchester");
    }, [])

    return(
        <>
            <HeaderComponent headerCopy={headerCopy} headerBanner={headerBanner} />
            <ServicesComponent />
        </>
    )
}

export default ServicesContainer;