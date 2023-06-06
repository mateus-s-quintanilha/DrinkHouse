import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f4f1;
    
    /* height: 140px; */

`

export const InfoWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 37%;
    padding-left: 12px;

    padding-top: 16px;
`

export const Name = styled.Text`
    color: #152238;
    font-size: 20px;
    font-weight: bold;
`