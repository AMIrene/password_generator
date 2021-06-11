## JavaScript: Password Generator

This week’s homework requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Logic for the Password Generator

1. User clicks on button to generate password

2. Prompt opens up with message "How many characters would you like your password to be?"

3. User enters a number and the prompt options are OK = TRUE and CANCEL = FALSE

    * If user enters a number less than 8 or higher than 128, then they get an "alert" which tells them the recommended password length "Your password must be between 8 and 128 characters long. Please click ok to start again."
        - User only has option to click "OK" and then user is taken to the main page

    * If user decides to cancel without entering a number for password length;
        - Then user is taken to the main page

    * If user enters a password length that meets the criteria of between 8 and 128 characters;
        - Then user will follow the next set of steps. 

4. If user enters a password length that meets the criteria of between 8 and 128 characters, then user will get a "confirm" option of OK = TRUE or CANCEL = FALSE for the following criteria / message:

    * Uppercase: "Would you like to include uppercase?" - OK or CANCEL
    * Lowercase: "Would you like to include lowercase?" -  OK or CANCEL
    * Numbers : "Would you like to include numbers?" - OK or CANCEL
    * Symbols: "Would you like to include symbols?" - OR or CANCEL

5. If user selects YES to all - then they will have a password that includes all the above.

6. If user selects CANCEL to all - then they will get an "alert" with the message "You must select at least one character type to generate a password." 

    * Then user only has option to click "OK" which takes the user to the main page. 
7. If user selects CANCEL to some and not all - the confirm options are presented in order
    * If no to uppercase, then it will proceed to:
        - lowercase
        - numbers
        - symbols

8. When all confirm options are answered by the user, then the password that matches the user selected criteria will appear in the password container "card-body". 
