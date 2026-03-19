# TASKFLOW App

A simple, web-based todo application with user authentication and task management features.

## 📋 Project Overview

This TASKFLOW App is a lightweight JavaScript application that allows users to manage their daily tasks efficiently. The app includes a login system and a comprehensive task management interface where users can add, complete, and delete tasks.

## 📁 Project Structure

```
todoapp/
├── index.html          # Login page
├── index.css           # Login page styles
├── index.js            # Login page functionality
├── main.html           # TODO application main page
├── main.css            # TODO application styles
├── main.js             # TODO application functionality
└── README.md           # This file
```

## ✨ Features

### 1. **User Authentication**

- **Login System**: Username and password-based authentication
- **Default Credentials**:
  - Username: `admin`
  - Password: `admin`
- **Guest Access**: Direct access to the TODO application without authentication
- **Login Validation**: Alert notification on failed login attempts

### 2. **Task Management**

- **Add Tasks**: Input field to add new tasks with validation
- **Delete Tasks**: Remove tasks from the incomplete items list
- **Mark Complete**: Move tasks from incomplete to completed list
- **Task Validation**: Prevents adding empty tasks with popup warning

### 3. **Task Organization**

- **Incompleted Items Section**: Displays all pending tasks
- **Completed Items Section**: Shows finished tasks
- **Dynamic Display**: Sections appear/hide based on task status
- **Task Buttons**:
  - Complete button: Marks task as done
  - Delete button: Removes task from list

### 4. **User Interface**

- **Responsive Design**: Clean, centered layout
- **Color-coded Buttons**:
  - Green buttons for primary actions (Add, Complete, Delete)
  - Orange popup warning for empty task validation
- **Popup Notification**: User-friendly warning when attempting to add empty tasks
- **Welcome Message**: Personalized heading on the main page
- **Placeholder Text**: Helpful input guidance

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### How to Use

1. **Start the Application**
   - Open `index.html` in your web browser

2. **Login Options**
   - **Option A**: Use credentials (admin/admin)
   - **Option B**: Click "Login Guest" to access directly

3. **Manage Tasks**
   - Enter a task in the input field
   - Click "Add Task" button
   - Use "Complete" button to mark tasks as done
   - Use "Delete" button to remove tasks
   - Completed tasks appear in the separate "Completed Items" section

## 🎨 Styling

- **Primary Color**: Green (#4caf50) - Used for buttons and primary actions
- **Warning Color**: Orange (rgb(227, 75, 15)) - Used for validation warnings
- **Background**: Light gray (#f0f0f0) - Clean, neutral background
- **Text**: Dark gray/black - Good readability
- **Layout**: Flexbox-based responsive design

## 📝 File Details

### index.html

- Login form with username and password fields
- Two login buttons: "Login" and "Login Guest"
- Links to index.css and index.js

### index.js

- Handles login button click event
- Validates credentials (admin/admin)
- Redirects to main.html on successful login
- Shows alert on failed login

### index.css

- Full-height background container
- Centered login form styling
- Button styling with hover cursor
- Input field styling with labels

### main.html

- Task input field
- Add Task button
- Two task list sections:
  - Incompleted Items / TO-DO's
  - Completed Items / TO-DO's
- Popup notification element

### main.js

- Task addition and validation
- Complete task functionality
- Delete task functionality
- Task list management
- Popup warning display/hide logic
- Dynamic section visibility

### main.css

- Task list styling
- Button styling for Complete and Delete actions
- Popup notification styling
- Task item styling with background colors
- Completed items container styling
- Responsive layout for task lists

## 💡 How It Works

### Login Flow

1. User enters username and password
2. Credentials are validated against stored values
3. On success: Redirected to main.html
4. On failure: Alert message appears
5. Guest option bypasses authentication

### Task Management Flow

1. User types task in input field
2. Clicks "Add Task" button
3. Validation checks for empty input
4. If empty: Popup warning appears
5. If valid: Task added to incomplete list
6. User can:
   - Click "Complete" → Moves to completed list
   - Click "Delete" → Removes from list

## 📱 Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Microsoft Edge (Latest)

## 🔐 Security Notes

- Demo application with hardcoded credentials
- Not recommended for production use
- No password encryption
- All data stored in browser memory (not persistent)

## 🎯 Future Enhancement Ideas

- Persistent storage (using localStorage or database)
- User registration system
- Task priority levels
- Task due dates
- Task categories/tags
- Search and filter functionality
- Dark mode theme
- Export/Import tasks
- Recurring tasks
- Multi-user support with backend

## 📄 License

This project is open source and available for educational purposes.

---

**Created**: March 2026  
**Type**: Educational Web Application  
**Technology**: HTML, CSS, JavaScript (Vanilla)
