'use client'

import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco, Image } from "./style"


export const Card = (props: IProps) => {
    return (
        <CardBody>
            <Image src='' alt={props.nome} />
            <Title> {props.nome} </Title>
            <TitlePreco> {props.valor}</TitlePreco>
            <TextPromo> {props.promo}</TextPromo>

            <Button>
                <TextButton> Detalhes</TextButton>
            </Button>
        </CardBody>

    )
}
