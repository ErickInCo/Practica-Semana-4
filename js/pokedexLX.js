var datosmoves = [];
const nextPokemon = () => {
    var dato=parseInt(document.getElementById("Npoke").value);
    document.getElementById("Npoke").value = Math.min(dato + 1, 789);
    fetchPokemon();
}

const previousPokemon = () => {
    var dato=parseInt(document.getElementById("Npoke").value);
    document.getElementById("Npoke").value = Math.max(dato - 1, 1);;
    fetchPokemon();
}

const nextMove = () => {
    var dato=parseInt(document.getElementById("Nmove").value);
    var ndato=Math.min(dato + 1, datosmoves.length-1);
    console.log(ndato);
    console.log(datosmoves.length);
    document.getElementById("Nmove").value= ndato;
    document.getElementById("datomn").innerHTML=datosmoves[ndato][0];
    document.getElementById("datoac").innerHTML="Accuracy....."+datosmoves[ndato][2];
    document.getElementById("datopo").innerHTML="Power........."+datosmoves[ndato][3];
    document.getElementById("datopp").innerHTML="PP............"+datosmoves[ndato][4];
    var tipoclass="type "+datosmoves[ndato][1];
    document.getElementById("datotipo").className=tipoclass;
    document.getElementById("datotipo").innerHTML=datosmoves[ndato][1];
    
}

const previousMove = () => {
    
    var dato=parseInt(document.getElementById("Nmove").value);
    var ndato=Math.max(dato - 1, 0);
    document.getElementById("Nmove").value = ndato ;
    document.getElementById("datomn").innerHTML=datosmoves[ndato][0];
    document.getElementById("datoac").innerHTML="Accuracy....."+datosmoves[ndato][2];
    document.getElementById("datopo").innerHTML="Power........."+datosmoves[ndato][3];
    document.getElementById("datopp").innerHTML="PP............"+datosmoves[ndato][4];
    var tipoclass="type "+datosmoves[ndato][1];
    document.getElementById("datotipo").className=tipoclass;
    document.getElementById("datotipo").innerHTML=datosmoves[ndato][1];
    
}

const fetchPokemon = () => {
    datosmoves = [["growl", "normal", 100, 100, 10]]

    document.getElementById("Nmove").value = 0 ;
    var pokenumb = document.getElementById("Npoke").value;
    let result = pokenumb.toLowerCase();
    // console.log(pokenumb)
    const url = `https://pokeapi.co/api/v2/pokemon/${result}`;
    // console.log(url);
    fetch(url).then((res) =>{
        // console.log(res);
        return res.json();

    }).then((data) => {
        // console.log(data);
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
        try{
            var habilidad1=data.abilities[1].ability.name;
        }catch{}
        
        try{
            var habilidad2=data.abilities[2].ability.name;
        }catch{}
        

        pname = pname.charAt(0).toUpperCase() + pname.slice(1);
        
        

        habilidad0=habilidad0.charAt(0).toUpperCase() + habilidad0.slice(1);
        habilidad1=habilidad1.charAt(0).toUpperCase() + habilidad1.slice(1);
        try{
            habilidad2=habilidad2.charAt(0).toUpperCase() + habilidad2.slice(1);
        }catch{}

        // console.log(pn+": "+pname);
        // console.log(type0+"/"+type1);
        // console.log("Hablilidades: \n"+habilidad0+"/"+habilidad1);
        document.getElementById("Sprite").src = img;
        var tipo1 = document.getElementById("st1");
        var tipo2 = document.getElementById("st2");
        var classt0="type "+type0;
        var classt1="type "+type1;
        
        try{
            tipo1.className=classt0;
            tipo2.className=classt1;
        }catch{}
        

        type0=type0.charAt(0).toUpperCase() + type0.slice(1);
        type1=type1.charAt(0).toUpperCase() + type1.slice(1);

        
        var datoNombreNo=pname+" No. "+pn;
        document.getElementById("idnombre").innerHTML=datoNombreNo;
        try{
            document.getElementById("Npoke").value=pn;
        }catch{}
        

        var datoHabilidad="Hablilidades: \n"+habilidad0+"/"+habilidad1;
        // console.log(datoHabilidad)
        try{
            document.getElementById("idhabilidades").innerHTML=datoHabilidad;

        }catch{}
        try{
            document.getElementById("idnop").innerHTML=pn;

        }catch{}
        try{
            document.getElementById("st1").innerHTML=type0;

        }catch{}
        try{
            document.getElementById("st2").innerHTML=type1;
        }catch{}
        var v1=data.stats[0].base_stat;
        var v2=data.stats[1].base_stat;
        var v3=data.stats[2].base_stat;
        var v4=data.stats[3].base_stat;
        var v5=data.stats[4].base_stat;
        var v6=data.stats[5].base_stat;

        var datohp="hp................"+v1;
        var datoat="attack............"+v2;
        var datodf="defense..........."+v3;
        var datosa="special-attack...."+v4;
        var datosd="special-defense..."+v5;
        var datosp="speed............."+v6;

        document.getElementById("datoshp").innerHTML=datohp;
        document.getElementById("datosat").innerHTML=datoat;
        document.getElementById("datosdf").innerHTML=datodf;
        document.getElementById("datossa").innerHTML=datosa;
        document.getElementById("datossd").innerHTML=datosd;
        document.getElementById("datossp").innerHTML=datosp;

        var moves = data.moves;
        
        datosmoves.pop();
        for (const element of moves){
            const url = element.move.url;
            fetch(url).then((res) =>{
                // console.log(res);
                return res.json();
            }).then((data) => {
                // console.log("##########################\n"+data.accuracy+"\n"+data.name+"\n"+data.power+"\n"+data.pp+"\n"+data.type.name+"\n");
                const movimientosepsi = [];
                movimientosepsi.push(data.name);
                movimientosepsi.push(data.type.name);
                movimientosepsi.push(data.accuracy);
                movimientosepsi.push(data.power);
                movimientosepsi.push(data.pp);
                datosmoves.push(movimientosepsi)

            });
            // console.log(element.move)
        }

        document.getElementById("datomn").innerHTML=datosmoves[ndato][0];
        document.getElementById("datoac").innerHTML="Accuracy....."+datosmoves[ndato][2];
        document.getElementById("datopo").innerHTML="Power........."+datosmoves[ndato][3];
        document.getElementById("datopp").innerHTML="PP............"+datosmoves[ndato][4];
        var tipoclass="type "+datosmoves[ndato][1];
        document.getElementById("datotipo").className=tipoclass;
        document.getElementById("datotipo").innerHTML=datosmoves[ndato][1];
        
        
        console.log(datosmoves[0]);
        // //console.log(data);
    });



    
}