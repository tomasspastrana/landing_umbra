const orbit = document.querySelector('.feature-orbit');
const tabs = Array.from(document.querySelectorAll('[data-feature]'));
const panels = Array.from(document.querySelectorAll('.feature-panel'));
const welcome = document.querySelector('.orbit-welcome');
const reset = document.querySelector('.orbit-reset');

function selectFeature(feature) {
  orbit.dataset.active = feature ?? 'none';
  welcome.hidden = Boolean(feature);
  reset.hidden = !feature;

  for (const tab of tabs) {
    const selected = tab.dataset.feature === feature;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected || (!feature && tab === tabs[0]) ? 0 : -1;
    tab.querySelector('.tab-plus').textContent = selected ? '−' : '+';
  }

  for (const panel of panels) {
    panel.hidden = panel.id !== `panel-${feature}`;
  }
}

for (const [index, tab] of tabs.entries()) {
  tab.addEventListener('click', () => selectFeature(tab.dataset.feature));
  tab.addEventListener('keydown', (event) => {
    let nextIndex;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    if (nextIndex !== undefined) {
      event.preventDefault();
      selectFeature(tabs[nextIndex].dataset.feature);
      tabs[nextIndex].focus({ preventScroll: true });
    }
  });
}

reset.addEventListener('click', () => {
  selectFeature(null);
  tabs[0].focus({ preventScroll: true });
});

orbit.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    selectFeature(null);
    tabs[0].focus({ preventScroll: true });
  }
});
