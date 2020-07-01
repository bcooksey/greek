const CONJUGATIONS = {
    pai: {stem: 'λυ', endings: ['ω', 'ομεν', 'εις', 'ετε', 'ει', 'ουσι(ν)'], prefix: '', suffix: ''},
    iai: {stem: 'λυ', endings: ['ον', 'ομεν', 'ες', 'ετε', 'ε(ν)', 'ον'], prefix: 'ἐ', suffix: ''},
    fai: {stem: 'λυ', endings: ['ω', 'ομεν', 'εις', 'ετε', 'ει', 'ουσι(ν)'], prefix: '', suffix: 'σ'},
    'first-aorist-ai': {stem: 'λυ', endings: ['α', 'αμεν', 'ας', 'ατε', 'ε(ν)', 'αν'], prefix: 'ἐ', suffix: 'σ'},
    'second-aorist-ai': {stem: 'ἠλθ', endings: ['ον', 'ομεν', 'ες', 'ετε', 'ε(ν)', 'ον'], prefix: '', suffix: ''},
    pdi: {stem: 'πορεύ', endings: ['ομαι', 'ομεθα', 'ῃ', 'εσθε', 'εται', 'ονται'], prefix: '', suffix: ''},
    idi: {stem: 'πορεύ', endings: ['ομην', 'ομεθα', 'ου', 'εσθε', 'ετο', 'οντο'], prefix: 'ἐ', suffix: ''},
    fdi: {stem: 'πορεύ', endings: ['ομαι', 'ομεθα', 'ῃ', 'εσθε', 'εται', 'ονται'], prefix: '', suffix: 'σ'},
    'first-aorist-di': {stem: 'πορεύ', endings: ['αμην', 'αμεθα', 'ω', 'ασθε', 'ατο', 'αντο'], prefix: 'ἐ', suffix: 'σ'},
    'second-aorist-di': {stem: 'ἐγεν', endings: ['ομην', 'ομεθα', 'ου', 'εσθε', 'ετο', 'οντο'], prefix: '', suffix: ''},
};

const CONFLATION_RULES = {

};

const CONTRACTION_RULES = {

};

const setupTable = (selection, tableWrapper) => {
  let counter = 0;
  tableWrapper.querySelectorAll('.answer').forEach((answer) => {
    answer.classList.add('hidden');
    let displayText = '';
    if (selection.prefix) {
      displayText += selection.prefix + ' + ';
    }
    displayText += selection.stem + ' + ';
    if (selection.suffix) {
      displayText += selection.suffix + ' + ';
    }
    displayText += selection.endings[counter]; 

    answer.textContent = displayText;
    counter += 1;
  });
};

const showNext = (tableWrapper) => {
  let nextAnswer = tableWrapper.querySelector('.singular.hidden');
  if (!nextAnswer) {
    nextAnswer = tableWrapper.querySelector('.plural.hidden');
  }
  if (nextAnswer) {
    nextAnswer.classList.remove('hidden');
  } else {
    disableControls();
  }
};

const showAll = (tableWrapper) => {
  tableWrapper.querySelectorAll('.answer').forEach((answer) => {
    answer.classList.remove('hidden');
  });
  disableControls();
};

const disableControls = () => {
  const revealBttn = document.getElementById('reveal-next');
  revealBttn.disabled = true;
  const revealAllBttn = document.getElementById('reveal-all');
  revealAllBttn.disabled = true;
};

window.onload = () => {
  const revealBttn = document.getElementById('reveal-next');
  revealBttn.onclick = () => {
    const tableWrapper = document.querySelector('.active-table');
    showNext(tableWrapper);
  };

  const revealAllBttn = document.getElementById('reveal-all');
  revealAllBttn.onclick = (event) => {
    const tableWrapper = document.querySelector('.active-table');
    showAll(tableWrapper);
  };

  const startBttn = document.getElementById('start');
  startBttn.onclick = () => {
    const tableWrapper = document.querySelector('.active-table');
    const selectedValue = document.getElementById('typeSelect').value;
    const selection = CONJUGATIONS[selectedValue];

    revealBttn.disabled = false;
    revealAllBttn.disabled = false;
    setupTable(selection, tableWrapper);
  };

};
