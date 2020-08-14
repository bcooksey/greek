// TODO: Remove unecessary accents
const DECLENSIONS = {
    'first-personal': {
      endings: [null, null, null, null, null, null, null, null],
      irregulars: ['ἐγώ', 'ἡμεῖς', 'μου', 'ἡμῶν', 'μοι', 'ἡμῖν', 'με', 'ἡμᾶς'],
    },
    'second-personal': {
      endings: [null, null, null, null, null, null, null, null],
      irregulars: ['σύ', 'ὑμεῖς', 'σου', 'ὑμῶν', 'σοι', 'ὑμῖν', 'σε', 'ὑμᾶς'],
    },
    'third-personal-mas': {
      stem: 'αὐτ',
      endings: ['ός', 'οί', 'οῦ', 'ῶν', 'ῷ', 'οῖς', 'όν', 'ούς'],
      note: 'Follows 2nd declension pattern'
    },
    'third-personal-fem': {
      stem: 'αὐτ',
      endings: ['ή', 'αί', 'ῆς', 'ῶν', 'ῇ', 'αῖς', 'ήν', 'άς'],
      note: 'Follows 1st declension pattern'
    },
    'third-personal-neut': {
      stem: 'αὐτ',
      endings: ['ό', 'ά', 'οῦ', 'ῶν', 'ῷ', 'οῖς', 'ό', 'ά'],
      note: 'Follows 2nd declension pattern'
    },

    'first-reflexive': {
      stem: 'ἐμαυτ',
      endings: [null, null, 'οῦ', 'ῶν', 'ῷ', 'οῖς', 'όν', 'ούς'],
      irregulars: ['-', '-', null, 'ἑαυτ', null, 'ἑαυτ', null, 'ἑαυτ'],
      note: 'Follows 2nd declension pattern. Pluarl shared with 3rd person masculine reflexive pronouns'
    },
    'second-reflexive': {
      stem: 'σεαυτ',
      endings: [null, null, 'οῦ', 'ῶν', 'ῷ', 'οῖς', 'όν', 'ούς'],
      irregulars: ['-', '-', null, 'ἑαυτ', null, 'ἑαυτ', null, 'ἑαυτ'],
      note: 'Follows 2nd declension pattern. Pluarl shared with 3rd person masculine reflexive pronouns'
    },
    'third-reflexive-mas': {
      stem: 'ἑαυτ',
      endings: [null, null, 'οῦ', 'ῶν', 'ῷ', 'οῖς', 'όν', 'ούς'],
      irregulars: ['-', '-', null, null, null, null, null, null],
      note: 'Follows 2nd declension pattern'
    },
    'third-reflexive-fem': {
      stem: 'ἑαυτ',
      endings: [null, null, 'ῆς', 'ῶν', 'ῇ', 'αῖς', 'ήν', 'άς'],
      irregulars: ['-', '-', null, null, null, null, null, null],
      note: 'Follows 1st declension pattern'
    },
    'third-reflexive-neut': {
      stem: 'ἑαυτ',
      endings: [null, null, 'οῦ', 'ῶν', 'ῷ', 'οῖς', 'ό', 'ά'],
      irregulars: ['-', '-', null, null, null, null, null, null],
      note: 'Follows 2nd declension pattern'
    },
    'dem-prox-mas': {
      stem: 'τουτ',
      endings: ['ος', 'οι', 'ου', 'ων', 'ῳ', 'οις', 'ον', 'ους'],
      irregulars: ['οὗτ', 'οὗτ', null, null, null, null, null, null],
      note: 'Follows 2nd declension pattern'
    },
    'dem-prox-fem': {
      stem: 'ταυτ',
      endings: ['η', 'αι', 'ης', 'ων', 'ῃ', 'αις', 'ην', 'ας'],
      irregulars: ['αὕτ', 'αὗτ', null, 'τουτ', null, null, null, null],
      note: 'Follows 1st declension pattern'
    },
    'dem-prox-neut': {
      stem: 'τουτ',
      endings: ['ο', 'α', 'ου', 'ων', 'ῳ', 'οις', 'ο', 'α'],
      irregulars: [null, 'ταυτ', null, null, null, null, null, 'ταυτ'],
      note: 'Follows 2nd declension pattern'
    },
    'indef-mas': {
      stem: 'τιν',
      endings: [null, 'ες', 'ος', 'ων', 'ι', 'σι(ν)', 'α', 'ας'],
      irregulars: ['τις', null, null, null, null, 'τι', null, null],
      note: 'Same as interrogative, but without accents. Follows 3rd declension pattern'
    },
    'indef-neut': {
      stem: 'τιν',
      endings: [null, 'α', 'ος', 'ων', 'ι', 'σι(ν)', null, 'α'],
      irregulars: ['τι', null, null, null, null, 'τι', 'τι', null],
      note: 'Same as interrogative, but without accents. Follows 3rd declension pattern'
    },
    'inter-mas': {
      stem: 'τίν',
      endings: [null, 'ες', 'ος', 'ων', 'ι', 'σι(ν)', 'α', 'ας'],
      irregulars: ['τίς', null, null, null, null, 'τί', null, null],
      note: 'Same as indefinite, but with accents. Follows 3rd declension pattern'
    },
    'inter-neut': {
      stem: 'τίν',
      endings: [null, 'α', 'ος', 'ων', 'ι', 'σι(ν)', null, 'α'],
      irregulars: ['τί', null, null, null, null, 'τί', 'τί', null],
      note: 'Same as indefinite, but with accents. Follows 3rd declension pattern'
    },
};

const setupTable = (selection, tableWrapper) => {
  let counter = 0;
  tableWrapper.querySelectorAll('.answer').forEach((answer) => {
    answer.classList.add('hidden');
    let displayText = '';
    if (selection.irregulars && selection.irregulars[counter] !== null) {
      displayText += selection.irregulars[counter];
    } else {
      displayText += selection.stem;
    }

    if (selection.endings[counter] !== null) {
      displayText += ' + ' + selection.endings[counter];
    }
    answer.textContent = displayText;
    counter += 1;
  });
};

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
    let tableWrapper;
    const selectedValue = document.getElementById('typeSelect').value;
    const selection = DECLENSIONS[selectedValue];
    tableWrapper = document.getElementById('wrapper');
    setupTable(selection, tableWrapper);

    revealBttn.disabled = false;
    revealAllBttn.disabled = false;
  };
};
