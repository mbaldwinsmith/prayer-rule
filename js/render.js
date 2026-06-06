function renderBlock(block) {
  if (block.type === 'rubric') {
    const el = document.createElement('p');
    el.className = 'rubric';
    el.textContent = block.text;
    return el;
  }
  if (block.type === 'paragraph') {
    const match = block.text.match(/^([\s\S]+?)\((\d+)\)$/);
    if (match) {
      const text = match[1].trimEnd();
      const count = parseInt(match[2], 10);
      const frag = document.createDocumentFragment();
      for (let i = 0; i < count; i++) {
        const el = document.createElement('p');
        el.textContent = text;
        frag.appendChild(el);
      }
      return frag;
    }
    const el = document.createElement('p');
    el.textContent = block.text;
    return el;
  }
  if (block.type === 'lines') {
    const el = document.createElement('div');
    el.className = 'lines';
    block.lines.forEach(line => {
      const span = document.createElement('span');
      span.textContent = line;
      el.appendChild(span);
    });
    return el;
  }
  return null;
}

export function renderPrayer(prayer) {
  const section = document.createElement('section');
  section.className = 'prayer';
  section.dataset.id = prayer.id;

  if (prayer.title) {
    const h2 = document.createElement('h2');
    h2.textContent = prayer.title;
    section.appendChild(h2);
  }

  if (prayer.body.length === 0) {
    const el = document.createElement('p');
    el.className = 'placeholder';
    el.textContent = `[${prayer.title || prayer.id} — to be added]`;
    section.appendChild(el);
  } else {
    prayer.body.forEach(block => {
      const el = renderBlock(block);
      if (el) section.appendChild(el);
    });
  }

  return section;
}
