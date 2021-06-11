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

7. If user selects YES to all - then they will have a password that includes all the above.
8. If user selects CANCEL to all - then they will get an "alert" with the message "You must select at least one character type to generate a password." 
    * Then user only has option to click "OK" which takes the user to the main page. 
9. If user selects CANCEL to some and not all - the confirm options are presented in order
    * If no to uppercase, then it will proceed to:
        - lowercase
        - numbers
        - symbols

10. When all confirm options are answered by the user, then the password that matches the user selected criteria will appear in the password container "card-body". 
