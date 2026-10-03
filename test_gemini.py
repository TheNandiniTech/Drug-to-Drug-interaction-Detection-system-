import asyncio
from app.services.gemini_service import gemini_service

async def main():
    print("Testing Gemini integration...")
    res = await gemini_service.get_drug_interactions(["Warfarin", "Amoxicillin", "Aspirin"], [])
    print(res)

if __name__ == "__main__":
    asyncio.run(main())
