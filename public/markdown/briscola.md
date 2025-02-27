# Game of Briscola Developed in Android

The repo for this project can be found at:

1. [Briscola](https://github.com/aros88/briscola)

## Table of Contents
- [Introduction](#introduction)
- [Architecture](#architecture)
- [Description of application](#description-of-application)
    - [Video of the application working](#video-of-the-application-working)

<div id="introduction"></div>

## Introduction
This is an android game built in android studio. The purpose of the game was to emulate the popular italian card game known as Briscola.

The rules of Briscola can be found [here](https://en.wikipedia.org/wiki/Briscola).

<div id="architecture"></div>

## Architecture
The application was developed trying to follow MVC standards. Figure 1 shows the folder structure of the project.

<figure>
  <img src="/images/briscola-architecture.png">
  <figcaption>Figure 1: folder structure of the project</figcaption>
</figure>

Figure 2 shows an approach on how to implement MVC patterns in an android app.

<figure>
  <img src="/images/mvc-android.png">
  <figcaption>Figure 2: mvc with android (taken from Polimi Mobile Applications course)</figcaption>
</figure>

<div id="description-of-application"></div>

## Description of the application
The game not only supports player vs player games, but also AI vs player and AI vs AI as can be seen in Figure 3.

<figure>
  <img src="/images/game-types-android.png">
  <figcaption>Figure 3: types of games</figcaption>
</figure>

The game also supported remote play while the server dedicated to do this was up and running. This feature is no longer available but the classes used to accomplish this are still in the repo within the folder 'services'.

Figure 4 shows the main game screen.

<figure>
  <img src="/images/briscola-gameplay.png">
  <figcaption>Figure 4: main game screen</figcaption>
</figure>

<div id="video-of-the-application-working"></div>

### Video of the application working

The video can be found [here](https://drive.google.com/file/d/1xIEP-4nLARFogCNMDQKSNim5dX__-YCj/view?usp=sharing).