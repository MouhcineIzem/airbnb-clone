import React from 'react';
import "./searchpage.css";
import SearchResult from "./SearchResult";
import {Button} from '@material-ui/core'
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 38 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms ans beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/1ff05ac5-2521-4e19-898e-e004b8b10acc.jpg?aki_policy=large"
                location="4 Rooms in center of London"
                title="Stay at this spacios Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1,5 shared bathroom . wifi . kitchen . Free parking . washing Machine"
                star={4.73}
                price="€30 / night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/1ff05ac5-2521-4e19-898e-e004b8b10acc.jpg?aki_policy=large"
                location="4 Rooms in center of London"
                title="Stay at this spacios Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1,5 shared bathroom . wifi . kitchen . Free parking . washing Machine"
                star={4.73}
                price="€30 / night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/1ff05ac5-2521-4e19-898e-e004b8b10acc.jpg?aki_policy=large"
                location="4 Rooms in center of London"
                title="Stay at this spacios Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1,5 shared bathroom . wifi . kitchen . Free parking . washing Machine"
                star={4.73}
                price="€30 / night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/1ff05ac5-2521-4e19-898e-e004b8b10acc.jpg?aki_policy=large"
                location="4 Rooms in center of London"
                title="Stay at this spacios Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1,5 shared bathroom . wifi . kitchen . Free parking . washing Machine"
                star={4.73}
                price="€30 / night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/1ff05ac5-2521-4e19-898e-e004b8b10acc.jpg?aki_policy=large"
                location="4 Rooms in center of London"
                title="Stay at this spacios Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1,5 shared bathroom . wifi . kitchen . Free parking . washing Machine"
                star={4.73}
                price="€30 / night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/1ff05ac5-2521-4e19-898e-e004b8b10acc.jpg?aki_policy=large"
                location="4 Rooms in center of London"
                title="Stay at this spacios Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1,5 shared bathroom . wifi . kitchen . Free parking . washing Machine"
                star={4.73}
                price="€30 / night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/1ff05ac5-2521-4e19-898e-e004b8b10acc.jpg?aki_policy=large"
                location="4 Rooms in center of London"
                title="Stay at this spacios Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1,5 shared bathroom . wifi . kitchen . Free parking . washing Machine"
                star={4.73}
                price="€30 / night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/1ff05ac5-2521-4e19-898e-e004b8b10acc.jpg?aki_policy=large"
                location="4 Rooms in center of London"
                title="Stay at this spacios Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1,5 shared bathroom . wifi . kitchen . Free parking . washing Machine"
                star={4.73}
                price="€30 / night"
                total="€117 total"
            />

        </div>  
    )
}

export default SearchPage
