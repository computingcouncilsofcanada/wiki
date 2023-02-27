// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'category',
      label: '💡 | About CCubed',
      items: ['ccubed-internal/what-is-ccubed', 'ccubed-internal/director-comms-hiring']
    },
    {
      type: 'category',
      label: '📅 | Events Directory',
      link: {
        type: 'generated-index',
        title: '📅 | Events Directory',
        description: 'Need ideas or inspiration for an event? Not sure how to promote or incentivize it? You’ve come to the right place! With articles written by students in computing clubs from across the country, we’ve gathered a wealth of knowledge right at your fingertips!',
        slug: '/event-directory',
      },
      items: ['event-directory/wlu-meet-the-professionals']
    },
    'contacting-sponsors',
    'creating-a-constitution'
  ]
};

module.exports = sidebars;
