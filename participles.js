const CONJUGATIONS = {
  'p-a-p': { 
    answers: [
      'λυων', 'λυουσ + α', 'λυον',
      'λυοντ + ες', 'λυουσ + αι', 'λυοντ + α',
      'λυοντ + ος', 'λυουσ + ης', 'λυοντ + ος',
      'λυοντ + ων', 'λυουσ + ων', 'λυοντ + ων',
      'λυοντ + ι', 'λυουσ + ῃ', 'λυοντ + ι',
      'λυου + σι(ν)', 'λυουσ + αις', 'λυου + σι(ν)',
      'λυοντ + α', 'λυουσ + αν', 'λυον',
      'λυοντ + ας', 'λυουσ + ας', 'λυοντ + α',
    ],
    note: 'Follows a 3 - 1 mixied - 3 noun pattern',
  },
  // 'p-mp-p': {stem: 'λυ', endings: ['ομαι', 'ομεθα', 'ῃ', 'εσθε', 'εται', 'ονται'], prefix: '', suffix: ''},
  // 'first-aorist-a-i': {stem: 'λυ', endings: ['α', 'αμεν', 'ας', 'ατε', 'ε(ν)', 'αν'], prefix: 'ἐ', suffix: 'σ'},
  // 'aorist-m-i': {stem: 'λυ', endings: ['αμην', 'αμεθα', 'ω', 'ασθε', 'ατο', 'αντο'], prefix: 'ἐ', suffix: 'σ'},
  // 'aorist-p-i': {stem: 'λυ', endings: ['ην', 'ημεν', 'ης', 'ητε', 'η', 'ησαν'], prefix: 'ἐ', suffix: 'θ'},
  // 'pf-a-i': {stem: 'λελυ', endings: ['α', 'αμεν', 'ας', 'ατε', 'ε(ν)', 'αν/ασιν'], prefix: '', suffix: 'κ'},
  // 'pf-mp-i': {stem: 'λελυ', endings: ['μαι', 'μεθα', 'σαι', 'σθε', 'ται', 'νται'], prefix: '', suffix: ''},
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

const resetHardCodedTable = (tableWrapper) => {
  tableWrapper.querySelectorAll('.answer').forEach((answer) => {
    answer.classList.add('hidden');
  });
}

const showNext = (tableWrapper) => {
  let nextAnswer = tableWrapper.querySelector('.col1 .hidden');
  if (!nextAnswer) {
    nextAnswer = tableWrapper.querySelector('.col2 .hidden');
  }
  if (!nextAnswer) {
    nextAnswer = tableWrapper.querySelector('.hidden');
  }
  if (nextAnswer) {
    nextAnswer.classList.remove('hidden');
  }

  // If that was the last answer, disable controls
  nextAnswer = tableWrapper.querySelector('.hidden');
  if (!nextAnswer) {
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
    const previousWrapper = document.querySelector('.active-table');
    previousWrapper.classList.add('hidden');
    previousWrapper.classList.remove('active-table');

    let tableWrapper;
    const selectedValue = document.getElementById('typeSelect').value;
    if (selectedValue === 'chart') {
      tableWrapper = document.getElementById('chart-wrapper');
      resetHardCodedTable(tableWrapper);
    } else {
      const selection = CONJUGATIONS[selectedValue];
      tableWrapper = document.getElementById('conjugation-wrapper');
      setupTable(selection, tableWrapper);
    }

    revealBttn.disabled = false;
    revealAllBttn.disabled = false;

    tableWrapper.classList.add('active-table');
    tableWrapper.classList.remove('hidden');
  };

};
