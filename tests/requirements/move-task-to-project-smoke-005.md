### Test ID: SMOKE-005

### Test Description: Add Task to Inbox and Move to a Specific Project

#### Test Objective:

The objective of this test is to verify that a user can add a task to the inbox and then move it to a specific project in the Todoist application.

#### Steps to Perform:

1. **Navigate to the "Today" page:**

   - Go to the main page of the Todoist application that displays today's tasks.

2. **Add a new task to the inbox:**

   - Click the "Add Task" button in the left panel.
   - Enter the task name **"Task to move"**.
   - Verify that the task appears in the inbox.

3. **Create a new project:**

   - Create a project named **"WORK"** with the color **"Intense Red"**.
   - Verify that the project **"WORK"** is visible in the project list.

4. **Move the task to the project:**

   - Navigate to the **"Today"** link in the left panel.
   - Open the task **"Task to move"**.
   - Select the project **"WORK"** for the task.

5. **Verify the task is moved to the selected project:**

   - Open the project **"WORK"** from the left panel.
   - Verify that the project header contains the text **"WORK"**.
   - Verify that the task **"Task to move"** is listed in the project **"WORK"**.

#### Expected Result:

- The task **"Task to move"** is successfully added to the inbox.
- The project **"WORK"** is created and visible in the project list.
- The task is moved from the inbox to the project **"WORK"**.
- The task appears in the task list of the project **"WORK"**.

#### Pre-Requirements:

- The user must be logged in beforehand to access the "Today" page, add tasks, and create projects.

#### Additional Notes:

- Ensure that the test cleans up all created data (task and project) after execution to maintain a clean test environment.
