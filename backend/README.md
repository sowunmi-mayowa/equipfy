# Backend (serverless) 🚀

This folder contains the Express backend deployed as a serverless function (Vercel).

## Required environment variables
- `MONGO_URI` — a public/hosted MongoDB connection string (e.g. MongoDB Atlas). Do NOT use `mongodb://localhost:27017/...` in production.

## Notes
- The server is exported as a handler (no `app.listen`) so it works on serverless platforms.
- To test locally with a real database, set a local or hosted `MONGO_URI` and use `vercel dev` or an equivalent dev server.
- There is a legacy `index.js` file that uses a local MySQL setup and `app.listen(8001)` — it is not used for Vercel deployments and can be removed or archived if not needed.
