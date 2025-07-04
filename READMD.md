# 🧪 QA Assignment Cypress Automation

A Cypress-based end-to-end (E2E) test automation project built for a QA assignment to validate core **Board** and **List** functionalities of a web application. This project demonstrates the use of Cypress for creating, verifying, and deleting UI elements with a focus on clean structure and reusable code.

---

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

---

## ✅ Features

- `UI-automation-command.cy.js` – UI tests for board & list management (with custom commands)
- `UI-automation.cy.js` – UI tests for board & list management (without custom commands)
- `commands.js` – Custom Cypress commands to improve test reusability

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- Git

---

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Shakib-ewu/QA_Assignment_task.git
cd QA_Assignment_task

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

## 🔧 GitHub Actions CI/CD
This project includes GitHub Actions workflows located in the .github/workflows/ directory. These workflows automate the testing process, ensuring that tests are run on each push or pull request. Customize the workflow files to fit your CI/CD requirements. Currently CI/CD workflows not working properly