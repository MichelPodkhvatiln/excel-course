class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }

    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  on(eventName, callback) {
    this.$el.addEventListener(eventName, callback);
  }

  off(eventName, callback) {
    this.$el.removeEventListener(eventName, callback);
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }

    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
  }
}

export function _dom(selector) {
  return new Dom(selector);
}

_dom.create = (tagName, classes = '') => {
  if (typeof classes !== 'string') {
    throw new Error('Classes parameter must be a string');
  }

  const el = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }
  return _dom(el);
};
