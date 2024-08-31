# Tax Management Application

The **Tax Management Application** is a web-based solution designed to streamline the process of tax declaration and management within an organization. This application facilitates employees in filling out tax declaration forms for any financial year and provides admins with the tools to manage these submissions efficiently.

## Features

### Employee Role
- **Tax Form Submission**: Employees can fill out tax declaration forms for any financial year.
- **Save or Submit Forms**: Forms can be saved for later completion or submitted directly for admin approval.
- **Request Form Changes**: Employees can request changes to a submitted form if modifications are needed.
- **Form Deletion**: Employees have the ability to delete their tax forms if required.

### Admin Role
- **Employee Management**: Admins can add, edit, delete, and search for employees within the system.
- **Tax Form Management**: Admins can approve, reject, or delete tax declaration forms submitted by employees.
- **Form Locking**: Once a form is submitted, it is locked and can only be edited by admin authorization.
- **Change Request Handling**: Admins can grant or revoke permissions to freeze or unfreeze tax forms based on employee requests.

### Security and Workflow
- **Role-Based Permissions**: The application enforces clear role-based access controls to ensure data security and integrity.
- **Approval Workflow**: A robust workflow is in place for admins to manage tax form submissions, ensuring that forms are reviewed and processed efficiently.

## Tech Stack

- **Frontend**: 
  - **React.js**: For building the user interface and managing client-side logic.
  - **Tailwind CSS**: For styling the application with a utility-first approach.

- **Backend**:
  - **ASP.NET**: For building the backend services, handling business logic, and managing API endpoints.
  - **MySQL**: For database management, storing employee details, tax forms, and other relevant data.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (for running the frontend)
- [.NET Core SDK](https://dotnet.microsoft.com/download) (for the backend)
- [MySQL](https://www.mysql.com/) (for the database)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/tax-management-app.git
   cd tax-management-app
   ```

2. **Frontend Setup**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

3. **Backend Setup**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Restore .NET dependencies:
     ```bash
     dotnet restore
     ```
   - Update the MySQL connection string in the `appsettings.json` file.
   - Run database migrations (if applicable):
     ```bash
     dotnet ef database update
     ```
   - Start the backend server:
     ```bash
     dotnet run
     ```

### Usage

- Access the application by navigating to `http://localhost:3000` in your web browser.
- Employees can log in to fill out and manage their tax forms.
- Admins can log in to manage employees and review tax submissions.

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss any changes or suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this further based on your project specifics or preferences!
