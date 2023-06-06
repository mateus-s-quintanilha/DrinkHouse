import styled from 'styled-components/native';


export const Background = styled.View`
    flex: 1;
    background-color: #f9f4f1;

    /* padding-left: 8px;
    padding-right: 8px; */
`

export const Header = styled.View`
    padding-top: 8px;
    padding-bottom: 16px;

    /* background: transparent; */
`

export const ContentWrapper = styled.View`
    width: 90%;
    /* height: 100%; */

    /* flex: 1; */
    /* align-items: center;
    justify-content: center; */

    /* border: 1px solid black; */
`

export const ImageWrapper = styled.View`
    width: 100%;
    /* justify-content: center; */
    align-items: center;
`

export const InfoProductWrapper = styled.View`
    padding-top: 16px;
`

export const InfoHeader = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;

    border-bottom-width: 2px;
    border-bottom-color: #878787;
`

export const Title = styled.Text`
    font-size: 26px;
    font-weight: bold;
    width: 55%;
    /* text-align: center; */
    color: #192841;
    align-items: flex-start;
`

export const RatingWrapper = styled.View`
    flex-direction: row;
`

export const Description = styled.View`
    padding-top: 16px;

    padding-bottom: 12px;
`

export const Footer = styled.View`
    /* height: 160px; */
    height: 15%;
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    /* align-items: center;
    justify-content: center; */
`

export const FooterContent = styled.View`
    width: 95%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 16px;
`

export const ProductQuantityWrapper = styled.View`

`

export const Price = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 26px;
`
