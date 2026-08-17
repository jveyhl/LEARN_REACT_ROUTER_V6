# Pet Adoption App

A React-based pet adoption application that lets users browse adoptable pets by animal type, search for pets, and view individual pet detail pages.

This project was built as a learning exercise focused on React, React Router, reusable components, API-style data fetching, Mock Service Worker (MSW), CSS Modules, and modern frontend architecture.

**Based on** a project from [Codecademy](https://www.codecademy.com).  
The aim of this project was to practice building a React application with routing, component structure, and mocked data.

## Features

* Browse all available pets
* Filter pets by animal type
* Search for pets by name or state
* View individual pet detail pages
* Dynamic routes for individual pets
* Loading states while pet data is retrieved
* Pet-not-found page for invalid pet IDs
* Fallback images when a pet does not have a usable photo
* Reusable navigation and UI components
* Responsive pet grid layout
* CSS Modules for page-specific styling
* Shared global CSS for reusable application-wide styles
* Mock API responses using Mock Service Worker

## Technologies

* React
* React Router
* Vite
* JavaScript
* CSS
* CSS Modules
* Mock Service Worker (MSW)
* JSON mock data

## Project Structure

```text
src/
├── api/
│   └── petfinder/
├── assets/
├── components/
├── mocks/
│   ├── data/
│   ├── browser.js
│   └── handlers.js
├── pages/
│   ├── detail/
│   ├── home/
│   ├── petNotFound/
│   └── search/
├── App.jsx
├── index.css
└── main.jsx
```

### Main Responsibilities

**`src/api/`**

Contains the functions responsible for requesting pet data. The application communicates with this layer rather than having components directly manage the request implementation.

**`src/components/`**

Contains reusable UI components used by multiple pages.

**`src/pages/`**

Contains route-level components such as the Home, Search, Detail, and PetNotFound pages.

**`src/mocks/`**

Contains the Mock Service Worker configuration, request handlers, and JSON data used by the application.

**`src/index.css`**

Contains global styles shared throughout the application.

## Mock API Architecture

The application currently uses Mock Service Worker rather than a real external pet API.

The data flow is:

```text
React Component
       ↓
API Function
       ↓
fetch()
       ↓
Mock Service Worker
       ↓
handlers.js
       ↓
JSON Mock Data
```

This allows the application to behave similarly to an application communicating with a backend API while keeping the project self-contained.

The mock data is stored in:

```text
src/mocks/data/
```

The request handlers are defined in:

```text
src/mocks/handlers.js
```

The browser worker is configured in:

```text
src/mocks/browser.js
```

The MSW service-worker file is located in:

```text
public/mockServiceWorker.js
```

## Routing

The application uses React Router for client-side navigation.

Routes include:

```text
/
```

Home page displaying all pets.

```text
/:type
```

Home page filtered by animal type.

```text
/:type/:id
```

Individual pet detail page.

```text
/search
```

Pet search page.

```text
/pet-details-not-found
```

Pet-not-found page.

The application uses dynamic route parameters to determine which animal type or individual pet should be displayed.

## Running the Project

### Install Dependencies

Clone the repository and install the project dependencies:

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Vite will start the development server and provide a local URL.

### Create a Production Build

```bash
npm run build
```

The production files are generated in:

```text
dist/
```

The `dist` directory is ignored by Git and should not be manually edited.

### Preview the Production Build

```bash
npm run preview
```

This allows the production build to be tested locally before deployment.