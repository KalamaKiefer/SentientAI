# Sentient
#### [Live Project](https://sentientai.vercel.app/)

Welcome to **Sentient** – a cutting-edge web application that leverages **AI** to generate text, images, videos, and music. Built with **React**, **TypeScript**, and **Next.js**, this app lets you tap into the power of machine learning APIs from **Replicate** and **OpenAI**. 

With a **Stripe** integration for subscription management, **Clerk** for authentication, **Zustand** for state management, and **Prisma** for managing relational data with **PostgresSQL**, Sentient offers an advanced and seamless user experience.

## 🚀 Features

- **AI-Generated Content**: Use the power of machine learning to create **text**, **images**, **videos**, and **music**. 
  - Powered by **Replicate's** ML models and **OpenAI's** APIs.
- **Free Tier**: Sign up for a free account and get 3 free tokens to generate AI content.
- **Subscription Model**: Once you've used up your free tokens, unlock additional features by subscribing to the pro plan through **Stripe**.
- **AI Models**: Generate content in various formats, from creative writing to visuals and media.
- **User Authentication**: Secure sign-up and login with **Clerk**.
- **State Management**: Manage application state efficiently with **Zustand**.
- **Database Management**: Use **Prisma ORM** to interact with a **PostgresSQL** database hosted on **Neon**.
- **Type Safety**: Ensured by **Zod**, preventing errors with runtime validation and type-safe schemas.

## 🛠️ Technologies Used

- **React**: A powerful JavaScript library for building user interfaces.
- **Next.js**: A React framework for building server-rendered apps with ease.
- **TypeScript**: A superset of JavaScript for type safety and enhanced development.
- **TailwindCSS**: A utility-first CSS framework for fast styling and responsive designs.
- **Replicate**: Use machine learning models to generate images, text, and more.
- **OpenAI**: AI-powered text and image generation API.
- **Stripe**: Payment gateway to manage subscriptions and pro accounts.
- **Prisma**: ORM for managing MySQL database interactions.
- **Neon** – Serverless PostgreSQL database (free tier)
- **Clerk**: Authentication and user management for secure sign-ups and logins.
- **Zustand**: A small, fast state management library for React.
- **Zod**: Type-safe schema validation for input handling.

## 📂 Installation

To get started with Sentient, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/sentient.git
cd sentient
```

Install the dependencies:

```bash
npm install
```

## 🏃‍♂️ Running the Project Locally

To start the development server, run:

```bash
npm run dev
```

Now, open [http://localhost:3000](http://localhost:3000) in your browser to explore the app.

## ⚙️ Build and Deploy

To build the app for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## 💻 Setting Up Prisma and Database (Neon + PostgreSQL)

1. Set up a **Neon** PostgreSQL database.
2. Copy the Prisma connection string from Neon and set it in your .env file:
3. Change the provider in schema.prisma to: provider = "postgresql"
4. Run Prisma migrations to set up your schema: npx prisma migrate dev --name init
5. Run the following to generate your Prisma client:

```bash
npm run postinstall
```

## 💳 Subscription Management

- Users start with **3 free tokens** to generate AI content.
- Once the free tokens are used up, users need to sign up for a **pro plan** using **Stripe** for unlimited access to AI generation features.

## 💡 Features to Explore

- **Text Generation**: Create blog posts, stories, or other written content using AI.
- **Image Generation**: Generate visuals for your creative projects.
- **Video & Music Generation**: Experiment with generating multimedia content.
- **Pro Plan**: Access unlimited AI generation by subscribing via Stripe.
- **User Profile**: Manage your account, track token usage, and view generated content.

## 💌 Contact

Have any questions, suggestions, or feedback? Reach out to me, and let’s discuss how we can make Sentient even better! 🚀
