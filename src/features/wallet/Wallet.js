import { FlexCol } from "./components/FlexCol"
import { FlexRow } from "./components/FlexRow"
import { Span } from "./components/Span"
import { TopTabs } from "./components/TopTabs"
import { Input } from "./components/Input"
import { useEffect, useState } from "react"
import { ContainerCol } from "./components/ContainerCol"
import { Cell0, Cell1, Cell2, Cell3, Cell4, Cell5, Cell6, Cell7, Cell8, Cell9, CellRemove, CellContinue } from "./components/keyboard/Cell"
import { Keyboard } from "./components/keyboard/Keyboard"


const Wallet = () => {
    const [showKeyboard, setShowKeyboard] = useState(false)
    useEffect(() => {
        const inpPhoneNumber = document.querySelector("#inpPhoneNumber")
        inpPhoneNumber.addEventListener("blur", (e) => {
            e.preventDefault()
            return
        })
    }, [])

    return (
        <ContainerCol>
            <FlexRow justifyContent="start">
                <TopTabs>Nạp tiền điện thoại</TopTabs>
                <TopTabs>Nạp data 3G/4G</TopTabs>
            </FlexRow>
            <FlexCol>
                <Span>Số của tôi</Span>
                <FlexRow borderbAndPadding="true" justifyContent="space-between">
                    <Input id="inpPhoneNumber" onClick={() => setShowKeyboard(true)} onMouseLeave={() => setShowKeyboard(false)}/>
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