   from flask import Flask, jsonify

   app = Flask(__name__)

   @app.route('/lights', methods=['GET'])
   def get_lights():
       # Replace with your Pywizlight code to get the lights
       lights = [
           {'id': 1, 'name': 'Light 1', 'status': 'on'},
           {'id': 2, 'name': 'Light 2', 'status': 'off'},
       ]
       return jsonify(lights)

   @app.route('/lights/<int:light_id>/on', methods=['POST'])
   def turn_on_light(light_id):
       # Replace with your Pywizlight code to turn on the light
       return jsonify({'message': f'Light {light_id} turned on'})

   @app.route('/lights/<int:light_id>/off', methods=['POST'])
   def turn_off_light(light_id):
       # Replace with your Pywizlight code to turn off the light
       return jsonify({'message': f'Light {light_id} turned off'})

   if __name__ == '__main__':
       app.run()