const search = document.querySelector('input')
let html = ``;
const hero = document.querySelector('#hero')
let moviename = '';
const searchButton = document.querySelector('.search-button')
.addEventListener('click',()=>{
    moviename = search.value;
   
fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=696781aa&t=${moviename}`)
.then((res)=>{
    hero.innerHTML='';
    html = ``;
    return res.json();
}).then((data)=>{
    console.log(data);
    // console.log(data.Title);
    if(data.Error){
        hero.innerHTML = `${data.Error}`
    }else{
          html = `
            
            <div id="hero">
        <section class="bg-white max-w-[80%] max-h-[60%] m-auto my-[2%] rounded-2xl py-[2%]">
            <div class="flex flex-row justify-between m-auto items-center">
                <div class="max-h-[60%]">
                    <img class="h-[500px] rounded-2xl" src="${data.Poster}" alt="movie-img">
                </div>
                <div class="max-w-1/2">
                    <div>
                        <h2 class="text-center text-2xl font-black font-bold">${data.Title}</h2>
                    <p class="text-center"><strong>Rating:</strong> ${data.imdbRating}</p>
                    <span class="text-center rounded p-1 bg-gray-500">${data.Genre}</span>
                   
                    </div>
                    <p><strong>Release Date:</strong> ${data.Released}</p>
                    <p><strong>Duration"</strong> ${data.Runtime}</p>
                    <p><strong>Cast:</strong> ${data.Actors}</p>
                    <p>${data.Plot}</p>
                </div>
            </div>
        </section>
    </div>
    </div>
            
            `
            hero.innerHTML += html;
    }
    
    //     })

    // data.Search.forEach(element => {
        // console.log(element.Title);
//         fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=696781aa&S=${element.Title}`)
//         .then((res)=>{
//             return res.json();
//         })
//         .then((data)=>{
// // console.log(data);
// data.Search.forEach((ele)=>{
//     console.log(ele);
// })
    //         html = `
            
    //         <div id="hero">
    //     <section class="bg-white max-w-[80%] max-h-[60%] m-auto my-[2%] rounded-2xl py-[2%]">
    //         <div class="flex flex-row justify-between m-auto items-center">
    //             <div class="max-h-[60%]">
    //                 <img class="h-[500px] rounded-2xl" src="${data.Poster}" alt="movie-img">
    //             </div>
    //             <div class="max-w-1/2">
    //                 <div>
    //                     <h2 class="text-center text-2xl font-black font-bold">${data.Search.Title[0]}</h2>
    //                 <p class="text-center"><strong>Rating:</strong> ${data.rating}</p>
    //                 <span class="text-center rounded p-1 bg-gray-500">Comady</span>
    //                 <span class="text-center p-1 bg-gray-500 rounded">Drama</span>
    //                 </div>
    //                 <p><strong>Release Date:</strong> 25 Dec 2009</p>
    //                 <p><strong>Duration"</strong> 170 min</p>
    //                 <p><strong>Cast:</strong> Aamir khan,Madhavan,Mona Singh</p>
    //                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum illo asperiores at est doloribus ab, dolores suscipit recusandae doloremque consequatur sed maxime aliquid laudantium corrupti vero distinctio inventore in temporibus? Unde labore, illo officiis corrupti natus autem officia soluta quisquam error ab accusantium quod obcaecati. Debitis assumenda quas vitae officia quod veniam eaque nemo omnis perspiciatis adipisci, similique quam ullam eius expedita tenetur dolorum perferendis inventore fuga est! Dolor tempore, impedit nam assumenda earum officiis necessitatibus dolorum libero iure rem temporibus illo! Quaerat quo provident ex commodi nobis temporibus non?</p>
    //             </div>
    //         </div>
    //     </section>
    // </div>
    // </div>
            
    //         `
            // hero.innerHTML += html;
    //     })
    // });
   
    })
  



})

