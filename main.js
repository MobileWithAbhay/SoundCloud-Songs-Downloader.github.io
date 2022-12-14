var SoundCloud = document.querySelector('.SoundCloud');
var hidden = document.querySelector('.hidden');
 
function song(){
  if(SoundCloud.value!=""){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2b929025ddmshd3302ab633a818cp1ab4cdjsne14ca95e2a8d',
      'X-RapidAPI-Host': 'soundcloud4.p.rapidapi.com'
    }
  };
  var urlLink = 'https://soundcloud4.p.rapidapi.com/song/download?track_url=' + SoundCloud.value;
  fetch(urlLink, options).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    hidden.classList.add('active');
    document.querySelector('.form-control').value = data.url;
  }).catch(err => console.error(err));
  }
  else{
    alert('Enter Your SoundCloud Url...');
  }
}
var url = document.querySelector('.form-control');
function download(){
      const anchor = document.createElement("a");
      anchor.href =  url.value;
      anchor.download = 'MWC.mp3';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
 }
