from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask import Flask, request, jsonify
from flask_cors import CORS
import bcrypt


# Initialize Flask app
app = Flask(__name__)
CORS(app)

# MongoDB connection setup
uri = "mongodb+srv://alinaelena14:cutemonkeypanda1214@monkey.nqxckqk.mongodb.net/?retryWrites=true&w=majority&appName=monkey"
client = MongoClient(uri, server_api=ServerApi('1'))

# Confirm the connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(f"Connection error: {e}")

# Access the database and collection
db = client['mydatabase']  # Make sure this is the correct database name
login_collection = db['login']  # Make sure this is the correct collection name

# Route for user signup
@app.route('/signup', methods=['POST'])
def signup():
    user_data = request.json
    username = user_data['username']
    password = user_data['password']
    email = user_data['email']

    # Check if user already exists
    if login_collection.find_one({"username": username}):
        return jsonify({"message": "User already exists"}), 409

    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Create a login record
    login_record = {
        "username": username,
        "password": hashed_password,
        "email": email
    }

    # Insert the login record into the login collection
    login_collection.insert_one(login_record)
    return jsonify({"message": "User created successfully"})

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
