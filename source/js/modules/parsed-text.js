export default () => {
  const parseText = (selector) => {
    let node = document.querySelector(`.${selector}`);

    const words = node.textContent.split(` `);

    node.textContent = ``;

    const wrapWords = (array) => {
      const wrappedWords = array.map((word) => {
        const characters = word.split(``);

        const wrappedCharacters = characters.map((character) => {
          return `<span class="character">${character}</span>`;
        });

        return `<span class="word">${wrappedCharacters.join(``)}</span>`;
      });

      return wrappedWords;
    };

    node.innerHTML = wrapWords(words).join(` `);
  };

  parseText(`intro__title`);
  parseText(`intro__date`);
  parseText(`slider__item-title`);
  parseText(`prizes__title`);
};
