🏢 HR Management System
A modern web application for managing candidates, job postings, and recruitment workflows built with Next.js and Prisma.
✨ Features

Candidate Management - Track applicants through the hiring pipeline
Job Postings - Create and manage open positions
Application Tracking - Monitor recruitment metrics and status
Dashboard Analytics - View hiring insights and performance

🛠️ Tech Stack

Frontend: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
Backend: Next.js API Routes, Prisma ORM
Database: PostgreSQL
Tools: Yarn, tsx

🚀 Quick Start

Clone & Install

```bash
git clone <repo-url>
cd robust_hr_management_system
yarn install
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Database Setup:

```bash
npx prisma migrate dev
npx prisma generate
npx prisma db push
```
Start Development:
```bash
yarn dev
```


Core Models
Candidate

Personal info, skills, experience
Status tracking (Applied → Hired)
Interview management

Job

Position details, requirements
Salary range, openings
Application deadlines

🔧 Key Scripts

yarn dev           # Development server
yarn build         # Production build
yarn seed          # Seed candidates
yarn seed-jobs     # Seed job postings
npx prisma studio  # Database viewer
