from flask import Flask, redirect, render_template, jsonify, request
from models import LuckyNumber

app = Flask(__name__)

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num", methods=["POST"])
def generate_info():
    """api route to generate info from inputed data"""
    
    json_data = request.json
    result = LuckyNumber.validate_json_data(json_data)
    
    if result:
        errors = {"errors": result}
        return jsonify(errors)
    
    else:
        
        lucky_num_info = LuckyNumber.grab_lucky_num_info()    
        year_info = LuckyNumber.grab_year_info(json_data["year"])

        data = {
            "num": lucky_num_info,
            "year": year_info
        }
    
        return jsonify(data)
