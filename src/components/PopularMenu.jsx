import React, { useEffect, useState } from 'react';
import MenuCard from '../shared/MenuCard';
import Section from '../shared/Section';

const OurMenu = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {

                const popularmenu = data.filter(item => item.category === 'popular')
                console.log(data);
                setItems(popularmenu)
            })
    }, [])
    return (
        <section>
            <Section heading="From Our Menu"
    subHeading="Popular Items"></Section>
        <div className='grid md:grid-cols-2 gap-10 space-y-4'>
            {
                items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
        </div>
        </section>
    );
};

export default OurMenu;