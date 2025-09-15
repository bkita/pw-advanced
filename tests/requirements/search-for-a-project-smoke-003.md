### Test ID: SMOKE-003

### Test Description: Search for Existing Project

#### Test Objective:

The objective of this test is to verify that a user can successfully search for and find an existing project in the Todoist application.

#### Steps to Perform:

1. **Navigate to the "Today" page:**

   - Go to the main page of the Todoist application that displays today's tasks.

2. **Create multiple projects:**

   - Create three projects with the following names and colors:
     - **WORK** with color **Intense Red**
     - **BILLS** with color **Intense Red**
     - **HOLIDAYS** with color **Intense Red**

3. **Verify projects creation:**

   - Ensure that the projects have been created by checking the list of all projects.

4. **Search for a project:**

   - Search for the project named **WORK** using the search bar.

#### Expected Result:

- The project named **WORK** should be found and displayed in the search results.
- The header of the project page should contain the text **WORK**.

#### Pre-Requirements:

- The user must be logged in beforehand to access the "Today" page and create projects.

#### Additional Notes:

- Ensure that the test cleans up all created projects after execution to maintain a clean test environment.
