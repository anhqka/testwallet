import { FlexCol } from "./components/FlexCol"
import { FlexRow } from "./components/FlexRow"
import { Span } from "./components/Span"
import { TopTabs } from "./components/TopTabs"
import { Input } from "./components/Input"
import { ContainerCol } from "./components/ContainerCol"
import { GridCol } from "./components/GridCol"
import { Container } from "./components/Container"
import MoneyPhoneWallet from "./MoneyPhoneWallet"
import { useState } from "react"
import { Image } from "./components/Image"
import DataWallet from "./DataWallet"
import { ButtonStyle } from "./components/ButtonStyle"

const Wallet = () => {
    const [activeMenu, setActiveMenu] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState(0)

    let allowContinue = phoneNumber.length >= 10 && phoneNumber.length <= 11

    const handleGetPhoneNumber= (e) => {
        setPhoneNumber(e.target.value)
    }

    return (
        <Container>
            <FlexRow justifyContent="start" position="fixed" z="50" bg="#004766" pb="16px" pt="16px">
                <TopTabs m="0 16px 0 24px" bg={activeMenu === 1 && activeMenu} onClick={() => setActiveMenu(1)}>Nạp tiền điện thoại</TopTabs>
                <TopTabs bg={activeMenu === 2 && activeMenu} onClick={() => setActiveMenu(2)}>Nạp data 3G/4G</TopTabs>
            </FlexRow>
            
            <ContainerCol>
                <FlexCol m="70px 0 0 0 " bg="#015A80" p="16px">
                    <Span textColor="#fff">Số của tôi</Span>
                    <GridCol borderbAndPadding="true" gridCol="9fr 1fr">
                        <Input mode="numeric" maxLength={10} onChange={handleGetPhoneNumber}/>
                        <Image src="wallet.png" w="30px" h="30px" />
                    </GridCol>
                </FlexCol>
                {
                    activeMenu === 1 ? <MoneyPhoneWallet /> : <DataWallet />
                }
            </ContainerCol>
            <FlexRow botom="0" justifyContent="center" bg="#004766" position="fixed" z="50" pb="16px" pt="16px">
                    <ButtonStyle disabled={!allowContinue} bg={allowContinue} w="88%"  bRadius="16px" p="16px" color="#015A80" textSize="16px" textWeight="500">Tiếp tục</ButtonStyle>
            </FlexRow>
        </Container>
    )
}

export default Wallet