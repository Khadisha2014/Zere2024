(() => {
  const nav = document.querySelector('.nav');
  const videoNav = document.createElement('button');
  videoNav.className = 'nav-link';
  videoNav.type = 'button';
  videoNav.innerHTML = '<span>▶</span> Создать видео';
  nav.append(videoNav);

  const main = document.querySelector('.main');
  const page = document.createElement('section');
  page.className = 'video-page page';
  page.innerHTML = `<div class="video-content"><p class="eyebrow">NOVA MOTION</p><h1>Создайте <em>видео</em></h1><p class="subtitle">Опишите сцену — в демо-режиме Nova подготовит ролик без оплаты.</p><form class="video-form"><label>Идея для видео<textarea placeholder="Например: робот гуляет по ночному городу, неоновый свет"></textarea></label><div class="video-actions"><label>Длительность<select><option>1 час</option><option>2 часа</option><option>3 часа</option></select></label><button class="primary" type="submit">▶ Создать видео</button></div></form><div class="video-result"><span class="play">▶</span><div><strong>Готово к созданию</strong><small>Введите описание, чтобы посмотреть демо-ролик.</small></div></div><p class="free-note">∞ Бесплатный демо-режим · без оплаты</p></div>`;
  main.append(page);

  const showVideo = () => {
    document.querySelectorAll('.page,.nav-link').forEach(el => el.classList.remove('active'));
    page.classList.add('active'); videoNav.classList.add('active');
  };
  videoNav.addEventListener('click', showVideo);
  const form = page.querySelector('form');
  const prompt = form.querySelector('textarea');
  const result = page.querySelector('.video-result');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const text = prompt.value.trim(); if (!text) return prompt.focus();
    result.classList.add('rendered');
    const duration = form.querySelector('select').value;
    result.innerHTML = `<span class="play">▶</span><div><strong>${text}</strong><small>Демо-проект для ролика · ${duration}</small></div>`;
  });
  document.querySelector('#chatForm').addEventListener('submit', event => {
    const requestedVideo = document.querySelector('#messageInput').value;
    if (!requestedVideo.toLowerCase().includes('видео')) return;
    setTimeout(() => { showVideo(); prompt.value = requestedVideo; form.requestSubmit(); }, 100);
  }, true);
})();
