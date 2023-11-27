# Guess the AI prompt
This is a quiz game that consists on guessing the prompt that has been fed to the AI (Dalle 3) to produce the image displayed. The goal is to entertain the user and make them use their imagination. 
You can look at this project by clicking on the deployed link: https://ikayherce.github.io/guess_the_ai_prompt/

 !['am I responsive' image](assets/readmeimages/amiresponsive.png)

 ## Table of contents
### -Description 
### -User demographic 
### -Features
### -Initial planning
### -Existing features
### -Testing
### -Validator testing
 ![screenshot of HTML validator](assets/readmeimages/HTMLvalidated.png)
 ![screenshot of CSS validator](assets/readmeimages/CSSvalidated.png)
 ![screenshot of lighthouse report](assets/readmeimages/lighthouse.png) 
### -Unfixed Bugs

When you inspect the website on developer tools the button hover doesn't work properly. It isn't a problem otherwise on either IDE link or deployed github page. 

### -Development and deployment
### -Credits
#### Dalle 3 
The images displayed in the quiz have been made with Dalle3. 

#### Help used to code the audio effect

* I used the following resource to get started coding the audio effect for correct and incorrect answers:
https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984

* The audio files were downloaded from https://uppbeat.io/browse/sfx/fail

* Finally, I got some help from chat GPT in order to make the sound play even when the previous sound iteration isn't finished. I did this since I realised it affected user experience when the quiz is played fast. After googling for a while without finding the right solution chat GPT suggested creating separate objects for each audio file in the checkAnswer function. See screenshots below. 
 ![screenshot of conversation with chat GPT](assets/readmeimages/chatgpthelp1.png)
 ![screenshot of conversation with chat GPT](assets/readmeimages/chatgpthelp2.png)
 ![screenshot of conversation with chat GPT](assets/readmeimages/chatgpthelp3.png)

#### CSS gradient 
The background color with gradient effect was made with the following resource: https://cssgradient.io/

#### Cursor image  
cursor code: https://blog.logrocket.com/creating-custom-mouse-cursor-css/
https://icons8.com/icons/set/cursor 

#### Modal window
 I started off by providing the user with feedback using alert messages. My mentor pointed out this was not the most effective way of giving feedback. Since the audio effects already provided feedback, I replaced the alert at the end of the quiz for a modal window and different modal messages depending on the score, as well as a message for the user to try the game again (button click refreshes page and directs user to the start again) or finish playing (button click directs user to google) 
 The code for the modal window was taken from the following link and then adapted to my project https://www.w3schools.com/howto/howto_css_modals.asp 
