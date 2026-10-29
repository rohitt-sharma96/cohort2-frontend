const users = [
    {
        fullname: "Aarav Mehta",
        image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
        profession: "Software Developer",
        description: "Full-stack developer who loves building smooth UI experiences and scalable backend systems.",
        tags: ["JavaScript", "React", "Node.js", "UI/UX"]
    },
    {
        fullname: "Priya Kapoor",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        profession: "Graphic Designer",
        description: "Creative designer passionate about brand identity, colors, typography, and clean design.",
        tags: ["Photoshop", "Illustrator", "Branding"]
    },
    {
        fullname: "Rohan Verma",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
        profession: "Digital Marketer",
        description: "Helps brands grow using SEO, ads, analytics, and creative marketing strategies.",
        tags: ["SEO", "Marketing", "Analytics"]
    },
    {
        fullname: "Sana Sheikh",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        profession: "Content Writer",
        description: "Writes engaging long-form content, blogs, and scripts with focus on clarity and storytelling.",
        tags: ["Writing", "Blogging", "Storytelling"]
    },
    {
        fullname: "Kabir Singh",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        profession: "UI/UX Designer",
        description: "Designs intuitive digital experiences with a user-first approach.",
        tags: ["Figma", "Prototyping", "Wireframes"]
    },
     {
    fullname: "Nisha Rathore",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    profession: "Data Analyst",
    description: "Enjoys turning raw data into meaningful insights using visualization and statistical models.",
    tags: ["Python", "Pandas", "PowerBI", "SQL"]
  },
  {
    fullname: "Dhruv Malhotra",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profession: "Mobile App Developer",
    description: "Specializes in building smooth and efficient Android and iOS apps.",
    tags: ["Flutter", "Kotlin", "Dart", "Firebase"]
  },
  {
    fullname: "Anaya Sen",
    image: "https://images.unsplash.com/photo-1554384645-13eab165c24b",
    profession: "Product Manager",
    description: "Focused on building user-centric products with clear roadmaps and strong cross-team collaboration.",
    tags: ["Product Strategy", "User Research", "Agile"]
  },
  {
    fullname: "Vikram Bansal",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Cybersecurity Specialist",
    description: "Protects systems from threats and ensures secure digital environments.",
    tags: ["Network Security", "Pen Testing", "Firewalls"]
  },
  {
    fullname: "Meera Kulkarni",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    profession: "HR Consultant",
    description: "Helps organizations streamline hiring processes and build strong employee culture.",
    tags: ["Recruitment", "Training", "People Management"]
  }
];


let main = document.querySelector('main')

let sum = '';

users.forEach((elem)=>{
     sum = sum + ` <div class="card">
                   <img src='${elem.image}' alt="">
                   <h2>${elem.fullname}</h2>
                   <h3>${elem.profession}</h3>
                   <p>${elem.description}</p>
                   </div>
            `
})

main.innerHTML = sum;
