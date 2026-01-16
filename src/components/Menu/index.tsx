import './index.css'

export default function Menu() {
    return (
        <div className="menu">
            <table>
                <caption>Sanduíches</caption>
                <thead>
                    <tr>
                        <th scope="col" rowSpan={2}>
                            Produto
                        </th>
                        <th scope="col" rowSpan={2}>
                            Ingredientes
                        </th>
                        <th scope="col" colSpan={3}>
                            Valor
                        </th>
                    </tr>
                    <tr>
                        <th>Frango</th>
                        <th>Carne bovina</th>
                        <th>Picanha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Clássico</th>
                        <td>Pão de brioche, carne, queijo e cebola roxa</td>
                        <td>R$23,00</td>
                        <td>R$27,00</td>
                        <td>R$40,00</td>
                    </tr>
                    <tr>
                        <th scope="row">X-Salada</th>
                        <td>
                            Pão de brioche, carne, queijo, cebola roxa, alface
                            em rodelas e tomate
                        </td>
                        <td>R$26,00</td>
                        <td>R$30,00</td>
                        <td>R$43,00</td>
                    </tr>
                    <tr>
                        <th scope="row">Especial</th>
                        <td>
                            Pão de brioche, carne, queijo, cebola roxa e ovo
                        </td>
                        <td>R$27,00</td>
                        <td>R$31,00</td>
                        <td>R$44,00</td>
                    </tr>
                    <tr>
                        <th scope="row">X-Bacon</th>
                        <td>
                            Pão de brioche, carne, queijo, cebola roxa e bacon
                        </td>
                        <td>R$32,00</td>
                        <td>R$36,00</td>
                        <td>R$49,00</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <caption>Bebidas</caption>
                <thead>
                    <tr>
                        <th scope="col" rowSpan={2}>
                            Produto
                        </th>
                        <th scope="col" rowSpan={2}>
                            Opção
                        </th>
                        <th scope="col" colSpan={3}>
                            Valor
                        </th>
                    </tr>
                    <tr>
                        <th>300ml</th>
                        <th>500ml</th>
                        <th>1.5L</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">H2O</th>
                        <td>Normal</td>
                        <td>R$5,00</td>
                        <td>R$6,50</td>
                        <td>R$15,00</td>
                    </tr>
                    <tr>
                        <th scope="row">H2O</th>
                        <td>Limoneto</td>
                        <td>R$6,00</td>
                        <td>R$7,50</td>
                        <td>R$18,00</td>
                    </tr>
                    <tr>
                        <th scope="row">Coca-cola</th>
                        <td>Comum</td>
                        <td>R$5,00</td>
                        <td>R$6,50</td>
                        <td>R$9,00</td>
                    </tr>
                    <tr>
                        <th scope="row">Coca-cola</th>
                        <td>Diet</td>
                        <td>R$7,00</td>
                        <td>R$9,50</td>
                        <td>R$14,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
