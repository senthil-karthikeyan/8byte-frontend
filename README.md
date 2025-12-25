# 8byte Frontend

This is the frontend application for the 8byte project, built with Next.js, React, and Material UI.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (React Framework)
- **UI Library**: [Material UI (MUI)](https://mui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management/Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Data Table**: [Material React Table](https://www.material-react-table.com/)
- **Icons**: [MUI Icons](https://mui.com/material-ui/material-icons/)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` (if applicable) and configure necessary variables.

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/screens`: Feature-specific screens/views.
- `src/services`: API service functions.
- `src/hooks`: Custom React hooks.
- `src/types`: TypeScript type definitions.
- `public`: Static assets.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [MUI Documentation](https://mui.com/material-ui/getting-started/) - learn about Material UI components.
