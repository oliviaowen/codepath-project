# Pre-work - *Memory Game*

Memory Challenge! is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Olivia Owen

Time spent: 9 hours spent in total

Link to project: (https://roasted-cubic-hiss.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] User has a limited total amount of time to win the game

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/MdSVY33.gif)

![](https://i.imgur.com/edec6lG.gif)

![](https://i.imgur.com/6eylzKG.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math
- tutorialspoint.com/css/index.htm
- developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
- w3schools.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

  One challenge I encountered was the audio not working when opening the game in a different window. The sound seemed to be working fine in the Glitch preview, but when it came time to test the game in its own browser window, the buttons were silent. Rather than hoping it was just my computer and moving on, I chose to search for the root of the problem and was determined to get my game working correctly. To overcome this issue, I used what this assignment taught me about console debugging. I inserted console.log into the audio portion of my Javascript code, then opened up the console to find the error. As it turns out, the issue was Chrome not allowing audio to play unless the user interacts with the page first. I used the link the console provided, and found a resume function that would do the trick. With a little more debugging and testing, I was able to make the sound work in Chrome by adding the audio resume function every time a new tone is played.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After spending a total of nine hours on this project and learning more about web development in one day than I have in my entire lifetime, the main question I have is how do most websites look as professional and put-together as they do? I know that web developers have years of experience, but throughout my time working on this assignment, I spent countless hours just on research, looking into ways to make my game look more stylish. I ended up feeling very limited by my choice of font, style, layout, and more. I would love to learn more about web development and get a glimpse into the amount of knowledge professional web developers must have to create the sites they do.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would spend it adding a musical aspect. Currently, my game chooses a random pattern, but while testing the buttons, I noticed it was possible to use the buttons to play Mary Had a Little Lamb. I would have loved to create a function that used my buttons to create a pattern that plays well-known songs for the user to repeat. Unfortunately, I could only figure out the notes for the one song, as my musical talent seems to end at Mary Had a Little Lamb. With more time, I would add many more buttons and be able to create wonderful memory button music.



## License

    Copyright Olivia Owen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.