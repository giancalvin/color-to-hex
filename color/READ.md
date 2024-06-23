**Setup and execution instruction**
Technology used: Javascript, Html and jest for testing
1. Create new file and name it as index.html
    - type doc and press "tab" button to generate necessary html tags
2. Create new file and name it script.js
    - start by coding functions you need in your project
3. Install package.json in the folder by using the command "npm init -y"
4. Run this locally: Install live server on extension tab located on the side nav bar, then right click
                     on index.html and click "open with live server" it will open a new browser with
                     your project running


**Overview of design decision**
I used javascript and html for this code to make it simple and readable. I created a predefined
set of color name with its respective hexcode. I incorporated functions and conditions that can 
check and filter the input of the color name and store it in an array, also I considered few scenarios
that can introduce issues on getting the correct hexcode by mapping it in the array also by checking
the value if it has numbers or signs. I displayed the inputed values and its respective output dynamically.


**Guide on how to execute the test**
1. Create a new file and name it test.js
2. I used jest in this case. Install it by "npm install --save-dev jest jsdom"
3. Configure in package.json the property of script to "test": "jest"
4. Type the "npm test" command on terminal or you can directly access the
   file by adding it on the command "npm test test.js"

5. (Not running properly)