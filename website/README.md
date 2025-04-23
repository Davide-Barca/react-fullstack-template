# 🌐 Website

This folder contains the **public-facing frontend** of the application, built with **React**.

---

## 📁 Folder Structure

The `website/` directory is organized as follows:
- website/ 
- ├── public/ 
- ├── src/ 
  - ├── components/  
  - ├── UI/ 
  - ├── config/ 
  - ├── hooks/ 
  - ├── pages/ 
  - ├── routes/ 
  - ├── sources/ 
  - ├── store/ 
  - ├── utils/


### 🔍 Folder Descriptions

- **`public/`** – Static assets like favicon, images, and files served directly by the server.

- **`src/`** – Core source code of the React application:
  - **`components/`** – Shared and reusable components across the app.
    - **`UI/`** – Low-level UI elements and design system components (e.g., buttons, inputs, modals).
  - **`config/`** – App-wide configuration files and constants.
  - **`hooks/`** – Custom React hooks to encapsulate reusable logic.
  - **`pages/`** – High-level components representing the main views/routes of the application.
  - **`routes/`** – Application routing setup (e.g., React Router configuration).
  - **`sources/`** – APIs, static data, and other external/internal data sources.
  - **`store/`** – State management (e.g., Redux slices or Zustand stores).
  - **`utils/`** – General utility functions and helpers.

---

## 📦 Installed Libraries

The following dependencies are used in the `website` project:

- React
- TailwindCSS
- SASS
- React Router DOM
- Redux
- React Redux
- GSAP
- Framer Motion
- Boxicons
- Classnames

---

## 🚀 Notes

- The structure is modular and scalable, suitable for both small and large React projects.
- Supports integration with TailwindCSS or SCSS based on preferences.
- Designed to keep logic and presentation layers clearly separated.

---

## 🧠 Tips

- Group components by domain or feature when the app grows.
- Reuse UI elements from the `UI/` folder to maintain consistency.
- Use `config/` and `sources/` to centralize data and avoid repetition.