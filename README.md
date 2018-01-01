# Plane Layout

This application aims to indicate to the user which seats are available and which ones are taken as well as allow the user to select a seat they wish to occupy (later feature is still at work).

## How It's Made:

**Tech used:** JavaScript, React

This application pulls from an internal .json file information related to different seats. This information is then displayed.

## Lessons Learned Example:

An example of a challenge I faced in relation to this project was accessing the .json file. This was the first time I have worked with a .json file inside of the application. This presented several options as to call the information (jQuery and Fetch being the first options I went to) however it became clear that there was a far easier way to import the data (import data from './seats.json';).

## Areas to Improve Upon:

There are three areas which I would like to improve:
1. OnClick = Ideally a full implementation of the onClick toggle functionality would be added in. Where the code needs to be added has been determined but not implemented as a result of an error which is appearing.
2. Organization = Ideally the seats would be organized by row (first) and seat (second). After reorganizing identifying situations where spacing would change (for a new row, class or certain number of seats) would occur.
The following is the logic which would be implemented for the number of seats per row based on the numbers of letters in a row:
If the row has only letters a-f then two columns would be created of seats for any odd number of seats, the extra seat will be on the left. if more than 6 seats are present a middle row would be created (with the side rows being limited to three seats and the center being able to go up to five).
3. If else = The use of if else here is not best practices for React. Ideally this would be replaced with having two components. Other features could have been added to the if else (such as larger seats for first class) using very similar code however that would not be ideal and not the best use of React.
