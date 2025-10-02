# Task Management UI

A responsive and user-friendly web application for task management built with Next.js and TypeScript. This application provides a complete interface for managing tasks with CRUD operations, filtering, pagination, and a modern UI.

## 🚀 Features

- **Complete Task Management**: Create, read, update, and delete tasks
- **Status Management**: Organize tasks by status (TO_DO, IN_PROGRESS, DONE)
- **Advanced Filtering**: Filter tasks by status with intuitive UI controls
- **Pagination**: Navigate through large task lists efficiently
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Real-time Updates**: Immediate UI updates with optimistic updates
- **Form Validation**: Client-side validation with user-friendly error messages
- **Internationalization**: Multi-language support (English and Indonesian)
- **Modern UI**: Clean, intuitive interface with Material-UI components
- **Dark/Light Theme**: Toggle between dark and light themes

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Material-UI](https://mui.com/)
- **State Management**: [React Query (TanStack Query)](https://tanstack.com/query) + [Zustand](https://zustand-demo.pmnd.rs/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) validation
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📋 Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm/yarn
- Access to Task Management API backend

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd task-management-ui
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
cp env.example .env.local
```

Configure the required environment variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Optional: Add other environment variables as needed
NEXT_PUBLIC_APP_ENV=development
```

### 4. Run the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
src/
├── actions/              # Server actions
├── app/                  # Next.js App Router pages
│   ├── (dashboard)/      # Dashboard layout group
│   │   ├── tasks/        # Task management pages
│   │   │   ├── [id]/     # Task detail/edit page
│   │   │   └── create/   # Create task page
│   │   └── page.tsx      # Dashboard home
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── common/           # Shared UI components
│   │   ├── data-table/   # Data table components
│   │   ├── form/         # Form components
│   │   ├── layout/       # Layout components
│   │   └── ...
│   └── features/         # Feature-specific components
├── config/               # App configuration
├── hooks/                # Custom React hooks
│   ├── react-query/      # API hooks
│   └── zod/              # Validation hooks
├── lib/                  # Utility libraries
├── providers/            # React context providers
├── stores/               # State management
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── validations/          # Zod validation schemas
```

## 🎯 Core Pages

### Task List Page (`/`)

- Display all tasks with status indicators
- Filter tasks by status (TO_DO, IN_PROGRESS, DONE)
- Pagination controls
- Quick actions (edit, delete) for each task
- "Add New Task" button

### Create Task Page (`/tasks/create`)

- Form with title and description fields
- Status selection
- Form validation
- Success/error handling

### Edit Task Page (`/tasks/[id]`)

- Pre-filled form with existing task data
- Update title, description, and status
- Delete task option
- Form validation and error handling

## 🔧 API Integration

The application integrates with a REST API backend with the following endpoints:

- `GET /tasks` - Fetch tasks with optional filtering and pagination
- `GET /tasks/:id` - Fetch a specific task
- `POST /tasks` - Create a new task
- `PATCH /tasks/:id` - Update an existing task
- `DELETE /tasks/:id` - Delete a task

API client configuration is located in `src/lib/axios-client.ts`.

## 🎨 Styling & Theming

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Material-UI**: React component library for consistent design
- **Responsive Design**: Mobile-first approach with breakpoint-specific styling
- **Dark/Light Theme**: Automatic theme switching based on user preference
- **Custom Theme**: Extended Material-UI theme with custom colors and typography

## 🌐 Internationalization

The application supports multiple languages:

- English (en)
- Indonesian (id)

Language files are located in the `messages/` directory. Use the language selector to switch between languages.

## ✅ Form Validation

Client-side validation is implemented using Zod schemas:

- Required field validation
- String length validation
- Custom validation rules
- Real-time error feedback

## 🧪 Testing

Run the test suite:

```bash
pnpm test
# or
npm test
```

Run tests in watch mode:

```bash
pnpm test:watch
# or
npm run test:watch
```

## 🚀 Deployment

### Deploy to Vercel

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_API_URL`
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🔒 Environment Variables

| Variable              | Description             | Required | Default       |
| --------------------- | ----------------------- | -------- | ------------- |
| `NEXT_PUBLIC_API_URL` | Backend API base URL    | Yes      | -             |
| `NEXT_PUBLIC_APP_ENV` | Application environment | No       | `development` |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Design Decisions & Assumptions

- **State Management**: Used React Query for server state and Zustand for client state
- **Form Handling**: React Hook Form for performance and validation with Zod
- **Styling**: Tailwind CSS + Material-UI for rapid development and consistency
- **File Structure**: Feature-based organization for scalability
- **API Communication**: Axios for HTTP requests with interceptors for error handling
- **Internationalization**: Prepared for multi-language support from the start

## 🐛 Known Issues & Limitations

- None currently reported

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Material-UI](https://mui.com/) for the component library
- [TanStack Query](https://tanstack.com/query) for excellent data fetching
- [Vercel](https://vercel.com/) for seamless deployment
