import h from 'hyperscript';

const list = ['one', 'two', 'three'];

h(
  'div#page',
  h(
     'header.title',
     h('h1.classy', 'h', { sytle: {'background-color': '#22f' }),
  ),
  h('nav.menu', {style: 'background-color': '#f22'}),
    h('ul', list.map((n) => h('li', n)))
),

h(
  'body.artile',
  h('h2', 'content title', { sytle: {'background-color': '#f22'}}),
  h(
    'p',
    "so it's just like a templatein engine, \n",
    'but easy to inline with javascript\n',
  ),
),
