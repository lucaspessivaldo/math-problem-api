# Math Problem API

A random math problem generator API.

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/lucaspessivaldo/math-problem-api
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Usage

1. Run the API
   ```sh
   npm start
   ```
2. GET /api
   ```sh
   curl http://localhost:5000/api
   ```
3. Response example
   ```json
   {
     "first_number": 4,
     "second_number": 1,
     "operator": "+",
     "question": "4 + 1",
     "answer": 5
   }
   ```

Every request will generate a random response, with one of those operators:
addition, subtraction, multiplication, or division.


