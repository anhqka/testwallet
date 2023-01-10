import { FlexCol } from "./components/FlexCol"
import { FlexRow } from "./components/FlexRow"
import { Span } from "./components/Span"
import { GridCol } from "./components/GridCol"
import { Money, WalletProvider, WalletProviderMoney } from "./components/provider/WalletProvider"
import { WalletProviderIcon } from "./components/icon/WalletProviderIcon"
import { Image } from "./components/Image"
import { useState } from "react"

const MoneyPhoneWallet = () => {
    const [chooseProvider, setChooseProvider] = useState(1)
    const [chooseCard, setChooseCard] = useState(1)
    const provArr = Array(4).fill(null)
    const cardArr = Array(4).fill(null)

    return (
        <>
            <GridCol gridCol="1fr 1fr 1fr" gap="13px">
                {
                    provArr.map((x, index) => {
                        return (
                            <WalletProvider key={index} onClick={() => setChooseProvider(index)}>
                                {chooseProvider === index && <WalletProviderIcon src="an.png" w="10px" h="10px" />}
                                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAVFBMVEX///8AmdcAl9YAldUfntkUnNjt9vtcr9+/3vFzvOSCwOXH4vS42/AhoNn2+/3n8/rf7viIxeen0uyTyek1pNtfs+DS6fYAkNNpuOJGqt2czuux1+6QK0uCAAAC2UlEQVRoge2V63LcIAxGEQgvvoDvt/X7v2c/4d1m07qZTJtpZzo6P2LHXA6SgDVGURRFURRFURRFURRFURRFUf53hqrsPtWxWJb2C72bdfWnOjarK7/QW3r6nDeQr77Q27Zd+kve7j4MWXkfGhOGoTVL1ddp3KftLHVTbeUoxaxDMF1fDcXTuwzD8ljvUFVjzlQbQmdq9EqP2fvxuA5lpVUElXOj2Rzq2zjbT86zd/jeTo6AO4zZHQ2r90RBvFzNaHE3mWJ0hO9uwurCuo4l/qUoy9vy4OvabZ5GPCZei7O+DTFmLZn9bMzN+6mfiV1rbhzJsmW2i3i9myJ6It2jZYq7ZR+TqYmji2jwG7YLHvuEwcWFFz33ZBbHu3l6I2PlteVoWucmpKnydIeXEVExe6wHXtvg3JH0QWqQjrQzAsBskg80TKZd2aMQFfn+KmAE1pmR6PjuzXumkDlT1xX4MzOG3tgHKRn0Cd5Z+mAsHBKbMQsCyFFIQ4T3Tl4ymZj5ytt7GgwWm968/dOLsKvb5On0suQrTcztYz8XMmUp4wUMKOpzEcUEb+V5nwGzu9paWOfckhTzwltiW0zz9vDm4Ttz9+qdc8qz17/zlh7pACxb5wL0gbC58kralsIM/oN4c/Gl4cd4RySi7boOt8KVFrVljj5dec+y4/tZX8ln8Jjy1XsQ59MU5PnqxcHIl0tdX1+CneQjX7c/ee/ynoZnfalJdWQoX73YN74qUs3RHq/eZBzTkArcDPOlVyp2nu3Ta232Ws+mk1NJLp9TeKPDK/vWBPvmxUWDw2xxsmbz3nusTGRxpVyW15iDpz2/lDHWpp43yWcxb8jBsltHZeCY411mZ92OagV8zDkhkkTKpWadrDaslL2RcImYMDlr3fwL7cek5xm4yTlv68vf3eUYwuU13NbLb1lfyN5/ADK+/AtvOI4/TZmiKIqiKIqiKIqiKIqiKIqiKF/BN1E6I0YZYJHfAAAAAElFTkSuQmCC" w="40px" />
                            </WalletProvider>
                        )
                    })
                }
            </GridCol>

            <GridCol gridCol="1fr 1fr 1fr" gap="13px">
                {
                    cardArr.map((card, index) => {
                        return (
                            <WalletProviderMoney  key={index} onClick={() => setChooseCard(index)} bg={chooseCard === index && chooseCard} >
                                <Money>10.000</Money>
                            </WalletProviderMoney>
                        )
                    })
                }
            </GridCol>

            <FlexCol bg="#015A80" p="16px">
                <Span textColor="#19D6FF" textWeight="500">Gần đây</Span>
                <FlexRow alignItems="center" >
                    <Image src="https://tmdl.edu.vn/wp-content/uploads/2022/07/logo-manchester-united-4.png" w="40px" h="40px" />
                    <FlexCol p="16px">
                        <Span textColor="#fff">Số của tôi</Span>
                        <Span textSize="14px" textColor="#19D6FF">098282822</Span>
                    </FlexCol>
                </FlexRow>
            </FlexCol>
            
            <FlexRow alignItems="center" gap="8px">
                <Image src="https://tmdl.edu.vn/wp-content/uploads/2022/07/logo-manchester-united-4.png" w="30px" h="30px" />
                <Span textSize="12px" textColor="#19D6FF">Foxpay đạt chứng chỉ bảo mật quốc tế SSL/TLS. Yên tâm khi thực hiện giao dịch.</Span>
            </FlexRow>
        </>
    )
}

export default MoneyPhoneWallet