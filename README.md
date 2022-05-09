# World of Game  
![Am i Responsive image](/assets/docs/responsive.png)

[View Live Project Here](https://shahid129.github.io/world-of-game/index.html)

## TABLE OF CONTENTS
- [User Experience/User Interface](#user-experience-or-user-interface)
- [Design](#design)
- [Features](#features)
- [Testing](#testing)
- [Responsiveness](#responsiveness)
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
- [Green](assets/docs/green.png) is used for hover on name input
- [White](assets/docs/white.png) is used for text color on top of brown
- [White Smoke](assets/docs/white-smoke.png) is used as background on the main page and button background

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

<details>
<summary>About</summary>

[About](/assets/docs/about-page.png)
page has the same layout as the main page. Maintaining consistency between all pages was of the main objective. About Page gives a brief description about me and the game.
</details>

## TESTING

Testing for this website was done by several people in several ways. My wife and my brother checked the website and suggested a lot small changes to make it look better.My mentor Ronan suggested to add buttons of numbers rather than user input.

Online testing for html and css was done using the online validator websites and they are -

- W3C Validator was used to check the html and no errors were found. [Home Page](assets/docs/w3c-validator.png) and [About Page](assets/docs/about-html-validator.png)
- Jigsaw css validator was used to validate css file and no errors were found. [Home Page](assets/docs/CSS-Validator%20.png) and [About Page](assets/docs/about-css-validator.png)
- JS Hint validator was used to check the js file and no errors were found. The New JavaScript features (ES6) option was ticked in the Configure menu. [Script.js](assets/docs/jshint.png) and [BurgerMenu.js](assets/docs/burgerMenu-js.png)
- Google Lighthouse [Home Page](assets/docs/google-lighthouse.png) and [About Page](assets/docs/about-lighthouse.png)

### What I did to enhance User Experience or User Interface.


|Description| Results  |
|--|--|
|The user to have a clear idea of the game. | The clear idea of the game is obtained from the name of the game, "Guess The Number" |
| Rules of the game.| Rules of the game are display in the main page. |
|To be able to play the game on different types of device. |  Media query is added to ensure the responsiveness of the game.| 
|Play the game without much distraction. | The page is kept clean to ensure there is no distraction. |
| Time left to finish the game.| A timer is added to ensure user knows how much time is left to finish the game.  |
| To know the last input number by user. | The last input number is displayed on top, and the number is also colored out to ensure user does not click the same number.  |
|How many have the user used or left to finish the game.| With the application of js, the number of times the user have clicked and number of chances left is display at bottom.  |
|The users name is used in all pages of the game. | With the help of js, every time the user puts his/her name, the game responds to the user by calling its name, eg hello Tom, hello Mike etc.  |

## Responsiveness
Media queries were added to the page to ensure the page is displayed correctly on different screen size devices.

The breakpoints are -
883px, 592px, 465px, 352px, 325px

|Device|Results  |
|--|--|
| Blackberry Z-30 | Ok  |
| Iphone SE | Ok  |
| Iphone XR | Ok  |
| Iphone 12 Pro | Ok  |
|Samsung S8 Plus | Ok  |
| Ipad Air | Ok  |
| Surface Pro 7 | Ok  |
| Surface Duo  |Ok
| Galaxy Fold | Ok  |
| Nest Hub Max | Ok  |

### How I encountered problems and solved them

Since the very beginning, I had this idea about building Guess the number game. What I did not know was that there would be a lot of ups and downs on the road. 
>The main struggle was with the Let's Play button. I attached three functions with this button, anytime i click on it it goes to the game page. Hence User verification for that field would not work even though I added required attribute in the input field. After doing a lot of research and trying all the different ways I could think of, I came to understand that because I attached few function to the button, it loads to different things before html could validate the input field.

> I, personally prefer to think and use my ideas of coding rather than looking for solution, I remember spending hours and hours on simple things like hiding a div when you click on something. It was so easy but I learnt it the hard way as I did not want look for solution.

> When creating the hamburger menu at the end of my project, I already gathered enough knowledge on how to do it. I had the idea of adding two icons(one with three horizontal lines and other with X) of hamburger menu on top of each other. When you click on it, one of them hides and the other one shows up and the menu appears and EUREKA ... it worked fine. But alas, there was a small glitch in it. I tried to fix it for couple of days, But I could not do it. That was the time I took help from one of the videos from youtube.

> In the begging my code was a little bit simple, the user would enter their guess number in the game. My mentor Ronan suggested to use buttons if possible. I though that was a brilliant idea to do so. I started coding and did the layout for buttons. To get the value of each number and use it in js to compare with the random number was the difficult part for me. I was stucked there almost a week. I knew that, there was a small piece code that i was missing somewhere. 

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

Gitpod was used to make this project. I used [Code Institute's Template](https://github.com/Code-Institute-Org/gitpod-full-template) for this project

1. Click on [Code Institute's Template](https://github.com/Code-Institute-Org/gitpod-full-template) and then click on use this template button.
2. Write the name of the project, select on PUBLIC and click Create Repository from template.
3. Click on the green button Gitpod and gitpod will start loading. Once Gitpod is loaded, you are ready to code.
4. Each time you write and save code you do the following -
    - git add . 
    - git commit -m "your message"
    - git push

Each term explained below

*.git add .*  adds all your last saved codes to your repository.

*git commit -m "your message"* A clear short message explaining the updates.

*git push* To push all the recent changes and make it live on the page.

### Deploying on github pages
1. Log in to Github or create an account.
2. Locate the Github repository on the left.
3. Select setting for the repository.
4. On the left hand side select Pages.
5. Under Source click dropdown menu and select Main.
6. Once the selection is done, the page will refresh automatically, which means the page is deployed. It might take couple of minutes for the page to go live.

### Deploying Locally

1. Navigate to the github [Repository](https://github.com/shahid129/world-of-game#deployment).

2. Click on the drop down menu CODE.

3. Click on Download Zip and run locally on your machine or copy GIT URL from the HTTPS link.

4. Open your favorite IDE or editor and open the terminal.

5. Change the current working directory to the location where you want the cloned directory.

5. Use the 'git clone' command paste and the copied git URL

6. press enter to create clone on your device.

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