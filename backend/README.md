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

```
# List of disruptions
curl -H "Content-Type: application/json" -u yash:password123 http://127.0.0.1:8000/disruptions/

# Creating Disruption
curl -H "Content-Type: application/json" -u yash:password123 -X POST -d '{"line": 1, "fromStation": 1, "toStation": 4, "description": "friendly" }' http://127.0.0.1:8000/disruptions/

# Editing Disruption
curl -H "Content-Type: application/json" -u yash:password123 -X PUT -d '{"line": 1, "fromStation": 1, "toStation": 4, "description": "friendly" }' http://127.0.0.1:8000/disruptions/1

# Deleting Disruption
curl -H "Content-Type: application/json" -u yash:password123 -X DELETE http://127.0.0.1:8000/disruptions/1
```      