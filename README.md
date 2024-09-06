# Alfa Romeo landing page

## Description

This project consists of developing a dynamic landing page with a form to collect and submit user data through an API. 

## Technologies Used

- React.js
- Tailwind CSS
- Vite

## Getting Started

To get started with this project, follow these steps:

1. **Download the ZIP file:**

   Download the project ZIP file from the repository.

2. **Unzip the file:**

   Unzip the downloaded file to a location of your choice.
   

3. **Navigate into the project directory:**

   ```bash
   cd <project-directory>

4. **Install the dependencies:**
   ```bash
   npm install
   # or
   yarn install

5. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   
6. **The landing page will be available at `http://localhost:5173/` (or another port specified in the terminal)**.

## Configuration

- **Modifying the Email Address:**

  In the `App.jsx` file, on line 9, there is a variable `em` that represents the email address where the collected data will be sent. Modify this variable to your own email address to receive the data collected from the form submissions.

  ```jsx
  const em = "your-email@example.com";

## Additional Information

- Ensure that you have Node.js and npm (or Yarn) installed on your machine.
- The browser needs to have CORS (Cross-Origin Resource Sharing) unblocked for the API requests to function correctly. You may need to configure your browser or use browser extensions to manage CORS settings. 

  - For Firefox: [CORS Unblock](https://addons.mozilla.org/en-US/firefox/addon/cors-unblock/)
  - For Chrome/Opera: [CORS Unblock](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en&pli=1)
