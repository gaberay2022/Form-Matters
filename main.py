from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('start.html')

@app.route('/SignUp')
def SignUp():
    return render_template('SignUp.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/Profile')
def Profile():
    return render_template('Profile.html')

@app.route('/Home')
def Home():
    return render_template('Home.html')

@app.route('/Sports')
def Sports():
    return render_template('Sports.html')

@app.route('/Fitness')
def Fitness():
    return render_template('Fitness.html')

@app.route('/Baseball')
def Baseball():
    return render_template('Baseball.html')

@app.route('/Boxing')
def Boxing():
    return render_template('Boxing.html')

@app.route('/Curl')
def Curl():
    return render_template('Curl.html')

@app.route('/CurlGeneral')
def CurlGeneral():
    return render_template('CurlGeneral.html')

@app.route('/HammerCurl')
def HammerCurl():
    return render_template('HammerCurl.html')

@app.route('/SwingBat')
def SwingBat():
    return render_template('SwingBat.html')

@app.route('/BasicJab')
def BasicJab():
    return render_template('BasicJab.html')

@app.route('/AIForm')
def AIForm():
    return render_template('AIForm.html')

if __name__ == '__main__':
    app.run(debug=True)
