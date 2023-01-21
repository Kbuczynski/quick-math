# quick-math
mobile game involving equation solving on time

## Rules
* every correclty resolved equation add some extra time
* every incorreclty resolved equation takes away some time
* the difficult of the game increases exponentially with number of correct answears 
* your best score is saved and displayed on the score board with best scores of other players

## Demo
https://user-images.githubusercontent.com/44814273/213872661-bf956eee-b133-48eb-a89d-89356fb1cbf7.MP4

## Stack
* React Native
* TypeScript
* styled-components

## How to run

First install dependencies

`cd ios && pod install && cd ../ && yarn`

Next run Metro

`yarn start`

Next in parallel terminal run API server

`yarn api`

And open your emulator device

`yarn ios | android`
