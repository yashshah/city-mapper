# Subway Disruption Frontend Module    

This is the frontend module of the Subway Disruption Module.     

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


### To run the tests

```
> $ npm run test
```   

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

