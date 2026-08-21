# Re-Wild Oasis 🌲

A modern, full-stack web application built for managing boutique hotel and cabin reservations. It provides an intuitive, internal dashboard to oversee bookings, cabins, users, and overall hotel operations.

## 🌐 Live Demo

**[Visit Re-Wild Oasis](https://re-wild-oasis.nmv-apps.in)**

## 🚀 Features

- **Dashboard & Analytics:** View key metrics (sales, bookings, occupancy rate) with interactive charts using Recharts.
- **Booking Management:** Check-in and check-out guests, filter bookings by status, and update reservation details.
- **Cabin Management:** Add, edit, delete, and duplicate cabin listings including photo uploads.
- **Authentication & Authorization:** Secure employee login and protected routes using Supabase Auth.
- **Settings:** Configure global hotel settings like breakfast prices and booking length rules.

## 🛠️ Tech Stack

- **Frontend:** React 19, React Router DOM, Styled Components
- **State Management & Data Fetching:** React Query (@tanstack/react-query)
- **Backend & Database:** Supabase (PostgreSQL, Storage, Auth)
- **Forms & Validation:** React Hook Form
- **UI & Visualization:** Recharts, React Hot Toast, React Icons
- **Build Tool:** Vite
- **Deployment:** Docker & Nginx included for containerized hosting

## 📦 Getting Started

### Prerequisites

- Node.js (v22+)
- pnpm (v10+)
- A Supabase project

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd re-wild-oasis
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory based on `.env.example`:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_KEY=your_supabase_anon_key

   # Optional: For demo login
   VITE_DEMO_EMAIL=demo@example.com
   VITE_DEMO_PASSWORD=demopassword
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## 🐳 Docker Deployment

To run the application using Docker and Nginx:

```bash
docker build -t re-wild-oasis .
docker run -p 8080:80 re-wild-oasis
```
