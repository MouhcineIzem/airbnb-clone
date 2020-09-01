import React from 'react';
import "./home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
    return (
        <div>
            <Banner />
            <div className="home__section">
                <Card
                    src=" https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Online Experiences"
                    description="unique activities
                    we can do together, led by a world of hosts."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Des logements uniques"                    
                    description="Des bateaux, des cabanes dans les arbres et plus encore : bien plus que de simples logements où passer la nuit."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Logements entiers"
                    description=" Des logements entiers confortables, avec de la place pour accueillir les amis ou la famille."
                />
            </div>
            <div className="home__section">
                <Card 
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat in Bounemouth"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price="€130/night"
                />
                <Card 
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="€350/night"
                />
                <Card 
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartement"
                    description="Superhost with great amenties and a fabolous shopping complex nearby"
                    price="€30/night"
                />
            </div>
        </div>
    )
}

export default Home
