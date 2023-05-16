function judgePoem(pwords) {
    let preLen = -1;
    let returnFlag = true;
    for (const p of pwords) {
        const pLen = p.w.length;
        // 初始化
        if(preLen === -1 && pLen >= 5) {
            preLen = pLen;
            continue;
        }else if(preLen === -1) {
            returnFlag = false;
            break;
        }
        // 分词长度必须大于等于5，并且长度一样
        if(pLen >= 5 && pLen === preLen) {
            continue;
        }else {
            returnFlag = false;
            break;
        }
    }
    return returnFlag;
}
console.log(judgePoem([{w: "xxxxx"},{w: "xxxxx1"}]))
