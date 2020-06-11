---
layout: default 
title: Greek Primer (3rd Edition) Flashcards
---

<script type="text/javascript" charset="UTF-8" src="./main.js"></script>

<style>
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

<p>Welcome to a flashcard game for studying ancient Greek words. Pick a chapter and hit start.
</p>
<label>Chapter</label>
<select id="chapterSelect">
    <option value="0">All</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>
<input type="checkbox" id="includePrior" name="includePrior" value="yes">
<label for="includePrior">Include earlier chapters?</label>
<button id="start">Start</button>
<div id="card">
    <span class="question"></span>
    <span class="answer"></span>
</div>
<div class="controls">
    <button id="reveal" disabled="disabled">Reveal</button>
    <button id="next" disabled="disabled">Next</button>
</div>
