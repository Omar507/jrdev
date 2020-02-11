# Javascript + React project

This project is based on Codedrips Javascript and React project. 
[Link to Codedrip's excellent tutorial](https://www.youtube.com/watch?v=BPJSmlTMsQ4)

This project fetches job postings from the Github Job API every minute and saves them to a redis database. The posts are then filtered
to only allow entry level positions. React (with react hooks) is used on the frontend to display the job entries.


### Possible TODOs:
* Fetch data from more API's 
* Improve frontend
* Improve filtering



## Installation
To run this project you will need: npm, nodejs and redis.

Run ``npm install`` on the project's root and client folder.

Since I'm using Windows 10 I used the WSL (Windows Subsystem for Linux) with an Ubuntu shell to set up redis. 
This proved to be very convenient for installing and setting up redis.

## Instructions for local development
Run ``npm start`` on /client directory.

Run ``node index.js`` on /worker directory.

Run ``node index.js`` on /api.