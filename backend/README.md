# Subway Disruption Backend Module    
REST Interface is implemented in Django REST Framework. This project uses Sqlite as the database.

Go to the backend folder:

```
cd backend/
```    

### Create a virtualenv to isolate our package dependencies locally
```
virtualenv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
```    
### Install dependencies into the virtualenv
```
pip install -r requirements.txt
```   

### Running     
```
python manage.py runserver
```    

You're all set! Server is running on [http://127.0.0.1:8000/](http://127.0.0.1:8000/).