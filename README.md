#  Advanced DOM Interaction and Data Persistence

This project allows you to:

- Capture a user's name and age
- Store the data in **Local Storage**
- Display the stored data every time the page is reloaded
- Track user **interactions** using **Session Storage**
- Clear the stored data with a button


# How it works

## 1. Data capture
The form collects:

- Name (letters only, no numbers)
- Age (must be a valid number)

When clicking the **"Save Data"** button, the data is validated and stored in `localStorage`.

## 2. Display data
Every time the page loads, it shows:

> "Hello [name], you are [age] years old"

If there is no data stored, a message is shown indicating that.

## 3. Interaction counter
Each click on the "Save" or "Clear" buttons increases a counter displayed on the page. This counter:

- Is stored in `sessionStorage`
- Only persists while the browser tab is open

## 4. Clear data
The **"Clear Data"** button removes all data from `localStorage` and updates the display.


# Files included

- `index.html`: Structure of the form and data output
- `main.js`: Logic for storing, validating, and displaying data
- `styles.css`: Basic styles
- `README.md`: This file 


# Technologies used

- HTML
- CSS
- JavaScript 


# Validations

- Name **must not contain numbers**
- Age **must be a valid number**


#  How to use

1. Clone or download this repository
2. Open the `index.html` file in your browser
3. Enter your data and test the buttons
4. Open the console (F12) to see the interaction count as well


#  Author

Isabella Jiménez Lázaro   
