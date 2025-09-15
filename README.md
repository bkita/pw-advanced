# Todoist Smoke Tests

This project contains smoke tests for the Todoist application, proudly presented by the [<pwts.dev>](https://pwts.dev/) team. It is designed to help you ensure the core functionalities of the Todoist application are working as expected. With this setup, you'll have a solid foundation to create fast, reliable, and maintainable automated tests, empowering you to deliver high-quality software efficiently.

It includes all necessary configurations and dependencies to get started with automated testing using Playwright and TypeScript, ensuring a seamless setup process and enabling you to focus on writing efficient and robust test cases right from the start.

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org) (v20 or later)
- [npm](https://www.npmjs.com/)

## Setup

Clone the repository:

```bash
git clone https://github.com/pwtsdev/todoist-smoke-tests.git
```

Install dependencies:

```bash
npm install
```

## Automated Tests

The following smoke tests are automated in this project:

1. **Create New Project**

   - Verifies that a user can create a new project in the Todoist application.

2. **Max Number of Projects on Free Plan**

   - Verifies that a user cannot create more than the maximum allowed number of projects on the free plan.

3. **Search for Existing Project**

   - Verifies that a user can search for and find an existing project.

4. **Add Task to Inbox and Move to Project**

   - Verifies that a user can add a task to the inbox and then move it to a specific project.

5. **Add Task with Comment and Image Attachment**
   - Verifies that a user can add a task with a comment and an image attachment to a project.

## Project Structure

The code in this project is organized as follows:

### `tests`

Contains the test files for the Todoist application.

- **`create-project.spec.ts`**: Contains the test for creating a new project.
- **`max-number-of-projects.spec.ts`**: Contains the test for verifying the maximum number of projects on the free plan.
- **`search.spec.ts`**: Contains the test for searching for an existing project.
- **`add-task-to-inbox.spec.ts`**: Contains the test for adding a task to the inbox and moving it to a project.
- **`task-with-comments.spec.ts`**: Contains the test for adding a task with a comment and an image attachment.

### `src`

Contains the source files for the Page Object Model (POM) and other utilities.

- **`components`**: Contains reusable components like the left panel.
- **`modals`**: Contains modal dialogs like `AddProjectModal` and `AddTaskModal`.
- **`pages`**: Contains page objects like `HomePage` and `ProjectPage`.
- **`fixtures`**: Contains setup and teardown fixtures for the tests.
- **`model`**: Contains data models like `CreateProjectModel`.

## Running Tests

To run the tests, you can use the following commands:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run all tests:

   ```bash
   npx playwright test
   ```

3. Run tests in headed mode:

   ```bash
   npx playwright test --headed
   ```

4. Run tests in debug mode:

   ```bash
   npx playwright test --debug
   ```

5. Open the Playwright test runner UI:

   ```bash
   npx playwright show-report
   ```

6. Run tests without linting:

   ```bash
   npm run test:no-lint
   ```

7. Show the Playwright test report:
   ```bash
   npx playwright show-report
   ```

## Configuration

The project is configured to use Prettier and ESLint for code formatting and linting. The configuration files are located in the `.vscode` directory and the root of the project:

- **`settings.json`**: Contains VS Code settings for auto-saving, formatting, and linting.
- **`extensions.json`**: Recommends extensions for VS Code.
- **`tsconfig.json`**: TypeScript configuration file.
- **`.prettierignore`**: Files and directories to ignore for Prettier.
- **`.gitignore`**: Files and directories to ignore for Git.

## License

This project is licensed under the ISC License.

## Fun Facts

Did you know? The first computer bug was an actual moth found in a computer in 1947. 🦋

Happy hacking!

[<pwts.dev>](https://pwts.dev/) team [@bkita](https://github.com/bkita) and [@mkusz](https://github.com/mkusz).
