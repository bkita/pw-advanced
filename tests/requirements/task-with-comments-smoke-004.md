### Test ID: SMOKE-004

### Test Description: Add Task with Comments and Attachments (Image and Voice Recording)

#### Test Objective:

The objective of this test is to verify that a user can add a task with two comments, one containing an image attachment and the other containing a voice recording attachment, to a project in the Todoist application.

#### Steps to Perform:

1. **Navigate to the "Today" page:**

   - Go to the main page of the Todoist application that displays today's tasks.

2. **Create a new project:**

   - Create a project named **"ATTACHMENT"** with the color **"Intense Red"**.
   - Verify that the project **"ATTACHMENT"** is visible in the project list.

3. **Add a task:**

   - Open the project **"ATTACHMENT"**.
   - Add a task named **"Task with comment"** with the description **"Task description"**.
   - Verify that the task is added to the project.

4. **Add comments with attachments:**

   - Open the task **"Task with comment"**.
   - Add a comment with an **image attachment** to the task.
   - Add another comment with a **voice recording** attachment, recorded directly using the microphone.

5. **Verify the task and comments:**

   - Verify that the project header contains the text **"ATTACHMENT"**.
   - Verify that the task **"Task with comment"** is listed in the project **"ATTACHMENT"**.
   - Verify that the first comment contains the image attachment.
   - Verify that the second comment contains the voice recording attachment.
   - Verify that the total number of comments on the task is **2**.

#### Expected Result:

- The project **"ATTACHMENT"** is created and visible in the project list.
- The task **"Task with comment"** is successfully added to the project **"ATTACHMENT"**.
- A comment with an image attachment is added to the task.
- A comment with a voice recording attachment is added to the task.
- The total number of comments on the task is **2**.

#### Pre-Requirements:

- The user must be logged in beforehand to access the "Today" page, create projects, and add tasks.

#### Additional Notes:

- Ensure that the test cleans up all created data (task and project) after execution to maintain a clean test environment.
