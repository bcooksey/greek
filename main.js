const VOCAB = [
  {chap: '2', greek: 'ἀγάπη', english: 'love', type: 'noun', article: 'ἡ'},
  {chap: '2', greek: 'ἀλήθεια', english: 'truth', type: 'noun', article: 'ἡ'},
  {chap: '2', greek: 'δικαιοσύνη', english: 'righteousness', type: 'noun', article: 'ἡ'},
  {chap: '2', greek: 'εἰρήνη', english: 'peace', type: 'noun', article: 'ἡ'},
  {chap: '2', greek: 'καρδία', english: 'heart', type: 'noun', article: 'ἡ'},
  {chap: '2', greek: 'κεφαλή', english: 'head', type: 'noun', article: 'ἡ'},
  {chap: '2', greek: 'σοφία', english: 'wisdom', type: 'noun', article: 'ἡ'},
  {chap: '2', greek: 'φωνή', english: 'voice, sound', type: 'noun', article: 'ἡ'},
  {chap: '2', greek: 'χαρά', english: 'joy', type: 'noun', article: 'ἡ'},
  {chap: '2', greek: 'ψυχή', english: 'soul; life', type: 'noun', article: 'ἡ'},
  {chap: '3', greek: 'ἄνθρωπος', english: 'man; mankind', type: 'noun', article: 'ὁ'},
  {chap: '3', greek: 'δαιμόνιον', english: 'demon', type: 'noun', article: 'τό'},
  {chap: '3', greek: 'δοῦλος', english: 'slave', type: 'noun', article: 'ὁ'},
  {chap: '3', greek: 'εὐαγγέλιον', english: 'good news, gospel', type: 'noun', article: 'τό'},
  {chap: '3', greek: 'θεός', english: 'God', type: 'noun', article: 'ὁ'},
  {chap: '3', greek: 'κύριος', english: 'lord; Lord', type: 'noun', article: 'ὁ'},
  {chap: '3', greek: 'λόγος', english: 'word; reason; account', type: 'noun', article: 'ὁ'},
  {chap: '3', greek: 'παιδίον', english: 'little child; dear child', type: 'noun', article: 'τό'},
  {chap: '3', greek: 'τέκνον', english: 'child', type: 'noun', article: 'τό'},
  {chap: '3', greek: 'υἱός', english: 'son', type: 'noun', article: 'ὁ'},
  {chap: '4', greek: 'ἀκούω', english: 'I hear; I listen', type: 'verb'},
  {chap: '4', greek: 'βάλλω', english: 'I throw; I put', type: 'verb'},
  {chap: '4', greek: 'βλέπω', english: 'I see', type: 'verb'},
  {chap: '4', greek: 'γίνομαι', english: 'I become; it happens (3rd person sing.)', type: 'verb'},
  {chap: '4', greek: 'δέχομαι', english: 'I receive', type: 'verb'},
  {chap: '4', greek: 'ἔρχομαι', english: 'I come, go', type: 'verb'},
  {chap: '4', greek: 'ἐσθίω', english: 'I eat', type: 'verb'},
  {chap: '4', greek: 'ἔχω', english: 'I have, possess; I hold', type: 'verb'},
  {chap: '4', greek: 'λύω', english: 'I loose, loosen, untie; I destroy', type: 'verb'},
  {chap: '4', greek: 'πορεύομαι', english: 'I go, travel', type: 'verb'},
  {chap: '5', greek: 'ἄγω', english: 'I lead, drive', type: 'verb'},
  {chap: '5', greek: 'βαπτίζω', english: 'I baptize', type: 'verb'},
  {chap: '5', greek: 'γράφω', english: 'I write', type: 'verb'},
  {chap: '5', greek: 'διδάσκω', english: 'I teach', type: 'verb'},
  {chap: '5', greek: 'θεραπεύω', english: 'I heal', type: 'verb'},
  {chap: '5', greek: 'λέγω', english: 'I say, speak', type: 'verb'},
  {chap: '5', greek: 'λογίζομαι', english: 'I consider, reckon', type: 'verb'},
  {chap: '5', greek: 'μένω', english: 'I remain', type: 'verb'},
  {chap: '5', greek: 'πιστεύω', english: 'I believe', type: 'verb'},
  {chap: '5', greek: 'σῴζω', english: 'I save; I heal', type: 'verb'},
  {chap: '6', greek: 'ἀγαπάω', english: 'I love', type: 'verb'},
  {chap: '6', greek: 'αἰτέω', english: 'I ask for, request', type: 'verb'},
  {chap: '6', greek: 'γεννάω', english: 'I sire, beget; I give birth to', type: 'verb'},
  {chap: '6', greek: 'ἐρωτάω', english: 'I ask, question', type: 'verb'},
  {chap: '6', greek: 'ζητέω', english: 'I seek; I try to', type: 'verb'},
  {chap: '6', greek: 'καλέω', english: 'I call; I name', type: 'verb'},
  {chap: '6', greek: 'λαλέω', english: 'I talk, speak', type: 'verb'},
  {chap: '6', greek: 'πληρόω', english: 'I fulfill, complete; I fill', type: 'verb'},
  {chap: '6', greek: 'ποιέω', english: 'I do, practice; I make', type: 'verb'},
  {chap: '6', greek: 'φοβέομαι', english: 'I fear, am afraid', type: 'verb'},
  {chap: '6', greek: 'οὐ, οὐκ, οὐχ', english: 'no; not', type: 'negative'},
  {chap: '6', greek: 'οὐχί', english: 'no! (emphatic form of οὐ)', type: 'negative'},
  {chap: '7', greek: 'ἀκολουθέω', english: 'I follow', type: 'verb'},
  {chap: '7', greek: 'ἅπτομαι', english: 'I touch', type: 'verb'},
  {chap: '7', greek: 'ἄρχομαι', english: 'I begin', type: 'verb'},
  {chap: '7', greek: 'διώκω', english: 'I pursue; I persecute', type: 'verb'},
  {chap: '7', greek: 'δοξάζω', english: 'I glorify', type: 'verb'},
  {chap: '7', greek: 'εὐαγγελίζομαι', english: 'I preach the gospel, announce good news', type: 'verb'},
  {chap: '7', greek: 'κηρύσσω', english: 'I announce, proclaim', type: 'verb'},
  {chap: '7', greek: 'κόπτω', english: 'I cut', type: 'verb'},
  {chap: '7', greek: 'πέμπω', english: 'I send', type: 'verb'},
  {chap: '7', greek: 'πράσσω', english: 'I do', type: 'verb'},
  {chap: '8', greek: 'ἀνοίγω', english: 'I open', type: 'verb', tense: '1st aorist'},
  {chap: '8', greek: 'ἀποκαλύπτω', english: 'I reveal, uncover', type: 'verb', tense: '1st aorist'},
  {chap: '8', greek: 'ἀπολύω', english: 'I release, send away; I destroy', type: 'verb', tense: '1st aorist'},
  {chap: '8', greek: 'ἀσπάζομαι', english: 'I greet', type: 'verb', tense: '1st aorist'},
  {chap: '8', greek: 'εἰσέρχομαι', english: 'I go into, enter', type: 'verb', tense: '1st aorist'},
  {chap: '8', greek: 'ἐκβάλλω', english: 'I throw out; I send away; I divorce', type: 'verb', tense: '1st aorist'},
  {chap: '8', greek: 'περιπατέω', english: 'I walk', type: 'verb', tense: '1st aorist'},
  {chap: '8', greek: 'περισσεύω', english: 'I increase; I provide in abundance', type: 'verb', tense: '1st aorist'},
  {chap: '8', greek: 'συνάγω', english: 'I gather together, assemble', type: 'verb', tense: '1st aorist'},
  {chap: '8', greek: 'ὑποτάσσω', english: 'I subject', type: 'verb', tense: '1st aorist'},
  {chap: '9', greek: 'ἁμαρτάνω', english: 'I sin; I err', type: 'verb'},
  {chap: '9', greek: 'ἀναβαίνω', english: 'I go up, ascend', type: 'verb'},
  {chap: '9', greek: 'ἀποθνῄσκω', english: 'I die', type: 'verb'},
  {chap: '9', greek: 'γινώσκω', english: 'I know; I understand, discern', type: 'verb'},
  {chap: '9', greek: 'ἐξέρχομαι', english: 'I go out, depart', type: 'verb'},
  {chap: '9', greek: 'εὑρίσκω', english: 'I find; I obtain', type: 'verb'},
  {chap: '9', greek: 'καταβαίνω', english: 'I go down, descend', type: 'verb'},
  {chap: '9', greek: 'λαμβάνω', english: 'I take, receive', type: 'verb'},
  {chap: '9', greek: 'πίνω', english: 'I drink', type: 'verb'},
  {chap: '9', greek: 'πίπτω', english: 'I fall', type: 'verb'},
  {chap: '9', greek: 'ἥμαρτον', english: 'I sinned; I erred (2nd Aorist of ἁμαρτάνω)', type: 'verb'},
  {chap: '9', greek: 'ἀνέβην', english: 'I went up, ascended (2nd Aorist of ἀναβαίνω)', type: 'verb'},
  {chap: '9', greek: 'ἀπέθανον', english: 'I died (2nd Aorist of ἀποθνῄσκω)', type: 'verb'},
  {chap: '9', greek: 'ἔγνων', english: 'I knew; I understood, discerned (2nd Aorist of γινώσκω)', type: 'verb'},
  {chap: '9', greek: 'ἐξῆλθον', english: 'I went out, departed (2nd Aorist of ἐξέρχομαι)', type: 'verb'},
  {chap: '9', greek: 'εὗρον', english: 'I found; I obtained (2nd Aorist of εὑρίσκω)', type: 'verb'},
  {chap: '9', greek: 'κατέβην', english: 'I went down, descend (2nd Aorist of καταβαίνω)', type: 'verb'},
  {chap: '9', greek: 'ἔλαβον', english: 'I took, received (2nd Aorist of λαμβάνω)', type: 'verb'},
  {chap: '9', greek: 'ἔπιον', english: 'I drank (2nd Aorist of πίνω)', type: 'verb'},
  {chap: '9', greek: 'ἔπεσον', english: 'I fell (2nd Aorist of πίπτω)', type: 'verb'},
  {chap: '9', greek: 'ἤγαγον', english: 'I led, drove (2nd Aorist of ἄγω)', type: 'verb'},
  {chap: '9', greek: 'ἔβαλον', english: 'I threw; I put (2nd Aorist of βάλλω)', type: 'verb'},
  {chap: '9', greek: 'ἐγενόμην', english: 'I became; it happened (3rd person sing.) (2nd Aorist of γίνομαι)', type: 'verb'},
  {chap: '9', greek: 'ἦλθον', english: 'I came, went (2nd Aorist of ἔρχομαι)', type: 'verb'},
  {chap: '9', greek: 'ἔφαγον', english: 'I ate (2nd Aorist of ἐσθίω)', type: 'verb'},
  {chap: '9', greek: 'ἔσχον', english: 'I had, possessed; I held (2nd Aorist of ἔχω)', type: 'verb'},
  {chap: '9', greek: 'εἶπον', english: 'I said, spoke (2nd Aorist of λέγω)', type: 'verb'},
  {chap: '10', greek: 'εἰμί', english: 'I am; I exist', type: 'verb'},
  {chap: '10', greek: 'ἀγαθός, -ή, -όν', english: 'good', type: 'adjective'},
  {chap: '10', greek: 'ἀγαπητός, -ή, -όν', english: 'beloved, dear', type: 'adjective'},
  {chap: '10', greek: 'ἅγιος, -α, -ον', english: 'holy; saints (pl. substantive)', type: 'adjective'},
  {chap: '10', greek: 'δίκαιος, -α, -ον', english: 'righteous, just', type: 'adjective'},
  {chap: '10', greek: 'ἕτερος, -α, -ον', english: 'other, another, different', type: 'adjective'},
  {chap: '10', greek: 'κακός, -ή, -όν', english: 'bad, evil', type: 'adjective'},
  {chap: '10', greek: 'καλός, -ή, -όν', english: 'good, excellent; beautiful, handsome', type: 'adjective'},
  {chap: '10', greek: 'νεκρός, -ά, -όν', english: 'dead', type: 'adjective'},
  {chap: '10', greek: 'πιστός, -ή, -όν', english: 'faithful, believing', type: 'adjective'},
  {chap: '10', greek: 'πονηρός, -ά, -όν', english: 'evil, wicked', type: 'adjective'},
];

let currentGame;

function Game(vocab) {
  this.index = 0;
  this.vocab = vocab;

  this.nextWord = () => { this.index += 1; };
  this.isMoreWords = () => { return this.index < this.vocab.length - 1 };
}

const randomizeList = (list) => {
  for (let i = list.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
};

const initializeGame = (vocab) => {
  randomizeList(vocab);
  currentGame = new Game(vocab);
};

const nextWord = () => {
  currentGame.nextWord()
};

const setupCard = (question, answer) => {
  question.textContent = currentGame.vocab[currentGame.index].greek;
  answer.style.display = 'none';
  question.style.display = 'inline';
  answer.textContent = currentGame.vocab[currentGame.index].english;
};

window.onload = () => {
  const question = document.querySelector('#card .question');
  const answer = document.querySelector('#card .answer');

  const revealBttn = document.getElementById('reveal');
  revealBttn.onclick = () => {
    if (question.style.display == 'none') {
      question.style.display = 'inline';
      answer.style.display = 'none';
    } else {
      question.style.display = 'none';
      answer.style.display = 'inline';
    }
  };

  const nextBttn = document.getElementById('next');
  nextBttn.onclick = (event) => {
    nextWord();
    setupCard(question, answer);
    nextBttn.disabled = !currentGame.isMoreWords();
  };

  const startBttn = document.getElementById('start');
  startBttn.onclick = (event) => {
    const vocabSelection = document.getElementById('chapterSelect').value;
    const includePrior = document.getElementById('includePrior').checked;
    const availableVocab = vocabSelection === '0' ? VOCAB : VOCAB.filter((word) => word.chap === vocabSelection || (includePrior && parseInt(word.chap) < parseInt(vocabSelection)));

    initializeGame(availableVocab);
    revealBttn.disabled = false;
    nextBttn.disabled = false;
    setupCard(question, answer);
  };

};
