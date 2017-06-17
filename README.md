# QuickFiction
Google Chrome Extension - Quick Writing Exercise

### Quick Fiction, What is it?

Quick Fiction is a writing exercise inside Google Chrome Popup Extension. Quick Fiction randomly selects a character and a situation then provides the user 5 minutes and a text box. The goal is to write as much as you can within the 5 minute window. Once time is up Quick Fiction displays the user input as plain text within the popup. Users can copy and paste their story into their drive or a word document to work on later, or simply close out the popup.

Quick Fiction exists to provide a moment of creativity and designed to encourage stream of consciousness writing. You only have 5 minutes! Don't overthink it! Good luck and have fun.


## The latest version

Quick Fiction is in Beta. Currently, Quick Fiction only preforms the basic goal of random writing prompt and timer. Check out "Next Steps" for the future of Quick Fiction.

## Installation

At this time, Quick Fiction is not available in the Chrome Extension store, however, you can still install it locally in developer mode if you would like to try it out.

1. Clone the GIT Repository to your local machine.
  * More information on GIT and cloning can be found here: https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
2. Visit "chrome://extensions" in your browser
  1. You can also access this by selecting Omnibox (menu) in the upper right-hand corner of the browser
  2. Hover over "Tools"
  3. Select "Extensions"
3. Check the "Developer Mode" box located in the upper right-hand side of the page.
4. Click "Load unpacked extension..."
5. Select from you local files "QuickFiction"
6. If not preselected, check the box next to "Enable"
7. Start enjoying Quick Fiction!


## Adding Characters and Situations

You can also add to the characters and situations array found in "popup.js".

1. Open "popup.js" in your favorite text editor.
  1a. You can use "TextEdit" for this if you are on a Mac, or "Notepad" if using Windows
2. The arrays are the first variables on the page. Characters are inside of "charactersArray" and situations in "situationArray".
3. You can insert a character or situation to the appropriate array by placing it inside of quotes: "", with a comma after. Make sure you have placed this inside of the brackets: [].
  ```
  ["example one", "example two"]
  ```
4. Save your updates.
5. Navigate back to 'chrome://extensions' in your Chrome browser.
6. Select "Reload" under "Quick Fiction"
7. Your new characters and situations will now be included in the randomization!


## Next Steps

### More Characters and Situations

In the future, Quick Fiction will never give you the same combination twice! The library of characters and situations will be expanded.

### Randomization Button  

The ability to ask for a new character and situation if the one provided doesn't spark any creativity. At this time, you can also achieve this by exiting and reopening the popup - but that isn't nearly as fun as buttons.

### Story persistence

Currently, Quick Fiction is unable to store user stories. The next step is to create a hub for each user to revisit past exercises, edit them, and continue writing if they wish.

### Formatting

Quick Fiction only captures characters and not formatting, which means stories are returned to the user in a block of text. This will be updated to keep line breaks and common formatting.

### Launch to store  

Enable everyone to install Quick Fiction on their browsers. Hooray!


## Contact    

Feel free to message me on GitHub with any questions, concerns or suggestions.

You can also message me here:
https://crystallambert.herokuapp.com/connect
