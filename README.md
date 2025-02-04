# Predictive Health Risk AI

## 🚀 Overview  
Predictive Health Risk AI is a web-based application that analyzes employee wellness trends and provides AI-generated insights to improve productivity.

## 🛠 Tech Stack  
- **Backend:** FastAPI, OpenAI API  
- **Frontend:** React, Chart.js  
- **Database:** JSON-based storage (for mock data)  
- **Deployment:** Uvicorn, Node.js  

## 🔧 Setup & Installation  

### **Backend Setup**  
1. **Navigate to the backend directory:**  
Run xTerm
cd backend

2. **Create a virtual environment:
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

3. **Install Dependencies:
pip install -r requirements.txt

4. **Set up the environment variables:
echo "OPENAI_API_KEY=your_api_key_here" > .env

5 **Run the backend server:
uvicorn api.main:app --reload

### **Frontend Setup
1. **Navigate to the frontend directory:
cd frontend

2. **Install dependencies:
npm install

3. **Start the frontend:
npm start

📡 API Endpoints
	•	GET /api/mock_health-data – Fetch mock health data.
	•	POST /api/generate-llm-insights – Get AI-generated insights.
❓ Troubleshooting
	•	Issue: OpenAI API key error → Check your billing and quota.
	•	Issue: ModuleNotFoundError: No module named 'api' → Ensure you’re in the correct directory and virtual environment is activated.
📌 Author

Created by Scott Steele

