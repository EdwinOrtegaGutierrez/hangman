from flask import Flask, render_template as html, url_for
from json import load

app = Flask(__name__, template_folder="templates")

app.config.update(
    TESTING=True,
    SECRET_KEY='192b9bdd22ab9ed4d12e236c78afcb9a393ec15f71bbf5dc987d54727823bcbf'
)

@app.route('/')
def index():    
    return html('home/index.html')

@app.route('/game')
def game():
    return html('view/start_game.html')

@app.route('/high_score')
def high_score():
    return html('view/high_score.html')

if __name__ == "__main__":
    app.run(
        host = '0.0.0.0', 
        port=80, 
        debug=True)