import pandas as pd
from joblib import load
from flask import Flask, request, jsonify, render_template

app = Flask(__name__, template_folder='templates')

# route untuk menampilkan halaman awal (index.html)
@app.route('/')
def home():
    return render_template('index.html')

# route untuk melakukan klasifikasi data transaksi
# menerima data dari AJAX jQuery -> melakukan klasifikasi -> mengembalikan hasil klasifikasi ke AJAX
@app.route('/getResult', methods=['POST'])

def getResult():

    if (request.method == 'POST'):
        # daftar kolom yang ada pada dataset
        sensor_name = ['sensor2', 'sensor3', 'sensor4',	'sensor7', 'sensor8',
               'sensor9', 'sensor11', 'sensor12', 'sensor13', 'sensor14',
               'sensor15', 'sensor17', 'sensor20', 'sensor21']

        # mengambil data sensor inputan user
        sensor_value = [request.json]

        # membuat dataframe
        data = pd.DataFrame(sensor_value, columns=sensor_name)

        # panggil file scaler untuk melakukan scaling dari data user
        scaler = load('scaler.bin')
        data = scaler.transform(data)

        # proses prediksi   
        model = load('model_rf.bin')
        result = model.predict(data)[0]

        return jsonify(result)

if (__name__ == '__main__'):
    app.run(debug=True)