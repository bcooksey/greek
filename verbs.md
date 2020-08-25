---
layout: default 
title: Greek Primer (3rd Edition) Verb Conjugation
---

<script type="text/javascript" charset="UTF-8" src="./verbs.js"></script>

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

    .centered-text td {
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

<p>Welcome to a verb conjugation tool for studying ancient Greek words. Pick a paradigm to start.</p>

<label>Paradigm</label>
<select id="typeSelect">
    <optgroup label="Active">
        <option value="p-a-i">Present Active Indicative</option>
        <option value="i-a-i">Imperfect Active Indicative</option>
        <option value="f-a-i">Future Active Indicative</option>
        <option value="first-aorist-a-i">1st Aorist Active Indicative</option>
        <option value="second-aorist-a-i">2nd Aorist Active Indicative</option>
        <option value="pf-a-i">Perfect Active indicative</option>
    </optgroup>
    <optgroup label="Middle and Passive">
        <option value="p-mp-i">Present Middle/Passive Indicative</option>
        <option value="i-mp-i">Imperfect Middle/Passive Indicative</option>
        <option value="f-m-i">Future Middle Indicative</option>
        <option value="f-p-i">Future Passive Indicative</option>
        <option value="aorist-m-i">Aorist Middle Indicative</option>
        <option value="aorist-p-i">Aorist Passive Indicative</option>
        <option value="pf-mp-i">Perfect Middle/Passive Indicative</option>
    </optgroup>
    <optgroup label="Deponent">
        <option value="p-d-i">Present Deponent Indicative</option>
        <option value="i-d-i">Imperfect Deponent Indicative</option>
        <option value="f-d-i">Future Deponent Indicative</option>
        <option value="first-aorist-d-i">1st Aorist Deponent Indicative</option>
        <option value="second-aorist-d-i">2nd Aorist Deponent Indicative</option>
        <option value="pf-d-i">Perfect Deponent Indicative</option>
    </optgroup>
    <optgroup label="Other">
        <option value="eimi-pai">εἰμί Present Active Indicative</option>
        <option value="eimi-iai">εἰμί Imperfect Active Indicative</option>
        <option value="eimi-fdi">εἰμί Future Active Indicative</option>
        <option value="prefix-conflation">Prefix Conflation Rules</option>
        <option value="suffix-conflation">Suffix Conflation Rules</option>
        <option value="contraction">Contraction Rules</option>
    </optgroup>
</select>
<button id="start">Start</button>
<div id="conjugation-wrapper" class="active-table">
    <table>
        <tr><th>Person</th><th class="variable-heading">Singular</th><th class="variable-heading">Plural</th></tr>
        <tr><td>1st</td><td class="col1"><span class="answer"></span></td><td><span class="answer"></span></td></tr>
        <tr><td>2nd</td><td class="col1"><span class="answer"></span></td><td><span class="answer"></span></td></tr>
        <tr><td>3rd</td><td class="col1"><span class="answer"></span></td><td><span class="answer"></span></td></tr>
    </table>
</div>
<div id="prefix-conflation-wrapper" class="hidden centered-text">
    <table>
      <tr><th>Prefix</th><th>Becomes</th></tr>
      <tr><td>ε + α</td><td rowspan="3"><span class="answer">η</span></td></tr>
      <tr><td>ε + ε</td></tr>
      <tr><td>ε + η</td></tr>
      <tr><td>ε + ο</td><td rowspan="2"><span class="answer">ω</span></td></tr>
      <tr><td>ε + ω</td></tr>
      <tr><td>ε + ι</td><td><span class="answer">ι</span></td></tr>
      <tr><td>ε + υ</td><td><span class="answer">υ</span></td></tr>
      <tr><td>ε + αι</td><td rowspan="2"><span class="answer">ῃ</span></td></tr>
      <tr><td>ε + ει</td></tr>
      <tr><td>ε + αυ</td><td rowspan="2"><span class="answer">ηυ</span></td></tr>
      <tr><td>ε + ευ</td></tr>
      <tr><td>ε + οι</td><td><span class="answer">ῳ</span></td></tr>
    </table>
</div>
<div id="suffix-conflation-wrapper" class="hidden centered-text">
    <table>
      <tr><th>Suffix</th><th>Becomes</th></tr>
      <tr><td>β + σ</td><td rowspan="4"><span class="answer">ψ</span></td></tr>
      <tr><td>π + σ</td></tr>
      <tr><td>φ + σ</td></tr>
      <tr><td>πτ + σ</td></tr>
      <tr><td>δ + σ</td><td rowspan="4"><span class="answer">σ</span></td></tr>
      <tr><td>ζ + σ</td></tr>
      <tr><td>θ + σ</td></tr>
      <tr><td>τ + σ</td></tr>
      <tr><td>γ + σ</td><td rowspan="5"><span class="answer">ξ</span></td></tr>
      <tr><td>κ + σ</td></tr>
      <tr><td>χ + σ</td></tr>
      <tr><td>σκ + σ</td></tr>
      <tr><td>σσ+ σ</td></tr>
    </table>
</div>
<div id="contraction-wrapper" class="hidden centered-text">
    <table>
      <tr><th>Suffix</th><th>Becomes</th></tr>
      <tr><td>ε + ω</td><td><span class="answer">ω</span></td></tr>
      <tr><td>ε + ε</td><td rowspan="2"><span class="answer">ει</span></td></tr>
      <tr><td>ε + ει</td></tr>
      <tr><td>ε + ο</td><td rowspan="2"><span class="answer">ου</span></td></tr>
      <tr><td>ε + ου</td></tr>
      <tr><td>ε + ῃ</td><td><span class="answer">ῃ</span></td></tr>
      <tr><td>ε + σ</td><td><span class="answer">ησ</span></td></tr>
      <tr><td>ε + θ</td><td><span class="answer">ηθ</span></td></tr>
      <tr><td>ε + κ</td><td><span class="answer">ηκ</span></td></tr>
      <tr><td>α + ο</td><td rowspan="3"><span class="answer">ω</span></td></tr>
      <tr><td>α + ω</td></tr>
      <tr><td>α + ου</td></tr>
      <tr><td>α + ε</td><td><span class="answer">α</span></td></tr>
      <tr><td>α + ει</td><td><span class="answer">ᾳ</span></td></tr>
      <tr><td>α + σ</td><td><span class="answer">ησ</span></td></tr>
      <tr><td>α + θ</td><td><span class="answer">ηθ</span></td></tr>
      <tr><td>α + κ</td><td><span class="answer">ηκ</span></td></tr>
      <tr><td>ο + ω</td><td><span class="answer">ω</span></td></tr>
      <tr><td>ο + ει</td><td><span class="answer">οι</span></td></tr>
      <tr><td>ο + ε</td><td rowspan="3"><span class="answer">ου</span></td></tr>
      <tr><td>ο + ο</td></tr>
      <tr><td>ο + ου</td></tr>
      <tr><td>ο + σ</td><td><span class="answer">ωσ</span></td></tr>
      <tr><td>ο + θ</td><td><span class="answer">ωθ</span></td></tr>
      <tr><td>ο + κ</td><td><span class="answer">ωκ</span></td></tr>
    </table>
</div>
<div class="controls">
    <button id="reveal-next" disabled="disabled">Reveal Next</button>
    <button id="reveal-all" disabled="disabled">Reveal All</button>
</div>
