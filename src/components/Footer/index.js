import * as S from './styles'

const Footer = () => {
   return(   
    <S.Footer>
        <S.TextContent>To learn more visit:</S.TextContent>
        <S.Link href='https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf'>Tabela TACO</S.Link>

        <S.Link href='http://www.tbca.net.br/base-dados/composicao_estatistica.php'>Tabela TBCA</S.Link>

        <S.Link href='https://github.com/Kaiqueperez'>Github</S.Link>

    </S.Footer>
   )
}

export default Footer