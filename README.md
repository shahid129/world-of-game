# World of Game  
![Am i Responsive image](/assets/docs/responsive.png)

[View Live Project Here](https://shahid129.github.io/world-of-game/index.html)

## TABLE OF CONTENTS
- [User Experience/User Interface](#user-experience-or-user-interface)
- [Design](#design)
- [Features](#features)
- [Testing](#testing)
- [Issues and Bugs](#issues-and-bugs)
- [Technology](#echnology)
- [Resources](#resources)
- [Deployment](#deployment) 
- [Credits](#credits)
- [Acknowledgement](#acknowledgement)

## User Experience or User Interface
### First Time User.
As a first time user I want:
- The user to have a clear idea of the game.
- The game to function properly and game to be intuitive.
- The user can understand what the game is about just from the name of the game.
- The user to know the rules of the game.
- The user to be able to play the game on different types of device.

### As Return or Frequent User.
As a return or frequent user I want:
- To be able to play the game without much distraction on the game.
- To br able to click on the number button rather than typing.
- Know how much time I have left before the game ends.
- To know my last input number.

### As a Owner of The Game.
As a owner of the game, I want:
- The user to be able to play the game on various device.
- The user knows how to play the game just from the main screen.
- Engage the user by limiting their time per game.

## Design
I tried to keep the design of the game as simple as possible. Keeping a great contrast between the background and the foreground was my main aim. Default brown color is used throughout all the pages against the white and light brown backgrounds.
The colors used are as follows:
- [Black](/assets/docs/black.png) is used for fonts  
- [Brown](assets/docs/brown.png) is used for buttons and footer 
-  [Green](assets/docs/green.png) is used for hover on name input
-  [White](assets/docs/white.png) is used for text color on top of brown
-  [White Smoke](assets/docs/white-smoke.png) is used as background on the main page and button background

Balsamic wireframe was used to make the basic layout planning of the pages for both laptop and mobile. Images of balsamic wireframes are -

[Laptop](assets/docs/balsamic-laptop.png)

[Mobile](assets/docs/balsamic-mobile.png)

## Font
I used Cormorant Garamond font throughout the page and as a fallback option I used Serif. The reason for choosing this font is that it stands out well enough against the background give it a clean and nice look.

## Features
<details>
<summary>Navigation menu </summary>

[Navigation menu](/assets/docs/navigation.png)
 is just on the top right of the corner. On a smaller device the menu turns into a [burger menu](/assets/docs/burger-menu.png). Help was taken to make the burger menu from a youtube video. After putting a lot of efforts and thought on how to code the burger menu, I came up with a way to code it. It worked well enough but there was a glitch in the code. That was the time I took help from this [video](https://www.youtube.com/watch?v=flItyHiDm7E)
</details>

<details>
<summary>Main Game Page</summary>

[The main game page ](/assets/docs/main-page.png)
is very simple, where the user is asked for their name. If no input is given, the Let's Play button remains inactive. The game rules are added on the main page as well, so the user does not need to go to any other pages to find out about the game.
</details>

<details>
<summary>Second Game Page</summary>

[Second Game Page](/assets/docs/second-game-page.png)
Second Game Page is very interactive with the user. The user have buttons to click on numbers. every time the user clicks on the number, a hint and the last number  is display on top. there is a timer on the right bottom. if the time ends, the game ends. 
</details>

<details>
<summary>Winner's Page</summary>

[Winner's Page](/assets/docs/win-page.png)
pops up when the user wins the game. it has a nice gif of trophy which would make the user motivated about the game. Also there is Restart button so, the uer can start the game if he wants to.
</details>

<details>
<summary>Last page</summary>

[Last Page](/assets/docs/lost-page.png)
pops up on losing the game. It provides the user with enough information for losing the game. The restart button appears at the bottom as well
</details>

## TESTING

Testing for this website was done by several people in several ways. My wife and my brother checked the website and suggested a lot small changes to make it look better.My mentor Ronan suggested to add buttons of numbers rather than user input.

Online testing for html and css was done using the online validator websites and they are -

- W3C Validator [Screenshot](assets/docs/w3c-validator.png)
- Jigsaw css validator [Screenshot](assets/docs/CSS-Validator%20.png)
- JS Hint [Screenshot](assets/docs/jshint.png)
- Google Lighthouse [Screenshot](assets/docs/google-lighthouse.png)

## ISSUES AND BUGS
 - One issue was found by W3C Validator, where it says
   - From line 67, column 21; to line 67, column 38
   Empty heading.

          <h3 id="fullName"></h3>↩

    Reason: The reason I left the heading empty is because, when the user put his name in name field, this is where the user's name will pop up in the game.

No errors were found in Jigsaw css validator or JS hint.

### How I encountered problems and solved them

Since the very begging, I had this idea about building Guess the number game. What I did not know was that there would be a lot of ups and downs on the road. 
>The main struggle was with the Let's Play button. I attached three functions with this button, anytime i click on it it goes to the game page. Hence User verification for that field would not work even though I added required attribute in the input field. After doing a lot of research and trying all the different ways I could think of, I came to understand that because I attached few function to the button, it loads to different things before html could validate the input field.

> I, personally prefer to think and use my ideas of coding rather than looking for solution, I remember spending hours and hours on simple things like hiding a div when you click on something. It was so easy but I learnt it the hard way as I did not want look for solution.

> When creating the hamburger menu at the end of my project, I already gathered enough knowledge on how to do it. I had the idea of adding two icons(one with three horizontal lines and other with X) of hamburger menu on top of each other. When you click on it, one of them hides and the other one shows up and the menu appears and EUREKA ... it worked fine. But alas, there was a small glitch in it. I tried to fix it for couple of days, But I could not do it. That was the time I took help from one of the videos from youtube.

> In the begging my code was a little bit simple, the user would enter their guess number in the game. My mentor Ronan suggested to use buttons if possible. I though that was a brilliant idea to do so. I started coding and did the layout for buttons. To get the value of each number and use it in js to compare with the random number was the difficult part for me. I was stucked there almost a week. I knew there was a small code that i was missing somewhere. 

I was using this 

    let numInput = Number(document.getElementById('numInput').value);

Actually it would be 

    let numInput = Number(document.getElementById('numInput').innerHTML);

The bottom line is, I love playing with codes, I love writing even wrong codes. What I believe, as long as I am writing code (right or wrong) I am using my brain and enhancing the brain power to think more.

## TECHNOLOGY
- HTML
- CSS
- Java Script
- Gitpod
- Github
- Vs Code
- Font Awesome
- Google Font
- Markdown
- Balsamic

## DEPLOYMENT

Gitpod was used to make this project. I used Code Institute's Template for this project

### Deploying on github pages
1. Log in to Github or create an account.
2. Locate the Github repository on the left.
3. Select setting for the repository.
4. On the left hand side select Pages.
5. Under Source click dropdown menu and select Main.
6. Once the selection is done, the page will refresh automatically, which means the page is deployed. It might take couple of minutes for the page to go live.

## CREDITS
The main idea and the layout of the page was mine. I used python a couple of years ago where I built a very similar type of game. This time I thought it would be a brilliant idea to build this game from scratch and give it a life.

>The Favicon for this project was made from [Favicon](https://favicon.io/)

>The Icon for this project was taken from [Font Awesome](https://fontawesome.com/)

> The animated icons were take from from [Flaticon](https://www.flaticon.com/)

>The Font for this project was taken from [Google Fonts](https://fonts.google.com/)

>The colors were taken from [Colors](https://coolors.co/)

>A lot of help was taken from all over the internet and the main ones are - 
- [Stack Overflow](https://stackoverflow.com/)
- [W3Schools](https://www.w3schools.com/)
- [CSS Tricks](https://css-tricks.com/)
- [Youtube](https://www.youtube.com/)
- [FreeCodeCamp](https://www.freecodecamp.org/)

## ACKNOWLEDGEMENT
> I would like to thank my tutor, Kasia, and my mentor Ronan, for their invaluable help and guidance throughout the process. The slack group Jan-2022-lwetb, and all the fellow mates from slack

# THANK YOU
Thanks to my fellow slackers for reviewing my project and a very special thank you to my mentor Ronan, for his invaluable advice and resources throughout the development of this project.