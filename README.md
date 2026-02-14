# eraa – Frontend

Frontend-only web app: anime-inspired, student-friendly, warm yellow theme. No backend.

## Run

```bash
npm install
npm run dev
```

Then open the URL shown (e.g. http://localhost:5173).

## Routes

- `/` – Landing
- `/login` – Login (mock → /home)
- `/signup` – Sign up (mock → /details)
- `/details` – User details (→ /syllabus)
- `/syllabus` – Syllabus topics (→ /home)
- `/home` – Home (quotes, recommended videos, topics, favourites)
- `/videos` – Video grid + search
- `/video/:id` – Single video (embed, like, favourite, notes, quiz CTA)
- `/quiz` – Quiz overview + past attempts
- `/quiz/take/:topic` – Take quiz (10 MCQs, result screen)

## Tech

- React (Vite), React Router, Tailwind CSS, Context API
- Data via `services/` and `hooks/` only (mock; backend can be plugged in later)
- Theme: warm yellow, rounded cards, no dark mode

## Build

```bash
npm run build
npm run preview
```
