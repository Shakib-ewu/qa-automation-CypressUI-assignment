# Craft Cellars Cypress Automation
A Cypress-based end-to-end (E2E) test automation project designed to validate the core functionalities of a web application. This project leverages Cypress's powerful testing capabilities to ensure application reliability and performance.

## 📁 Project Structure

```
cc_cypress_automation/
├── cypress/
│   ├── e2e/                 # Contains E2E test specifications
│   ├── fixtures/            # Test data files (e.g., JSON)
│   ├── support/             # Custom commands and support utilities
├── .vscode/                 # VSCode-specific settings (optional)
├── .github/workflows/       # GitHub Actions CI/CD configurations
├── cypress.config.js        # Cypress configuration file
├── package.json             # Project metadata and dependencies
└── package-lock.json        # Exact versions of installed dependencies
```

## ✅ Features

- `Account.cy.js` – Account page tests  
- `Cart.cy.js` – Cart functionality  
- `Footer.cy.js` – Footer validation  
- `GiftPage.cy.js` – Gift page checks  
- `Homepage.cy.js` – Homepage elements  
- `Megamenu.cy.js` – Megamenu navigation  
- `PDP.cy.js` – Product Detail Page  
- `Search.cy.js` – Search functionality  
- `Xpath.cy.js` – XPath selector tests  


## 🚀 Getting Started
Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git


## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Shakib-ewu/CC_Cypress-Automation.git
cd CC_Cypress-Automation

```
2.  Install dependencies:
  ```bash
npm install

```

## 🧪 Running Tests
 Open Cypress Test Runner (Interactive Mode)
  ```bash
 npx cypress open

```

Run Tests in Headless Mode

```bash
 npx cypress run
```

## ⚙️ Configuration
The cypress.config.js file contains the project's configuration settings, including base URL, test files pattern, and other options. Modify this file to customize the testing environment as needed.

## 🔧 GitHub Actions CI/CD
This project includes GitHub Actions workflows located in the .github/workflows/ directory. These workflows automate the testing process, ensuring that tests are run on each push or pull request. Customize the workflow files to fit your CI/CD requirements.

## 🙋‍♂️ Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.



