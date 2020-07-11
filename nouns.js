const DECLENSIONS = {
    'first-fem-eta': {
      stem: 'φοων',
      endings: ['η', 'αι', 'ης', 'ων', 'ῃ', 'αις', 'ην', 'ας'],
      articles: ['ἡ', 'αἱ', 'της', 'των', 'τῃ', 'ταις', 'την', 'τας']
    },
    'first-fem-alpha': {
      stem: 'καρδι',
      endings: ['α', 'αι', 'ας', 'ων', 'ᾳ', 'αις', 'αν', 'ας'],
      articles: ['ἡ', 'αἱ', 'της', 'των', 'τῃ', 'ταις', 'την', 'τας']
    },
    'second-m': {
      stem: 'λογ',
      endings: ['ος', 'οι', 'ου', 'ων', 'ῳ', 'οις', 'ον', 'ους'],
      articles: ['ὁ', 'οἱ', 'του', 'των', 'τῳ', 'τοις', 'τον', 'τους']
    },
    'second-n': {
      stem: 'τεκν',
      endings: ['ον', 'α', 'ου', 'ων', 'ῳ', 'οις', 'ον', 'α'],
      articles: ['το', 'τα', 'του', 'των', 'τῳ', 'τοις', 'το', 'τα']
    },
    'third-n': {
      stem: 'πνευματ',
      endings: [null, 'α', 'ος', 'ων', 'ι', 'σι(ν)', null, 'α'],
      irregulars: ['πνευμα', null, null, null, null, null, 'πνευμα', null],
      articles: ['το', 'τα', 'του', 'των', 'τῳ', 'τοις', 'το', 'τα']
    },
    'third-m': {
      stem: 'ἀνδρ',
      endings: [null, 'ες', 'ος', 'ων', 'ι', 'σι(ν)', 'α', 'ας'],
      irregulars: ['ἀνηρ', null, null, null, null, null, null, null],
      articles: ['ὁ', 'οἱ', 'του', 'των', 'τῳ', 'τοις', 'τον', 'τους']
    },
    'third-f': {
      stem: 'γυναικ',
      endings: [null, 'ες', 'ος', 'ων', 'ι', 'σι(ν) [will contract]', 'α', 'ας'],
      irregulars: ['γυνη', null, null, null, null, null, null, null],
      articles: ['ἡ', 'αἱ', 'της', 'των', 'τῃ', 'ταις', 'την', 'τας']
    },
};

const setupTable = (selection, tableWrapper) => {
  let counter = 0;
  tableWrapper.querySelectorAll('.answer').forEach((answer) => {
    answer.classList.add('hidden');
    let displayText = selection.articles[counter] + ' ';
    if (selection.irregulars && selection.irregulars[counter] !== null) {
      displayText += selection.irregulars[counter];
    } else {
      displayText += selection.stem + ' + ';
      displayText += selection.endings[counter];
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
