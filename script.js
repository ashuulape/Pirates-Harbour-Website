let finalLink;
 const empty=document.getElementById("emptyerror");
  const resultDiv = document.getElementById("searchresult");


 function myFunction() {
    alert("Key was pressed!");
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });

 


function handleSearch() {
  
  const input = document.getElementById("searchInput").value.trim();

  if(input!==""){
 




  window.location.href = `2ndPage.html?query=${encodeURIComponent(input)}`;
  


       

  

  } 
  else{
   empty.innerHTML = "Search box is empty............";
    empty.style.color="red"
    
  }

}






window.onload = function () {



  const urlParams = new URLSearchParams(window.location.search);
  const input = urlParams.get('query');

  console.log(input);


  if (input) {
         const finalLink = input.replace(/ /g, "+");

        searchresult(input);       
    output(finalLink);     

  }
};

function searchresult(input){
 const resultDiv = document.getElementById("searchresult");
  resultDiv.innerHTML = `Search Results for: "${input}"`;

}



function output(finalLink){
 document.getElementById("kat").href=`https://katmoviehd.blue/?s=${finalLink}`
document.getElementById("vega").href=`https://vegamoviese.cv/?s=${finalLink}`
document.getElementById("cineb").href=`https://cineb.ws/search?keyword=${finalLink}`
document.getElementById("Justwatch").href=`https://www.justwatch.com/in/search?q=${finalLink}`
document.getElementById("9Flix").href=`https://9xflix.foo/m/?s=${finalLink}`
document.getElementById("OLAMoavies").href=`https://olamovies.help/?s=${finalLink}`
document.getElementById("hdhub4u").href=`https://hdhub4u.gratis/?s=${finalLink}`
document.getElementById("9Anime").href=`https://9anime.org.lv/?s=${finalLink}`
document.getElementById("9Flix").href=`https://9xflix.foo/m/?s=${finalLink}`
document.getElementById("gogoanime").href=`https://gogoanimez.to/?s=${finalLink}`
document.getElementById("hd-film").href=`https://hd-film.co/search/?s=${finalLink}`
document.getElementById("Soap2Day").href=`https://ww25.soap2day.day/?s=${finalLink}`
document.getElementById("AniWatch").href=`https://aniwatchtv.to/search?keyword=${finalLink}`
}



 function shuffleContainerItems() {
    const container = document.querySelector('.container');
    const items = Array.from(container.children);
    
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

  
    items.forEach(item => container.appendChild(item));
  }

  document.addEventListener('DOMContentLoaded', shuffleContainerItems);


function back(){
  window.location.href = "index.html";
}











