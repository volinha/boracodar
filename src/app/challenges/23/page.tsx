import Page from "./layout";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '#23',
  description: 'Desafio #23 - Rocketseat',
}

export default function Home() {
    return (
        <Page />
    )
}