//Global variables 
var round = 0;
var board = [];
var winner;
var players = [
    {
        name: 'Player 1',
        marker: 'X',
    },
    {
        name: 'Player 2',
        marker: 'O',
    }
]

const gameboard = document.querySelector('#gameboard');
const buttonStart = document.querySelector('#btn-start');
const buttonReset = document.querySelector('#btn-reset');
const inputName = document.querySelector('#input-name');
const buttonSave = document.querySelector('#btn-save');
const tiles = document.querySelectorAll('#gameboard > div');

//Factory function for populating array of tile objects
//Function for drawing game board
//Function for switching rounds
//Function for starting game
//Function for resetting game
//Function for updating player name
//Function for tracking tile clicks