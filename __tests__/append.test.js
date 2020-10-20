const {
  createDiv,
  createParagraph,
} = require('../dist/index');

test('string', () => {
  const text = 'Something Text';
  expect(
    createParagraph()
      .append(text)
      .dom
      .textContent
  ).toBe(text);
});

test('element', () => {
  const children = createDiv()
    .append(
      document.createElement('input'),
      document.createElement('button'),
    )
    .dom
    .children;

  expect(children.length).toBe(2);
  expect(children[0].tagName + children[1].tagName).toBe('INPUTBUTTON');
});

test('noliter instance', () => {
  const children = createDiv()
    .append(
      createDiv(),
      createParagraph(),
    )
    .dom
    .children;

  expect(children.length).toBe(2);
  expect(children[0].tagName + children[1].tagName).toBe('DIVP');
});
