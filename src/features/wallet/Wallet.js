import { FlexCol } from "./components/FlexCol"
import { FlexRow } from "./components/FlexRow"
import { Span } from "./components/Span"
import { TopTabs } from "./components/TopTabs"
import { Input } from "./components/Input"
import { ContainerCol } from "./components/ContainerCol"
import { GridCol } from "./components/GridCol"
import { Money, WalletProvider, WalletProviderMoney } from "./components/provider/WalletProvider"
import { WalletProviderIcon } from "./components/icon/WalletProviderIcon"
import { CheckOutlined } from "@ant-design/icons"

const Wallet = () => {

    return (
        <ContainerCol>
            <FlexRow justifyContent="start" position="fixed" z="50" bg="#004766" pb="16px">
                <TopTabs>Nạp tiền điện thoại</TopTabs>
                <TopTabs>Nạp data 3G/4G</TopTabs>
            </FlexRow>
            <FlexCol m="53px 0 0 0 " >
                <Span>Số của tôi</Span>
                <GridCol borderbAndPadding="true" gridCol="9fr 1fr">
                    <Input mode="numeric" />
                    <CheckOutlined />
                </GridCol>
            </FlexCol>
            <GridCol gridCol="1fr 1fr 1fr" gap="13px">
                <WalletProvider>
                    <WalletProviderIcon />
                    <img src="https://www.baokontum.com.vn/uploads/Image/2021/01/20/101759Logo%20moi%20cua%20Viettel.JPG" width={60} />
                </WalletProvider>
                <WalletProvider>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAVFBMVEX///8AmdcAl9YAldUfntkUnNjt9vtcr9+/3vFzvOSCwOXH4vS42/AhoNn2+/3n8/rf7viIxeen0uyTyek1pNtfs+DS6fYAkNNpuOJGqt2czuux1+6QK0uCAAAC2UlEQVRoge2V63LcIAxGEQgvvoDvt/X7v2c/4d1m07qZTJtpZzo6P2LHXA6SgDVGURRFURRFURRFURRFURRFUf53hqrsPtWxWJb2C72bdfWnOjarK7/QW3r6nDeQr77Q27Zd+kve7j4MWXkfGhOGoTVL1ddp3KftLHVTbeUoxaxDMF1fDcXTuwzD8ljvUFVjzlQbQmdq9EqP2fvxuA5lpVUElXOj2Rzq2zjbT86zd/jeTo6AO4zZHQ2r90RBvFzNaHE3mWJ0hO9uwurCuo4l/qUoy9vy4OvabZ5GPCZei7O+DTFmLZn9bMzN+6mfiV1rbhzJsmW2i3i9myJ6It2jZYq7ZR+TqYmji2jwG7YLHvuEwcWFFz33ZBbHu3l6I2PlteVoWucmpKnydIeXEVExe6wHXtvg3JH0QWqQjrQzAsBskg80TKZd2aMQFfn+KmAE1pmR6PjuzXumkDlT1xX4MzOG3tgHKRn0Cd5Z+mAsHBKbMQsCyFFIQ4T3Tl4ymZj5ytt7GgwWm968/dOLsKvb5On0suQrTcztYz8XMmUp4wUMKOpzEcUEb+V5nwGzu9paWOfckhTzwltiW0zz9vDm4Ttz9+qdc8qz17/zlh7pACxb5wL0gbC58kralsIM/oN4c/Gl4cd4RySi7boOt8KVFrVljj5dec+y4/tZX8ln8Jjy1XsQ59MU5PnqxcHIl0tdX1+CneQjX7c/ee/ynoZnfalJdWQoX73YN74qUs3RHq/eZBzTkArcDPOlVyp2nu3Ta232Ws+mk1NJLp9TeKPDK/vWBPvmxUWDw2xxsmbz3nusTGRxpVyW15iDpz2/lDHWpp43yWcxb8jBsltHZeCY411mZ92OagV8zDkhkkTKpWadrDaslL2RcImYMDlr3fwL7cek5xm4yTlv68vf3eUYwuU13NbLb1lfyN5/ADK+/AtvOI4/TZmiKIqiKIqiKIqiKIqiKIqiKF/BN1E6I0YZYJHfAAAAAElFTkSuQmCC" width={40} />
                </WalletProvider>
                <WalletProvider>
                    <img src="https://www.baokontum.com.vn/uploads/Image/2021/01/20/101759Logo%20moi%20cua%20Viettel.JPG" width={60} />
                </WalletProvider>
                <WalletProvider>
                    <img src="https://www.baokontum.com.vn/uploads/Image/2021/01/20/101759Logo%20moi%20cua%20Viettel.JPG" width={60} />
                </WalletProvider>
                <WalletProvider>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAVFBMVEX///8AmdcAl9YAldUfntkUnNjt9vtcr9+/3vFzvOSCwOXH4vS42/AhoNn2+/3n8/rf7viIxeen0uyTyek1pNtfs+DS6fYAkNNpuOJGqt2czuux1+6QK0uCAAAC2UlEQVRoge2V63LcIAxGEQgvvoDvt/X7v2c/4d1m07qZTJtpZzo6P2LHXA6SgDVGURRFURRFURRFURRFURRFUf53hqrsPtWxWJb2C72bdfWnOjarK7/QW3r6nDeQr77Q27Zd+kve7j4MWXkfGhOGoTVL1ddp3KftLHVTbeUoxaxDMF1fDcXTuwzD8ljvUFVjzlQbQmdq9EqP2fvxuA5lpVUElXOj2Rzq2zjbT86zd/jeTo6AO4zZHQ2r90RBvFzNaHE3mWJ0hO9uwurCuo4l/qUoy9vy4OvabZ5GPCZei7O+DTFmLZn9bMzN+6mfiV1rbhzJsmW2i3i9myJ6It2jZYq7ZR+TqYmji2jwG7YLHvuEwcWFFz33ZBbHu3l6I2PlteVoWucmpKnydIeXEVExe6wHXtvg3JH0QWqQjrQzAsBskg80TKZd2aMQFfn+KmAE1pmR6PjuzXumkDlT1xX4MzOG3tgHKRn0Cd5Z+mAsHBKbMQsCyFFIQ4T3Tl4ymZj5ytt7GgwWm968/dOLsKvb5On0suQrTcztYz8XMmUp4wUMKOpzEcUEb+V5nwGzu9paWOfckhTzwltiW0zz9vDm4Ttz9+qdc8qz17/zlh7pACxb5wL0gbC58kralsIM/oN4c/Gl4cd4RySi7boOt8KVFrVljj5dec+y4/tZX8ln8Jjy1XsQ59MU5PnqxcHIl0tdX1+CneQjX7c/ee/ynoZnfalJdWQoX73YN74qUs3RHq/eZBzTkArcDPOlVyp2nu3Ta232Ws+mk1NJLp9TeKPDK/vWBPvmxUWDw2xxsmbz3nusTGRxpVyW15iDpz2/lDHWpp43yWcxb8jBsltHZeCY411mZ92OagV8zDkhkkTKpWadrDaslL2RcImYMDlr3fwL7cek5xm4yTlv68vf3eUYwuU13NbLb1lfyN5/ADK+/AtvOI4/TZmiKIqiKIqiKIqiKIqiKIqiKF/BN1E6I0YZYJHfAAAAAElFTkSuQmCC" width={40} />
                </WalletProvider>
            </GridCol>
            <GridCol gridCol="1fr 1fr 1fr" gap="13px">
                <WalletProviderMoney>
                    <Money> 10.000</Money>
                </WalletProviderMoney>
                <WalletProviderMoney>
                    <Money> 20.000</Money>
                </WalletProviderMoney>
                <WalletProviderMoney>
                    <Money> 30.000</Money>
                </WalletProviderMoney>
                <WalletProviderMoney>
                    <Money> 50.000</Money>
                </WalletProviderMoney>
                <WalletProviderMoney>
                    <Money> 100.000</Money>
                </WalletProviderMoney>
            </GridCol>
        </ContainerCol>
    )
}

export default Wallet