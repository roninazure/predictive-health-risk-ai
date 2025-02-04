from fastapi import APIRouter, HTTPException
import os  # ✅ Ensure `os` is imported
from dotenv import load_dotenv
from openai import OpenAI  # ✅ Correct OpenAI import

# ✅ Load environment variables
load_dotenv()

router = APIRouter()

# ✅ Securely fetch OpenAI API key
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise RuntimeError("🚨 OpenAI API key not found. Ensure it's in .env")

# ✅ Initialize OpenAI Client
client = OpenAI(api_key=api_key)

@router.post("/generate-llm-insights", tags=["AI"])  # ✅ Correct
def generate_llm_insights(data: dict):
    """Generate AI-based insights using OpenAI GPT."""
    try:
        user_input = data.get("input", "").strip()
        if not user_input:
            raise HTTPException(status_code=400, detail="🚨 Input data is required.")

        # ✅ Use OpenAI API with the correct method
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a health AI assistant."},
                {"role": "user", "content": user_input},
            ],
            max_tokens=200,
            temperature=0.7,
        )

        return {"generated_insights": response.choices[0].message.content.strip()}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"⚠️ Error: {str(e)}")
