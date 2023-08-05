
# Realtime ChatApp

This is a realtime chat application built using React, Socket.IO, Express.js, and React Router DOM. 

The application allows users to engage in real-time conversations with each other.

## Prequisite
You need to have the following software installed on your machine:

- Node.js (v14 or higher)
- npm (usually comes with Node.js installation)

## Demo

Robert logined into room
![RobertSide](https://github.com/DoanhTran03/realtime-chatapp/assets/103083272/b38ad9eb-405f-4966-8d48-c48d00c77248)

Chat from Rober side
![RobertSide-chat](https://github.com/DoanhTran03/realtime-chatapp/assets/103083272/b1f9773c-73c8-43cd-adf5-ab9699c1f4f4)

Chat from Kevin side
![KevinSide-chat](https://github.com/DoanhTran03/realtime-chatapp/assets/103083272/35b3a3a1-d2ba-417e-95ae-af03d2f310c8)

## Installation

Install my-project with npm

1. Clone the repository
```bash
  git clone https://github.com/DoanhTran03/realtime-chatapp.git
```
2. Navgigate to project directory
```bash
   cd realtime-chatapp
```
3. Intall front end dependency
```bash
   cd front-end
   npm i
```
4. Install back end dependency
```bash
   cd back-end
   npm i
```
## Deployment

To deploy this project run

1. Start back end server
```bash
  cd back-end
  npm run dev
```
Keep backend running...

2. Start the frontend development server:
```bash
  cd front-end
  npm run dev
```
Then open localhost link adress as exposed on terminal

3. Interact with the application by opening it in multiple browser tabs or windows and engaging in real-time chats.



## Features

- Real-time chat functionality using Socket.IO for instant messaging.
- User-friendly interface built with React and React Router DOM for smooth navigation.
- Cross-origin resource sharing (CORS) handling using the Express.js middleware.
- Easy-to-use and intuitive design for seamless user experience.


## Technology
- Frontend:
   - React
    - react-router-dom
    - socket.io-client
- Backend:
    - express.js
    - cors.js
    - socket.IO
