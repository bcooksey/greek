---
layout: default 
---

<script src="{{ base.url | prepend: site.url }}/main.js"></script>

# Greek Primer (3rd Edition) Flashcards

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
