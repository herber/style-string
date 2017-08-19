const { escape } = require('escapify');

module.exports = styles => {
  const s = [];
  const stylekeys = Object.keys(styles);

  for (let style in stylekeys) {
    const name = stylekeys[style];
    const value = styles[name];

    style = `${escape(name)}: ${escape(String(value))}`;

    s.push(style);
  }

  return s.length <= 0 ? '' : s.join('; ');
};
