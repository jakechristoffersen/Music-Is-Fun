function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(results) {
    var elem = document.getElementById("songs")
    elem.innerHTML = ''

    var songTemplate = `
    <div class="card-columns">
    `;

  results.forEach(song => {
      songTemplate += `
      <div class="card border-dark bg-light mb-3 text-center" style="width: 16em;">
      <img class="card-img-top" src="${song.albumArt}">
      <button class="btn-default text-dark" id="${song.title}" onclick=".add('${song.title}')">Add to Playlist</button>
      
      <div class="card-body text-dark">
        <h3 class="card-title text-dark">${song.artist}</h3>
        <p class="text-dark">${song.collection} - ${song.title}</p>
        <p class="text-dark">${song.price}</p>
        <audio controls style="width: 14em;"><source src="${song.preview}" ></audio>
      </div>

    </div>
      `;

    });
      songTemplate += `
      </div>
      `;
  
      elem.innerHTML = songTemplate

    console.log(results)
   
  }




  
}
