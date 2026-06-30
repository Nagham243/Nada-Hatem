# Hatem & Nada Engagement Invitation

## Prerequisites
- Node.js (v18+)
- Python (v3.9+)

## Frontend Setup
1. Navigate to the `frontend` folder: `cd frontend`
2. Install dependencies: `npm install`
3. Add your song: Place your song file in `frontend/public/` and name it `song.mp3`
4. Run the development server: `npm run dev`

## Backend Setup
1. Navigate to the `backend` folder: `cd backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Run the Flask server: `python app.py`

## Deployment
- **Frontend (Netlify)**: You can connect your GitHub repository to Netlify. Set the build command to `npm run build` and the publish directory to `dist`. Ensure your API endpoints in the frontend code (`http://localhost:5000`) are updated to point to your deployed backend URL.
- **Backend (Render / Railway / Heroku)**: Deploy your Flask app to a platform that supports Python since Netlify is mostly for static sites and serverless functions (though Netlify Functions can work, a standard Python host is much easier).