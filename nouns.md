---
layout: default 
title: Greek Primer (3rd Edition) Noun Declension
---

<script type="text/javascript" charset="UTF-8" src="./nouns.js"></script>

<style>
    #wrapper .variable-heading {
        min-width: 100px;
        padding-right: 15px;
    }

    #wrapper table td {
        min-width: 80px;
        padding-right: 15px;
        border: 1px solid black;
    }

    .hidden {
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

<p>Welcome to a noun declension tool for studying ancient Greek words. Pick a paradigm to start.</p>

<label>Paradigm</label>
<select id="typeSelect">
    <option value="first-fem-eta">First Declension Feminine Eta</option>
    <option value="first-fem-alpha">First Declension Feminine Alpha</option>
    <option value="second-m">Second Declension Masculine</option>
    <option value="second-n">Second Declension Neuter</option>
    <option value="third-n">Third Declension Neuter</option>
    <option value="third-m">Third Declension Masculine</option>
    <option value="third-f">Third Declension Feminine</option>
</select>
<button id="start">Start</button>
<div id="wrapper" class="active-table">
    <table>
        <tr><th>Case</th><th class="variable-heading">Singular</th><th class="variable-heading">Plural</th></tr>
        <tr><td>N</td><td class="col1"><span class="answer"></span></td><td><span class="answer"></span></td></tr>
        <tr><td>G</td><td class="col1"><span class="answer"></span></td><td><span class="answer"></span></td></tr>
        <tr><td>D</td><td class="col1"><span class="answer"></span></td><td><span class="answer"></span></td></tr>
        <tr><td>A</td><td class="col1"><span class="answer"></span></td><td><span class="answer"></span></td></tr>
    </table>
</div>
<div class="controls">
    <button id="reveal-next" disabled="disabled">Reveal Next</button>
    <button id="reveal-all" disabled="disabled">Reveal All</button>
</div>
