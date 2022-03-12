const fetchPokemon = () => {
    var pokenumb = document.getElementById("Npoke").value;
    let result = pokenumb.toLowerCase();
    // console.log(pokenumb)
    const url = `https://pokeapi.co/api/v2/pokemon/${result}`;
    // console.log(url);
    fetch(url).then((res) =>{
        console.log(res);
        return res.json();

    }).then((data) => {
        console.log(data);
        var img=data.sprites.front_default;
        var pn=data.id;
        var pname=data.name;
        var type1="";
        var habilidad1="";
        var type0=data.types[0].type.name;
        try{
            var type1=data.types[1].type.name;
        }catch{
            
        }
        
        var habilidad0=data.abilities[0].ability.name;
        var habilidad1=data.abilities[1].ability.name;

        pname = pname.charAt(0).toUpperCase() + pname.slice(1);
        
        

        habilidad0=habilidad0.charAt(0).toUpperCase() + habilidad0.slice(1);
        habilidad1=habilidad1.charAt(0).toUpperCase() + habilidad1.slice(1);

        console.log(pn+": "+pname);
        console.log(type0+"/"+type1);
        console.log("Hablilidades: "+habilidad0+"/"+habilidad1);
        document.getElementById("Sprite").src = img;
        var tipo1 = document.getElementById("t1");
        var tipo2 = document.getElementById("t2");
        tipo1.className="pkm-type "+type0;
        tipo2.className="pkm-type "+type1;

        type0=type0.charAt(0).toUpperCase() + type0.slice(1);
        type1=type1.charAt(0).toUpperCase() + type1.slice(1);

        document.getElementById("st1").innerHTML=type0;
        document.getElementById("st2").innerHTML=type1;
        //console.log(data);
    });

    
}

const imprimir = () =>{
    const pokenumb =document.getElementById("Npoke");
    
    
}