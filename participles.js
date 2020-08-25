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
    note: 'Follows a 3-1 mixed-3 noun pattern',
  },
  'p-mp-p': { 
    answers: [
      'λυομεν + ος', 'λυομεν + η', 'λυομεν + ον',
      'λυομεν + οι', 'λυομεν + αι', 'λυομεν + α',
      'λυομεν + ου', 'λυομεν + ης', 'λυομεν + ου',
      'λυομεν + ων', 'λυομεν + ων', 'λυομεν + ων',
      'λυομεν + ῳ', 'λυομεν + ῃ', 'λυομεν + ῳ',
      'λυομεν + οις', 'λυομεν + αις', 'λυομεν + οις',
      'λυομεν + ον', 'λυομεν + ην', 'λυομεν + ον',
      'λυομεν + ους', 'λυομεν + ας', 'λυομεν + α',
    ],
    note: 'Follows a 2-1 eta-2 noun pattern',
  },
  'aorist-a-p': { 
    answers: [
      'λυσας', 'λυσασ + α', 'λυσαν',
      'λυσαντ + ες', 'λυσασ + αι', 'λυσαντ + α',
      'λυσαντ + ος', 'λυσασ + ης', 'λυσαντ + ος',
      'λυσαντ + ων', 'λυσασ + ων', 'λυσαντ + ων',
      'λυσαντ + ι', 'λυσασ + ῃ', 'λυσαντ + ι',
      'λυσα + σι(ν)', 'λυσασ + αις', 'λυσα + σι(ν)',
      'λυσαντ + α', 'λυσασ + αν', 'λυσαν',
      'λυσαντ + ας', 'λυσασ + ας', 'λυσαντ + α',
    ],
    note: 'Follows a 3-1 mixed-3 noun pattern',
  },
  'aorist-m-p': { 
    answers: [
      'λυσαμεν + ος', 'λυσαμεν + η', 'λυσαμεν + ον',
      'λυσαμεν + οι', 'λυσαμεν + αι', 'λυσαμεν + α',
      'λυσαμεν + ου', 'λυσαμεν + ης', 'λυσαμεν + ου',
      'λυσαμεν + ων', 'λυσαμεν + ων', 'λυσαμεν + ων',
      'λυσαμεν + ῳ', 'λυσαμεν + ῃ', 'λυσαμεν + ῳ',
      'λυσαμεν + οις', 'λυσαμεν + αις', 'λυσαμεν + οις',
      'λυσαμεν + ον', 'λυσαμεν + ην', 'λυσαμεν + ον',
      'λυσαμεν + ους', 'λυσαμεν + ας', 'λυσαμεν + α',
    ],
    note: 'Follows a 2-1 eta-2 noun pattern',
  },
  'aorist-p-p': { 
    answers: [
      'λυθεις', 'λυθεισ + α', 'λυθεν',
      'λυθεντ + ες', 'λυθεισ + αι', 'λυθεντ + α',
      'λυθεντ + ος', 'λυθεισ + ης', 'λυθεντ + ος',
      'λυθεντ + ων', 'λυθεισ + ων', 'λυθεντ + ων',
      'λυθεντ + ι', 'λυθεισ + ῃ', 'λυθεντ + ι',
      'λυθει + σι(ν)', 'λυθεισ + αις', 'λυθει + σι(ν)',
      'λυθεντ + α', 'λυθεισ + αν', 'λυθεν',
      'λυθεντ + ας', 'λυθεισ + ας', 'λυθεντ + α',
    ],
    note: 'Follows a 3-1 mixed-3 noun pattern',
  },
  'pf-a-p': { 
    answers: [
      'λελυκως', 'λελυκυι + α', 'λελυκος',
      'λελυκοτ + ες', 'λελυκυι + αι', 'λελυκοτ + α',
      'λελυκοτ + ος', 'λελυκυι + ᾳς', 'λελυκοτ + ος',
      'λελυκοτ + ων', 'λελυκυι + ων', 'λελυκοτ + ων',
      'λελυκοτ + ι', 'λελυκυι + ᾳ', 'λελυκοτ + ι',
      'λελυκο + σι(ν)', 'λελυκυι + αις', 'λελυκο + σι(ν)',
      'λελυκοτ + α', 'λελυκυι + αν', 'λελυκο',
      'λελυκοτ + ας', 'λελυκυι + ας', 'λελυκοτ + α',
    ],
    note: 'Follows a 3-1 alpha-3 noun pattern',
  },
  'pf-mp-p': { 
    answers: [
      'λελυμεν + ος', 'λελυμεν + η', 'λελυμεν + ον',
      'λελυμεν + οι', 'λελυμεν + αι', 'λελυμεν + α',
      'λελυμεν + ου', 'λελυμεν + ης', 'λελυμεν + ου',
      'λελυμεν + ων', 'λελυμεν + ων', 'λελυμεν + ων',
      'λελυμεν + ῳ', 'λελυμεν + ῃ', 'λελυμεν + ῳ',
      'λελυμεν + οις', 'λελυμεν + αις', 'λελυμεν + οις',
      'λελυμεν + ον', 'λελυμεν + ην', 'λελυμεν + ον',
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
