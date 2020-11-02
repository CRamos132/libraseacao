const busca = document.getElementById("searchbar_input");

busca.addEventListener("input", (e) => {
  const query = e.target.value;
  let result = [];
  document.getElementById("result_busca").innerHTML = "";
  videos.tecnicas.forEach((video) => {
    if (video.nome.toLowerCase().includes(query.toLowerCase())) {
      result.push(video);
    }
  });
  videos.dicas.forEach((video) => {
    if (video.nome.toLowerCase().includes(query.toLowerCase())) {
      result.push(video);
    }
  });
  result.forEach((resultado) => {
    const suggestion = `
      <option value='${resultado.nome}'></option>
    `;
    // prettier-ignore
    document.getElementById("result_busca").innerHTML += suggestion;
  });
});

function abreResultado() {
  let video_selecionado;
  videos.tecnicas.forEach((video) => {
    if (video.nome.toLowerCase().includes(busca.value.toLowerCase())) {
      video_selecionado = video;
    }
  });
  videos.dicas.forEach((video) => {
    if (video.nome.toLowerCase().includes(busca.value.toLowerCase())) {
      video_selecionado = video;
    }
  });
  abreVideo(video_selecionado.url);
  busca.value = "";
}
