# AdventOfCode JavaScript setup

# What is this?
A simple example of how you can set up your tooling for doing #AdventOfCode with JavaScript and easily read in your input.

## What do I need to use it
To run the solutions, you need node.js version 13.2.0 or higher installed. You can get it at [nodejs.org](https://nodejs.org/)

## How do I use it?
Each day, create a text file for your input and call it d1.txt, d2.txt, etc. Copy & paste your input in there.
For your code, create another file and call it d1.js, d2.js, d3.js, etc.

Int the code file `import readLines from './readLines.js';`

You can then use readlines like this (referencing the right input file for each day):
 
`const lines = readLines('./d1.txt');` 

Make sure you print your solutions to the console using console.log

## How do I run my solutions
To run a solution, make sure you are in the root folder of the project and run, e.g. 

`node d1.js`
