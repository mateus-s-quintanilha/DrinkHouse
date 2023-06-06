import styled from 'styled-components/native'


export const Container = styled.View`
    width: 46%;
    /* border: 1px solid black; */

    justify-content: center;
    align-items: center;
    padding-bottom: 32px;
`

export const ContentWrapper = styled.View`
    flex-direction: column;
    padding-top: 12px;

    width: 90%;
    justify-content: flex-start;
`

export const ImageWrapper = styled.View`
    width: 100%;

    /* justify-content: center; */
    justify-content: flex-end;
    align-items: center; 
    height: 225px;
`

export const Title = styled.Text`
    color: #152238;
    font-weight: bold;
    font-size: 18px;
    
    width: 100%;
`

export const Info = styled.Text`

    color: #192841;
    padding-top: 8px;
    font-size: 16px;
    opacity: .8;
`

export const PriceWrapper = styled.View`
    padding-top: 12px;

    width: 90%;
    justify-content: flex-start;
`

export const Price = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: #152238;   
`