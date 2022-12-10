import requests, random

class LuckyNumber():
    
    def __init__(self):
        """test"""
        
    
    def grab_lucky_num_info():
        """helper function to grab lucky info from api"""
    
        lucky_num = random.randint(1,100)
        resp_lucky_num = requests.get(f"http://numbersapi.com/{lucky_num}/trivia")
    
        data = {"fact": resp_lucky_num.text, "num": lucky_num}
    
        return data


    def grab_year_info(year):
        """helper function to grab birth yearh info from api"""
        
        resp_year = requests.get(f"http://numbersapi.com/{year}/year")
        
        data = {"fact": resp_year.text, "year": str(year)}
        
        return data

    def validate_json_data(json_data):
        """helper function to validate inputted json data"""
        
        key_list = ["name", "email", "year", "color"]
        color_list = ["red", "green", "orange", "blue"]
        data = {}
        
        for key in key_list:
            if not json_data[key]:
                data[key] = ["This field is required."]
                
        if json_data["color"]:
            if json_data["color"] not in color_list:
                data["color"] = ["Invalid value, must be one of: red, green, orange, blue."]
        
        if json_data["year"]:
            if json_data["year"] not in range(1900, 2001):
                data["year"] = ["Invalid value, year must be 1900 to 2000."]
        
        return data