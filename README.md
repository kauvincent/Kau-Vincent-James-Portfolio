# Kau Vincent James Portfolio

A personal portfolio website built with React, Vite, Tailwind CSS, and Express. The app includes a contact form that sends email notifications using Resend.

## Features

- Responsive portfolio layout with sections for hero, about, projects, skills, and contact
- Custom cursor glow and particle background effects
- Contact form handled by an Express backend
- Email delivery via Resend

## Tech stack

- React
- Vite
- Tailwind CSS
- Express
- Resend
- Node.js

## Run locally

1. Install dependencies:
   `npm install`
2. Create a `.env` file in the root directory with the following values:
   ```env
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your_email@example.com
   ```
3. Start the development server:
   `npm run dev`

Open `http://localhost:3000` in your browser.

## Build and production

1. Build the frontend:
   `npm run build`
2. Start the server for production:
   `npm start`

The Express server serves the built `dist` files in production mode.

## API

- `POST /api/contact` — submits contact form data (`name`, `email`, `message`)

## Notes

- No `.env` file is included in source control.
- Make sure `RESEND_API_KEY` and `CONTACT_EMAIL` are configured before using the contact form.
