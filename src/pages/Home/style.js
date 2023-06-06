import styled from 'styled-components/native'


export const Background = styled.View`
    flex: 1;
    background-color: #f9f4f1;
    /* background-color: #f0e2dd; */
`


    
export const SearchArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-top: 16px;
`

export const InputArea = styled.View`
    width: 73%;
    flex-direction: row;
    align-items: center;

`

export const CartWrapper = styled.View`
    height: 50px;
    width: 46px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`

export const IconWrapper = styled.View`
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    /* border-radius: 6px; */
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;

    border-bottom-width: .4px;
    border-left-width: .4px;
    border-top-width: .4px;

    width: 12%;

    border-color: #bebebe;
`

export const ScrollWrapper = styled.View`
    /* height: 80px; */
    align-items: center;
    padding-bottom: 8px;
`

export const ListHeader = styled.View`
    width: 100%;
    justify-content: flex-start;
    padding-top: 8px;
    padding-bottom: 8px;
`