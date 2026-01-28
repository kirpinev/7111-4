const app = document.getElementById('app');

function sendAnalyticsEvent(gaEvent, ymEvent) {
  // Google Analytics
  if (typeof window.gtag === 'function') {
    window.gtag('event', gaEvent);
  }
  // Yandex Metrika
  if (typeof window.ym === 'function') {
    window.ym(96171108, 'reachGoal', ymEvent);
  }
}

function renderLanding() {
  // Отправляем событие просмотра экрана только один раз за сессию
  if (!sessionStorage.getItem('landingViewed')) {
    sendAnalyticsEvent('7111_page_view_kk_var4', '7111_page_view_kk_var4');
    sessionStorage.setItem('landingViewed', '1');
  }
  app.innerHTML = `
    <div class="landing">
      <img src="img/image_33.png" alt="Кредитная карта" class="credit-card-image" />
      <div class="landing__content">
        <div class="landing__title">Кредитная карта</div>
        <div class="landing__subtitle">с оплатой по частям</div>
        <div class="landing__desc">
          Любую покупку можно разделить на&nbsp;2&nbsp;платежа<br>0% при погашении за 60&nbsp;дней
        </div>
        
        <div class="features">
          <div class="feature">
            <div class="feature__title">Обслуживание</div>
            <div class="feature__desc">бесплатно в 1-й&nbsp;месяц, далее 4&nbsp;990&nbsp;₽ в&nbsp;год</div>
          </div>
          
          <div class="feature">
            <div class="feature__title">50 000&nbsp;₽</div>
            <div class="feature__desc">максимальный кредитный лимит</div>
          </div>
          
          <div class="feature">
            <div class="feature__title">60&nbsp;дней без %</div>
            <div class="feature__desc">Первый платеж – 50% через 30&nbsp;дней после покупки<br>Второй платеж – 50% через 60&nbsp;дней</div>
          </div>
          
          <div class="feature">
            <div class="feature__title">Кэшбэк каждый месяц</div>
            <div class="feature__desc">до 50&nbsp;% за покупки у партнеров</div>
          </div>
        </div>
        
        <button class="landing__button" id="sendBtn">Оформить карту</button>
      </div>
    </div>
  `;
  document.getElementById('sendBtn').onclick = () => {
    window.location.href = 'alfabank://sdui_screen?screenName=InvestmentLongread&fromCurrent=true&shouldUseBottomSafeArea=true&endpoint=v1/invest-main-screen-view/investment-longread/93819%3flocation=AM%26campaignCode=GH';
  };
}

renderLanding(); 