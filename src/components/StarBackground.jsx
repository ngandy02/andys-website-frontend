import { useState, useEffect } from "react";


// id, size, x, y, opacity, animation duration


export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const generateStars = () => {
        // when we generate the page or website its going to generate the stars
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000)
        const newStars = []

        for (let i = 0; i < numberOfStars; i++){
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100, // we do * 100 bc we are saying the dimensions are anywhere from 0 to 100% of the viewport
                opacity: Math.random() * 0.5 + 0.5, // anywhere fromm 0.5 to 1
                animationDuration: Math.random() * 4 + 2, // stars will pulsate anywhere from 2 to 6s
            });
        }
        setStars(newStars);
    }

    const generateMeteors = () => {
        // when we generate the page or website its going to generate the stars
        const numberOfMeteors = 8
        const newMeteors = []

        for (let i = 0; i < numberOfMeteors; i++){
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 75,
                y: Math.random() * 30, // we do * 100 bc we are saying the dimensions are anywhere from 0 to 100% of the viewport
                delay: Math.random() * 15, // anywhere fromm 0.5 to 1
                animationDuration: Math.random() * 3 + 3, // stars will pulsate anywhere from 2 to 6s
            });
        }
        setMeteors(newMeteors);
    }
    
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}/>
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size * 50 + "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                delay: meteor.delay,
                animationDuration: meteor.animationDuration + "s",
            }}/>
        ))}
         </div>
}