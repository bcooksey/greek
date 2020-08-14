---
layout: default 
title: Greek Primer (3rd Edition) Pronoun Declension
---

<script type="text/javascript" charset="UTF-8" src="./pronouns.js"></script>

<style>
    #conjugation-wrapper .variable-heading {
        min-width: 100px;
        padding-right: 15px;
    }

    #conjugation-wrapper table td {
        min-width: 80px;
        padding-right: 15px;
    }

    table td {
      border: 1px solid black;
    }

    .centered-text .answer {
      text-align: center;
      vertical-align: middle;
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

<p>Welcome to a pronoun declension tool for studying ancient Greek words. Pick a paradigm to start.</p>

<label>Paradigm</label>
<select id="typeSelect">
    <option value="first-personal">Personal First Person</option>
    <option value="second-personal">Personal Second Person</option>
    <option value="third-personal-mas">Personal Third Person Masculine</option>
    <option value="third-personal-fem">Personal Third Person Feminine</option>
    <option value="third-personal-neut">Personal Third Person Neuter</option>
    <option value="first-reflexive">Reflexive First Person</option>
    <option value="second-reflexive">Reflexive Second Person</option>
    <option value="third-reflexive-mas">Reflexive Third Person Masculine</option>
    <option value="third-reflexive-fem">Reflexive Third Person Feminine</option>
    <option value="third-reflexive-neut">Reflexive Third Person Neuter</option>
    <option value="dem-prox-mas">Demonstrative Proximal Masculine</option>
    <option value="dem-prox-fem">Demonstrative Proximal Feminine</option>
    <option value="dem-prox-neut">Demonstrative Proximal Neuter</option>
    <option value="indef-mas">Indefinite Masculine/Feminine</option>
    <option value="indef-neut">Indefinite Neuter</option>
    <option value="inter-mas">Interrogative Masculine/Feminine</option>
    <option value="inter-neut">Interrogative Neuter</option>
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
