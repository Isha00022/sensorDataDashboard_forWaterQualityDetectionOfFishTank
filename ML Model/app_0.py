from flask import Flask,render_template, request, jsonify
import requests
from flask_mysqldb import MySQL
import json
from flask_cors import CORS


import pickle

filename = r"D:\College\Year - 3\Winter Sem\TARP\Code\Training\Models\model_lgbm.pkl"

dict_label = {
    1 : "Less and Slow Growth",
    2 :  "Less but Fast Growth",
    0 : "Good and Fast Growth"
}

loaded_model = pickle.load(open(filename, 'rb'))



 
app = Flask(__name__)
CORS(app)
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'a7860035800h'
app.config['MYSQL_DB'] = 'aquaculture'
 
mysql = MySQL(app)



#Getting data from API
r = requests.get('https://api.thingspeak.com/channels/2074004/feeds.json?results=2')
fields = r.text
parse_json = json.loads(fields)



temp_c = float(parse_json["feeds"][0]["field1"])
turb = float(parse_json["feeds"][0]["field2"])
do = float(parse_json["feeds"][0]["field3"])
ph = float(parse_json["feeds"][0]["field4"])
nh4 = float(parse_json["feeds"][0]["field5"])
no2 = float(parse_json["feeds"][0]["field6"])


#Having the prediction
y_test = [[temp_c,turb,do,ph,nh4,no2]]
result = loaded_model.predict(y_test)[0]
prediction = dict_label[result]


@app.route('/get',methods =['GET'])
def get_data():
    if request.method == 'GET':

        

        return  jsonify([{"title" : "Temperature","value" : temp_c},{"title" : "Turbidity","value" : turb},{"title" : "DO","value" : do},{"title" : "pH","value" : ph},{"title" : "Ammonia","value" : nh4},{"title" : "Nitrate","value" : no2}])

@app.route('/prediction',methods =['GET'])
def get_prediciton():
    if request.method == 'GET':
        print(prediction)

       

        # feeding the data into MySQL database
        cursor = mysql.connection.cursor()
        cursor.execute(''' INSERT INTO parameters VALUES(%s,%s,%s,%s,%s,%s,%s)''',(temp_c,turb,do,ph,nh4,no2, prediction))
        mysql.connection.commit()
        cursor.close()
        

        return  jsonify([{"Prediction" : prediction}])


 

if __name__== '__main__':
    app.run(host='192.168.45.4', port=5000, debug=True)
