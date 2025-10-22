# Shimano Compatibility Checker

A web application that checks the compatibility between Shimano bicycle components.

This project is built with React and Node.js.  
It allows users to search Shimano models and check compatibility between different generations or series.

---

## Overview

Shimano Compatibility Checker helps users verify whether various Shimano bicycle components  
(derailleurs, cassettes, cranksets, etc.) are compatible with each other.  
Users can search for a specific model and immediately see compatibility results in the browser.

---

## Features

- Model search: search Shimano parts by name or series code  
- Compatibility check: automatically determines compatible and incompatible parts  
- Simple and clear result display  
- Easy to run locally with Node.js  

---

## Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | HTML, CSS, JavaScript, React |
| Backend  | Node.js |
| Deployment | GitHub Pages |
| Package Manager | npm |

---

## Directory Structure

~~~bash
Shimano_CompatibilityChecker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── index.js
├── package.json
├── README.md
└── .gitignore
~~~

---

## Setup and Run

1. Clone the repository  
    ```bash
    git clone https://github.com/Yu-r-i/Shimano_CompatibilityChecker.git
    cd Shimano_CompatibilityChecker
    ```

2. Install dependencies  
    ```bash
    npm install
    ```

3. Start the development server  
    ```bash
    npm start
    ```

Then open http://localhost:3000 in your browser

---

## Deployment

1. Build the production version  
    ```bash
    npm run build
    ```

2. Configure GitHub Pages to publish the `build/` directory.

---

## Author
Yuri Funato  
Kindai University - Electronic Commerce Laboratory (ECL)  
GitHub: https://github.com/Yu-r-i