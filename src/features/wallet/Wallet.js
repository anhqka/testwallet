import { FlexCol } from "./components/FlexCol"
import { FlexRow } from "./components/FlexRow"
import {ContainerCol} from "./components/ContainerCol"
import {Span} from "./components/Span"
import {TopTabs} from "./components/TopTabs"
import {Input} from "./components/Input"
import { useEffect, useRef, useState } from "react"

const Wallet = () => {
    const [state, setstate] = useState(false)
       if(state){
        document.getElementById("sampleText").blur();
        setstate(false)
       }

    return (
        <ContainerCol>
            <FlexRow justifyContent="start">
                <TopTabs>Nạp tiền điện thoại</TopTabs>
                <TopTabs>Nạp data 3G/4G</TopTabs>
            </FlexRow>
            <FlexCol>
                <Span>Số của tôi</Span>
                <FlexRow borderbAndPadding="true" justifyContent="space-between">
                    <input onClick={() => setstate(true)} id="sampleText"/>
                    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" width={40}/>
                </FlexRow>
            </FlexCol>
        </ContainerCol>
    )
}

export default Wallet