const versao = 5

const arquivos = [
  '/',
  'css/index.css',
  'img/icons/a_luz.svg',
  'img/icons/composição_fotográfica.svg',
  'img/icons/corte_alto.svg',
  'img/icons/efeito_bokeh.svg',
  'img/icons/efeito_punctum.svg',
  'img/icons/elementos_ritmicos.svg',
  'img/icons/enquadramento.svg',
  'img/icons/fingir_cachorro.svg',
  'img/icons/fotografias_com_celular.svg',
  'img/icons/fundo_infinito.svg',
  'img/icons/icone_DIAGONAL_AZUL-11.svg',
  'img/icons/inventar_histórias.svg',
  'img/icons/letterBox.svg',
  'img/icons/logoVertical-01.svg',
  'img/icons/menu.svg',
  'img/icons/olhar_artístico.svg',
  'img/icons/padrões_geométricos.svg',
  'img/icons/rebatedor_de_luz.svg',
  'img/icons/regra_dos_terços.svg',
  'img/icons/ser_nojento.svg',
  'img/icons/simetria.svg',
  'img/book.svg',
  'img/search.svg',
  'img/video.svg',
  'js/busca.js',
  'js/navegacao.js',
  'js/sidemenu.js',
  'js/videoMini.js',
  'js/videos.js',
  'sw/registra.js',
]

self.addEventListener("activate", function(){
  caches.open("lea-arquivos-"+versao).then(cache => {
    cache.addAll(arquivos)
      .then(()=>{
        caches.delete('lea-arquivos-'+(versao - 1))
      })
  })
})

self.addEventListener("fetch", (event) => {
  const pedido = event.request;
  const promiseResponse = caches
    .match(pedido)
    .then((respostaCache) => {
      const resposta = respostaCache ? respostaCache : fetch(pedido);
      return resposta;
    });

  event.respondWith(promiseResponse);
});