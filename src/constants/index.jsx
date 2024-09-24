import FoodOrder from "../assets/projects/FoodOrder.png";
import Movie from "../assets/projects/Movie.png";
import Quizzical from "../assets/projects/Quizzical.png";
import Tenzies from "../assets/projects/Tenzies.png";
import TicTacToe from "../assets/projects/TicTacToe.png";
import Vanlife from "../assets/projects/Vanlife.png";

export const LANDING_CONTENT = `Hi, I am Krishnapriya Venkatakrishnan. I began my career as a T24 developer at Temenos India Private Limited, a banking software company, where I sharpened my leadership and collaboration skills, working closely with cross-functional teams to consistently deliver projects ahead of schedule. After relocating to Stockholm in 2023, I immersed myself in new cultures and took time to reassess my career aspirations. This journey led me to focus on front-end development, with the goal of becoming a full-stack developer. I have since built a strong foundation in HTML, CSS, JavaScript, and React, and I am eager to apply my problem-solving abilities and creativity to new challenges.`;

export const ABOUT_TEXT = `I was born and raised in India, where I completed my Bachelor's in Computer Science and Engineering at Thiagarajar College of Engineering (2013-2017). After graduation, I joined Temenos India Private Limited in Chennai, where I gained nearly 6 years of professional experience, including an internship (December 2016 - December 2022).
I got married in December 2022 and relocated to Stockholm, Sweden, in 2023. During this time, I had the opportunity to travel to places like Bali, Iceland, Switzerland, Bangkok, Paris, and Milan, gaining diverse cultural insights. Taking a sabbatical allowed me to reflect on my career goals, which led me to focus on front-end development.
During this period, I engaged in extensive self-study and completed a course in Front-End Development, with an emphasis on React, JavaScript, HTML, and CSS, through online platforms and Scrimba, from which I also received a certificate. My long-term goal is to continue expanding my skills and eventually grow into a full-stack developer.
`;

export const EXPERIENCES = [
    {
        year: "August 2021- December 2022",
        role: "T24 Specialist",
        company: "Temenos India Pvt Ltd",
        description: ["Provided customer support and participated in requirement-gathering meetings, ensuring client needs were clearly understood and documented.",
        "Delivered client demos, showcasing the software's capabilities and gathering feedback for further refinement.",
        "Developed solutions, prepared technical design documents, and supported testing and post-rollout activities.",
        "Mentored peer developers, enhancing the team's overall skill set and ensuring high-quality code delivery.",
        "Actively participated in analysis and delivery, contributing to a smooth development process and successful project outcomes."],
    },
    {
        year: "January 2020- July 2021",
        role: "T24 Software Developer",
        company: "Temenos India Pvt Ltd",
        description: ["Analyzed requirements, prepared technical design documents, and contributed to solution development.",
        "Led product testing phases, ensuring software met all client requirements before final delivery.",
        "Collaborated with cross-functional teams to ensure projects were completed on time and to specifications."],
        
    },
    {
        year: "December 2016- December 2019",
        role: "T24 Software Developer",
        company: "Temenos India Pvt Ltd",
        description: ["Developed and tested software solutions based on requirements and technical documents provided.",
        "Participated in continuous learning to improve coding techniques and ensure high-quality software delivery.",
        "Supported senior developers during critical project phases, contributing to successful project completions."],
    },
];

export const PROJECTS = [
    {
        title: "Rent a van",
        image: Vanlife,
        description:
        "An online web application that uses firestore for data management. The user can rent a van, post a review for the rented van. The user has their own dashboard, income with their transaction details and a section for their owned vans.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/krishnapriya-venkatakrishnan/react-router-vanlife",
        netlify: "https://66bc95639028ae7382537252--famous-fenglisu-54cca7.netlify.app/",
    },
    {
        title: "React- Tenzies game",
        image: Tenzies,
        description:
        "The game is started with 10 dice with random faces. User should click on the dice having same face. The game ends when all dice having same faces are clicked. Once the game is ended, confetti is showered. The number of rolls, time taken, and best time taken are updated accordingly.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/krishnapriya-venkatakrishnan/react-game-tenzies",
        netlify: "https://scrimba-krishna-v-react-game-tenzies.netlify.app/",
    },
    {
        title: "Quizzical web application",
        image: Quizzical,
        description:
        "This is a quiz web application. 5 random questions are fetched from opentdb site and are prepared for the quiz.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/krishnapriya-venkatakrishnan/react-quizzical",
        netlify: "https://scrimba-krishna-v-react-quizzical.netlify.app/",
    },
    {
        title: "Tic tac toe game",
        image: TicTacToe,
        description:
        "Web application to play tic tac toe game. This holds the history of moves. To go to a move, click on the respective move button. With this, the game can also be modified.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/krishnapriya-venkatakrishnan/react-game-tic-tac-toe",
        netlify: "https://scrimba-krishna-v-react-tic-tac-toe.netlify.app/",
    },
    {
        title: "Movie Time Web application",
        image: Movie,
        description:
        "The Movie Time web application allows users to search for movies using the OMDB API, view detailed information about each movie, and save their favorite movies to a watchlist stored in the browser's local storage.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/krishnapriya-venkatakrishnan/disply-movie",
        netlify: "https://scrimba-krishna-v-display-movie.netlify.app/",
    },
    
    {
        title: "Online food ordering website",
        image: FoodOrder,
        description:
        "This is a simple restaurant ordering system , which allows users to view the menu, add items to their cart, and proceed to payment. Additionally, users can provide a rating for their experience after placing an order.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/krishnapriya-venkatakrishnan/online-menu-order",
        netlify: "https://scrimba-krishna-v-online-menu-order.netlify.app/",
    },
    
    
    
];

export const CONTACT = {
    address: "Stockholm, Sweden ",
    phoneNo: "+46 736595250",
    email: "krishnapriyavenkatakrishnan@gmail.com",
};