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

## Setting up Frontend    

Frontend is designed using material-ui. To run it, go through the following steps:    


### Install the node packages by running following command:
```
npm install
```   

### Start the node.js server:
```
npm start
```    

Frontend module be viewed at [http://localhost:8888](http://localhost:8888).   

### Building the project:
```
npm run build
```    


![http://g.recordit.co/ZYZKIlCXGc.gif](http://g.recordit.co/ZYZKIlCXGc.gif)    

### Responsive

![http://g.recordit.co/gWJPnOujOo.gif](http://g.recordit.co/gWJPnOujOo.gif)      

## Error Handling

![http://g.recordit.co/BD0Ux8fyIN.gif](http://g.recordit.co/BD0Ux8fyIN.gif)      



