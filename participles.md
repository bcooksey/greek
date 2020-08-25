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
      <tr><th>Paradigm</th><th colspan="3">Ending Constructions</th></tr>
      <tr><th></th><th>Masculine</th><th>Feminine</th><th>Neuter</th></tr>
      <tr><td>Present Active</td><td><span class="answer">ων, οντ + 3rd</span></td><td><span class="answer">ουσ + 1st mixed</span></td><td><span class="answer">ον, οντ + 3rd</span></td></tr>
      <tr><td>Present Middle/Passive</td><td colspan="3"><span class="answer">ομεν + 2nd-1st Eta-2nd</span></td></tr>
      <tr><td>Aorist Active</td><td><span class="answer">σας, σαντ + 3rd</span></td><td><span>σασ + 1st mixed</span></td><td><span>σαν, σαντ + 3rd</span></td></tr>
      <tr><td>Aorist Middle</td><td colspan="3"><span class="answer">σαμεν + 2nd-1st Eta-2nd</span></td></tr>
    </table>
</div>
<div class="controls">
    <button id="reveal-next" disabled="disabled">Reveal Next</button>
    <button id="reveal-all" disabled="disabled">Reveal All</button>
</div>