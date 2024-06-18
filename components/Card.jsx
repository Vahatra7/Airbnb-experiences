import React from "react";
// import katie from "/katie-zaferes.png"
import star from "/star.png"


export default function Card({ id, title, description, price, coverImg, stats: { rating, reviewCount }, location, openSpots }) {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {/* conditional rendering */}
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img className="cardImage" src={"/" + coverImg} alt="Main card image" />
            <div className="cardStats">
                <img className="star" src={star} alt="Star icon" />
                <span>{rating}</span>
                <span className="gray">({reviewCount})</span>
                <span className="gray"> • </span>
                <span className="gray">{location}</span>
            </div>
            <h2 className="cardTitle">{title}</h2>
            <p className="cardPrice"><span className="bold">From ${price}</span> /person</p>
        </div>
    )
}

