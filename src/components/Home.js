import { mainModule } from 'process';
import React from 'react';
import image from '../headerbg.jpeg';

export default function Home() {
    return (
        <main>
            <img src={image} alt="scenic river" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-72 px-8">
                <h1 className="text-6xl text-red-100 font-bold cursive leading-none lg:leading-snug home-name">Hey there! I'm John Smith</h1>
            </section>
        </main>
    )
}