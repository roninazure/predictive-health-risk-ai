from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import router  # Import your routes module

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to Predictive Health Risk AI"}

# Include the router with an API prefix
app.include_router(router, prefix="/api")
