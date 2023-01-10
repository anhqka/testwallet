import { FlexCol } from "./components/FlexCol"
import { FlexRow } from "./components/FlexRow"
import { Span } from "./components/Span"
import { TopTabs } from "./components/TopTabs"
import { Input } from "./components/Input"
import { useState } from "react"
import { ContainerCol } from "./components/ContainerCol"
import { Cell, CellContinue, SubmitCell } from "./components/keyboard/Cell"
import { ContainerKeyboard, Keyboard } from "./components/keyboard/Keyboard"
import { ChildrenCell } from "./components/ChildrenCell"


const Wallet = () => {
    const [showKeyboard, setShowKeyboard] = useState(false)
    const [cells, setCells] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

    const handleShowKeyBoard = () => {
        setShowKeyboard(false)
    }


    return (
        <ContainerCol onMouseDown={handleShowKeyBoard}>
            <FlexRow justifyContent="start">
                <TopTabs>Nạp tiền điện thoại</TopTabs>
                <TopTabs>Nạp data 3G/4G</TopTabs>
            </FlexRow>
            <FlexCol>
                <Span>Số của tôi</Span>
                <FlexRow borderbAndPadding="true" justifyContent="space-between">
                    {/* <Input onMouseOut={(e) => e.preventDefault()} onClick={() => setShowKeyboard(true)} /> */}
                    <input inputMode="numeric" onBeforeInput={false}/>
                    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" width={40} />
                </FlexRow>
            </FlexCol>

            {/* <ContainerKeyboard showKeyboard={showKeyboard} onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}>
                    
                {cells.map((cell) => cell === 0 && <SubmitCell>  <ChildrenCell>Tiếp tục</ChildrenCell>  </SubmitCell>)}
                <Keyboard >
                    {cells.map((cell) => <Cell cell={cell}> {cell === 1 ? "1" : cell === 2 ? "2" : cell === 3 ? "3" : cell === 4 ? "4" : cell === 5 ? "5" : cell === 6 ? "6" : cell === 7 ? "7" : cell === 8 ? "8" : cell === 9 ? "9" : cell === 10 ? "0" : cell === 12 ? "X" : ""} </Cell>
                    )}
                </Keyboard>
            </ContainerKeyboard> */}
        </ContainerCol>
    )
}

export default Wallet