const CONJUGATIONS = {
  'p-a-p': { 
    answers: [
      'λυων', 'λυουσ + α', 'λυον',
      'λυοντ + ος', 'λυουσ + ης', 'λυοντ + ος',
      'λυοντ + ι', 'λυουσ + ῃ', 'λυοντ + ι',
      'λυοντ + α', 'λυουσ + αν', 'λυον',
      'λυοντ + ες', 'λυουσ + αι', 'λυοντ + α',
      'λυοντ + ων', 'λυουσ + ων', 'λυοντ + ων',
      'λυου + σι(ν)', 'λυουσ + αις', 'λυου + σι(ν)',
      'λυοντ + ας', 'λυουσ + ας', 'λυοντ + α',
    ],
    note: 'Follows a 3-1 mixed-3 noun pattern',
  },
  'p-mp-p': { 
    answers: [
      'λυομεν + ος', 'λυομεν + η', 'λυομεν + ον',
      'λυομεν + ου', 'λυομεν + ης', 'λυομεν + ου',
      'λυομεν + ῳ', 'λυομεν + ῃ', 'λυομεν + ῳ',
      'λυομεν + ον', 'λυομεν + ην', 'λυομεν + ον',
      'λυομεν + οι', 'λυομεν + αι', 'λυομεν + α',
      'λυομεν + ων', 'λυομεν + ων', 'λυομεν + ων',
      'λυομεν + οις', 'λυομεν + αις', 'λυομεν + οις',
      'λυομεν + ους', 'λυομεν + ας', 'λυομεν + α',
    ],
    note: 'Follows a 2-1 eta-2 noun pattern',
  },
  'aorist-a-p': { 
    answers: [
      'λυσας', 'λυσασ + α', 'λυσαν',
      'λυσαντ + ος', 'λυσασ + ης', 'λυσαντ + ος',
      'λυσαντ + ι', 'λυσασ + ῃ', 'λυσαντ + ι',
      'λυσαντ + α', 'λυσασ + αν', 'λυσαν',
      'λυσαντ + ες', 'λυσασ + αι', 'λυσαντ + α',
      'λυσαντ + ων', 'λυσασ + ων', 'λυσαντ + ων',
      'λυσα + σι(ν)', 'λυσασ + αις', 'λυσα + σι(ν)',
      'λυσαντ + ας', 'λυσασ + ας', 'λυσαντ + α',
    ],
    note: 'Follows a 3-1 mixed-3 noun pattern',
  },
  'aorist-m-p': { 
    answers: [
      'λυσαμεν + ος', 'λυσαμεν + η', 'λυσαμεν + ον',
      'λυσαμεν + ου', 'λυσαμεν + ης', 'λυσαμεν + ου',
      'λυσαμεν + ῳ', 'λυσαμεν + ῃ', 'λυσαμεν + ῳ',
      'λυσαμεν + ον', 'λυσαμεν + ην', 'λυσαμεν + ον',
      'λυσαμεν + οι', 'λυσαμεν + αι', 'λυσαμεν + α',
      'λυσαμεν + ων', 'λυσαμεν + ων', 'λυσαμεν + ων',
      'λυσαμεν + οις', 'λυσαμεν + αις', 'λυσαμεν + οις',
      'λυσαμεν + ους', 'λυσαμεν + ας', 'λυσαμεν + α',
    ],
    note: 'Follows a 2-1 eta-2 noun pattern',
  },
  'aorist-p-p': { 
    answers: [
      'λυθεις', 'λυθεισ + α', 'λυθεν',
      'λυθεντ + ος', 'λυθεισ + ης', 'λυθεντ + ος',
      'λυθεντ + ι', 'λυθεισ + ῃ', 'λυθεντ + ι',
      'λυθεντ + α', 'λυθεισ + αν', 'λυθεν',
      'λυθεντ + ες', 'λυθεισ + αι', 'λυθεντ + α',
      'λυθεντ + ων', 'λυθεισ + ων', 'λυθεντ + ων',
      'λυθει + σι(ν)', 'λυθεισ + αις', 'λυθει + σι(ν)',
      'λυθεντ + ας', 'λυθεισ + ας', 'λυθεντ + α',
    ],
    note: 'Follows a 3-1 mixed-3 noun pattern',
  },
  'pf-a-p': { 
    answers: [
      'λελυκως', 'λελυκυι + α', 'λελυκος',
      'λελυκοτ + ος', 'λελυκυι + ᾳς', 'λελυκοτ + ος',
      'λελυκοτ + ι', 'λελυκυι + ᾳ', 'λελυκοτ + ι',
      'λελυκοτ + α', 'λελυκυι + αν', 'λελυκο',
      'λελυκοτ + ες', 'λελυκυι + αι', 'λελυκοτ + α',
      'λελυκοτ + ων', 'λελυκυι + ων', 'λελυκοτ + ων',
      'λελυκο + σι(ν)', 'λελυκυι + αις', 'λελυκο + σι(ν)',
      'λελυκοτ + ας', 'λελυκυι + ας', 'λελυκοτ + α',
    ],
    note: 'Follows a 3-1 alpha-3 noun pattern',
  },
  'pf-mp-p': { 
    answers: [
      'λελυμεν + ος', 'λελυμεν + η', 'λελυμεν + ον',
      'λελυμεν + ου', 'λελυμεν + ης', 'λελυμεν + ου',
      'λελυμεν + ῳ', 'λελυμεν + ῃ', 'λελυμεν + ῳ',
      'λελυμεν + ον', 'λελυμεν + ην', 'λελυμεν + ον',
      'λελυμεν + οι', 'λελυμεν + αι', 'λελυμεν + α',
      'λελυμεν + ων', 'λελυμεν + ων', 'λελυμεν + ων',
      'λελυμεν + οις', 'λελυμεν + αις', 'λελυμεν + οις',
      'λελυμεν + ους', 'λελυμεν + ας', 'λελυμεν + α',
    ],
    note: 'Follows a 2-1 eta-2 noun pattern',
  },
};

const setupTable = (selection, tableWrapper) => {
  let counter = 0;
  tableWrapper.querySelectorAll('.answer').forEach((answer) => {
    answer.classList.add('hidden');
    answer.textContent = selection.answers[counter]; 
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
