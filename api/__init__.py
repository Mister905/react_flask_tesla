import time
from flask import Flask

def create_app():
    
    app = Flask(__name__)
        
    @app.route('/api/time', methods=["GET"])
    def get_current_time():
        return {'time': time.time()}

    
    @app.route('/api/data', methods=["GET"])
    def get_data():

        # Return a data object to the front end
        return {
            "name":"James Baldwin",
            "occupation":"author",
            "date": "derp",
        }

    return app