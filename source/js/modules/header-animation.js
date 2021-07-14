export default () => {
  const wrapWords = (words) => {
    const wrappedWords = words.map((word) => {
      const characters = word.split(``);

      const wrappedCharacters = characters.map((character) => {
        return `<span class="character">${character}</span>`;
      });

      return `<span class="word">${wrappedCharacters.join(``)}</span>`;
    });

    return wrappedWords;
  };

  const animateText = (selector, isMultiline) => {
    let node = document.querySelector(`.${selector}`);

    const splitSeparator = isMultiline ? ` ` : null;

    const words = node.textContent.split(splitSeparator);

    node.textContent = ``;

    node.innerHTML = wrapWords(words).join(` `);
  };

  animateText(`intro__title`, true);

  animateText(`intro__date`, false);
};
