import React from "react"
import Card from "./Card.jsx"
import burgerKing from "../assets/burgerKing.jpg"
import mcDonalds from "../assets/mcdonalds.jpg"
import sake from "../assets/sakesushi.jpg"
import laojie from "../assets/laojie.jpg"
import mrbun from "../assets/mrbun.jpg"
import kushi from "../assets/kushi.jpg"
import tacobell from "../assets/tacobell.jpg"
import chipotle from "../assets/chipotle.jpg"
import kowloon from "../assets/kowloon.jpg"
import hk from "../assets/hk.jpg"

const cards = [
    { id: 1, name: 'Burger King', image: burgerKing, website: 'https://www.bk.com/store-locator/store/restaurant_826'},
    { id: 2, name: 'McDonald’s', image: mcDonalds, website: 'https://www.mcdonalds.com/us/en-us/location/NY/BROOKLYN/1983-86TH-ST/20199.html?cid=RF:YXT:GMB::Clicks' },
    { id: 3, name: 'Laojie Hot Pot', image: laojie, website:'https://www.facebook.com/people/LaoJie-hotpot/100040649456018/'},
    { id: 4, name: 'Mr. Bun', image: mrbun, website:'https://www.beyondmenu.com/52041/brooklyn/mr--bun-brooklyn-11214.aspx' },
    { id: 5, name: 'Sake Sushi', image: sake, website:'https://order.online/store/sake-restaurant-(2347-86th-st)-brooklyn-25659519/?hideModal=true&pickup=true&rwg_token=AJKvS9UHmhux8vi9T-5Jmo43oTQdbRABLHoGnnCg4IvUdauh4K4B8zYtcdJ_JgtoC6a3kSJZjaDM_m64SCXPs7bCXEqHpEuRgg==&utm_source=gfo' },
    { id: 6, name: 'Tacobell', image: tacobell, website:'https://locations.tacobell.com/ny/brooklyn/1977-86th-street.html?utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=037389&utm_content=website&y_source=1_MjQzMzAyOTYtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D' },
    { id: 7, name: 'Chipotle', image: chipotle, website: 'https://locations.chipotle.com/ny/brooklyn/2076-86th-st?utm_source=google&utm_medium=yext&utm_campaign=yext_listings' },
    { id: 8, name: 'Kowloon Cafe', image: kowloon, website: 'https://www.yelp.com/biz/kowloon-cafe-brooklyn' },
    { id: 9, name: 'New HK Tea & Sushi', image: hk, website: 'https://www.facebook.com/people/HK-Tea-And-Sushi-%E9%A6%99%E6%B8%AF%E8%8C%B6%E9%A4%90%E5%BB%B3/100070763907242/' },
    { id: 10, name: 'Kushi Asian Fusion', image: kushi, website: 'https://www.kushijapanese.com/'},
    // Add more cards as needed
];

const CardGrid = () => {
    return (
        <div className="CardGrid">
            {cards.map((card) => (
                <Card key={card.id} name={card.name} image={card.image} website={card.website}/>
            ))}
        </div>
    );
};

export default CardGrid;