# Gameloft Frontend Test

A small demo online store showcasing Gameloft products. Built with **React, TypeScript, Tailwind CSS, and Vite**.

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- Vite
- Deployed on Vercel

## Features
- Responsive product carousel
- Shopping cart with quantity selector
- 10% discount for orders with more than 5 items
- Fully styled with Tailwind CSS

## Live Demo
[View the live demo](https://gameloft-wine.vercel.app/)

## Running Locally
1. Clone the repo: `git clone https://github.com/DmitryDam/gameloft.git` and `cd gameloft`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser at: `http://localhost:5173`

## Production Build
To create a production build: `npm run build`  
The compiled files will be in the `dist/` folder.  
You can preview the production build locally with: `npm run preview`

## Project Structure
`/src` - source code  
`/src/components` - React components  
`App.tsx` - main app component  
`main.tsx` - entry point  
`dist/` - production build output  
`tailwind.config.cjs`  
`postcss.config.cjs`  
`package.json`

## Notes
- The project is connected to GitHub and automatically deployed to Vercel  
- Every push to main triggers a new production build  
- Preview deployments are created for feature branches  
- Styling is done with Tailwind CSS, following common React best practices