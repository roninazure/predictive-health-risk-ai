from fastapi import APIRouter, Query
import json

router = APIRouter()

DATA_FILE_PATH = "data/mock_health_data.json"  # Ensure this is correct

@router.get("/mock_health-data", tags=["Health Data"])
def get_mock_health_data(stress_level: str = Query(None)):
    """Fetch and filter mock health data from JSON file."""
    try:
        with open(DATA_FILE_PATH, "r") as file:
            data = json.load(file)

        # Apply filtering if stress_level is provided
        if stress_level:
            data = [record for record in data if record["stress_level"] == stress_level]

        return {"data": data}
    
    except FileNotFoundError:
        return {"error": f"File not found: {DATA_FILE_PATH}"}
    except Exception as e:
        return {"error": str(e)}
