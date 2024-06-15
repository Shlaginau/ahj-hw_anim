import CollapseBtn from './CollapseBtn/modal';

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const button = document.querySelector('.collapse-btn');
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi consequuntur quo fugit, atque obcaecati aliquam earum ratione eius deserunt dicta porro tempora, laboriosam qui maxime corrupti eligendi eveniet officia.';
  const collapseBtn = new CollapseBtn(modal, button, text);
  collapseBtn.init();
});
