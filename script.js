const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.right='6vw';nav.style.top='65px';nav.style.background='#fff';nav.style.padding='18px';nav.style.flexDirection='column';nav.style.boxShadow='0 15px 40px #0002'});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<851)nav.style.display='none'}));
document.querySelector('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();document.querySelector('#formMsg').textContent='Thanks — please connect this form to your email service before publishing.'});
