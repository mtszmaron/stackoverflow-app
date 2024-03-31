## Ebook Price App

### Description

This project is a user interface for browsing tags provided by the StackOverflow API. It includes a paginated table of tags along with the number of associated posts. Users can configure the number of items per page, sorting and order options.

### User Guide

1. Installation

   - Clone the repository of the application.
   - Install the required dependencies: `npm ci`.

2. Usage:
   - Start the application: `npm start`.
   - Run Storybook: `npm run storybook`.

### Project Structure

- `storybook/`: Storybook configuration
- `src/`: Main project directory containing the application source code.
  - `components/`: Application components, each component has its own stories file in its directory.
  - `store/`: Directory for managing application state using Zustand.
  - `App.tsx`: The main entry point component of the application.
  - `main.tsx`: Renders the root component (App) and mounts it to the DOM.

### Technologies

- Vite + Preact + TS with TailwindCSS for building the user interface.
- Mantine: Ready-made UI component library.
- Axios: Library for making HTTP requests.
- Zustand: Minimalist React state management system.
- Storybook: Tool for isolating components and presenting their visual variations.

### Author

Author: Mateusz Maroń
