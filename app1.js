const moviePoster = "elposter"
const movieTitle = "elTitle"

let li = `  <li> 
                <div class="row"> 
                    <div class="col-md-4"> 
                        <img src="${moviePoster}" height="250" alt="" />
                    </div>
                        <div class="col-md-8">
                            <h2> ${movieTitle} </h2>
                        </div>
                </div>
            </li>`;

console.log (li);
document.getElementById('li').innerText = li;