function loaddata(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => displaydata(data))
    
  }
    loaddata();
  const displaydata = (data) =>{
    const coldata = document.getElementById("todos");
        data.forEach((post) => {
        
          const postDiv = document.createElement("div");
            postDiv.innerHTML = `
            
             <p> mahin
             </p>
                `;
             coldata.appendChild(postDiv);         
        });
  }