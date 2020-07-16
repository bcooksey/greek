---
layout: default 
title: Greek Primer (3rd Edition) Flashcards
---

<script type="text/javascript" charset="UTF-8" src="./test.js"></script>

<style>
    #chapterSelect {
        width: 35px;
    }

    #card {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        padding: 10px;
        width: 80%;
        border: 1px solid black;
        text-align: center;
    }

    #card .answer {
        display: none;
    }

    .controls {
        width: 35%;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
</style>

<a href="/greek/">Home</a>

<p>Welcome to a flashcard game for studying ancient Greek words. Pick a chapter and hit start.
</p>
<label>Chapters</label>
<select id="chapterSelect" size="1" multiple>
    <option value="0">All</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
</select>
<button id="start">Start</button>
<div id="card">
    <span class="question"></span>
    <span class="answer"></span>
</div>
<div class="controls">
    <button id="reveal" disabled="disabled">Reveal</button>
    <button id="next" disabled="disabled">Next</button>
</div>
