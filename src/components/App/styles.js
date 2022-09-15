import styled from 'styled-components'

export const MainConteiner = styled.main`
    background-color: #88C8EE;
    height: 120vh;
    display: flex;
`

export const Container = styled.div`
    margin:  auto;
    width: 600px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    background-color: #3FACEB;
    padding: 32px;
    border-radius: 5px;
    
`

export const Search = styled.div`
    display: flex;
    margin-bottom: 32px;
`


export const Input = styled.input`
    width: 100%;
    font-size: 20px;
   
    padding: 10px 13px;
    border-radius: 5px;
    border: 1px solid #ccc;
    &:focus {
        outline: 0;
    }
`

export const Button = styled.button`
    background: #1a73e8;
    color: #fff;
    border: 0;
    border-radius: 5px;
    margin-left: 10px;
    padding: 0px 18px;
    font-size: 16px;
    font-weight: bolder;

    cursor: pointer;
    &:hover {
        background: #1562c7;
    }
`
