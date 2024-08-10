# Science Plus

Science Plus is a website that explain how science and latest technology work in a easy way using myanmar language .

## Getting Started

### Prerequisites

Before running the project, ensure you have the following:

- [Node.js](https://nodejs.org/) installed (version 14 or higher).

- [Yarn](https://yarnpkg.com/) package manager installed.

### Setup

#### 1. Create Clerk Publishable Key

1. Go to [Clerk](https://clerk.dev/).

2. Sign in or create an account.

3. Create a new application.

4. Retrieve your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`.

#### 2. Create PostgreSQL Database URL

1. Go to [Neon](https://neon.tech/).

2. Sign in or create an account.

3. Create a new PostgreSQL database.

4. Retrieve your `DATABASE_URL`.

#### 3. Create `.env` File

Create a `.env` file at the root of your project and add the following environment variables:

```env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key

CLERK_SECRET_KEY=your-clerk-secret-key

NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/learn

NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/learn

DATABASE_URL="postgresql://your-database-url"


```

## Installation

Follow these steps to install the project on your local machine:

1.  Clone the repository:
    `git clone https://github.com/yemyatthu-binlab/science-plus-web.git`
    ` cd science-plus-web`
2.  Install the project dependencies:

    `yarn install`

3.  Run database migrations:

    `yarn run db:push`

4.  Seed the database with initial data:

    `yarn run db:seed`

5.  To run project locally:
    `yarn run dev`
    Thank You.
