# quick-math
mobile game involving equation solving on time

## Rules
* every correctly resolved equation add one point to your score and some extra time
* every incorrectly resolved equation takes away some time
* the difficult of the game increases exponentially with number of correct answers 
* your best score is saved and displayed on the score board with best scores of other players

## Demo
https://user-images.githubusercontent.com/44814273/213872661-bf956eee-b133-48eb-a89d-89356fb1cbf7.MP4

## Stack
* React Native
* TypeScript
* styled-components

## How to run

First create .env file

`cp template.env .env`

Install dependencies

`cd ios && pod install && cd ../ && yarn`

Run Metro

`yarn start`

Then in parallel terminal run API server

`yarn api`

And open your emulator device

`yarn ios | android`
