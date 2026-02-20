
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/futbolito/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/futbolito"
  },
  {
    "renderMode": 2,
    "route": "/futbolito/noticias"
  },
  {
    "renderMode": 2,
    "route": "/futbolito/partidos"
  },
  {
    "renderMode": 2,
    "route": "/futbolito/nosotros"
  },
  {
    "renderMode": 2,
    "redirectTo": "/futbolito",
    "route": "/futbolito/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5037, hash: '788523b94cfcec972c58563e096b2c26d4348fa505100454e82fc646e95997d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: 'f803d858e5c2a5c3454c24e1127a51c63bbe34745a4fdb48917472edea9cb2fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'partidos/index.html': {size: 12001, hash: '22b2ec6622fee2e6348e45163e885e0bba74ca7a3a67ee0d9d746a96c8cf0646', text: () => import('./assets-chunks/partidos_index_html.mjs').then(m => m.default)},
    'noticias/index.html': {size: 15051, hash: '6fb72ef5afbd91f3f3cf42708a85255d11cf3fafa69e325ebd5b9bd0ae701eff', text: () => import('./assets-chunks/noticias_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11034, hash: 'f99c5c5028acecd49cf7cc15e0d9822aad6049a5b6c07c2b8bd196150a74a3f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 24842, hash: '348c96213fafa3fd70796bd29ba2b5bd10d621bdfb32421f54b1e26d67503a06', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
