const master = document.querySelector('#masterView');
const evaluator = document.querySelector('#evaluatorView');
const roleToggle = document.querySelector('#roleToggle');
const evaluationDialog = document.querySelector('#evaluationDialog');
const importDialog = document.querySelector('#importDialog');
let evaluatorMode = false;
function setMode(isEvaluator){ evaluatorMode=isEvaluator; master.hidden=isEvaluator; evaluator.hidden=!isEvaluator; roleToggle.innerHTML=(isEvaluator?'Visão avaliador':'Visão mestre')+' <span>⌄</span>'; document.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('active',x.dataset.view===(isEvaluator?'evaluator':'master'))); }
roleToggle.addEventListener('click',()=>setMode(!evaluatorMode));
document.querySelectorAll('[data-view]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();setMode(a.dataset.view==='evaluator')}));
document.querySelectorAll('[data-open-evaluation]').forEach(b=>b.addEventListener('click',()=>evaluationDialog.showModal()));
document.querySelector('#openImport').addEventListener('click',()=>importDialog.showModal());
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelectorAll('.score').forEach(s=>s.addEventListener('change',()=>{let total=[...document.querySelectorAll('.score')].reduce((a,x)=>a+(+x.value||0),0);document.querySelector('#scoreTotal').textContent=total.toFixed(1).replace('.',',');}));
document.querySelector('#submitScore').addEventListener('click',()=>{alert('Protótipo: na versão operacional, a avaliação será validada, assinada e gravada no histórico.');evaluationDialog.close();});

