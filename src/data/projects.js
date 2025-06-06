const projects = [
  {
      id: 1,
      title: "Find Campsite Auth",
      description: "Find Campsite Auth is a robust authentication system designed for a campsite booking platform. It enables users to create accounts, log in, and reset passwords while ensuring data security. The backend is built with Python & Flask, while the frontend is developed with React.<br/> Utilises Redis as a key-value database. <br/><br/><h5>Features:</h5><b>User Registration:</b> Allows users to create an account with securely hashed passwords.<br/><b>Login & Authentication:</b> Uses JWT tokens to manage user sessions securely.<br/><b>Password Reset:</b> Enables users to reset their passwords by answering a security question.<br/><b>Protected Routes:</b> Restricts access to certain pages for authenticated users only.<br/><b>Efficient Data Storage:</b> Utilises Redis for fast and scalable user data retrieval.",
      gif: require("../assets/gif/find-campsite-auth.gif"),  
      liveDemo: "https://find-campsite-auth-website.onrender.com/",
      sourceCode: "https://github.com/Yuliia-Kruta/find-campsite-auth?tab=readme-ov-file",
      skills: ["Python", "Flask", "React", "CSS", "Redis", "JavaScript", "RESTful API", "Unit Testing", "Databases"] 
    },
    {
      id: 2,
      title: "Find Campsite Manager",
      description: "Find Campsite Manager is a robust booking management system implemented in the individual campgrounds to streamline the booking process, ensuring efficient handling of reservations and site allocations.<br/><br/> The application utilises <b>Python</b> for backend processing and database interactions, with <b>Flask</b> serving as the framework for handling HTTP requests.<br/> The application's frontend built with <b>React</b> provides an intuitive and responsive interface for managers to launch the retrieval and processing of bookings from the Head Office, view and search the booking details and summaries, and retrieve customer booking confirmation in pdf format.<br/> The system architecture includes 2 <b>Azure SQL</b> databases and 1 <b>Azure MongoDB</b> database. <br/><br/><h5>Features:</h5> - Retrieving bookings from Head Office SQL database.<br/> - Preparing and storing booking details in the NoSQL document database. Includes allocation of campsites.<br/> - Storing and managing campground campsites' information in the NoSQL document database.<br/> - Creating confirmation documents for customers.<br/> - Summarising daily bookings in the table in the local SQL database.<br/> - Sending booking summaries to the Head Office database.",
      gif: require("../assets/gif/find-campsite-manager.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/find-campsite-manager",
      skills: ["Python", "Flask", "Azure", "MongoDB", "SQL", "React", "CSS", "JavaScript", "RESTful API", "Unit Testing", "Databases"] 
    },
    {
      id: 3,
      title: "OlaNotes",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus a non dignissimos itaque, accusamus rerum sint adipisci inventore sit perspiciatis ipsum. Optio, provident necessitatibus. Maiores eaque cum consequatur velit atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptas repudiandae quia, quam nisi in impedit sit amet harum reprehenderit vitae esse inventore placeat obcaecati quod temporibus! Ratione, possimus reiciendis.Officia quae beatae tenetur exercitationem debitis, alias nisi! Dolor tenetur nobis, accusamus, ipsum molestias dolorem culpa atque laborum sunt unde distinctio omnis, error sapiente repellendus temporibus reiciendis tempora sed odit.Nisi, sed odio sapiente amet quasi aspernatur, obcaecati maiores at, in corrupti quae explicabo expedita eos saepe nemo enim aut sequi. Sint modi facilis pariatur iusto ut! Obcaecati, quia ad.Architecto sequi qui illum delectus nostrum quibusdam officiis reiciendis quos eligendi atque aliquam tempore cumque odio totam laudantium, saepe nobis ducimus! Corrupti obcaecati eos culpa ipsa vero porro ad atque!",
      gif: require("../assets/img/projectimage1.png"),  
      liveDemo: "#",
      sourceCode: "#",
      skills: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Thymeleaf", "RESTful API", "Maven", "Hibernate", "MySQL", "Databases"] 
    },
    {
      id: 4,
      title: "CityArtWalk",
      description: "CityArtWalk is an Android app written in Kotlin designed to help users discover and document public artworks in their city. Users can add, edit, and delete artworks, view details, and navigate to their locations using GPS integration.<br/><br/><h5>Features:</h5><b>View and Explore Artworks:</b> Browse a list of artworks with details.<br/><b>Add New Artworks:</b> Create new artwork entries with title, date, and location.<br/><b>Photo Capture:</b> Take and attach photos of artworks using the camera.<br/><b>GPS Location:</b> Get the artwork's location coordinates and open in Google Maps.<br/><b>Manage Artworks:</b> Edit or delete existing artworks from the list.<br/><b>Data Persistence:</b> Uses Room Database for storing artwork information.",
      gif: require("../assets/gif/city-art-walk.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/city-art-walk",
      skills: ["Kotlin","Android","Databases", "Google Play Services"]
    },
    {
      id: 5,
      title: "GeoQuiz",
      description: "GeoQuiz is an Android quiz app that challenges users with true/false questions about geography. It includes features such as tracking user progress, scoring, preventing multiple answers per question, and a \"cheat\" option with a penalty. <br/><br/><h5>Features:</h5>True/False Quiz: Answer geography-related questions.<br/>Navigation: Move between previous and next questions.<br/>Score Tracking: Correct answers increase the score.<br/>Cheat Functionality: Users can reveal the correct answer but do not get a point.<br/>Persistence: Tracks answered and cheated questions across configuration changes.",
      gif: require("../assets/gif/geoquiz.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/geoquiz",
      skills: ["Kotlin","Android"]
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus a non dignissimos itaque, accusamus rerum sint adipisci inventore sit perspiciatis ipsum. Optio, provident necessitatibus. Maiores eaque cum consequatur velit atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptas repudiandae quia, quam nisi in impedit sit amet harum reprehenderit vitae esse inventore placeat obcaecati quod temporibus! Ratione, possimus reiciendis.Officia quae beatae tenetur exercitationem debitis, alias nisi! Dolor tenetur nobis, accusamus, ipsum molestias dolorem culpa atque laborum sunt unde distinctio omnis, error sapiente repellendus temporibus reiciendis tempora sed odit.Nisi, sed odio sapiente amet quasi aspernatur, obcaecati maiores at, in corrupti quae explicabo expedita eos saepe nemo enim aut sequi. Sint modi facilis pariatur iusto ut! Obcaecati, quia ad.Architecto sequi qui illum delectus nostrum quibusdam officiis reiciendis quos eligendi atque aliquam tempore cumque odio totam laudantium, saepe nobis ducimus! Corrupti obcaecati eos culpa ipsa vero porro ad atque!",
      gif: require("../assets/img/projectimage1.png"),  
      liveDemo: "#",
      sourceCode: "#",
      skills: ["JavaScript","React", "CSS"]
    },
    {
      id: 7,
      title: "Tenzies Game",
      description: "Tenzies is an engaging and addictive dice game built with React. The goal is to roll ten dice until they all show the same number. Players can hold dice to keep their current values between rolls, striving to achieve the best time and fewest rolls. The game features a sleek interface, a stopwatch to track game time, and a confetti animation to celebrate wins. <br/><br/><h5>Highlights:</h5> Dynamic dice rolling and holding functionality. <br/>Tracks and displays best time and roll count.<br/>Confetti animation on winning.<br/>User-friendly interface with a clean design.",
      gif: require("../assets/gif/tenzies-game.gif"),  
      liveDemo: "https://yuliia-kruta.github.io/tenzies-game/",
      sourceCode: "https://github.com/Yuliia-Kruta/tenzies-game",
      skills: ["React", "CSS", "JavaScript"]
    },
    {
      id: 8,
      title: "Age Calculator",
      description: "This project is a simple age calculator that interacts with a <b>micro:bit microcontroller</b> via USB. The web interface allows users to enter their date of birth, calculates their age, and displays it both on the webpage and the micro:bit. If it's the user's birthday, the micro:bit plays a birthday song.<br/><br/><h5>Features: </h5>Web interface with a DOB input field and an age calculation button.<br/>Sends data via USB to the micro:bit for display.<br/>Displays a congratulatory message and plays a birthday song if it’s the user’s birthday.",
      gif: require("../assets/img/age-calculator.png"),  
      liveDemo: "https://yuliia-kruta.github.io/age-calculator/",
      sourceCode: "https://github.com/Yuliia-Kruta/age-calculator?tab=readme-ov-file",
      skills: ["micro:bit", "HTML", "CSS", "JavaScript", "Microcontrollers"]
    },
    {
      id: 9,
      title: "Meme Generator",
      description: "The Meme Generator app is a fun and interactive web application built with React. It allows users to create custom memes by adding their own text to popular meme images. Simply click to fetch a new meme, add your captions, and create a shareable meme in seconds!",
      gif: require("../assets/gif/meme-generator.gif"),  
      liveDemo: "https://yuliia-kruta.github.io/meme-generator/",
      sourceCode: "https://github.com/Yuliia-Kruta/meme-generator?tab=readme-ov-file",
      skills: ["React", "CSS", "JavaScript"]
    },
    {
      id: 10,
      title: "Shop Management System",
      description: "The Shop Management App is a Python-based GUI application designed to manage shop inventory and customer carts. Built using Python and tkinter this application allows shop managers to load inventory from a CSV file, display items in specified aisles, add products to a customer cart, and proceed to checkout. The app features intuitive error handling and user-friendly messages to ensure smooth operation.<br/><br/><h5>Features:</h5> Load Inventory: Load products from a CSV file. <br/>Display Inventory: Display items from a specified aisle.<br/>Add to Cart: Add selected products to the customer cart.<br/>View Cart: Display items in the cart along with the total cost.<br/>Checkout: Clear the cart and update the inventory file.<br/>Cancel Order: Clear the cart without proceeding to checkout.",
      gif: require("../assets/gif/shop-management-system.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/shop-management-system",
      skills: ["Python", "Tkinter"]
    },
    {
      id: 11,
      title: "Fallin Game",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus a non dignissimos itaque, accusamus rerum sint adipisci inventore sit perspiciatis ipsum. Optio, provident necessitatibus. Maiores eaque cum consequatur velit atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptas repudiandae quia, quam nisi in impedit sit amet harum reprehenderit vitae esse inventore placeat obcaecati quod temporibus! Ratione, possimus reiciendis.Officia quae beatae tenetur exercitationem debitis, alias nisi! Dolor tenetur nobis, accusamus, ipsum molestias dolorem culpa atque laborum sunt unde distinctio omnis, error sapiente repellendus temporibus reiciendis tempora sed odit.Nisi, sed odio sapiente amet quasi aspernatur, obcaecati maiores at, in corrupti quae explicabo expedita eos saepe nemo enim aut sequi. Sint modi facilis pariatur iusto ut! Obcaecati, quia ad.Architecto sequi qui illum delectus nostrum quibusdam officiis reiciendis quos eligendi atque aliquam tempore cumque odio totam laudantium, saepe nobis ducimus! Corrupti obcaecati eos culpa ipsa vero porro ad atque!",
      gif: require("../assets/img/projectimage1.png"),  
      liveDemo: "#",
      sourceCode: "#",
      skills: ["Java", "JavaFX"]
    },
    {
      id: 12,
      title: "Fallin Game",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus a non dignissimos itaque, accusamus rerum sint adipisci inventore sit perspiciatis ipsum. Optio, provident necessitatibus. Maiores eaque cum consequatur velit atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptas repudiandae quia, quam nisi in impedit sit amet harum reprehenderit vitae esse inventore placeat obcaecati quod temporibus! Ratione, possimus reiciendis.Officia quae beatae tenetur exercitationem debitis, alias nisi! Dolor tenetur nobis, accusamus, ipsum molestias dolorem culpa atque laborum sunt unde distinctio omnis, error sapiente repellendus temporibus reiciendis tempora sed odit.Nisi, sed odio sapiente amet quasi aspernatur, obcaecati maiores at, in corrupti quae explicabo expedita eos saepe nemo enim aut sequi. Sint modi facilis pariatur iusto ut! Obcaecati, quia ad.Architecto sequi qui illum delectus nostrum quibusdam officiis reiciendis quos eligendi atque aliquam tempore cumque odio totam laudantium, saepe nobis ducimus! Corrupti obcaecati eos culpa ipsa vero porro ad atque!",
      gif: require("../assets/img/projectimage1.png"),  
      liveDemo: "#",
      sourceCode: "#",
      skills: ["Java", "JavaFX"]
    },
    {
      id: 13,
      title: "IoT Home Healthcare System",
      description: "This project implements an IoT-based home healthcare system using a <b>Raspberry Pi</b>, heart rate and blood oxygen saturation sensors, and various other components to monitor an individual's vital signs. It provides real-time readings and alerts users when heart rate (BPM) or blood oxygen saturation (SpO2) levels go outside of the predefined safe thresholds. Alerts are sent via SMS using Twilio API, and the data is visualised in real-time using Matplotlib.<br/><br/><h5>Features:</h5>Real-time heart rate and SpO2 monitoring.<br/>Graphical display of measurements.<br/>LED indicator to confirm sensor finger placement.<br/>Audible buzzer for out-of-range readings.<br/>SMS alerts for abnormal heart rate or oxygen saturation levels.<br/>Data visualisation with Matplotlib. <br/><br/>This project was created together with Lucy Kendrick, Patrick Williams and Max Bailey for Internet of Things class at UniSC.",
      gif: require("../assets/img/IoT-healthcare.png"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/IoT-home-healthcare-system",
      skills: ["Python", "Raspberry PI", "Microcontrollers"]
    },
    {
      id: 14,
      title: "Self Reflection",
      description: "Self Reflection project is an interactive art installation that represents the internal relationship of the person with themselves. The mirror with the LED strip on its frame glows up with different colours depending on the distance between the person and the mirror, measured by the ultrasonic sensor. <br/><br/> By using the mirror as a metaphorical representation of the self, viewers are invited to engage with their inner thoughts and feelings. The distance and corresponding LED colours symbolise how close and harmonic this dialog is. Moving from the farthest point to the very close to the mirror, and observing the colour change, allows the user to reflect on all five stages of finding an inner peace journey. <br/><br/> This project was created together with Michaela Perea and Liam McMichael for Introduction to Interactive Media class at UniSC. <br/><br/> For more information, please refer to the README.md file on the project's GitHub page by clicking the Source Code button.",
      gif: require("../assets/img/self-reflection.png"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/self-reflection",
      skills: ["micro:bit", "Python", "Microcontrollers", "Interactive media"]
    },
    {
      id: 15,
      title: "Fallin Game",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus a non dignissimos itaque, accusamus rerum sint adipisci inventore sit perspiciatis ipsum. Optio, provident necessitatibus. Maiores eaque cum consequatur velit atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptas repudiandae quia, quam nisi in impedit sit amet harum reprehenderit vitae esse inventore placeat obcaecati quod temporibus! Ratione, possimus reiciendis.Officia quae beatae tenetur exercitationem debitis, alias nisi! Dolor tenetur nobis, accusamus, ipsum molestias dolorem culpa atque laborum sunt unde distinctio omnis, error sapiente repellendus temporibus reiciendis tempora sed odit.Nisi, sed odio sapiente amet quasi aspernatur, obcaecati maiores at, in corrupti quae explicabo expedita eos saepe nemo enim aut sequi. Sint modi facilis pariatur iusto ut! Obcaecati, quia ad.Architecto sequi qui illum delectus nostrum quibusdam officiis reiciendis quos eligendi atque aliquam tempore cumque odio totam laudantium, saepe nobis ducimus! Corrupti obcaecati eos culpa ipsa vero porro ad atque!",
      gif: require("../assets/img/projectimage1.png"),  
      liveDemo: "#",
      sourceCode: "#",
      skills: ["Java", "JavaFX"]
    },
    {
      id: 16,
      title: "Fallin Game",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus a non dignissimos itaque, accusamus rerum sint adipisci inventore sit perspiciatis ipsum. Optio, provident necessitatibus. Maiores eaque cum consequatur velit atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptas repudiandae quia, quam nisi in impedit sit amet harum reprehenderit vitae esse inventore placeat obcaecati quod temporibus! Ratione, possimus reiciendis.Officia quae beatae tenetur exercitationem debitis, alias nisi! Dolor tenetur nobis, accusamus, ipsum molestias dolorem culpa atque laborum sunt unde distinctio omnis, error sapiente repellendus temporibus reiciendis tempora sed odit.Nisi, sed odio sapiente amet quasi aspernatur, obcaecati maiores at, in corrupti quae explicabo expedita eos saepe nemo enim aut sequi. Sint modi facilis pariatur iusto ut! Obcaecati, quia ad.Architecto sequi qui illum delectus nostrum quibusdam officiis reiciendis quos eligendi atque aliquam tempore cumque odio totam laudantium, saepe nobis ducimus! Corrupti obcaecati eos culpa ipsa vero porro ad atque!",
      gif: require("../assets/img/projectimage1.png"),  
      liveDemo: "#",
      sourceCode: "#",
      skills: ["Java", "JavaFX"]
    }
  ];
  
  export default projects;
  