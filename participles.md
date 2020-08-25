---
layout: default 
title: Greek Primer (3rd Edition) Participle Conjugations
---

<script type="text/javascript" charset="UTF-8" src="./participles.js"></script>

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

<p>Welcome to a participle conjugation tool for studying ancient Greek words. Pick a paradigm to start.</p>

<label>Paradigm</label>
<select id="typeSelect">
    <option value="p-a-p">Present Active Participle</option>
    <option value="">Present Middle/Passive Participle</option>
    <option value="">Aorist Active Participle</option>
    <option value="">Aorist Middle Participle</option>
    <option value="">Aorist Passive Participle</option>
    <option value="">Perfect Active Participle</option>
    <option value="">Perfiect Middle/Passive Participle</option>
    <option value="chart">Chart to Construct Endings</option>
</select>

<button id="start">Start</button>
<div id="wrapper" class="active-table">
    <table>
        <tr><th></th><th rowspan="3" class="variable-heading">Singular</th><th rowspan="3" class="variable-heading">Plural</th></tr>
        <tr><th>Case</th><th>M</th><th>F</th><th>N</th><th>M</th><th>F</th><th>N</th></tr>
        <tr>
          <td>N</td>
          <td class="col1"><span class="answer"></span></td>
          <td class="col2"><span class="answer"></span></td>
          <td><span class="answer"></span></td>
        </tr>
        <tr>
          <td>G</td>
          <td class="col1"><span class="answer"></span></td>
          <td class="col2"><span class="answer"></span></td>
          <td><span class="answer"></span></td>
        </tr>
        <tr>
          <td>D</td>
          <td class="col1"><span class="answer"></span></td>
          <td class="col2"><span class="answer"></span></td>
          <td><span class="answer"></span></td>
        </tr>
        <tr>
          <td>A</td>
          <td class="col1"><span class="answer"></span></td>
          <td class="col2"><span class="answer"></span></td>
          <td><span class="answer"></span></td>
        </tr>
    </table>
</div>
<div id="chart-wrapper" class="hidden centered-text">
    <table>
      <tr><th>Paradigm</th><th>Endings</th></tr>
      <tr><td>Present Active Mas</td><td><span class="answer">ων, οντ + 3rd Declension</span></td></tr>
      <tr><td>Present Active Fem</td><td><span class="answer">ουσ + 1st Declension Mixed</span></td></tr>
      <tr><td>Present Active Neut</td><td><span class="answer">ον, οντ + 3rd Declension</span></td></tr>
      <tr><td>Present Middle/Passive Mas</td><td><span class="answer">ομεν + 2nd Declension</span></td></tr>
      <tr><td>Present Middle/Passive Fem</td><td><span class="answer">ομεν + 1st Declension Eta</span></td></tr>
      <tr><td>Present Middle/Passive Neut</td><td><span class="answer">ομεν + 2nd Declension</span></td></tr>
      <tr><td>Aorist Act Mas</td><td><span class="answer">σας, σαντ + 3rd Declension</span></td></tr>
      <tr><td>Aorist Act Fem</td><td><span class="answer">σασ + 1st Declension Mixed</span></td></tr>
      <tr><td>Aorist Act Neut</td><td><span class="answer">σαν, σαντ + 3rd Declension</span></td></tr>
      <tr><td>Aorist Middle Mas</td><td><span class="answer">σαμεν + 2nd Declension</span></td></tr>
      <tr><td>Aorist Middle Fem</td><td><span class="answer">σαμεν + 1st Declension Eta</span></td></tr>
      <tr><td>Aorist Middle Neut</td><td><span class="answer">σαμεν + 2nd Declension</span></td></tr>
      <tr><td>Aorist Passive Mas</td><td><span class="answer">θεις, θεντ + 3rd Declension</span></td></tr>
      <tr><td>Aorist Passive Fem</td><td><span class="answer">θεις + 1st Declension Mixed</span></td></tr>
      <tr><td>Aorist Passive Neut</td><td><span class="answer">θεν, θεντ + 3rd Declension</span></td></tr>
      <tr><td>Perfect Active Mas</td><td><span class="answer">κως, κοτ + 3rd Declension</span></td></tr>
      <tr><td>Perfect Active Fem</td><td><span class="answer">κυι + 1st Declension Alpha</span></td></tr>
      <tr><td>Perfect Active Neut</td><td><span class="answer">κον, κοτ + 3rd Declension</span></td></tr>
      <tr><td>Perfect Middle/Passive Mas</td><td><span class="answer">μεν + 2nd Declension</span></td></tr>
      <tr><td>Perfect Middle/Passive Fem</td><td><span class="answer">μεν + 1st Declension Eta</span></td></tr>
      <tr><td>Perfect Middle/Passive Neut</td><td><span class="answer">μεν + 2nd Declension</span></td></tr>
    </table>
</div>
<div class="controls">
    <button id="reveal-next" disabled="disabled">Reveal Next</button>
    <button id="reveal-all" disabled="disabled">Reveal All</button>
</div>
