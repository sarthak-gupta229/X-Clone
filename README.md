# 🐦 X-Clone (Twitter Clone)

A modern, responsive front-end application replicating the core UI and features of X (formerly Twitter), built with React and Vite.

---

## 🚀 Features

- **Authentication**: Login and Signup pages
- **Home Feed**: Browse and interact with tweets
- **Explore**: Discover trending topics and news (powered by GNews API)
- **Follow**: Find and follow suggested users
- **Profile**: View user profile and tweet history
- **Responsive UI**: Mobile-friendly layout with a dedicated mobile navigation bar
- **Tweet Cards**: Like, comment, and retweet interactions
- **Sidebar Navigation**: Desktop-first sidebar layout

---

## 🛠 Tech Stack

| Technology          | Purpose                 |
| ------------------- | ----------------------- |
| React 19            | UI Framework            |
| Vite                | Build Tool & Dev Server |
| Tailwind CSS v4     | Styling                 |
| React Router DOM v7 | Client-side Routing     |
| Lucide React        | Icon Library            |
| GNews API           | News/Explore Feed       |

---

## 📂 Project Structure

```
xclone/
├── api/                  # Serverless API functions
│   ├── news.js           # GNews API proxy handler
│   └── reddit.js         # Reddit feed handler
├── data/                 # Static data files
│   └── x_famous_people_all200.json  # Seed data for follow suggestions
├── public/               # Public static assets
├── src/
│   ├── assets/           # Images, fonts, and static files
│   ├── components/       # Reusable UI components
│   │   ├── auth/         # Login & Signup forms
│   │   ├── feed/         # Tweet feed components
│   │   ├── follow/       # Follow card components
│   │   ├── mobilebar/    # Mobile navigation bar
│   │   ├── post/         # Post/compose box
│   │   ├── rightend/     # Right sidebar (trending, suggestions)
│   │   ├── sidebar/      # Desktop sidebar navigation
│   │   └── tweetcard/    # Individual tweet card
│   ├── context/          # React Context for global state
│   ├── pages/            # Top-level page components
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Follow.jsx
│   │   └── Profile.jsx
│   ├── App.jsx           # Root component with routing
│   ├── Layout.jsx        # Shared layout wrapper
│   └── main.jsx          # Application entry point
├── vite.config.js        # Vite configuration
└── package.json
```

---

## ⚙️ Local Setup

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- npm (comes with Node.js)

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/xclone.git
cd xclone
```

> Replace `your-username` with your actual GitHub username.

---

### Step 2: Install Dependencies

```bash
npm install
```

---

### Step 3: Start the Development Server

```bash
npm run dev
```

The app will be available at: **http://localhost:5173**

---

### Step 4: Navigate the App

| Route          | Description        |
| -------------- | ------------------ |
| `/`            | Login Page         |
| `/signup`      | Signup Page        |
| `/app/home`    | Home Feed          |
| `/app/explore` | Explore / Trending |
| `/app/follow`  | Follow Suggestions |
| `/app/profile` | User Profile       |

---

## 📜 Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint checks            |

---

## 🌐 Deployment

This project is configured for deployment on [Vercel](https://vercel.com/). A `vercel.json` config is already included to handle SPA routing redirects.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
