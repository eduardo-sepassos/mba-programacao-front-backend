import { loadPacotes } from "./stub.js";

function onLoadPacotes() {
    const placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = "<p>Loading</p>"
    loadPacotes((data) => {
        placeholder.innerHTML=
        `<p>${data.length} pacotes carregados</p>
        <table>
            <tr>
                <th>Descrição</th>
                <th>Cidade</th>
                <th>Preço do pacote</th>
                <th>Nome Hotel</th>
            </tr>
            ${data.map(pacote => `
            <tr>
                <td>${pacote.descricao}</td>
                <td>${pacote.localidade.descricao}</td>
                <td>R$ ${String(pacote.valor.toFixed(2)).replace('.', ',')}</td>
                <td>${pacote.items.filter(item => item.nomeHotel).map(item => item.nomeHotel)}</td>
            </tr>           
            
        `).join("")}</table>`;
    })
}


export { onLoadPacotes };