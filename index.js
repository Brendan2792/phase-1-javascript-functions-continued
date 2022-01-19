function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(symbol = "*") {
    
    const encouragement = function (positive = "special") {
        return `You are ${symbol}${positive}${symbol}!`
    }
    return encouragement
}
wrapAdjective("||")("a dedicated programmer")