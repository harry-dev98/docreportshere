Download the zip file.
enter into client-side directory then
1. Run `npm install`
2. Run `npm start`

then come back to root directory of this project
make sure python and pip is installed
1. Run `pip install -r requirements.txt`
2. Run `python manage.py makemigrations`
3. Run `python manage.py migrate`
4. create super user using command `python manage.py createsuperuser` this user password acts as a hospital credentials
5. Run `python manage.py runserver'


use http://localhost:3000/ url in browser to interact with web app.

To use the app as hospital use superuser credentials and for doctor, first register then use same credentials to login.
