---
layout: default 
title: Greek Verb Conjugation
---
<script type="text/javascript" charset="UTF-8" src="./verbs.js"></script>

<style>
    /* #conjugation-wrapper { */
    /*     margin-top: 20px; */
    /*     margin-left: auto; */
    /*     margin-right: auto; */
    /*     padding: 10px; */
    /*     width: 80%; */
    /*     border: 1px solid black; */
    /*     text-align: center; */
    /* }  */

    #conjugation-wrapper th {
        text-align: start;
    }

    #conjugation-wrapper .variable-heading {
        min-width: 100px;
        padding-right: 15px;
    }

    #conjugation-wrapper table td {
        min-width: 80px;
        padding-right: 15px;
    }

    .hidden {
        display: none;
    }

    /* .controls { */
    /*     width: 35%; */
    /*     margin-top: 15px; */
    /*     margin-left: auto; */
    /*     margin-right: auto; */
    /*     text-align: center; */
    /* } */
</style>

<label>Verb Type</label>
<select id="typeSelect">
    <optgroup label="Active">
        <option value="pai">Present Active Indicative</option>
        <option value="iai">Imperfect Active Indicative</option>
        <option value="fai">Future Active Indicative</option>
        <option value="first-aorist-ai">1st Aorist Active Indicative</option>
        <option value="second-aorist-ai">2nd Aorist Active Indicative</option>
    </optgroup>
    <optgroup label="Deponent">
        <option value="pdi">Present Deponent Indicative</option>
        <option value="idi">Imperfect Deponent Indicative</option>
        <option value="fdi">Future Deponent Indicative</option>
        <option value="first-aorist-di">1st Aorist Deponent Indicative</option>
        <option value="second-aorist-di">2nd Aorist Deponent Indicative</option>
    </optgroup>
    <optgroup label="Other">
        <option value="prefix">Prefix Conflation Rules</option>
        <option value="suffix">Suffix Contraction Rules</option>
    </optgroup>
</select>
<button id="start">Start</button>
<div id="conjugation-wrapper" class="active-table">
    <table>
        <tr><th>Person</th><th class="variable-heading">Singular</th><th class="variable-heading">Plural</th></tr>
        <tr><td>1st</td><td class="singular answer"></td><td class="plural answer"></td></tr>
        <tr><td>2nd</td><td class="singular answer"></td><td class="plural answer"></td></tr>
        <tr><td>3rd</td><td class="singular answer"></td><td class="plural answer"></td></tr>
    </table>
    <span id="note"></span>
</div>
<div class="controls">
    <button id="reveal-next" disabled="disabled">Reveal Next</button>
    <button id="reveal-all" disabled="disabled">Reveal All</button>
</div>
