const CONJUGATIONS = {
    // Reg
    'p-a-i': {stem: 'λυ', endings: ['ω', 'ομεν', 'εις', 'ετε', 'ει', 'ουσι(ν)'], prefix: '', suffix: ''},
    'i-a-i': {stem: 'λυ', endings: ['ον', 'ομεν', 'ες', 'ετε', 'ε(ν)', 'ον'], prefix: 'ἐ', suffix: ''},
    'f-a-i': {stem: 'λυ', endings: ['ω', 'ομεν', 'εις', 'ετε', 'ει', 'ουσι(ν)'], prefix: '', suffix: 'σ'},
    'first-aorist-a-i': {stem: 'λυ', endings: ['α', 'αμεν', 'ας', 'ατε', 'ε(ν)', 'αν'], prefix: 'ἐ', suffix: 'σ'},
    'second-aorist-a-i': {stem: 'ἠλθ', endings: ['ον', 'ομεν', 'ες', 'ετε', 'ε(ν)', 'ον'], prefix: '', suffix: ''},
    'pf-a-i': {stem: 'λελυ', endings: ['α', 'αμεν', 'ας', 'ατε', 'ε(ν)', 'αν/ασιν'], prefix: '', suffix: 'κ'},
    'p-mp-i': {stem: 'λυ', endings: ['ομαι', 'ομεθα', 'ῃ', 'εσθε', 'εται', 'ονται'], prefix: '', suffix: ''},
    'i-mp-i': {stem: 'λυ', endings: ['ομην', 'ομεθα', 'ου', 'εσθε', 'ετο', 'οντο'], prefix: 'ἐ', suffix: ''},
    'f-m-i': {stem: 'λυ', endings: ['ομαι', 'ομεθα', 'ῃ', 'εσθε', 'εται', 'ονται'], prefix: '', suffix: 'σ'},
    'f-p-i': {stem: 'λυ', endings: ['ομαι', 'ομεθα', 'ῃ', 'εσθε', 'εται', 'ονται'], prefix: '', suffix: 'θησ'},
    'aorist-m-i': {stem: 'λυ', endings: ['αμην', 'αμεθα', 'ω', 'ασθε', 'ατο', 'αντο'], prefix: 'ἐ', suffix: 'σ'},
    'aorist-p-i': {stem: 'λυ', endings: ['ην', 'ημεν', 'ης', 'ητε', 'η', 'ησαν'], prefix: 'ἐ', suffix: 'θ'},
    'pf-mp-i': {stem: 'λελυ', endings: ['μαι', 'μεθα', 'σαι', 'σθε', 'ται', 'νται'], prefix: '', suffix: ''},

    'p-a-s': {stem: 'λυ', endings: ['ω', 'ωμεν', 'ῃς', 'ητε', 'ῃ', 'ωσι(ν)'], prefix: '', suffix: ''},
    'p-mp-s': {stem: 'λυ', endings: ['ωμαι', 'ωμεθα', 'ῃ', 'ησθε', 'ηται', 'ωνται'], prefix: '', suffix: ''},
    'a-a-s': {stem: 'λυ', endings: ['σω', 'σωμεν', 'σῃς', 'σητε', 'σῃ', 'σωσι(ν)'], prefix: '', suffix: ''},
    'a-m-s': {stem: 'λυ', endings: ['σωμαι', 'σωμεθα', 'σῃ', 'σησθε', 'σηται', 'σωνται'], prefix: '', suffix: ''},
    'a-p-s': {stem: 'λυ', endings: ['θω', 'θωμεν', 'θῃς', 'θητε', 'θῃ', 'θωσι(ν)'], prefix: '', suffix: ''},

    'p-a-impv': {stem: 'λυ', endings: ['', '', 'ε', 'ετε', 'ετω', 'ετωσαν'], irregulars: ['-', '-', '', '', '', ''], prefix: '', suffix: ''},
    'p-mp-impv': {stem: 'λυ', endings: ['', '', 'ου', 'εσθε', 'εσθω', 'εσθωσαν'], irregulars: ['-', '-', '', '', '', ''], prefix: '', suffix: ''},
    'a-a-impv': {stem: 'λυ', endings: ['', '', 'σον', 'σατε', 'σατω', 'σατωσαν'], irregulars: ['-', '-', '', '', '', ''], prefix: '', suffix: ''},
    'a-m-impv': {stem: 'λυ', endings: ['', '', 'σαι', 'σασθε', 'σασθω', 'σασθωσαν'], irregulars: ['-', '-', '', '', '', ''], prefix: '', suffix: ''},
    'a-p-impv': {stem: 'λυ', endings: ['', '', 'θητι', 'θητε', 'θητω', 'θητωσαν'], irregulars: ['-', '-', '', '', '', ''], prefix: '', suffix: ''},

    // Deponent
    'p-d-i': {stem: 'πορεύ', endings: ['ομαι', 'ομεθα', 'ῃ', 'εσθε', 'εται', 'ονται'], prefix: '', suffix: ''},
    'i-d-i': {stem: 'πορεύ', endings: ['ομην', 'ομεθα', 'ου', 'εσθε', 'ετο', 'οντο'], prefix: 'ἐ', suffix: ''},
    'f-d-i': {stem: 'πορεύ', endings: ['ομαι', 'ομεθα', 'ῃ', 'εσθε', 'εται', 'ονται'], prefix: '', suffix: 'σ'},
    'first-aorist-d-i': {stem: 'πορεύ', endings: ['αμην', 'αμεθα', 'ω', 'ασθε', 'ατο', 'αντο'], prefix: 'ἐ', suffix: 'σ'},
    'second-aorist-d-i': {stem: 'ἐγεν', endings: ['ομην', 'ομεθα', 'ου', 'εσθε', 'ετο', 'οντο'], prefix: '', suffix: ''},
    'pf-d-i': {stem: 'πορεύ', endings: ['μαι', 'μεθα', 'σαι', 'σθε', 'ται', 'νται'], prefix: '', suffix: ''},
    // Eimi
    'eimi-pai': {stem: '', irregulars: ['εἰμί', 'ἐσμεν', 'εἰ', 'ἐστε', 'ἐστιν', 'εἰσι(ν)', '', ''], prefix: '', suffix: ''},
    'eimi-iai': {stem: '', irregulars: ['ἠμην', 'ἠμεν/ἠμεθα', 'ἠς/ἠσθα', 'ἠτε', 'ἠν', 'ἠσαν'], prefix: '', suffix: ''},
    'eimi-fdi': {stem: 'ἐσ', endings: ['ομαι', 'ομεθα', 'ῃ', 'εσθε', 'εται', 'ονται'], prefix: '', suffix: ''},
};

const setupTable = (selection, tableWrapper) => {
  let counter = 0;
  tableWrapper.querySelectorAll('.answer').forEach((answer) => {
    answer.classList.add('hidden');
    let displayText = '';
    if (selection.prefix) {
      displayText += selection.prefix + ' + ';
    }

    if (selection.irregulars && selection.irregulars[counter] !== null){
      displayText += selection.irregulars[counter];
    } else {
      displayText += selection.stem;
    }

    if (selection.suffix) {
      displayText += ' + ' + selection.suffix;
    }
    
    if (selection.endings && selection.endings[counter] !== null) {
      displayText += ' + ' + selection.endings[counter]; 
    }

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
    if (selectedValue === 'prefix-conflation') {
      tableWrapper = document.getElementById('prefix-conflation-wrapper');
      resetHardCodedTable(tableWrapper);
    } else if (selectedValue === 'suffix-conflation') {
      tableWrapper = document.getElementById('suffix-conflation-wrapper');
      resetHardCodedTable(tableWrapper);
    } else if (selectedValue === 'contraction') {
      tableWrapper = document.getElementById('contraction-wrapper');
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
