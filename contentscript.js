const defaultFavIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH3gwKEBo7U61qFQAAAwJJREFUSMet1k9oXHUQB/DPbk2a3W2zyUYLkaZ/QFNQxIN4UIQUbEDFivFQUQo9WNFjvAkevRQ82IMFC/ZQKIo9tKKCQgQNiCAeKl7E0BKTEA/WpHG3m92l3X0e9ve2b3efTQTntL/3m/nOzHdmfrMZd5HTFy51nZutlvWNsmar1fX91OzJf8W4x/ZkN/YgE84R/kRlK8PtOngTbyEOPYv38d5WhnFEfXQkJIsLeKWHok9wPOE0lbZsyt0I8onzLuxP0dsf7mLJo9irtKMn+hLOhcgGAvfv4AgGoihSqzdEUQT3Yh/W8DTexXP4BrWnnnnB919/3leDV/FioO4IqhiGTCYjI0Omw2oOJzCDQgg2wrf4oFODRPQP4Esc6k2z2WzaKFdUqlWb9YbBgQH5XE42m8aw3/A8rvbW4PU08Hqj4drSsqyWxx+eNPXYI0q789bW1926fTvNwaGAhe42XcQNjCYjX179wxOPPmRmekohlwPVWt3luXnf/fSzsdKYbDaTdHAjYOnN4GzgdCHmfKNccd9o0cz04Q44FHJDZqan7N0zplavJcEXAsbZjoPZ4y/FvyN8gYvxh+rmpskDEwq5oT4eCrkhkwf3aTQaMncKfzFgRLRnIbVK/00yd73NJroog6M4Fn/YVchb+H1FtVbrM6zW6hYWV+zcORjPhWB7NPb69umPujJ4A+cxCVEUKQ4P+2uj7PLcfJeTaq3us7l5q9fX5BO1CbbnAxa6u+igRAfBjmzWxP3jfvzlV9eWVz14YKJdycUVq9fXjBSLSf5jGQ1YbVq2NWitlnKlonKzPWgDYdBSwOkdtEQXXcUZoQPQRDnOpDQyYu/4uLFSSSGfT4KXg65geyYGPzV7su8t+hiHtd+WT4PiazgWRVEuEnGnoDXttjwXsn8ZmwGjI2n7oIhbQZn2Y/cVnuzZBz/g2ThL7ed6EBtx9KTvg78T4HATSyl6S+Euls0YPCkdihK16EjIqoUrgbrkyrwSn/+Ppf8hLulf+lvKdh1UbOMfRJr8A7imDPxuiVx9AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTA5LTE3VDE1OjIxOjI2KzA4OjAwf1sxlgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMi0xMFQxNjoyNjo1OSswODowMLGkFvIAAABNdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDcuMC4xLTYgUTE2IHg4Nl82NCAyMDE2LTA5LTE3IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn3dmlTgAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMTI4Q3xBgAAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxMjjQjRHdAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE0MTgyMDAwMTn+szHyAAAAEnRFWHRUaHVtYjo6U2l6ZQAyLjg4S0KSC1AeAAAAX3RFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vaG9tZS93d3dyb290L3NpdGUvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL3NyYy8xMTgyMS8xMTgyMTk1LnBuZ4n8kucAAAAASUVORK5CYII=';
const defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAAEaCAYAAABOwK+pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjQyNzNBN0RGODBCMTFFNkJGNTRGNjQyMERFQzAwMkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjQyNzNBN0VGODBCMTFFNkJGNTRGNjQyMERFQzAwMkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NDI3M0E3QkY4MEIxMUU2QkY1NEY2NDIwREVDMDAyQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NDI3M0E3Q0Y4MEIxMUU2QkY1NEY2NDIwREVDMDAyQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuTD52kAABdVSURBVHja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';

const ITEM_WIDTH = 180;
const VISIBLE_COUNT = 4;
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
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({cmd: "tabs"}, function(response) {
      resolve(cb(response));
    });
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

const reset = (style) => extend({
  padding: '0',
  margin: '0',
  boxSizing: 'content-box',
}, style);

const css = {
  '.box': reset({
    zIndex: '99999',
    boxSizing: 'border-box',
    display: 'none',
    position: 'fixed',
    margin: '0',
    padding: '30px 0',
    borderRadius: '5px',
    background: '#f0f0f0',
    overflow: 'hidden',
  }),
  '.box-inner': reset({
    position: 'relative',
    width: '10000px',
    listStyle: 'none',
  }),
  '.tab-item': reset({
    float: 'left',
    padding: '15px',
    width: (ITEM_WIDTH - 30) + 'px',
    borderRadius: '10px',
    textAlign: 'center',
    background: 'transparent',
  }),
  '.tab-info': reset({
    margin: '0 0 10px'
  }),
  '.tab-fav-icon': reset({
    position: 'relative',
    top: '4px',
    marginRight: '8px',
    width: '18px',
  }),
  '.tab-title': reset({
    fontSize: '14px',
    color: '#333',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    lineHeight: '25px',
  }),
  '.tab-url': reset({
    fontSize: '12px',
    color: '#ccc',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    lineHeight: '20px',
  }),
  '.tab-preview': reset({
    width: '100%',
    height: '120px',
    border: '3px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
    background: '#eee',
  }),
  '.tab-image': reset({
    position: 'relative',
    display: 'block',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    boxSizing: 'border-box',
  })
};

const defaultImg = "";

const ui = (function () {
  const ww    = clientWidth(document);
  const wh    = clientHeight(document);
  const bw    = ITEM_WIDTH * (VISIBLE_COUNT + 1);
  const bh    = 270;
  const $box  = create('div', extend({}, css['.box'], {
    left:   `${(ww - bw) / 2}px`,
    top:    `${(wh - bh) / 2}px`,
    width:  `${bw}px`,
    height: `${bh}px`,
  }));
  const $inner = create('ul', css['.box-inner']);

  let _isShown = false;
  let _firstIndex = null;
  let _selectIndex = null;
  let _length = null;
  let _tabs = [];

  $box.appendChild($inner);
  $body.appendChild($box);

  const renderTabs = ({tabs, currentTabIndex}) => {
    removeChildren($inner);
    console.log(tabs, currentTabIndex);

    _length = tabs.length;
    _tabs = tabs;

    tabs.forEach(tab => {
      const [$li, $_1, $title, $icon, $url, $_2, $img] = html(`
        li.tab-item
          div.tab-info
            p.tab-title
              img.tab-fav-icon
            p.tab-url
          div.tab-preview
            img.tab-image
      `, css);

      $img.src = tab.imageData || defaultImage;
      $icon.src = !tab.favIconUrl || /^chrome:/.test(tab.favIconUrl) ? defaultFavIcon : tab.favIconUrl;
      $title.appendChild(document.createTextNode(tab.title));
      $url.innerText = tab.url;

      $inner.appendChild($li);
    });

    locateTabs(currentTabIndex);
  };

  const locateTabs = (selectIndex, firstIndex) => {
    if (firstIndex === undefined) {
      if (selectIndex < VISIBLE_COUNT / 2) {
        firstIndex = 0
      } else if (selectIndex > _length - 1 - VISIBLE_COUNT / 2) {
        firstIndex = _length - VISIBLE_COUNT;
      } else {
        firstIndex = selectIndex - 1;
      }
    }

    _firstIndex = firstIndex;
    _selectIndex = selectIndex;

    setStyle($inner, {
      left: -1 * (firstIndex - 0.5) * ITEM_WIDTH + 'px'
    });

    for (let i = 0, len = $inner.childNodes.length; i < len; i += 1) {
      $inner.childNodes[i].className = '';
    }

    console.log('locate', firstIndex, selectIndex);

    $inner.childNodes[selectIndex].className = 'kd-tab-on-0303';
  };

  const shiftTab = (isForward) => {
    console.log('isForward', isForward);

    const move = isForward ? 1 : -1;
    const target = _selectIndex + move;
    let first;

    console.log('target', target);

    if (target >= _length || target < 0) {
      return;
    }

    if (target <= _firstIndex) {
      locateTabs(target, Math.max(0, _firstIndex - 1));
    } else if (target >= _firstIndex + VISIBLE_COUNT - 1) {
      locateTabs(target, Math.min(_length - VISIBLE_COUNT, _firstIndex + 1));
    } else {
      locateTabs(target, _firstIndex);
    }
  };

  const select = () => {
    chrome.runtime.sendMessage({
      cmd: "changeTab",
      tabId: _tabs[_selectIndex].tabId
    });
  };

  return {
    showTabs: () => {
      if (_isShown) return Promise.resolve();
      _isShown = true;
      setStyle($box, { display: 'block' });
      return getTabs(renderTabs);
    },
    hideTabs: () => {
      if (!_isShown)  return;
      _isShown = false;
      setStyle($box, { display: 'none' });
    },
    shiftTab: (isForward) => {
      shiftTab(isForward);
    },
    select: () => {
      select();
    },
    isShown: () => {
      return _isShown;
    }
  };
})();

document.addEventListener('keydown', (e) => {
  // console.log('down', e);
  if (!e.altKey)  return;
  const isForward = !e.shiftKey;

  switch (e.keyCode) {
    case 81: {
      ui.showTabs()
        .then(() => ui.shiftTab(isForward));
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
    if (ui.isShown()) {
      ui.hideTabs();
      ui.select();
    }
  }
});
