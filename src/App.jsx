import React from 'react'
import Navbar from '/components/Navbar'
import Hero from '/components/Hero'
import Card from '/components/Card'
import data from './data'


export default function App() {
    const cardsData = data.map(item => {
        return <Card{...item} />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className='cardsList'>{cardsData}</section>
        </div>
    )
}








