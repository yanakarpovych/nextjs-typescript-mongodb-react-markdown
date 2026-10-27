# Next.js Blog

A personal blog built with Next.js and TypeScript, featuring a home page, a collection of blog posts, individual post pages, and a contact form backed by MongoDB.

## Demo

[Live Demo](https://nextjs-blog-yana-39dd.vercel.app/)

## Features

- View the home page with featured blog posts
- Browse all blog posts
- View individual blog posts
- Navigate between pages using the main navigation
- Submit messages through the contact form
- Store contact messages in MongoDB
- Responsive user interface

## Technologies

- Next.js
- React
- TypeScript
- CSS Modules
- MongoDB
- MongoDB Node.js Driver
- Vercel

## Getting Started

Clone the repository:

```bash
git clone https://github.com/yanakarpovych/nextjs-typescript-mongodb-react-markdown.git
```

Navigate to the project directory:

```bash
cd nextjs-typescript-mongodb-react-markdown
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root and configure the MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
npm run build
```

To start the production server locally:

```bash
npm start
```

## Environment Variables

| Variable      | Description                                               |
| ------------- | --------------------------------------------------------- |
| `MONGODB_URI` | MongoDB connection string used to connect to the database |

Make sure `.env.local` is listed in `.gitignore` and never commit database credentials to the repository.

## Deployment

- **Frontend and API:** Vercel
- **Database:** MongoDB Atlas
