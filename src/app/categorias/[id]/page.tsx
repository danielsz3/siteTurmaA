import { Card } from "@/components/Card"
import { Menu } from "@/components/Menu"
import { IProduto } from "@/interfaces"
import axios from "axios"
import { useEffect, useState } from "react"

interface IReqProdutos {
    data: Array<IProduto>
}

export default async function Categorias(
    { params }: { params: { id: string } }
) {
    const { data }: IReqProdutos = await axios.get(`http://localhost:3001/produtos?id_categoria=${params.id})`)

    return (
        <>
            <Menu />
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Categoria {params.id}</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}
            >
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
        </>
    )
}
