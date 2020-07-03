---
layout: default 
title: Greek Primer (3rd Edition) Verb Conjugation
---

<script type="text/javascript" charset="UTF-8" src="./verbs.js"></script>

<style>
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

    .controls {
        width: 35%;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
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
        <option value="prefix-conflation">Prefix Conflation Rules</option>
        <option value="suffix-conflation">Suffix Conflation Rules</option>
        <option value="contraction">Contraction Rules</option>
    </optgroup>
</select>
<button id="start">Start</button>
<div id="conjugation-wrapper" class="active-table">
    <table>
        <tr><th>Person</th><th class="variable-heading">Singular</th><th class="variable-heading">Plural</th></tr>
        <tr><td>1st</td><td class="col1 answer"></td><td class="answer"></td></tr>
        <tr><td>2nd</td><td class="col1 answer"></td><td class="answer"></td></tr>
        <tr><td>3rd</td><td class="col1 answer"></td><td class="answer"></td></tr>
    </table>
    <span id="note"></span>
</div>
<div id="prefix-conflation-wrapper" class="hidden">
    <table>
      <tr><th>Prefix</th><th>Becomes</th></tr>
      <tr><td>ε + α</td><td rowspan="3" class="answer">η</td></tr>
      <tr><td>ε + ε</td></tr>
      <tr><td>ε + η</td></tr>
      <tr><td>ε + ο</td><td rowspan="2" class="answer">ω</td></tr>
      <tr><td>ε + ω</td></tr>
      <tr><td>ε + ι</td><td class="answer">ι</td></tr>
      <tr><td>ε + υ</td><td class="answer">υ</td></tr>
      <tr><td>ε + αι</td><td rowspan="2" class="answer">ῃ</td></tr>
      <tr><td>ε + ει</td></tr>
      <tr><td>ε + αυ</td><td rowspan="2" class="answer">ηυ</td></tr>
      <tr><td>ε + ευ</td></tr>
      <tr><td>ε + οι</td><td class="answer">ῳ</td></tr>
    </table>
</div>
<div id="suffix-conflation-wrapper" class="hidden">
    <table>
      <tr><th>Suffix</th><th>Becomes</th></tr>
      <tr><td>β + σ</td><td rowspan="4" class="answer">ψ</td></tr>
      <tr><td>π + σ</td></tr>
      <tr><td>φ + σ</td></tr>
      <tr><td>πτ + σ</td></tr>
      <tr><td>δ + σ</td><td rowspan="4" class="answer">σ</td></tr>
      <tr><td>ζ + σ</td></tr>
      <tr><td>θ + σ</td></tr>
      <tr><td>τ + σ</td></tr>
      <tr><td>γ + σ</td><td rowspan="5" class="answer">ξ</td></tr>
      <tr><td>κ + σ</td></tr>
      <tr><td>χ + σ</td></tr>
      <tr><td>σκ + σ</td></tr>
      <tr><td>σσ+ σ</td></tr>
    </table>
</div>
<div id="contraction-wrapper" class="hidden">
    <table>
      <tr><th>Suffix</th><th>Becomes</th></tr>
      <tr><td>ε + ω</td><td class="answer">ω</td></tr>
      <tr><td>ε + ε</td><td rowspan="2" class="answer">ει</td></tr>
      <tr><td>ε + ει</td></tr>
      <tr><td>ε + ο</td><td rowspan="2" class="answer">ου</td></tr>
      <tr><td>ε + ου</td></tr>
      <tr><td>ε + ῃ</td><td class="answer">ῃ</td></tr>
      <tr><td>ε + σ</td><td class="answer">ησ</td></tr>
      <tr><td>α + ο</td><td rowspan="3" class="answer">ω</td></tr>
      <tr><td>α + ω</td></tr>
      <tr><td>α + ου</td></tr>
      <tr><td>α + ε</td><td class="answer">α</td></tr>
      <tr><td>α + ει</td><td class="answer">ᾳ</td></tr>
      <tr><td>α + σ</td><td class="answer">ησ</td></tr>
      <tr><td>ο + ω</td><td class="answer">ω</td></tr>
      <tr><td>ο + ει</td><td class="answer">οι</td></tr>
      <tr><td>ο + ε</td><td rowspan="3" class="answer">ου</td></tr>
      <tr><td>ο + ο</td></tr>
      <tr><td>ο + ου</td></tr>
      <tr><td>ο + σ</td><td class="answer">ωσ</td></tr>
    </table>
</div>
<div class="controls">
    <button id="reveal-next" disabled="disabled">Reveal Next</button>
    <button id="reveal-all" disabled="disabled">Reveal All</button>
</div>
