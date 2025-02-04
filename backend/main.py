from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import router  # ✅ Correct import

app = FastAPI()

# ✅ Enable CORS (Allows frontend to access API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Root test endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to Predictive Health Risk AI"}

# ✅ Include API routes
app.include_router(router, prefix="/api")  # ✅ Ensure prefix is "/api"
