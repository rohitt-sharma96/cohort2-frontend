import React from 'react'
import Card from './Components/Card';
const App = () => {

  const superHeroes = [
    {
      fullName: "Tony Stark",
      description: "Genius billionaire, philanthropist, and the man behind Iron Man.",
      superheroImage: "https://images.unsplash.com/photo-1662215609892-8779a8e9c575?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likeCount: 982345,
      postCount: 320,
      viewCount: 5234567
    },
    {
      fullName: "Steve Rogers",
      description: "The first Avenger, known for his courage, leadership, and shield.",
      superheroImage: "https://cdn.marvel.com/content/2x/003cap_ons_mas_mob_03_0.jpg",
      likeCount: 845230,
      postCount: 290,
      viewCount: 4982341
    },
    {
      fullName: "Thor Odinson",
      description: "God of Thunder from Asgard, wielder of Mjolnir and Stormbreaker.",
      superheroImage: "https://i.pinimg.com/1200x/4f/a7/10/4fa7107e9e5b9b46566aa146fcc98686.jpg",
      likeCount: 765890,
      postCount: 250,
      viewCount: 4621890
    },
    {
      fullName: "Bruce Wayne",
      description: "A vigilante detective who protects Gotham City as Batman.",
      superheroImage: "https://i.pinimg.com/736x/f1/8f/a5/f18fa56b80324d3c61fe634aaa5a7be2.jpg",
      likeCount: 912450,
      postCount: 410,
      viewCount: 6123450
    },
    {
      fullName: "Peter Parker",
      description: "A friendly neighborhood superhero with spider-like abilities.",
      superheroImage: "https://i.pinimg.com/1200x/e9/32/04/e932044eb04a53b2216e8b5889db5e76.jpg",
      likeCount: 1034567,
      postCount: 360,
      viewCount: 7345123
    }
  ];


  return (
    superHeroes.map((hero) => {

      return <Card users={hero} />
     


    })

  )
}

export default App
