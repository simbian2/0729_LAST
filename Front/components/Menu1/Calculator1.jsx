import { useState } from 'react'

const Calculator1 = ()=>{

    const [Location, setLocation] = useState(1)
    const [Location2, setLocation2] = useState(1)
    const [Income, setIncome] = useState(1)
    const [Person, setPerson] = useState(1)
    const [Cost, setCost] = useState(1)

    const [option3, setOption3] = useState(1)
    const [Result1, setResult1] = useState(1)
    const [Result3, setResult3] = useState(1)

    const changOption3 = (e) => {
        setOption3(e.target.value)

    }
    const ChangeLocation = (e) => {
        setLocation(e.target.value)
    }

    const ChangeIncome = (e) => {
        setIncome(e.target.value)
    }

    const ChangePerson = (e) => {
        setPerson(e.target.value)
    }
    const ChangeCost = (e) => {
        setCost(e.target.value)
    }

    const HandleResult3 = (e) => {
        {
            option3 < 12
            ? setResult3(1)
            : ( option3 >= 12 && option3 < 24
                ? setResult3(2)
                : ( option3 >= 24
                    ? setResult3(3)
                    : ''
                    )
                )
        }
    }

    
    const HandleResult1 = (e) => {
        {
            Income == "two" && Person == "three" && Cost <= 4824128
            ? setResult1(3)
            : ( Income == "one" && Person == "three" && Cost <= 4221112
                ? setResult1(3)
                : ( Income == "two" && Person == "three" && Cost > 4824128 && Cost <= 6633176
                    ? setResult1(2)
                    : ( Income == "one" && Person == "three" && Cost > 4221112 && Cost <= 6030160
                    ? setResult1(2)
                    : ( Income == "two" && Person == "three" && Cost > 6633176
                    ? setResult1(1)
                    : ( Income == "one" && Person == "three" && Cost > 6030160
                    ? setResult1(1)
                    : ( Income == "two" && Person == "four" && Cost <= 5675364 || Income == "two" && Person == "five" && Cost <= 5675364
                    ? setResult1(3)
                    : ( Income == "one" && Person == "four" && Cost <= 4965944 || Income == "one" && Person == "five" && Cost <= 4965944
                    ? setResult1(3)
                    : ( Income == "two" && Person == "four" && Cost > 5675364 && Cost <= 7803626 || Income == "two" && Person == "five" && Cost > 5675364 && Cost <= 7803626
                    ? setResult1(2)
                    : ( Income == "one" && Person == "four" && Cost > 4965944 && Cost <= 7094205 || Income == "one" && Person == "five" && Cost > 4965944 && Cost <= 7094205
                    ? setResult1(2)
                    : ( Income == "two" && Person == "four" && Cost > 7803626 || Income == "two" && Person == "five" && Cost > 7803626
                    ? setResult1(1)
                    : ( Income == "one" && Person == "four" && Cost > 7094205 || Income == "one" && Person == "five" && Cost > 7094205
                    ? setResult1(1)
                    : ( Income == "two" && Person == "six" && Cost <= 5914918
                    ? setResult1(3)
                    : ( Income == "one" && Person == "six" && Cost <= 5175553
                    ? setResult1(3)
                    : ( Income == "two" && Person == "six" && Cost > 5914918 && Cost <= 8133012
                    ? setResult1(2)
                    : ( Income == "one" && Person == "six" && Cost > 5175553 && Cost <= 7393647
                    ? setResult1(2)
                    : ( Income == "two" && Person == "six" && Cost > 8133012
                    ? setResult1(1)
                    : ( Income == "one" && Person == "six" && Cost > 7393647
                    ? setResult1(1)
                    : ( Income == "two" && Person == "seven" && Cost <= 6222418
                    ? setResult1(3)
                    : ( Income == "one" && Person == "seven" && Cost <= 5444616
                    ? setResult1(3)
                    : ( Income == "two" && Person == "seven" && Cost > 6222418 && Cost <= 8555825
                    ? setResult1(2)
                    : ( Income == "one" && Person == "seven" && Cost > 5444616 && Cost <= 7778023
                    ? setResult1(2)
                    : ( Income == "two" && Person == "seven" && Cost > 8555825 
                    ? setResult1(1)
                    : ( Income == "one" && Person == "seven" && Cost > 7778023 
                    ? setResult1(1)
                    : ( Income == "two" && Person == "eight" && Cost <= 6529919 
                    ? setResult1(3)
                    : ( Income == "one" && Person == "eight" && Cost <= 5713679 
                    ? setResult1(3)
                    : ( Income == "two" && Person == "eight" && Cost > 6529919 && Cost <= 8978639 
                    ? setResult1(2)
                    : ( Income == "one" && Person == "eight" && Cost > 5713679 && Cost <= 8162399 
                    ? setResult1(2)
                    : ( Income == "two" && Person == "eight" && Cost > 8978639 
                    ? setResult1(1)
                    : ( Income == "one" && Person == "eight" && Cost > 8162399 
                    ? setResult1(1)
                    : ''
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    )
                    ))
                    ))
                
    }}

    const ChangeLocation2 = (e) => {
        setLocation2(e.target.value)
    }

    return(
        <>
            <div class = "subscription_wrap w100">
                <div class = "subscription w1200">
                    <div class>
                        <div class = "calculator_content1">
                            <div class = "option1">
                                <h5>(1) ????????????</h5><input onClick = {HandleResult1} class = "BTN" type = "button" value = "??????"/>
                                <h6>1. ????????? ?????? ??????</h6>
                                <select onClick = {ChangeIncome}>
                                    <option value = "two">?????????</option>
                                    <option value = "one">?????????</option>
                                    <option value = "zero">??? ??? ??????</option>
                                </select>
                                <h6>2. ?????? ???</h6>
                                <select onClick = {ChangePerson}>
                                    <option value = "three">3??? ??????</option>
                                    <option value = "four">4???</option>
                                    <option value = "five">5???</option>
                                    <option value = "six">6???</option>
                                    <option value = "seven">7???</option>
                                    <option value = "eight">8???</option>
                                </select>
                                <h6>3. ????????????</h6>
                                    <div><input class = "option1" type = "text" onChange = {ChangeCost}/>???</div>
                                <div class = "score">?????? : <span class = "option1_result">{Result1}</span></div>
                            </div>
                            <div class = "option2">
                                <h5>(2) ?????? ???*??? ?????? ????????????</h5>
                                <h6>1. ?????? ??????</h6>
                                <select onClick = {ChangeLocation}>
                                    <option>
                                        ???/???
                                    </option>
                                    <option value = "seoul">
                                        ???????????????
                                    </option>
                                    <option value = "busan">
                                        ???????????????
                                    </option>
                                    <option value = "dagu">
                                        ???????????????
                                    </option>
                                    <option value = "Incheon">
                                        ???????????????
                                    </option>
                                    <option value = "GwangJu">
                                        ???????????????
                                    </option>
                                    <option value = "Daejeon">
                                        ???????????????
                                    </option>
                                    <option value = "Ulsan">
                                        ???????????????
                                    </option>
                                    <option value = "SaeJong">
                                        ?????????????????????
                                    </option>
                                    <option value = "GyeongGi">
                                        ?????????
                                    </option>
                                    <option value = "GangWon">
                                        ?????????
                                    </option>
                                    <option value = "ChungCheong1">
                                        ????????????
                                    </option>
                                    <option value = "ChungCheong2">
                                        ????????????
                                    </option>
                                    <option value = "JeongLa1">
                                        ????????????
                                    </option>
                                    <option value = "JeongLa2">
                                        ????????????
                                    </option>
                                    <option value = "GyeongSang1">
                                        ????????????
                                    </option>
                                    <option value = "GyeongSang2">
                                        ????????????
                                    </option>
                                    <option value = "Jeju">
                                        ?????????????????????
                                    </option>
                                </select>   
                                <select>
                                    <option>
                                        ???/???
                                    </option>
                                        {
                                            Location === 'seoul'
                                            ? <>
                                                <option>?????????</option>
                                                <option>??????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>????????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>????????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>????????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                <option>?????????</option>
                                                </>
                                                : ( Location === 'busan'
                                                    ? <>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>?????????</option>
                                                    <option>????????????</option>
                                                    <option>?????????</option>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>????????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'dagu'
                                                    ? <>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'GwangJu'
                                                    ? <>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'Daejeon'
                                                    ? <>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'Ulsan'
                                                    ? <>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'Incheon'
                                                    ? <>
                                                    <option>??????</option>
                                                    <option>??????</option>
                                                    <option>????????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>??????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'SaeJong'
                                                    ? <>
                                                    <option>?????????????????????</option>
                                                    </>
                                                    : ( Location === 'GyeongGi'
                                                    ? <>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>????????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>????????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>????????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'GangWon'
                                                    ? <>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'ChungCheong1'
                                                    ? <>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'ChungCheong2'
                                                    ? <>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'JeongLa1'
                                                    ? <>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'JeongLa2'
                                                    ? <>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'JeongLa2'
                                                    ? <>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'GyeongSang1'
                                                    ? <>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'GyeongSang2'
                                                    ? <>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    <option>?????????</option>
                                                    </>
                                                    : ( Location === 'Jeju'
                                                    ? <>
                                                    <option>?????????????????????</option>
                                                    </>
                                                    : 'GyeongSang1')))))))))))))))))
                                        }
                                </select>
                                <h6>2. ?????? ??????</h6>
                                <div class = ""><input type = "text"/>??????</div>
                                <div class = "score">?????? : <span class = "option2_result"></span></div>
                            </div>
                            <div class = "option3">
                                <h5>(3) ???????????????????????? ???????????? ??????</h5><input onClick = {HandleResult3} class = "BTN" type = "button" value = "??????"/>
                                <div>
                                    <input onChange = {changOption3} type = "text" />???
                                </div>
                                <div class = "score">?????? : <span class = "option3_result">{Result3}</span></div>
                            </div>
                            <div class = "score totalScore">?????? : <span class = "total_result">{Result1+Result3}</span></div>
                            <div class = "score totalScore">?????? ??????</div>
                            <select class = "Select_Box" onClick = {ChangeLocation2}>
                                <option value = "first">1??? ??????(7???)</option>
                                <option value = "second">2??? ??????(10???)</option>
                                <option value = "third">3??? ??????(11???)</option>
                                <option value = "fourth">4??? ??????(12???)</option>
                            </select>
                            <select class = "Select_Box">
                                {
                                    Location2 == 'first'
                                    ? <>
                                    <option>????????????</option>
                                    <option>???????????????2</option>
                                    <option>????????????1</option>
                                    <option>????????????2</option>
                                    <option>??????</option></>
                                    : (
                                        Location2 == 'second'
                                        ? <>
                                             <option>???????????????2</option>
                                    <option>????????????</option>
                                    <option>????????????</option>
                                    <option>????????????2</option>
                                    <option>???????????????</option>
                                    <option>???????????????</option>
                                    <option>????????????</option>
                                    <option>????????????</option>
                                    <option>????????????</option>
                                    <option>????????????</option>
                                    <option>????????????3</option></>
                                        : (
                                            Location2 == 'third'
                                            ? <>
                                            <option>????????????</option>
                                   <option>????????????</option>
                                   <option>????????????</option>
                                   <option>????????????</option></>
                                            : (
                                                Location2 == 'fourth'
                                                ? <> <option>???????????????</option>
                                                <option>????????????</option>
                                                <option>????????????</option>
                                                <option>????????????</option>
                                                <option>????????????</option>
                                                <option>????????????</option>
                                                <option>????????????2</option>
                                                <option>??????????????????</option>
                                                <option>?????????????????????</option>
                                                <option>????????????</option></>
                                                :'bye'
                                            )
                                        )
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calculator1