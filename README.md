# Reddit Mini
This project is an exercise from the [Codecademy Full Stack Developer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path) course. The aim of the project was to create a web app using React and Redux that could access and display posts from Reddit. 

## Functionality
The app accesses JSON data from Reddit and displays it in a simple way. There is a homepage that shows popular posts, but topics, posts and subreddits can be searched for using the search bar. Individual posts display their content and accompanying comments. Because Reddit supports markdown in its comments, the app also supports markdown such that comments can be displayed as intended. 

## Deployment
The app is currently deployed on [Netlify](www.netlify.com) and can be seen [here](https://jshep-reddit-mini.netlify.app).

## Technologies
This project was created with:
* React
* Redux
* Commonmark 
* Entities 
* Interweave

## Further development
* The JSON obtained from the reddit api can have data for many types of images and videos and the app doesn't yet support them all. 
* Some videos have no sound; why this happens and how to fix it need to be investigated
* Adding login functionality 
* Displaying popular subreddits as part of the header or a sidebar

## Contributing
Pull requests are welcome.