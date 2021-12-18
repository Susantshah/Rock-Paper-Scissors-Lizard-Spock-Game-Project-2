# Rock Paper Scissors Lizard Spock Game

Welcome to Rock - Paper - Scissors - Lizard - Spock game, the extended version of famous Rock - Paper - Scissor game you may know. This modification to the original game is done by adding two more options | Lizard and Spock.This new modification is originated from famous TV show called "Big Bang Theory". This web based game will let user play this game of uncertanity with computer on various difficulty level.

Link to live website : [Click here to visit live website](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/)

![Responsice Mockup](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/mobile-desktop-view-mockup.jpg)

> The new version of the game provides more entertaintment to the game by having more oppoutunities to user to win or lose the game.

## Features

This website is build for providing any online user to play the Rock Paper Scissors Lizard Spock game anytime with automated computer and get entertained. User can play game in both easy and hard mode, where hard mode makes more easy to win for computer by letting it choose twice if it's unable to win at first glance. This way computer has double probability of winning the game, user's probability to win is halfed in hard mode.

### Major Features

#### Home Page

This is the entry page of the website where there are two buttons

- Play game button takes user to gamepage where user can play the game with computer by selecting difficulty levels.
- View rules button opens up a moal popup which shows the game rules and winning possibilities.

![Responsice Mockup](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/homepage.jpg)

#### Rules Section

Rules sections contains all the winning and losing combination when user plays and it also shows the first one to score 10 will win the game.

![Responsice Mockup](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/rules-modal-design.jpg)

#### Difficulty Choose Section

This section consists of two radio buttons where user can select the difficulty level to be easy or hard.

![Responsice Mockup](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/difficulty-design.jpg)

#### Main Game User VS Computer View Section

This section shows both user and computer choice and also shows winner of the round. This section gives user information about how many rounds have been played already

![Responsice Mockup](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/game-view-user-computer.jpg)

#### User Select Section

In this section, user can select their choice and after that computer randomly made its choice. The winner is decided based on both users and computer choice.

![Responsice Mockup](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/user-select-section.jpg)

### Features which can be added later

- Using websockets to make the game Realtime Multiplayer

## Testing

After the game is completed and between the workflow, i have made good enoght testing from real users and online testing softwares to minimize run time errors.

One of the problem i got into while doing was, i have implemented checkbox instead of radio button in easy and hard mode select section. While using checkbox user can select both easy and hard mode of game at once,which doesnot makes sense. After some research i found out that i need to use radio button with same name attribute to have the functionality I desire. Some screenshots captured during test phase are below :

![Checkbox](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/using-checkbox-error.png)

![Radio Easy Select](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/using-radio-select-easy.png)

![Radio Hard Select](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/using-radio-select-hard.png)

I came accross a error in my html while validating HTML which was i used "px" as unit inside height and width attribute of images. I solved it by removing px and just using number. Some screenshots of this error is attached below :

![Error1](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/px-error1.jpg)

![Error2](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/px-error2.jpg)

![Error3](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/px-error3.jpg)

![Error4](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/px-error4.jpg)

Another error I came across validator testing was on role="switch" on radio button inputs in gamepage.html. I solved it by removing role attribute from the radiobutton input.Some screenshots of this error is attached below :

![Error4](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/role-error.jpg)

### Validator Testing

- HTML

  - No errors were returned on index page when passing through the official [W3 validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsusantshah.github.io%2Frock-paper-scissors-lizard-spock-game-project2%2Findex.html)

  ![Index Page HTML Test](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/index-html-check.jpg)

  - No errors were returned on game page when passing through the official [W3 validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsusantshah.github.io%2Frock-paper-scissors-lizard-spock-game-project2%2Fgamepage.html)

  ![Game Page HTML Test](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/gamepage-html-check.jpg)

- CSS

  - No errors were found when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsusantshah.github.io%2Frock-paper-scissors-lizard-spock-game-project2%2Fassets%2Fcss%2Fmain.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

  ![Main CSS Test](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/main-css-check.jpg)

- Lighthouse Test

  ![Google Lighthouse Test Result](https://susantshah.github.io/rock-paper-scissors-lizard-spock-game-project2/documentation-assets/img/errors/lighthouse.jpg)

## Deployment

The project is deployed to GitHub Pages by following below steps :

1. Logging in to **GitHub** and navigate to the [Project Repository](https://github.com/Susantshah/rock-paper-scissors-lizard-spock-game-project2).
2. From repository , click **Settings**.
3. From the left sidebar in **Settings**, click **Pages** from the left-side menu.
4. Winthin "Source", select the **Main Branch** and hit **Save**.
5. To watch your published site live, under **GitHub Pages**, click the given site's url.

## Technologies Used

For UI / UX Design - [Figma](https://figma.com/)

For providing structure to the game - [HTML5](https://en.wikipedia.org/wiki/HTML5)

For all styling and designs - [CSS3](https://en.wikipedia.org/wiki/CSS3)

For Interacting with DOM and Functionalities - [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Credits

Media / Icons : [Icons8](https://icons8.com/)
