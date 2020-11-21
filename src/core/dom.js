class Dom {

}

export function _dom() {
  return new Dom();
}

_dom.create = (tagName, classes = '') => {
  if (typeof classes !== 'string') {
    throw new Error('Classes parameter must be a string');
  }

  const el = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }

  return el;
};
