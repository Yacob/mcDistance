from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
@app.route("/index")
def index():
	locals = {}
	return render_template('/index.html', **locals)

@app.route("/about")
def make_league():
	locals = {}
	return render_template('/about.html', **locals)

@app.route("/directions")
def directions():
	locals = {}
	return render_template('/directions.html', **locals)


if __name__ == "__main__":
	app.run()
