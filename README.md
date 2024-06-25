# RSP Cafe

RSP Cafe is a web application showcasing a simple navigation bar and some dynamic content. This project uses modern JavaScript and CSS, bundled with **Webpack**.

## Table of Contents

- [RSP Cafe](#rsp-cafe)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/rsp-cafe.git
    cd rsp-cafe
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

## Usage

To start the development server and view the project in your browser, run:

```bash
npm run build
```
This will start the development server on http://localhost:8080.

## Project Structure
```bash
rsp-cafe/
├── dist/
│   ├── bundle.js
│   └── index.html
├── src/
│   ├── components/
│   │   └── navBar.js
│   ├── styles/
│   │   └── nav.css
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js
```



- **`dist/`**: Contains the bundled output files.
- **`src/`**: Contains the source code for the application.
  - **`components/`**: Contains the JavaScript components.
  - **`styles/`**: Contains the CSS files.
  - **`index.js`**: Main entry point for the application.
- **`.gitignore`**: Specifies which files and directories to ignore in the git repository.
- **`package.json`**: Lists the project dependencies and scripts.
- **`webpack.config.js`**: Configuration file for Webpack.
