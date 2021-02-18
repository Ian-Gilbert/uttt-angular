# Ultimate Tic Tac Toe

[![build status](https://github.com/Ultimate-Tic-Tac-Toe/uttt-angular/workflows/build/badge.svg)](https://github.com/Ultimate-Tic-Tac-Toe/uttt-angular/actions?query=workflow%3Abuild)
[![release status](https://github.com/Ultimate-Tic-Tac-Toe/uttt-angular/workflows/release/badge.svg)](https://github.com/Ultimate-Tic-Tac-Toe/uttt-angular/actions?query=workflow%3Arelease)
[![coverage status](https://sonarcloud.io/api/project_badges/measure?project=uttt-angular&metric=coverage)](https://sonarcloud.io/dashboard?id=uttt-angular)
[![maintainability rating](https://sonarcloud.io/api/project_badges/measure?project=uttt-angular&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=uttt-angular)
[![reliability rating](https://sonarcloud.io/api/project_badges/measure?project=uttt-angular&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=uttt-angular)
[![security rating](https://sonarcloud.io/api/project_badges/measure?project=uttt-angular&metric=security_rating)](https://sonarcloud.io/dashboard?id=uttt-angular)

This is an Angular client for the game of Ultimate Tic Tac Toe, with both two-player and human vs bot capabilities.

## How To Play
On the surface, ultimate tic tac toe is the same as the standard game: there are nine squares arranged in a 3x3 grid which can each be marked as either an 'X' or an 'O', and three in a row wins the game. Unlike the original game, however, you cannot simply mark a square as 'X' or 'O'. Instead, each square consists of an additional tic tac toe game, which must be won in order to mark the big square. The overall board is called the 'global board', and the smaller boards are called 'local boards'. The game is won when a player wins three local boards in a row.

On the first turn, Player 'X' can choose any square in any local board they like. From then on, however, the next move will be determined in part by the previous player's move. For example, if Player 'X' plays in the bottom left square of their local board, Player 'O' must then make their next move somewhere in the bottom left local board. This will then determine which local board Player 'X' must play in, and so on. This creates interesting situations in which you may purposefully not win a local board for fear of placing your opponent in an even better position.

**_Important Note:_** Each local board can be won, lost, or drawn (meaning every space is used up, there is no forecasting a draw), at which point no more moves may be made on that board. If a player is sent to such a board, they may then play in any open board they choose (this is something to avoid). Other implementations of the game allow you to play in a local board that has already been won, however this leads to an unbeatable strategy, as described in [this video](https://www.youtube.com/watch?v=weC1pAeh2Do).

For more information about the game, check out [this link](https://mathwithbaddrawings.com/2013/06/16/ultimate-tic-tac-toe/).
