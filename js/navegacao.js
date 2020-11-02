function trocaPagina(page) {
  var elementoAtual = document.getElementById("template-" + page);
  var template = document.importNode(elementoAtual.content, true);
  document.getElementById("main").innerHTML = "";
  document.getElementById("main").appendChild(template);
  if (page === "videos") {
    insereVideo();
  }
}
function insereVideo() {
  const dicas = VideoMini.getDicas();
  dicas.forEach((dica) => {
    document.getElementById("insereDicas").appendChild(dica);
  });
  const tecnicas = VideoMini.getTecnicas();
  tecnicas.forEach((tecnica) => {
    document.getElementById("insereTecnicas").appendChild(tecnica);
  });
}
function insereTodos(){
  document.getElementById("main").innerHTML = "";
  videos.tecnicas.forEach((video) => {
    document.getElementById("main").innerHTML += `
    <div class='video-container'>
      <iframe src='${video.url || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}' class='video-mini'></iframe>
    </div>
    `;
  });
  videos.dicas.forEach((video) => {
    document.getElementById("main").innerHTML += `
    <div class='video-container'>
      <iframe src='${video.url || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}' class='video-mini'></iframe>
    </div>
    `;
  });
}
function abreVideo(url) {
  const html = `
    <div class='video-container'>
      <iframe src='${url}' class='video-mini'></iframe>
    </div>
  `;
  document.getElementById("main").innerHTML = html;
}
function insereCategoria(categoria) {
  document.getElementById("main").innerHTML = "";
  if (categoria === "composicao") {
    const tecnicas = VideoMini.getTecnicas();
    tecnicas.forEach((tecnica) => {
      document.getElementById("main").appendChild(tecnica);
    });
  } else if (categoria === "dicas") {
    const dicas = VideoMini.getDicas();
    dicas.forEach((dica) => {
      document.getElementById("main").appendChild(dica);
    });
  }
}
