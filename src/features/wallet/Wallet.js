import { FlexCol } from "./components/FlexCol"
import { FlexRow } from "./components/FlexRow"
import { Span } from "./components/Span"
import { TopTabs } from "./components/TopTabs"
import { Input } from "./components/Input"
import { ContainerCol } from "./components/ContainerCol"
import { GridCol } from "./components/GridCol"
import { CheckOutlined } from "@ant-design/icons"
import { Container } from "./components/Container"
import MoneyPhoneWallet from "./MoneyPhoneWallet"
import { useState } from "react"
import { Image } from "./components/Image"

const Wallet = () => {
    const [activeMenu, setActiveMenu] = useState(1)

    return (
        <Container>
            <ContainerCol>
                <FlexRow justifyContent="start" position="fixed" z="50" bg="#004766" pb="16px" pt="16px" gap="16px">
                    <TopTabs bg={activeMenu === 1 && activeMenu} onClick={() => setActiveMenu(1)}>Nạp tiền điện thoại</TopTabs>
                    <TopTabs bg={activeMenu === 2 && activeMenu} onClick={() => setActiveMenu(2)}>Nạp data 3G/4G</TopTabs>
                </FlexRow>

                <FlexCol m="70px 0 0 0 " >
                    <Span textColor="#fff">Số của tôi</Span>
                    <GridCol borderbAndPadding="true" gridCol="9fr 1fr">
                        <Input mode="numeric" />
                        <Image src="wallet.png" w="30px" h="30px"/>
                    </GridCol>
                </FlexCol>

                <MoneyPhoneWallet />
            </ContainerCol>
        </Container>
    )
}

export default Wallet