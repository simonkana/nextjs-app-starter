## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Drizzle ORM with MySQL database

[https://orm.drizzle.team/docs/get-started/mysql-new](https://orm.drizzle.team/docs/get-started/mysql-new)

```bash
# You can directly apply changes to your database using the drizzle-kit push command. This is a convenient method for quickly testing new schema designs or modifications in a local development environment, allowing for rapid iterations without the need to manage migration files:

npx drizzle-kit push

# Alternatively, you can generate migrations using the drizzle-kit generate command and then apply them using the drizzle-kit migrate command:

# Generate migrations:

npx drizzle-kit generate

# Apply migrations:

npx drizzle-kit migrate
```
