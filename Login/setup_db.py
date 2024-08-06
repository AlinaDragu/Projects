from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask import Flask, request, jsonify, redirect, url_for, session
import bcrypt
from flask_cors import CORS
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user

# Initialize Flask app
app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  # Replace with your actual secret key

# Enable CORS
CORS(app)

# Initialize Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)

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

# User class for flask-login
class User(UserMixin):
    def __init__(self, user_id):
        self.id = user_id

# Load user callback for flask-login
@login_manager.user_loader
def load_user(user_id):
    # This function loads the user based on the user ID
    user = login_collection.find_one({"username": user_id})
    if user:
        return User(user_id)
    return None

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


# Route for user login
@app.route('/login', methods=['POST'])
def login():
    user_data = request.json
    username = user_data['username']
    password = user_data['password']

    # Find the user in the database
    user_record = login_collection.find_one({"username": username})

    if user_record and bcrypt.checkpw(password.encode('utf-8'), user_record['password']):
        user = User(username)
        login_user(user)
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid username or password"}), 401


# Route for user logout
@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logged out successfully"}), 200


# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
    