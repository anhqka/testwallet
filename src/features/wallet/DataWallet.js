import { GridCol } from "./components/GridCol"
import { WalletProvider } from "./components/provider/WalletProvider"
import { WalletProviderIcon } from "./components/icon/WalletProviderIcon"
import { Image } from "./components/Image"
import { useState } from "react"
import { FlexRow } from "./components/FlexRow"
import { Tabs } from "./components/Tabs"
import { Span } from "./components/Span"
import { FlexCol } from "./components/FlexCol"
import { GridRow } from "./components/GridRow"

const DataWallet = () => {
    const [chooseProvider, setChooseProvider] = useState(1)
    const [choosePackage, setChoosePackage] = useState(30)
    const provArr = Array(4).fill(null)
    const packageDataArr = Array(6).fill(null)

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
            <FlexRow justifyContent="space-around">
                <Tabs onClick={() => setChoosePackage(30)} tabs={choosePackage === 30 && choosePackage}
                    flex="1" textAlign="center" textColor="#19D6FF" pb="8px" textWeight="500"> 30 Ngày
                </Tabs>
                <Tabs onClick={() => setChoosePackage(7)} tabs={choosePackage === 7 && choosePackage}
                    flex="1" textAlign="center" textColor="#19D6FF" pb="8px" textWeight="500"> 7 Ngày
                </Tabs>
                <Tabs onClick={() => setChoosePackage(3)} tabs={choosePackage === 3 && choosePackage}
                    flex="1" textAlign="center" textColor="#19D6FF" pb="8px" textWeight="500"> 3 Ngày
                </Tabs>
            </FlexRow>
            <GridRow gap="16px">
                {
                    packageDataArr.map((pack, index) => {
                        return (
                            <FlexCol key={index} bg="#013E58" justify="center" alignItems="center" p="8px 0">
                                <Span textWeight="500" textColor="#19D6FF" >500GB/ngày</Span>
                                <Span textColor="#19D6FF" >150.000</Span>
                            </FlexCol>
                        )
                    })
                }
            </GridRow>
        </>
    )
}

export default DataWallet