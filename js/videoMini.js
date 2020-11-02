class VideoMini {
  static criaMiniatura(titulo, url) {
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
  static getDicas() {
    let dicas = [];
    videos.dicas.forEach((video) => {
      dicas.push(this.criaMiniatura(video.nome, video.url));
    });
    return dicas;
  }
  static getTecnicas() {
    let tecnicas = [];
    videos.tecnicas.forEach((video) => {
      tecnicas.push(this.criaMiniatura(video.nome, video.url));
    });
    return tecnicas;
  }
}
