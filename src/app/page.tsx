import { Card } from "@/components/Card";
import { Menu } from "@/components/Menu";
import { IProduto } from "@/interfaces";
import axios from "axios";

interface IReqProdutos {
  data: Array<IProduto>
}

export default async function Home() {

  const { data }: IReqProdutos = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + '/produtos'
  )

  return (
    <>
      <Menu />

      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
        }}
      >
        <h2> Produtos em destaque: </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Card */}

          {
            data?.map((produto) => (
              <Card
                key={produto.id}
                id={produto.id}
                id_categoria={produto.id_categoria}
                nome={produto.nome}
                valor={produto.valor}
                promo={produto.promo}
                imagemg={produto.imagemg}
              />
            ))
          }

        </div>
      </div>
    </>
  );
}
