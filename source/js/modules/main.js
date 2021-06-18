export default () => {
  let body = document.querySelector(`body`);
  window.addEventListener(`load`, function () {
    body.classList.add(`active`);
  });
};
