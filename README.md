# TTC Subway Disruption    

The goal is to create a webbased tool that allows the user to input service disruptions* for all four TTC subway lines and then exposes these information in an API. The project into Frontend and Backend module.

## Setting up Backend Server  
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

## Setting up Frontend    

Frontend is designed using material-ui. To run it, go through the following steps:    

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
> $ git clone https://github.com/yashshah/city-mapper
```

* Then install the dependencies:

```
> $ npm install
```

* Run development server:

```
> $ npm start
```

Open the web browser to `http://localhost:8888/`


[http://g.recordit.co/ZYZKIlCXGc.gif](http://g.recordit.co/ZYZKIlCXGc.gif)    
![http://g.recordit.co/ZYZKIlCXGc.gif](http://g.recordit.co/ZYZKIlCXGc.gif)    



### Responsive View

![http://g.recordit.co/gWJPnOujOo.gif](http://g.recordit.co/gWJPnOujOo.gif)      

### Error Handling
[http://g.recordit.co/BD0Ux8fyIN.gif](http://g.recordit.co/BD0Ux8fyIN.gif)          
![http://g.recordit.co/BD0Ux8fyIN.gif](http://g.recordit.co/BD0Ux8fyIN.gif)      


### To build production package

```
> $ npm run build
```   


### Eslint
There is a .eslint.yaml config for eslint ready with React plugin.
To use it, you need to install additional dependencies though:

```
> npm install --save-dev eslint eslint-plugin-react
```

To do the actual linting, run:

```
> npm run lint
```

### Notes on importing css styles
* styles having /src/styles/ in their absolute path are considered part of the application and exported as local css modules.
* styles having /node_modules|global/ in their absolute path are considered global styles used by many components and are included in the css bundle directly.    

