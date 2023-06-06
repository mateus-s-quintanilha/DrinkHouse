import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;    
    align-items: center;
    /* background-color: #f9f4f1; */
    /* background-color: #f1e3de; */
`

export const Title = styled.Text`
    font-size: 42px;
    font-weight: 700;
    /* text-align: center; */
    letter-spacing: 2px;
    /* color: #152238; */
    color: #192841;
    margin-top: 16px;
`


export const Header = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
`

export const Content = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`

export const InputWrapper = styled.View`
    width: 95%;
    align-items: center;
    margin-bottom: 32px;
`

export const SubmitButton = styled.TouchableOpacity`
    background-color: #192841;
    width: 60%;
    padding: 13px 15px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
`
export const SubmitTextButton = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 1px;
`

export const InputArea = styled.View`
    width: 90%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-color: #192841;
    height: 55px;
    margin: 16px;
`

export const Footer = styled.View`
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    /* background-color: white; */
`