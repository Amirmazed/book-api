const searchBook = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText)

    searchField.value = ''

    const url = `https://openlibrary.org/search.json?q=${searchText}`

    

    fetch(url)
    .then(res => res.json())
    .then(data => {
        displaySearchResult(data.docs)
        const no = data.numFound;
    const res = document.getElementById('number')
    if(no<1){
        res.innerText = "error no result found" 
    }else{
        res.innerText = "total search result is: "+ no;
    }
    })
   
    
}




const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML =''
    
    docs.forEach(doc => {
        console.log(doc)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
          <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            
              <h5 class="card-title">${doc.title} by </h5>
              <h5>${doc.author_name} </h5>
              <h5>First Publish: ${doc.first_publish_year}</h5>
              <h5>Publisher: ${doc.publisher}</h5>
            </div>
          </div>
        </div>
        `
        searchResult.appendChild(div)

        
    })
    
   
}