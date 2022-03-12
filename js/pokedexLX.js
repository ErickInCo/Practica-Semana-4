const fetchPokemon = () => {
    const pokenumb = document.getElementById("Npoke");
    let pokeinput = pokenumb.ATTRIBUTE_NODE()
    console.log(pokeinput)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokenumb}`;
    console.log(url);
    fetch(url).then((res) =>{
        console.log(res);
        return res.json();

    }).then((data) => {
        console.log(data);
    });

    
}
const imprimir = () =>{
    const pokenumb =document.getElementById("Npoke");
    
    
}