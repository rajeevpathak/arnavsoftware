
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/arnavsoftware/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7176, hash: '759f5bc87329819755a434ef2a47cddfdf50e512e2752d812ccb7c985f3da978', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1080, hash: 'ef2f60897f30a92ad568a1301e2127eb25e7fc3f9cd7d73858c78a6ff0ca7d43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YXIP4OPG.css': {size: 403148, hash: '3gOuSeM1VnE', text: () => import('./assets-chunks/styles-YXIP4OPG_css.mjs').then(m => m.default)}
  },
};
