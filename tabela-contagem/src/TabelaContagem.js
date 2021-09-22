import './App.css';

function contaVogais(str) {
  const m = str.match(/[aeiouáâãàéêíóôõú]/gi);
  return m === null ? 0 : m.length;
}

function contaConsoantes(str) {
  const m = str.match(/[bcdfghjklmnpqrstvwxyzç]/gi);
  return m === null ? 0 : m.length;
}

function calcularCodigo(frase) {
    return `${contaVogais(frase)}V ${contaConsoantes(frase)}C`;
}

export function TabelaContagem({ frases }) {
    return (
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Texto Digitado</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody>
            {frases.map((frase, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <td>{frase}</td>
                    <td>{calcularCodigo(frase)}</td>
                </tr>
            ))}
        </tbody>
      </table>
    );
}