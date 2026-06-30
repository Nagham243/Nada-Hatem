from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

# SQLite database setup
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'invitation.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Drawing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_data = db.Column(db.Text, nullable=False)  # Store base64 data url
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

with app.app_context():
    db.create_all()

@app.route('/api/messages', methods=['GET'])
def get_messages():
    messages = Message.query.order_by(Message.created_at.desc()).all()
    return jsonify([{
        'id': m.id,
        'name': m.name,
        'content': m.content,
        'created_at': m.created_at.isoformat()
    } for m in messages])

@app.route('/api/messages', methods=['POST'])
def add_message():
    data = request.json
    if not data or not data.get('name') or not data.get('content'):
        return jsonify({'error': 'Name and content are required'}), 400
    
    new_message = Message(name=data['name'], content=data['content'])
    db.session.add(new_message)
    db.session.commit()
    return jsonify({'message': 'Message added successfully'}), 201

@app.route('/api/drawings', methods=['GET'])
def get_drawings():
    drawings = Drawing.query.order_by(Drawing.created_at.desc()).all()
    return jsonify([{
        'id': d.id,
        'image_data': d.image_data,
        'created_at': d.created_at.isoformat()
    } for d in drawings])

@app.route('/api/drawings', methods=['POST'])
def add_drawing():
    data = request.json
    if not data or not data.get('image_data'):
        return jsonify({'error': 'Image data is required'}), 400
        
    new_drawing = Drawing(image_data=data['image_data'])
    db.session.add(new_drawing)
    db.session.commit()
    return jsonify({'message': 'Drawing added successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)