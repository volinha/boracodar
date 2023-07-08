import Page from "./layout";

import { Metadata } from 'next'


 
export const metadata: Metadata = {
  title: 'Página 404 - #27',
  description: 'Desafio #27 - Rocketseat',
}

export default function Home() {
    return (
        <Page />
    )
}