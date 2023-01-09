import { FlexCol } from "./components/FlexCol"
import { FlexRow } from "./components/FlexRow"
import { ContainerCol } from "./components/ContainerCol"
import { Span } from "./components/Span"
import { TopTabs } from "./components/TopTabs"
import { Input } from "./components/Input"
import styled from "styled-components"
import { useState } from "react"


const Keyboard = styled.div`
  display: grid;
  grid-template-areas:
    "continue continue continue "
    "number1 number2 number3 "
    "number4 number5 number6"
    "number7 number8 number9"
    ". number0 remove";

    text-align: center;
    grid-gap: 0.25rem;
    position: fixed;
    width: 100vw;
    transition: all 0.5s ease-out;
    ${({showKeyboard}) => showKeyboard === false ? "bottom: -125px" : `bottom: 0`}
;
`;
const CellContinue = styled.nav`
  background: #3a3a55;
  grid-area: continue;
  padding: 0.25rem;
  
`;
const Cell1 = styled.main`
  background: #1f2128;
  grid-area: number1;
  padding: 0.25rem;
`;
const Cell2 = styled.main`
  background: #1f2128;
  grid-area: number2;
  padding: 0.25rem;
`;
const Cell3 = styled.main`
  background: #1f2128;
  grid-area: number3;
  padding: 0.25rem;
`;
const Cell4 = styled.main`
  background: #1f2128;
  grid-area: number4;
  padding: 0.25rem;
`;
const Cell5 = styled.main`
  background: #1f2128;
  grid-area: number5;
  padding: 0.25rem;
`;
const Cell6 = styled.main`
  background: #1f2128;
  grid-area: number6;
  padding: 0.25rem;
`;
const Cell7 = styled.main`
  background: #1f2128;
  grid-area: number7;
  padding: 0.25rem;
`;
const Cell8 = styled.main`
  background: #1f2128;
  grid-area: number8;
  padding: 0.25rem;
`;
const Cell9 = styled.main`
  background: #1f2128;
  grid-area: number9;
  padding: 0.25rem;
`;
const Cell0 = styled.main`
  background: #1f2128;
  grid-area: number0;
  padding: 0.25rem;
`;
const CellRemove = styled.main`
  background: #1f2128;
  grid-area: remove;
  padding: 0.25rem;
`;


const Wallet = () => {
    const [showKeyboard, setShowKeyboard] = useState(false)

    return (
        <ContainerCol>
            <FlexRow justifyContent="start">
                <TopTabs>Nạp tiền điện thoại</TopTabs>
                <TopTabs>Nạp data 3G/4G</TopTabs>
            </FlexRow>
            <FlexCol>
                <Span>Số của tôi</Span>
                <FlexRow borderbAndPadding="true" justifyContent="space-between">
                    <Input onClick={() => setShowKeyboard(true)} onMouseLeave={() => setShowKeyboard(false)}/>
                    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" width={40} />
                </FlexRow>
            </FlexCol>
            <Keyboard showKeyboard={showKeyboard}>
                <CellContinue>Tiếp tục</CellContinue>
                <Cell1>1</Cell1>
                <Cell2>2</Cell2>
                <Cell3>3</Cell3>
                <Cell4>4</Cell4>
                <Cell5>5</Cell5>
                <Cell6>6</Cell6>
                <Cell7>7</Cell7>
                <Cell8>8</Cell8>
                <Cell9>9</Cell9>
                <Cell0>0</Cell0>
                <CellRemove>X</CellRemove>
            </Keyboard>

        </ContainerCol>
    )
}

export default Wallet