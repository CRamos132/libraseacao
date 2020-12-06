function trocaPagina(page) {
  var elementoAtual = document.getElementById("template-" + page);
  var template = document.importNode(elementoAtual.content, true);
  document.getElementById("main").innerHTML = "";
  document.getElementById("main").appendChild(template);
  if (page === "home") {
    document.getElementById('subtitulo').innerText = 'Home'
  }
  if (page === "videos") {
    insereVideo();
    document.getElementById('subtitulo').innerText = 'Vídeos'
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
function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}
function criaMiniatura(titulo, url) {
  let node = document.createElement("div");
  node.className = "miniatura_video";
  node.onclick = function () {
    abreVideo(url);
  };
  let img = document.createElement("img");
  img.src = `./img/icons/${titulo.replace(/ /g, "_")}.svg`;
  img.className = "miniatura_img";
  node.appendChild(img);
  var textnode = document.createTextNode(titulo);
  node.appendChild(textnode);
  return node;
}
function insereTodos(){
  document.getElementById("main").innerHTML = "";
  const vidList = videos.dicas.concat(videos.tecnicas)
  const ordered = vidList.sort(dynamicSort("nome"))
  ordered.forEach((video) => {
    if(!video.glossario) return
    const vid = criaMiniatura(video.nome, video.glossario)
    document.getElementById("main").appendChild(vid);
  })
  document.getElementById('subtitulo').innerText = 'Glossário'
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
    document.getElementById('subtitulo').innerText = 'Composição'
    const tecnicas = VideoMini.getTecnicas();
    tecnicas.forEach((tecnica) => {
      document.getElementById("main").appendChild(tecnica);
    });
  } else if (categoria === "dicas") {
    document.getElementById('subtitulo').innerText = 'Dicas'
    const dicas = VideoMini.getDicas();
    dicas.forEach((dica) => {
      document.getElementById("main").appendChild(dica);
    });
  }
}
