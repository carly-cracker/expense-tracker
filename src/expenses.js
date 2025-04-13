export const expenses =[
    {
        "name": "Groceries",
        "id": 1,
        "description": "Weekly grocery shopping at Trader Joe's",
        "category": "Food",
        "expense": 82.50,
        "dates": "2025-04-10"
      },
      {
        "name": "Electric Bill",
        "id" : 2,
        "description": "Monthly electricity bill for apartment",
        "category": "Utilities",
        "expense": 120.75,
        "dates": "2025-04-05"
      }
]
export const getNextId = ((id) => () => ++id)(2);