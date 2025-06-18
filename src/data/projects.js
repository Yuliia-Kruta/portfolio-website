const projects = [
  {
      id: 1,
      title: "Find Campsite Auth",
      description: "Find Campsite Auth is a robust authentication system designed for a campsite booking platform. It enables users to create accounts, log in, and reset passwords while ensuring data security. The backend is built with Python & Flask, while the frontend is developed with React.<br/> Utilises Redis as a key-value database. <br/><br/><h5>Features:</h5><b>User Registration:</b> Allows users to create an account with securely hashed passwords.<br/><b>Login & Authentication:</b> Uses JWT tokens to manage user sessions securely.<br/><b>Password Reset:</b> Enables users to reset their passwords by answering a security question.<br/><b>Protected Routes:</b> Restricts access to certain pages for authenticated users only.<br/><b>Efficient Data Storage:</b> Utilises Redis for fast and scalable user data retrieval. <br/><br/> <b>Note:</b> There may be a delay when starting the live demo application for the first time due to the limited performance of Render's free plan. If the app remains unresponsive, please try reloading the page.",
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
      description: "OlaNotes was my first-ever pet project. Although not all features were implemented, it helped me understand how the frontend and backend interact, as well as RESTful APIs.<br/><br/> OlaNotes is a cloud-based note-taking web application built with Java and Spring Boot. It allows users to securely register, log in, create and manage notes through intuitive dashboard. The application leverages a MySQL cloud database and is deployed using Docker on Render.  <br/><br><h5>Features:</h5> - User registration and authentication<br/> - Create, edit, and delete notes<br/> - Built-in text editor<br/> - Mark notes as favourite or pinned<br/> - Notes dashboard with grid and list views<br/> - Search notes<br/> - Edit user profile<br/> - Password encryption<br/> - Responsive design",
      gif: require("../assets/gif/olanotes-2.gif"),  
      liveDemo: "https://olanotes.onrender.com/",
      sourceCode: "https://github.com/Yuliia-Kruta/OlaNotes",
      skills: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Thymeleaf", "RESTful API", "Maven", "Hibernate", "MySQL", "Databases", "Docker"] 
    },
    {
      id: 4,
      title: "Glow Run",
      description: "Glow Run is a first-person shooter platformer developed in Unreal Engine 4 using the Blueprint visual scripting system. Created as part of a university assignment, the game features animated gameplay, an engaging GUI, and five progressively challenging levels.  <br/><br><h5>Features:</h5> - First-person gameplay with a custom gun modeled in Blender<br/> - 5 carefully designed levels with increasing difficulty<br/> - Bright, glowing, cyberpunk-inspired visual style<br/> - Smooth player controls and responsive shooting mechanics<br/> - Custom user interface: main menu, pause, game over, level selection, and end screen<br/> - Enemies that shoot projectiles, and laser obstacles<br/> - Limited health system with an on-screen HP bar<br/> - Save and continue game functionality",
      gif: require("../assets/gif/glowrun.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/GlowRun",
      skills: ["Unreal Engine"] 
    },
    {
      id: 5,
      title: "CityArtWalk",
      description: "CityArtWalk is an Android app written in Kotlin designed to help users discover and document public artworks in their city. Users can add, edit, and delete artworks, view details, and navigate to their locations using GPS integration.<br/><br/><h5>Features:</h5><b>View and Explore Artworks:</b> Browse a list of artworks with details.<br/><b>Add New Artworks:</b> Create new artwork entries with title, date, and location.<br/><b>Photo Capture:</b> Take and attach photos of artworks using the camera.<br/><b>GPS Location:</b> Get the artwork's location coordinates and open in Google Maps.<br/><b>Manage Artworks:</b> Edit or delete existing artworks from the list.<br/><b>Data Persistence:</b> Uses Room Database for storing artwork information.",
      gif: require("../assets/gif/city-art-walk.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/city-art-walk",
      skills: ["Kotlin","Android","Databases", "Google Play Services"]
    },
    {
      id: 6,
      title: "GeoQuiz",
      description: "GeoQuiz is an Android quiz app that challenges users with true/false questions about geography. It includes features such as tracking user progress, scoring, preventing multiple answers per question, and a \"cheat\" option with a penalty. <br/><br/><h5>Features:</h5>True/False Quiz: Answer geography-related questions.<br/>Navigation: Move between previous and next questions.<br/>Score Tracking: Correct answers increase the score.<br/>Cheat Functionality: Users can reveal the correct answer but do not get a point.<br/>Persistence: Tracks answered and cheated questions across configuration changes.",
      gif: require("../assets/gif/geoquiz.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/geoquiz",
      skills: ["Kotlin","Android"]
    },
    {
      id: 7,
      title: "Portfolio Website",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus a non dignissimos itaque, accusamus rerum sint adipisci inventore sit perspiciatis ipsum. Optio, provident necessitatibus. Maiores eaque cum consequatur velit atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptas repudiandae quia, quam nisi in impedit sit amet harum reprehenderit vitae esse inventore placeat obcaecati quod temporibus! Ratione, possimus reiciendis.Officia quae beatae tenetur exercitationem debitis, alias nisi! Dolor tenetur nobis, accusamus, ipsum molestias dolorem culpa atque laborum sunt unde distinctio omnis, error sapiente repellendus temporibus reiciendis tempora sed odit.Nisi, sed odio sapiente amet quasi aspernatur, obcaecati maiores at, in corrupti quae explicabo expedita eos saepe nemo enim aut sequi. Sint modi facilis pariatur iusto ut! Obcaecati, quia ad.Architecto sequi qui illum delectus nostrum quibusdam officiis reiciendis quos eligendi atque aliquam tempore cumque odio totam laudantium, saepe nobis ducimus! Corrupti obcaecati eos culpa ipsa vero porro ad atque!",
      gif: require("../assets/img/projectimage1.png"),  
      liveDemo: "#",
      sourceCode: "#",
      skills: ["JavaScript","React", "CSS"]
    },
    {
      id: 8,
      title: "Tenzies Game",
      description: "Tenzies is an engaging and addictive dice game built with React. The goal is to roll ten dice until they all show the same number. Players can hold dice to keep their current values between rolls, striving to achieve the best time and fewest rolls. The game features a sleek interface, a stopwatch to track game time, and a confetti animation to celebrate wins. <br/><br/><h5>Highlights:</h5> Dynamic dice rolling and holding functionality. <br/>Tracks and displays best time and roll count.<br/>Confetti animation on winning.<br/>User-friendly interface with a clean design.",
      gif: require("../assets/gif/tenzies-game.gif"),  
      liveDemo: "https://yuliia-kruta.github.io/tenzies-game/",
      sourceCode: "https://github.com/Yuliia-Kruta/tenzies-game",
      skills: ["React", "CSS", "JavaScript"]
    },
    {
      id: 9,
      title: "Age Calculator",
      description: "This project is a simple age calculator that interacts with a <b>micro:bit microcontroller</b> via USB. The web interface allows users to enter their date of birth, calculates their age, and displays it both on the webpage and the micro:bit. If it's the user's birthday, the micro:bit plays a birthday song.<br/><br/><h5>Features: </h5>Web interface with a DOB input field and an age calculation button.<br/>Sends data via USB to the micro:bit for display.<br/>Displays a congratulatory message and plays a birthday song if it’s the user’s birthday.",
      gif: require("../assets/img/age-calculator.png"),  
      liveDemo: "https://yuliia-kruta.github.io/age-calculator/",
      sourceCode: "https://github.com/Yuliia-Kruta/age-calculator?tab=readme-ov-file",
      skills: ["micro:bit", "HTML", "CSS", "JavaScript", "Microcontrollers"]
    },
    {
      id: 10,
      title: "Meme Generator",
      description: "The Meme Generator app is a fun and interactive web application built with React. It allows users to create custom memes by adding their own text to popular meme images. Simply click to fetch a new meme, add your captions, and create a shareable meme in seconds!",
      gif: require("../assets/gif/meme-generator.gif"),  
      liveDemo: "https://yuliia-kruta.github.io/meme-generator/",
      sourceCode: "https://github.com/Yuliia-Kruta/meme-generator?tab=readme-ov-file",
      skills: ["React", "CSS", "JavaScript"]
    },
    {
      id: 11,
      title: "Shop Management System",
      description: "The Shop Management App is a Python-based GUI application designed to manage shop inventory and customer carts. Built using Python and tkinter this application allows shop managers to load inventory from a CSV file, display items in specified aisles, add products to a customer cart, and proceed to checkout. The app features intuitive error handling and user-friendly messages to ensure smooth operation.<br/><br/><h5>Features:</h5> Load Inventory: Load products from a CSV file. <br/>Display Inventory: Display items from a specified aisle.<br/>Add to Cart: Add selected products to the customer cart.<br/>View Cart: Display items in the cart along with the total cost.<br/>Checkout: Clear the cart and update the inventory file.<br/>Cancel Order: Clear the cart without proceeding to checkout.",
      gif: require("../assets/gif/shop-management-system.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/shop-management-system",
      skills: ["Python", "Tkinter"]
    },
    {
      id: 12,
      title: "Java Algorithmic Programs",
      description: "This repository contains a collection of Java programs demonstrating various computational concepts, algorithms, and theoretical models.<br/><br/><h5>The programs included are:</h5>- Turing Test (turing-test branch)<br/>- String Transformations (string-transformations branch)<br/>- Basic Algorithms (basic-algorithms branch). Contains such programs as Collatz Conjecture, Euclidean Algorithm, Find Minimum and Maximum, Guess the Number, Palindrome Checker, Perfect Numbers, Pythagoras, Recursive Fibonacci, Factorial, and Digit Count, Series Calculation, Tower of Hanoi.<br/>- Sum of Permutations (permutation-sum branch)<br/>- Reverse Polish Notation (reverse-polish-notation branch)<br/> - Evaluate Reverse Polish Notation (evaluate-rpn branch)<br/> - Amicable Numbers (amicable-numbers branch)<br/><br/>Detailed description of each program can be found in respective branches.",
      gif: require("../assets/img/java-algorithmic-programs.png"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/java-algorithmic-programs",
      skills: ["Java"]
    },
    {
      id: 13,
      title: "Fallin Game",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus a non dignissimos itaque, accusamus rerum sint adipisci inventore sit perspiciatis ipsum. Optio, provident necessitatibus. Maiores eaque cum consequatur velit atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptas repudiandae quia, quam nisi in impedit sit amet harum reprehenderit vitae esse inventore placeat obcaecati quod temporibus! Ratione, possimus reiciendis.Officia quae beatae tenetur exercitationem debitis, alias nisi! Dolor tenetur nobis, accusamus, ipsum molestias dolorem culpa atque laborum sunt unde distinctio omnis, error sapiente repellendus temporibus reiciendis tempora sed odit.Nisi, sed odio sapiente amet quasi aspernatur, obcaecati maiores at, in corrupti quae explicabo expedita eos saepe nemo enim aut sequi. Sint modi facilis pariatur iusto ut! Obcaecati, quia ad.Architecto sequi qui illum delectus nostrum quibusdam officiis reiciendis quos eligendi atque aliquam tempore cumque odio totam laudantium, saepe nobis ducimus! Corrupti obcaecati eos culpa ipsa vero porro ad atque!",
      gif: require("../assets/img/projectimage1.png"),  
      liveDemo: "#",
      sourceCode: "#",
      skills: ["Java", "JavaFX"]
    },
    {
      id: 14,
      title: "IoT Home Healthcare System",
      description: "This project implements an IoT-based home healthcare system using a <b>Raspberry Pi</b>, heart rate and blood oxygen saturation sensors, and various other components to monitor an individual's vital signs. It provides real-time readings and alerts users when heart rate (BPM) or blood oxygen saturation (SpO2) levels go outside of the predefined safe thresholds. Alerts are sent via SMS using Twilio API, and the data is visualised in real-time using Matplotlib.<br/><br/><h5>Features:</h5>Real-time heart rate and SpO2 monitoring.<br/>Graphical display of measurements.<br/>LED indicator to confirm sensor finger placement.<br/>Audible buzzer for out-of-range readings.<br/>SMS alerts for abnormal heart rate or oxygen saturation levels.<br/>Data visualisation with Matplotlib. <br/><br/>This project was created together with Lucy Kendrick, Patrick Williams and Max Bailey for Internet of Things class at UniSC.",
      gif: require("../assets/img/IoT-healthcare.png"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/IoT-home-healthcare-system",
      skills: ["Python", "Raspberry PI", "Microcontrollers"]
    },
    {
      id: 15,
      title: "Self Reflection",
      description: "Self Reflection project is an interactive art installation that represents the internal relationship of the person with themselves. The mirror with the LED strip on its frame glows up with different colours depending on the distance between the person and the mirror, measured by the ultrasonic sensor. <br/><br/> By using the mirror as a metaphorical representation of the self, viewers are invited to engage with their inner thoughts and feelings. The distance and corresponding LED colours symbolise how close and harmonic this dialog is. Moving from the farthest point to the very close to the mirror, and observing the colour change, allows the user to reflect on all five stages of finding an inner peace journey. <br/><br/> This project was created together with Michaela Perea and Liam McMichael for Introduction to Interactive Media class at UniSC. <br/><br/> For more information, please refer to the README.md file on the project's GitHub page by clicking the Source Code button.",
      gif: require("../assets/img/self-reflection.png"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/self-reflection",
      skills: ["micro:bit", "Python", "Microcontrollers", "Interactive media"]
    },
    {
      id: 16,
      title: "Fallin Game",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus a non dignissimos itaque, accusamus rerum sint adipisci inventore sit perspiciatis ipsum. Optio, provident necessitatibus. Maiores eaque cum consequatur velit atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptas repudiandae quia, quam nisi in impedit sit amet harum reprehenderit vitae esse inventore placeat obcaecati quod temporibus! Ratione, possimus reiciendis.Officia quae beatae tenetur exercitationem debitis, alias nisi! Dolor tenetur nobis, accusamus, ipsum molestias dolorem culpa atque laborum sunt unde distinctio omnis, error sapiente repellendus temporibus reiciendis tempora sed odit.Nisi, sed odio sapiente amet quasi aspernatur, obcaecati maiores at, in corrupti quae explicabo expedita eos saepe nemo enim aut sequi. Sint modi facilis pariatur iusto ut! Obcaecati, quia ad.Architecto sequi qui illum delectus nostrum quibusdam officiis reiciendis quos eligendi atque aliquam tempore cumque odio totam laudantium, saepe nobis ducimus! Corrupti obcaecati eos culpa ipsa vero porro ad atque!",
      gif: require("../assets/img/projectimage1.png"),  
      liveDemo: "#",
      sourceCode: "#",
      skills: ["Java", "JavaFX"]
    },
    {
      id: 17,
      title: "Graphics Editor",
      description: "Graphics Editor is a simple and intuitive drawing application, similar to Paint, built using Python's Tkinter library. This tool allows users to draw, edit, and save their creations with various brushes, colors, shapes, and text. <br/><br/><h5>Features:</h5> - Drawing: Use different brush sizes and colors to draw freehand on the canvas.<br/> - Shapes: Add rectangles, circles, triangles, lines, and arcs with customizable colors.<br/> - Text: Add text with customizable fonts and colors.<br/> - Eraser: Erase parts of the drawing with different eraser sizes.<br/> - Background: Change the canvas background color. <br/> - Save: Save your drawing as an image file. <br/> - Open: Open and edit existing image files. <br/> - Fullscreen: Toggle fullscreen mode for an immersive drawing experience. <br/> - Clear: Clear the entire canvas. <br/> - Help: Access help and information about the application.",
      gif: require("../assets/gif/graphic-editor.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/graphic-editor",
      skills: ["Python", "Tkinter"]
    },
    {
      id: 18,
      title: "Cissoid of Diocles",
      description: "This project is a Python application that allows users to plot the Cissoid of Diocles graph using a Tkinter-based GUI. The application takes user input for the necessary parameters and plots the graph using Matplotlib. <br/><br/> <h5>Features:</h5> Graph Plotting: Plots the Cissoid of Diocles graph based on user input.<br/>Error Handling: Provides feedback if the input values are invalid.<br/>Graph Customisation: Allows users to set the range and step for the graph.",
      gif: require("../assets/gif/cissoid-diocles.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/cissoid-of-diocles",
      skills: ["Python", "Tkinter", "Matplotlib"]
    },
    {
      id: 19,
      title: "Simple Python Apps",
      description: "The repository contains a collection of simple Python projects that demonstrate basic programming concepts. <br/><br/>The projects included are: <br/><br/> - <b>Text-based adventure game</b> (text-adventure-game-branch)<br/> A simple text-based adventure game called \"Creepy House\" written on Python. Players can navigate through different rooms, pick up objects, and interact with the environment using basic commands. <br/> <br/> - <b>Quiz game</b> (quiz-game-branch) <br/> A simple command-line python quiz game that tests your knowledge on various python topics. The game randomly selects 5 questions from a predefined list and provides feedback on the correctness of your answers.",
      gif: require("../assets/gif/text-game.gif"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/simple-python-apps",
      skills: ["Python"]
    },
    {
      id: 20,
      title: "Simple Java Apps",
      description: "This repository contains simple Java applications that demonstrate fundamental programming concepts and problem-solving techniques. <br/><br/>The programs included are: <br/><br/> - <b>Delete Comments In Text</b> (delete-comments branch)<br/> This simple Java app removes comments from a text file. It handles both single-line (`// ...`) and multi-line (`/* ... */`) comments, producing a clean output file without comments. <br/> <br/> - <b>Simple Calendar</b> (simple-calendar branch) <br/> This simple Java-based console application displays a calendar for a given year. It takes user input for the year and prints the calendar month by month, showing the days of the week for each month.",
      gif: require("../assets/img/simple-java-apps.png"),  
      liveDemo: "none",
      sourceCode: "https://github.com/Yuliia-Kruta/simple-java-apps",
      skills: ["Java"]
    }
  ];
  
  export default projects;
  