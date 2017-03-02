
const rt    = chrome.runtime;
const $body = document.body;
const extend = function () {
  var args = Array.from(arguments),
      len  = args.length;

  if (len <= 0)   return {};
  if (len === 1)  return args[0];

  var head = args[0],
      rest = args.slice(1);

  return rest.reduce(function (prev, cur) {
    for (var i = 0, keys = Object.keys(cur), len = keys.length; i < len; i ++) {
      prev[keys[i]] = cur[keys[i]];
    }

    return prev;
  }, head);
};
const setStyle = function (dom, style) {
  if (!dom)   throw new Error('setStyle: dom not exist');

  for (var i = 0, keys = Object.keys(style), len = keys.length; i < len; i ++) {
    dom.style[keys[i]] = style[keys[i]];
  }

  return dom;
};
const setAttr = function (dom, attrs) {
  if (!dom)   throw new Error('setAttr: dom not exist');

  for (var i = 0, keys = Object.keys(attrs), len = keys.length; i < len; i ++) {
    dom.setAttribute(keys[i], attrs[keys[i]]);
  }

  return dom;
};
const clientWidth = function (document) {
  return document.documentElement.clientWidth;
};

const clientHeight = function (document) {
  return document.documentElement.clientHeight;
};

const getTabs = (cb) => {
  rt.sendMessage({key: "tabs"}, function(response) {
    cb(response);
  });
};

const create = (tag, styles, attributes) => {
  const $el = document.createElement(tag);
  setStyle($el, styles || {});
  setAttr($el, attributes || {});
  return $el;
};

const removeChildren = ($el) => {
  for (let nodes = $el.childNodes, i = nodes.length - 1; i >= 0; i -= 1) {
    $el.removeChild(nodes[i]);
  }
};

const html = (htmlStr, css) => {
  const indent = 2;
  const lines = htmlStr.split('\n');
  const indentNum = str => Math.floor((str.length - str.replace(/^ +/, '').length) / 2);
  const trim  = str => str.replace(/^\s*|\s*$/g, '');
  const last  = (list, n = 1) => list[list.length - n];
  const tagClass = str => {
    const s = trim(str);
    const i = s.indexOf('.');
    return i === -1 ? [s, null] : [s.substr(0, i), s.substr(i)];
  };

  const go = (lines, index, domStack, indentStack, allDoms) => {
    if (index >= lines.length) {
      return allDoms;
    }

    if (trim(lines[index]).length === 0) {
      return go(lines, index + 1, domStack, indentStack, allDoms);
    }

    const lastIndent = last(indentStack);
    const line = lines[index];
    const n = indentNum(line);
    const [tag, klass] = tagClass(line);

    const $el = create(tag, css[klass]);

    if (lastIndent === undefined) {
      domStack.push($el);
      indentStack.push(n);
    } else {
      if (lastIndent < n) {
        if (n - lastIndent !== 1) {
          throw new Error(`Indent should be increased 1 by 1! '${line}'`);
        }

        last(domStack).appendChild($el);
        domStack.push($el);
        indentStack.push(n);
      } else if (lastIndent === n) {
        last(domStack, 2).appendChild($el);
        domStack[domStack.length - 1] = $el;
      } else {
        while (last(indentStack) > n) {
          indentStack.pop();
          domStack.pop();
        }

        if (indentStack.length === 1) {
          throw new Error(`Only one root is allowed in template! '${line}' is with wrong indent!`);
        } else if (indentStack.length === 0) {
          throw new Error(`1st element in template should be the root! '${line}' is with wrong indent!`)
        }

        last(domStack, 2).appendChild($el);
        domStack[domStack.length - 1] = $el
      }
    }

    allDoms.push($el);
    return go(lines, index + 1, domStack, indentStack, allDoms);
  };

  return go(lines, 0, [], [], []);
};

const css = {
  '.box': {
    display: 'none',
    position: 'fixed',
    margin: '0',
    padding: '30px',
    borderRadius: '5px',
    background: '#f0f0f0',
    listStyle: 'none',
  },
  '.tab-item': {
    float: 'left',
    margin: '0 20px 0 0',
    width: '200px',
    textAlign: 'center'
  },
  '.tab-info': {

  },
  '.tab-title': {
    fontSize: '14px',
    color: '#333',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  '.tab-url': {
    fontSize: '12px',
    color: '#ccc',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  '.tab-image': {
    width: '180px',
    border: '2px solid #ccc'
  }
};

const defaultImg = "";

const ui = (function () {
  const ww    = clientWidth(document);
  const wh    = clientHeight(document);
  const bw    = 900;
  const bh    = 200;
  const $box  = create('ul', extend({}, css['.box'], {
    left:   `${(ww - bw) / 2}px`,
    top:    `${(wh - bh) / 2}px`,
    width:  `${bw}px`,
    height: `${bh}px`,
  }));

  let _isShown = false;
  let tabs = [];

  $body.appendChild($box);

  const renderTabs = (tabs) => {
    removeChildren($box);

    tabs.forEach(tab => {
      const [$li, $_, $title, $url, $img] = html(`
        li.tab-item
          div.tab-info
            p.tab-title
            p.tab-url
          img.tab-image
      `, css);

      $img.src = tab.imageData || defaultImg;
      $title.innerText = tab.title;
      $url.innerText = tab.url;

      $box.appendChild($li);
    });
  };

  return {
    showTabs: () => {
      _isShown = true;
      setStyle($box, { display: 'block' });
      getTabs(renderTabs);
    },
    hideTabs: () => {
      if (!_isShown)  return;
      _isShown = false;
      setStyle($box, { display: 'none' });
    },
    isShown: () => {
      return _isShown;
    }
  };
})();

document.addEventListener('keydown', (e) => {
  // console.log('down', e);
  if (!e.altKey)  return;

  switch (e.keyCode) {
    case 81: {
      ui.showTabs();
      break;
    }
    case 27: {
      ui.hideTabs();
      break;
    }
  }
});

document.addEventListener('keyup', (e) => {
  if (!e.altKey) {
    ui.hideTabs();
  }
});
