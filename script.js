const meuObjLista = new XMLHttpRequest();
meuObjLista.open("GET", "https://raw.githubusercontent.com/DS-Senai/json/refs/heads/main/tecnologias.json");
meuObjLista.responseType = "json";
meuObjLista.send();

meuObjLista.onload  = () => {
    let texto = document.querySelector('.json');
    var tec = meuObjLista.response;
     {
        
        texto.innerHTML += `
            <b>${tec.tecnologias[i].nome}</b><br>
            Tipo: ${tec.tecnologias[i].tipo}<br>
            Categoria: ${tec.tecnologias[i].categoria}<br>
            Descrição: ${tec.tecnologias[i].descricao}<br>
            Popularidade: ${tec.tecnologias[i].popularidade}<br>
            Ano: ${tec.tecnologias[i].ano_lancamento}<br>
            Tipo: ${tec.tecnologias[i].tipo}<br>
            Criador: ${tec.tecnologias[i].criador}<br>
            Bibliotecas: </br>  </br>    
            `
            for(let y=0;y< tec.tecnologias[i].bibliotecas_populares.length;y++){
                texto.innerHTML += `
                    <ul>Nome: ${tec.tecnologias[i].bibliotecas_populares[y].nome}<br>
                    Descrição: ${tec.tecnologias[i].bibliotecas_populares[y].descricao}<br>
                    Desenvolvedor: ${tec.tecnologias[i].bibliotecas_populares[y].desenvolvedor}</ul>
                
                `
            }
        texto.innerHTML += "<hr>"
            
    }
};

var obj = [{Nome: "João", Idade: 20 },{Nome: "Lucas", Idade: 19 }];

obj.forEach((objeto) => {
  console.log(objeto.Nome + " " + objeto.Idade);
})