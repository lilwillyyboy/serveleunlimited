
(function() {
"use strict";

var RAW = [
[1,"Carlos Alcaraz","Spain",22,17,"Right",185],
[2,"Jannik Sinner","Italy",24,26,"Right",188],
[3,"Alexander Zverev","Germany",28,37,"Right",198],
[4,"Novak Djokovic","Serbia",38,99,"Right",188],
[5,"Lorenzo Musetti","Italy",24,4,"Right",191],
[6,"Alex De Minaur","Australia",27,12,"Right",183],
[7,"Felix Auger-Aliassime","Canada",25,7,"Right",193],
[8,"Taylor Fritz","United States",28,9,"Right",196],
[9,"Ben Shelton","United States",23,3,"Left",193],
[10,"Daniil Medvedev","Russia",30,22,"Right",198],
[11,"Alexander Bublik","Kazakhstan",28,7,"Right",196],
[12,"Casper Ruud","Norway",27,9,"Right",183],
[13,"Flavio Cobolli","Italy",23,1,"Right",185],
[14,"Jiri Lehecka","Czech Republic",24,1,"Right",193],
[15,"Karen Khachanov","Russia",29,9,"Right",198],
[16,"Andrey Rublev","Russia",28,20,"Right",188],
[17,"Alejandro Davidovich Fokina","Spain",26,2,"Right",188],
[18,"Frances Tiafoe","United States",28,3,"Right",185],
[19,"Luciano Darderi","Italy",24,2,"Right",185],
[20,"Francisco Cerundolo","Argentina",27,3,"Right",185],
[21,"Tommy Paul","United States",28,5,"Right",185],
[22,"Learner Tien","United States",20,0,"Right",183],
[23,"Valentin Vacherot","Monaco",27,1,"Right",183],
[24,"Cameron Norrie","Great Britain",30,9,"Left",185],
[25,"Jack Draper","Great Britain",24,3,"Left",190],
[26,"Jakub Mensik","Czech Republic",20,3,"Right",193],
[27,"Arthur Rinderknech","France",30,1,"Right",196],
[28,"Arthur Fils","France",21,3,"Right",185],
[29,"Holger Rune","Denmark",22,6,"Right",188],
[30,"Tallon Griekspoor","Netherlands",29,3,"Right",193],
[31,"Tomas Martin Etcheverry","Argentina",26,2,"Right",188],
[32,"Corentin Moutet","France",26,0,"Left",175],
[33,"Brandon Nakashima","United States",24,1,"Right",185],
[34,"Ugo Humbert","France",27,6,"Left",183],
[35,"Alex Michelsen","United States",21,0,"Right",193],
[36,"Gabriel Diallo","Canada",24,1,"Right",201],
[37,"Jaume Munar","Spain",28,2,"Right",183],
[38,"Denis Shapovalov","Canada",26,4,"Left",185],
[39,"Alejandro Tabilo","Chile",28,4,"Right",188],
[40,"Joao Fonseca","Brazil",19,1,"Right",188],
[41,"Jenson Brooksby","United States",25,1,"Right",185],
[42,"Sebastian Korda","United States",25,2,"Right",198],
[43,"Adrian Mannarino","France",37,3,"Left",178],
[44,"Terence Atmane","France",24,0,"Right",193],
[45,"Alexei Popyrin","Australia",26,2,"Right",196],
[46,"Zizou Bergs","Belgium",26,0,"Right",185],
[47,"Fabian Marozsan","Hungary",26,1,"Right",185],
[48,"Nuno Borges","Portugal",29,2,"Right",191],
[49,"Stefanos Tsitsipas","Greece",27,12,"Right",193],
[50,"Sebastian Baez","Argentina",25,4,"Right",178],
[51,"Marton Fucsovics","Hungary",34,1,"Right",188],
[52,"Daniel Altmaier","Germany",27,0,"Right",196],
[53,"Kamil Majchrzak","Poland",30,0,"Right",183],
[54,"Marin Cilic","Croatia",37,20,"Right",198],
[55,"Tomas Machac","Czech Republic",25,2,"Right",188],
[56,"Ethan Quinn","United States",22,0,"Right",188],
[57,"Giovanni Mpetshi Perricard","France",22,1,"Right",204],
[58,"Miomir Kecmanovic","Serbia",26,1,"Right",188],
[59,"Ignacio Buse","Peru",22,0,"Right",185],
[60,"Mariano Navone","Argentina",25,2,"Right",185],
[61,"Yannick Hanfmann","Germany",34,0,"Right",196],
[62,"Botic Van De Zandschulp","Netherlands",30,1,"Right",196],
[63,"Lorenzo Sonego","Italy",30,5,"Right",191],
[64,"Reilly Opelka","United States",28,5,"Right",211],
[65,"Raphael Collignon","Belgium",24,0,"Right",185],
[66,"Marcos Giron","United States",32,1,"Right",185],
[67,"Camilo Ugo Carabelli","Argentina",26,1,"Right",183],
[68,"Arthur Cazaux","France",23,1,"Right",191],
[69,"Juan Manuel Cerundolo","Argentina",24,3,"Right",185],
[70,"Vit Kopriva","Czech Republic",28,0,"Right",188],
[71,"Valentin Royer","France",24,0,"Right",178],
[72,"Hubert Hurkacz","Poland",29,10,"Right",196],
[73,"Mattia Bellucci","Italy",24,0,"Left",191],
[74,"Damir Dzumhur","Bosnia",33,2,"Right",180],
[75,"Jan-Lennard Struff","Germany",35,2,"Right",196],
[76,"Alexander Shevchenko","Kazakhstan",25,0,"Right",193],
[77,"Roman Andres Burruchaga","Argentina",22,0,"Right",188],
[78,"Sebastian Ofner","Austria",28,0,"Right",193],
[79,"Eliot Spizzirri","United States",24,0,"Right",188],
[80,"Roberto Bautista Agut","Spain",37,11,"Right",183],
[81,"Hamad Medjedovic","Serbia",22,0,"Right",193],
[82,"Zachary Svajda","United States",22,0,"Right",188],
[83,"Thiago Agustin Tirante","Argentina",24,0,"Right",191],
[84,"Aleksandar Vukic","Australia",29,0,"Right",185],
[85,"Aleksandar Kovacevic","United States",27,0,"Right",190],
[86,"Filip Misolic","Austria",24,0,"Right",185],
[87,"Francisco Comesana","Argentina",25,1,"Right",190],
[88,"Pablo Carreno Busta","Spain",35,11,"Right",188],
[89,"Rafael Jodar","Spain",19,0,"Right",183],
[90,"Quentin Halys","France",29,0,"Right",188],
[91,"Matteo Berrettini","Italy",29,12,"Right",196],
[92,"Alexander Blockx","Belgium",21,0,"Right",196],
[93,"Grigor Dimitrov","Bulgaria",34,9,"Right",191],
[94,"Alexandre Muller","France",29,1,"Right",193],
[95,"James Duckworth","Australia",34,0,"Right",183],
[96,"Patrick Kypson","United States",24,0,"Right",188],
[97,"Jacob Fearnley","Great Britain",24,0,"Right",188],
[98,"Stan Wawrinka","Switzerland",41,16,"Right",183],
[99,"Jesper De Jong","Netherlands",25,0,"Right",185],
[100,"Cristian Garin","Chile",29,7,"Right",185]
];

var ALL = RAW.map(function(r) {
  return {rank:r[0],name:r[1],nat:r[2],age:r[3],titles:r[4],hand:r[5],height:r[6]};
});

var diffN = 25;
var POOL = ALL.slice(0, 25);
var mystery = null;
var guesses = [];
var egrid = [];
var won = false;
var elapsed = 0;
var t0 = null;
var iv = null;
var aidx = -1;
var me = null;
var ttm = null;

function g(id) { return document.getElementById(id); }

function fmt(s) {
  return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
}

function cmToFt(cm) {
  var totalIn = Math.round(cm / 2.54);
  var ft = Math.floor(totalIn / 12);
  var inc = totalIn % 12;
  return ft + "\'" + inc + "\"";
}

function toast(msg) {
  var t = g('toast');
  t.textContent = msg;
  t.classList.add('on');
  clearTimeout(ttm);
  ttm = setTimeout(function() { t.classList.remove('on'); }, 2600);
}

function openMo(id) { g(id).classList.add('open'); }
function closeMo(id) { g(id).classList.remove('open'); }

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function updateHdr(s) {
  g('streak').textContent = s.streak;
  g('solved').textContent = s.solved;
}

// --- Local storage ---
function emptyS() {
  return {solved:0,guesses:0,fastest:null,totalTime:0,streak:0,best:0,times:[],lastStreakDate:null};
}
function ld() {
  try {
    var s = JSON.parse(localStorage.getItem('sv3'));
    if (!s) return emptyS();
    if (!('lastStreakDate' in s)) s.lastStreakDate = null;
    return s;
  } catch(e) { return emptyS(); }
}
function sv(s) { localStorage.setItem('sv3', JSON.stringify(s)); }

function lget(k) {
  try { var v = localStorage.getItem('sv_' + k); return v ? JSON.parse(v) : null; } catch(e) { return null; }
}
function lset(k, v) {
  try { localStorage.setItem('sv_' + k, JSON.stringify(v)); } catch(e) {}
}

function ptDate(ts) {
  return new Date(ts || Date.now()).toLocaleDateString('en-CA', {timeZone:'America/Los_Angeles'});
}
function daysBetween(d1, d2) {
  if (!d1 || !d2) return Infinity;
  return Math.round((new Date(d1) - new Date(d2)) / 86400000);
}

// --- Difficulty ---
function setDiff(n) {
  if (n === diffN) return;
  if (!won && guesses.length > 0) {
    if (!confirm('Changing difficulty starts a new puzzle. Continue?')) return;
  }
  diffN = n;
  POOL = ALL.slice(0, n);
  var btns = document.querySelectorAll('.diff-btn');
  for (var i = 0; i < btns.length; i++) btns[i].classList.remove('on');
  g('d' + n).classList.add('on');
  g('rnote').textContent = 'Top ' + n + ' · Rankings 1 Apr 2026';
  lset('diff', n);
  newGame();
}

// --- Timer ---
function startT() {
  clearInterval(iv);
  t0 = Date.now();
  elapsed = 0;
  iv = setInterval(function() {
    elapsed = Math.floor((Date.now() - t0) / 1000);
    var s = fmt(elapsed);
    g('tdisp').textContent = s;
    g('ft').textContent = s;
  }, 1000);
}
function stopT() {
  clearInterval(iv);
  iv = null;
  elapsed = Math.floor((Date.now() - t0) / 1000);
  return elapsed;
}

// --- Game ---
function newGame() {
  mystery = POOL[Math.floor(Math.random() * POOL.length)];
  guesses = [];
  egrid = [];
  won = false;
  elapsed = 0;
  startT();
  render();
  var inp = g('inp');
  inp.value = '';
  inp.disabled = false;
  g('gcount').textContent = '0';
  g('fg').textContent = '0';
  g('tdisp').textContent = '0:00';
  g('ft').textContent = '0:00';
  g('succ').classList.remove('on');
  g('reveal').style.display = 'none';
  g('acdrop').classList.remove('open');
  aidx = -1;
  g('scrollArea').scrollTop = 0;
}

function giveUp() {
  if (won) return;
  if (!mystery) return;
  clearInterval(iv);
  iv = null;
  g('inp').disabled = true;
  g('revealName').textContent = mystery.name;
  g('revealDetail').textContent = '#' + mystery.rank + ' · ' + mystery.nat + ' · ' + cmToFt(mystery.height);
  g('reveal').style.display = 'block';
  g('succ').classList.remove('on');
  g('scrollArea').scrollTop = 0;
  won = true;
}

function evalP(p) {
  var m = mystery;
  var cells = [];

  cells.push({lbl:'Country', type: p.nat === m.nat ? 'ok' : 'no', val: p.nat, arrow: ''});

  var rd = Math.abs(p.rank - m.rank);
  var cr = diffN <= 25 ? 3 : diffN <= 50 ? 5 : diffN <= 75 ? 8 : 10;
  cells.push({lbl:'Ranking', type: p.rank === m.rank ? 'ok' : rd <= cr ? 'cl' : 'no',
    val: '#' + p.rank, arrow: p.rank === m.rank ? '' : p.rank > m.rank ? 'up' : 'dn'});

  var ad = Math.abs(p.age - m.age);
  cells.push({lbl:'Age', type: p.age === m.age ? 'ok' : ad <= 2 ? 'cl' : 'no',
    val: '' + p.age, arrow: p.age === m.age ? '' : p.age > m.age ? 'dn' : 'up'});

  var td = Math.abs(p.titles - m.titles);
  cells.push({lbl:'Titles', type: p.titles === m.titles ? 'ok' : td <= 3 ? 'cl' : 'no',
    val: '' + p.titles, arrow: p.titles === m.titles ? '' : p.titles > m.titles ? 'dn' : 'up'});

  cells.push({lbl:'Hand', type: p.hand === m.hand ? 'ok' : 'no', val: p.hand, arrow: ''});

  var hd = Math.abs(p.height - m.height);
  cells.push({lbl:'Height', type: p.height === m.height ? 'ok' : hd <= 3 ? 'cl' : 'no',
    val: cmToFt(p.height), arrow: p.height === m.height ? '' : p.height > m.height ? 'dn' : 'up'});

  return cells;
}

function arrowChar(a) {
  if (a === 'up') return '↑';
  if (a === 'dn') return '↓';
  return '';
}

function guess(name) {
  if (won) return;
  var p = null;
  for (var i = 0; i < POOL.length; i++) {
    if (POOL[i].name.toLowerCase() === name.toLowerCase()) { p = POOL[i]; break; }
  }
  if (!p) { toast('Not in Top ' + diffN + ' pool'); return; }
  for (var j = 0; j < guesses.length; j++) {
    if (guesses[j].p.name === p.name) { toast('Already guessed!'); return; }
  }
  var cells = evalP(p);
  guesses.push({p: p, cells: cells});
  var row = '';
  for (var k = 0; k < cells.length; k++) {
    row += cells[k].type === 'ok' ? '🟩' : cells[k].type === 'cl' ? '🟨' : '⬜';
  }
  egrid.push(row);
  g('gcount').textContent = guesses.length;
  g('fg').textContent = guesses.length;
  render();
  if (p.name === mystery.name) onWin();
}

function onWin() {
  won = true;
  var e = stopT();
  g('inp').disabled = true;
  var s = ld();
  var today = ptDate();
  s.solved++;
  s.guesses += guesses.length;
  s.totalTime += e;
  if (s.fastest === null || e < s.fastest) s.fastest = e;
  s.times.push(e);
  var gap = daysBetween(today, s.lastStreakDate);
  if (!s.lastStreakDate || gap >= 2) s.streak = 1;
  else if (gap === 1) s.streak++;
  s.lastStreakDate = today;
  if (s.streak > s.best) s.best = s.streak;
  sv(s);
  updateHdr(s);
  syncAccount();
  var msgs = ['Ace!','Perfect!','Brilliant!','Excellent!','Well done!','Got it!'];
  g('se').textContent = guesses.length === 1 ? '🏆' : guesses.length <= 3 ? '🎾' : '✅';
  g('stitle').textContent = msgs[Math.min(guesses.length - 1, msgs.length - 1)];
  g('ssub').textContent = 'You found ' + mystery.name + ' in ' + guesses.length + (guesses.length === 1 ? ' guess!' : ' guesses!');
  g('sg').textContent = guesses.length;
  g('stm').textContent = fmt(e);
  g('ssk').textContent = s.streak;
  g('succ').classList.add('on');
  g('scrollArea').scrollTop = 0;
}

function render() {
  var c = g('rows');
  if (!guesses.length) {
    c.innerHTML = '<div class="empty"><div class="empty-i">🎾</div><div class="empty-t">Guess an ATP Top ' + diffN + ' player</div><div class="empty-s">Type a name above</div></div>';
    return;
  }
  c.innerHTML = '';
  var rev = guesses.slice().reverse();
  for (var i = 0; i < rev.length; i++) {
    var p = rev[i].p;
    var cells = rev[i].cells;
    var card = document.createElement('div');
    card.className = 'guess-card';
    var html = '<div class="card-name"><span class="card-name-text">' + p.name + '</span><span class="card-rank-badge">#' + p.rank + '</span></div>';
    html += '<div class="card-attrs">';
    for (var k = 0; k < cells.length; k++) {
      var cell = cells[k];
      html += '<div class="attr-tile ' + cell.type + '">';
      html += '<div class="attr-label">' + cell.lbl + '</div>';
      html += '<div class="attr-val">' + cell.val + '</div>';
      if (cell.arrow) html += '<div class="attr-arrow">' + arrowChar(cell.arrow) + '</div>';
      html += '</div>';
    }
    html += '</div>';
    card.innerHTML = html;
    c.appendChild(card);
  }
}

// --- Autocomplete ---
function updateAC(q) {
  var ac = g('acdrop');
  if (!q.trim()) { ac.classList.remove('open'); aidx = -1; return; }
  var ql = q.toLowerCase();
  var hits = [];
  for (var i = 0; i < POOL.length; i++) {
    if (POOL[i].name.toLowerCase().indexOf(ql) >= 0) hits.push(POOL[i]);
    if (hits.length >= 7) break;
  }
  if (!hits.length) { ac.classList.remove('open'); return; }
  var html = '';
  for (var j = 0; j < hits.length; j++) {
    var p = hits[j];
    var ni = p.name.toLowerCase().indexOf(ql);
    var hn = p.name.slice(0, ni) + '<strong>' + p.name.slice(ni, ni + ql.length) + '</strong>' + p.name.slice(ni + ql.length);
    html += '<div class="aci" data-name="' + escHtml(p.name) + '">';
    html += '<span class="acr">#' + p.rank + '</span>';
    html += '<span class="acn">' + hn + '</span>';
    html += '<span class="acp">' + p.nat + '</span>';
    html += '</div>';
  }
  ac.innerHTML = html;
  ac.classList.add('open');
  aidx = -1;
  var items = ac.querySelectorAll('.aci');
  for (var k = 0; k < items.length; k++) {
    (function(item) {
      item.addEventListener('mousedown', function(e) { e.preventDefault(); pick(item.dataset.name); });
      item.addEventListener('touchend', function(e) { e.preventDefault(); pick(item.dataset.name); });
    })(items[k]);
  }
}

function pick(name) {
  g('inp').value = '';
  g('acdrop').classList.remove('open');
  aidx = -1;
  g('inp').blur();
  guess(name);
}

// --- Stats ---
function openStats() {
  var s = ld();
  var avg = s.solved > 0 ? (s.guesses / s.solved).toFixed(1) : '-';
  var avgt = s.times.length > 0 ? fmt(Math.round(s.times.reduce(function(a,b){return a+b;},0) / s.times.length)) : '-';
  var rows = [
    [s.solved, 'Puzzles Solved'],
    [avg, 'Avg Guesses'],
    [s.fastest !== null ? fmt(s.fastest) : '-', 'Fastest Solve'],
    [avgt, 'Avg Time'],
    [s.streak, 'Streak'],
    [s.best, 'Best Streak'],
    [s.guesses, 'Total Guesses'],
    [fmt(s.totalTime), 'Time Played']
  ];
  var html = '';
  for (var i = 0; i < rows.length; i++) {
    html += '<div class="sc"><div class="scv">' + rows[i][0] + '</div><div class="scl">' + rows[i][1] + '</div></div>';
  }
  g('sgrid').innerHTML = html;
  openMo('statsMo');
}

function doShare() {
  var lines = ['Servele - Top ' + diffN, guesses.length + ' guess' + (guesses.length !== 1 ? 'es' : '') + ' / ' + fmt(elapsed), '', egrid.join('\n'), '', 'serveleunlimited.com']; var txt = lines.join('\n');
  if (navigator.clipboard) { navigator.clipboard.writeText(txt).then(function() { toast('Copied!'); }); }
  else { toast('Copy not supported'); }
}

// --- Auth ---
function hp(p) {
  var h = 0;
  for (var i = 0; i < p.length; i++) { h = ((h << 5) - h) + p.charCodeAt(i); h |= 0; }
  return 'h' + Math.abs(h).toString(36);
}

function showE(el, msg) { el.textContent = msg; el.classList.add('on'); }

function switchTab(t) {
  g('formLogin').style.display = t === 'login' ? 'flex' : 'none';
  g('formReg').style.display = t === 'register' ? 'flex' : 'none';
  g('tabLogin').classList.toggle('on', t === 'login');
  g('tabReg').classList.toggle('on', t === 'register');
  ['li_err','re_err','re_ok'].forEach(function(id) { g(id).classList.remove('on'); });
}

function signIn(ud) {
  me = {username: ud.username, email: ud.email};
  localStorage.setItem('sv_sess', JSON.stringify(me));
  g('acctBtn').classList.remove('guest');
  g('acctAvatar').textContent = ud.username[0].toUpperCase();
  g('acctLabel').textContent = ud.username;
  var local = ld();
  var cloud = ud.stats || emptyS();
  var merged = {
    solved: Math.max(local.solved, cloud.solved),
    guesses: local.guesses > 0 ? local.guesses : cloud.guesses,
    fastest: local.fastest !== null && cloud.fastest !== null ? Math.min(local.fastest, cloud.fastest) : (local.fastest !== null ? local.fastest : cloud.fastest),
    totalTime: Math.max(local.totalTime, cloud.totalTime),
    streak: Math.max(local.streak, cloud.streak),
    best: Math.max(local.best, cloud.best),
    times: cloud.times.length >= local.times.length ? cloud.times : local.times,
    lastStreakDate: local.lastStreakDate || cloud.lastStreakDate
  };
  sv(merged);
  updateHdr(merged);
}

function syncAccount() {
  if (!me) return;
  var ud = lget('u:' + me.username.toLowerCase());
  if (!ud) return;
  ud.stats = ld();
  ud.lastSync = Date.now();
  lset('u:' + me.username.toLowerCase(), ud);
}

function openAuth() {
  if (me) {
    g('authForms').style.display = 'none';
    g('authIn').style.display = 'block';
    g('profAv').textContent = me.username[0].toUpperCase();
    g('profName').textContent = me.username;
    g('profEmail').textContent = me.email;
    var s = ld();
    var avg = s.solved > 0 ? (s.guesses / s.solved).toFixed(1) : '-';
    var items = [[s.solved,'Solved'],[avg,'Avg Guesses'],[s.streak,'Streak'],[s.fastest !== null ? fmt(s.fastest) : '-','Fastest']];
    var html = '';
    for (var i = 0; i < items.length; i++) {
      html += '<div class="sc"><div class="scv">' + items[i][0] + '</div><div class="scl">' + items[i][1] + '</div></div>';
    }
    g('profStats').innerHTML = html;
  } else {
    g('authForms').style.display = 'block';
    g('authIn').style.display = 'none';
    switchTab('login');
  }
  openMo('authMo');
}

function doLogin() {
  var email = g('li_email').value.trim().toLowerCase();
  var pass = g('li_pass').value;
  var err = g('li_err');
  err.classList.remove('on');
  if (!email || !pass) { showE(err, 'Enter your email and password.'); return; }
  var idx = lget('email:' + email);
  if (!idx) { showE(err, 'No account found with that email.'); return; }
  var ud = lget('u:' + idx.username.toLowerCase());
  if (!ud || ud.passHash !== hp(pass)) { showE(err, 'Incorrect password.'); return; }
  signIn(ud);
  closeMo('authMo');
  toast('Welcome back, ' + ud.username + '!');
}

function doRegister() {
  var email = g('re_email').value.trim().toLowerCase();
  var user = g('re_user').value.trim();
  var pass = g('re_pass').value;
  var pass2 = g('re_pass2').value;
  var err = g('re_err');
  var ok = g('re_ok');
  err.classList.remove('on');
  ok.classList.remove('on');
  if (!email || email.indexOf('@') < 0) { showE(err, 'Enter a valid email.'); return; }
  if (user.length < 3 || user.length > 20) { showE(err, 'Username must be 3-20 characters.'); return; }
  if (!/^[a-zA-Z0-9_]+$/.test(user)) { showE(err, 'Letters, numbers and underscores only.'); return; }
  if (pass.length < 6) { showE(err, 'Password must be at least 6 characters.'); return; }
  if (pass !== pass2) { showE(err, 'Passwords do not match.'); return; }
  if (lget('u:' + user.toLowerCase())) { showE(err, 'Username already taken.'); return; }
  if (lget('email:' + email)) { showE(err, 'Email already registered.'); return; }
  var ud = {username: user, email: email, passHash: hp(pass), createdAt: Date.now(), stats: emptyS()};
  lset('u:' + user.toLowerCase(), ud);
  lset('email:' + email, {username: user});
  ok.textContent = 'Account created!';
  ok.classList.add('on');
  setTimeout(function() { signIn(ud); closeMo('authMo'); toast('Welcome, ' + user + '!'); }, 700);
}

function doLogout() {
  syncAccount();
  me = null;
  localStorage.removeItem('sv_sess');
  g('acctBtn').classList.add('guest');
  g('acctAvatar').textContent = '?';
  g('acctLabel').textContent = 'Sign In';
  closeMo('authMo');
  toast('Signed out.');
}

function toggleDark() {
  var el = document.documentElement;
  if (el.hasAttribute('data-dark')) {
    el.removeAttribute('data-dark');
    g('darkBtn').textContent = '🌙';
    localStorage.setItem('sv_dark', '0');
  } else {
    el.setAttribute('data-dark', '');
    g('darkBtn').textContent = '☀️';
    localStorage.setItem('sv_dark', '1');
  }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('sv_dark') === '1') {
    document.documentElement.setAttribute('data-dark', '');
    g('darkBtn').textContent = '☀️';
  }

  var sd = lget('diff');
  if (sd && [25,50,75,100].indexOf(sd) >= 0) {
    diffN = sd;
    POOL = ALL.slice(0, sd);
    var btns = document.querySelectorAll('.diff-btn');
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove('on');
    g('d' + sd).classList.add('on');
    g('rnote').textContent = 'Top ' + sd + ' · Rankings 1 Apr 2026';
  }

  try {
    var sess = JSON.parse(localStorage.getItem('sv_sess'));
    if (sess && sess.username) {
      var ud = lget('u:' + sess.username.toLowerCase());
      if (ud && ud.passHash) signIn(ud);
      else localStorage.removeItem('sv_sess');
    }
  } catch(e) {}

  var s = ld();
  if (s.streak && s.lastStreakDate && daysBetween(ptDate(), s.lastStreakDate) > 1) {
    s.streak = 0; sv(s);
  }
  updateHdr(ld());

  g('d25').addEventListener('click', function() { setDiff(25); });
  g('d50').addEventListener('click', function() { setDiff(50); });
  g('d75').addEventListener('click', function() { setDiff(75); });
  g('d100').addEventListener('click', function() { setDiff(100); });

  g('darkBtn').addEventListener('click', toggleDark);
  g('aboutBtn').addEventListener('click', function() { openMo('aboutMo'); });
  g('aboutClose').addEventListener('click', function() { closeMo('aboutMo'); });
  g('statsBtn').addEventListener('click', openStats);
  g('acctBtn').addEventListener('click', openAuth);
  g('authClose').addEventListener('click', function() { closeMo('authMo'); });
  g('tabLogin').addEventListener('click', function() { switchTab('login'); });
  g('tabReg').addEventListener('click', function() { switchTab('register'); });
  g('li_btn').addEventListener('click', doLogin);
  g('re_btn').addEventListener('click', doRegister);
  g('logoutBtn').addEventListener('click', doLogout);
  g('li_pass').addEventListener('keydown', function(e) { if (e.key === 'Enter') doLogin(); });
  g('re_pass2').addEventListener('keydown', function(e) { if (e.key === 'Enter') doRegister(); });
  g('statsClose').addEventListener('click', function() { closeMo('statsMo'); });
  g('resetSt').addEventListener('click', function() {
    if (confirm('Reset all stats?')) { sv(emptyS()); syncAccount(); openStats(); updateHdr(ld()); }
  });
  ['authMo','statsMo','aboutMo'].forEach(function(id) {
    g(id).addEventListener('click', function(e) { if (e.target === g(id)) closeMo(id); });
  });
  g('newBtn').addEventListener('click', function() {
    if (!won && guesses.length > 0) { if (!confirm('Abandon this puzzle?')) return; }
    newGame();
  });
  g('nextBtn').addEventListener('click', newGame);
  g('giveUpBtn').addEventListener('click', giveUp);
  g('revealNextBtn').addEventListener('click', newGame);
  g('shareBtn').addEventListener('click', doShare);

  var inp = g('inp');
  inp.addEventListener('input', function() { updateAC(inp.value); });
  inp.addEventListener('keydown', function(e) {
    var items = g('acdrop').querySelectorAll('.aci');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      aidx = Math.min(aidx + 1, items.length - 1);
      for (var i = 0; i < items.length; i++) items[i].classList.toggle('foc', i === aidx);
      if (items[aidx]) inp.value = items[aidx].dataset.name;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      aidx = Math.max(aidx - 1, 0);
      for (var i = 0; i < items.length; i++) items[i].classList.toggle('foc', i === aidx);
      if (items[aidx]) inp.value = items[aidx].dataset.name;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (aidx >= 0 && items[aidx]) {
        pick(items[aidx].dataset.name);
      } else {
        var q = inp.value.trim().toLowerCase();
        var found = null;
        for (var j = 0; j < POOL.length; j++) {
          if (POOL[j].name.toLowerCase() === q) { found = POOL[j]; break; }
        }
        if (found) pick(found.name);
        else if (items.length > 0) pick(items[0].dataset.name);
      }
    } else if (e.key === 'Escape') {
      g('acdrop').classList.remove('open');
      aidx = -1;
    }
  });
  inp.addEventListener('focus', function() { if (inp.value.trim()) updateAC(inp.value); });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-area')) {
      g('acdrop').classList.remove('open');
      aidx = -1;
    }
  });

  newGame();
});

})();
