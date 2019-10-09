(() => {
    let DICE = {
        mexp: require("math-expression-evaluator.min")
    };

    DICE.isDiceNumber = (x, y) => {
        return x >= 1 && y >= 2;
    }

    DICE.dice = (x, y) => {
        if (!DICE.isDiceNumber(x, y)) {
            return false;
        } else {
            let ans = x;
            for (let i = 0; i < x; i++)
                ans += Math.floor(Math.random() * y);
            return ans;
        }
    }

    DICE.parse = (str) => {
        str = str.replace(/[\s\n\r]+/, "").toLowerCase();
        // console.log("trim", str, str.length);

        try {
            let lexed = DICE.mexp.lex(str);
            // console.log("lexed", lexed);
            return {
                error: false,
                msg: lexed
            };
        } catch (e) {
            return {
                error: true,
                msg: e.message
            };
        }

        /* mannual parse
        let par = [],
            pos = 0,
            ss, num;
        for (let i = 0; i < str.length; i++) {
            let ch = str.charAt(i);
            if (ch === "+" || ch === "*" || ch === "D" || ch === "d") {
                // console.log(i, ch);
                if (i && i > pos) {
                    ss = str.substr(pos, i - pos);
                    num = Number(ss);
                    if (isNaN(num)) {
                        return {
                            error: true,
                            msg: ss
                        };
                    } else {
                        par.push(num);
                    }
                    pos = i + 1;
                } else if (i === 0) {
                    pos = 1;
                }
                par.push(ch);
            }
        }
        if (pos < str.length) {
            ss = str.substr(pos);
            num = Number(ss);
            if (isNaN(num)) {
                return {
                    error: true,
                    msg: ss
                };
            } else {
                par.push(num);
            }
        }

        // console.log("split", par);

        let tmp = [];
        let left, right;
        for (let i = 0; i < par.length; i++) {
            switch (par[i]) {
                case "d":
                    console.log("d", par[i - 1], par[i + 1]);
                    left = (typeof par[i - 1] === "number") ? Math.round(par[i - 1]) : 1;
                    right = (typeof par[i + 1] === "number") ? Math.round(par[i + 1]) : NaN;

                    if (isNaN(right)) {
                        return {
                            error: true,
                            msg: "{x}d{y} 没有 {y}"
                        };
                    }
                    if (!DICE.isDiceNumber(left, right)) {
                        return {
                            error: true,
                            msg: par[i - 1] + "d" + par[i + 1] + "非法"
                        };
                    }

                    tmp.push({
                        x: left,
                        y: right
                    });
                    par[++i] = undefined;
                    break;
                case "D":
                    left = (typeof par[i - 1] === "number") ? Math.round(par[i - 1]) : 1;
                    right = (typeof par[i + 1] === "number") ? Math.round(par[i + 1]) : NaN;

                    if (isNaN(right)) {
                        return {
                            error: true,
                            msg: "{x}D{y} 没有 {y}"
                        };
                    }

                    if (right === 100) {
                        right = 99;
                        if (!DICE.isDiceNumber(left, right)) {
                            return {
                                error: true,
                                msg: par[i - 1] + "D" + par[i + 1] + "非法"
                            };
                        }

                        tmp.push("(", {
                            x: left,
                            y: right
                        }, "+", 1, ")");
                    } else {
                        if (!DICE.isDiceNumber(left, right)) {
                            return {
                                error: true,
                                msg: par[i - 1] + "D" + par[i + 1] + "非法"
                            };
                        }

                        tmp.push({
                            x: left,
                            y: right
                        });
                    }
                    i++;
                    break;

                case "+":
                case "*":
                case "(":
                case ")":
                    tmp.push(par[i]);
                    break;
                default:
                    if (par[i + 1] !== "d" && par[i + 1] !== "D") {
                        tmp.push(par[i]);
                    }
                    break;
            }
        }
        par = tmp;
        // console.log("dice", par);

        return {
            error: false,
            msg: par
        }; */
    };

    DICE.eval = (arr) => {
        let str = "";
        for (let i of arr) {
            if (typeof i !== "object") {
                str += i;
            } else {
                str += DICE.dice(i.x, i.y);
            }
        }
        return DICE.mexp.eval("(" + str + ")");
    };

    DICE.analyse = (arr) => {

    }

    DICE.diceRichText = (arr) => {
        let rich = [],
            addClass = "";
        for (let i = 1; i + 1 < arr.length; i++) {
            switch (arr[i].show) {
                case "+":
                case "*":
                case "&times;":
                    addClass = " bg-green round";
                    break;
                case "(":
                case ")":
                    addClass = " bg-mauve light radius";
                    break;
                case "d":
                case "D":
                    addClass = " bg-red light round"
                    break;
                default:
                    addClass = " bg-grey";
                    break;
            }
            rich.push({
                name: "div",
                attrs: {
                    class: "cu-tag " + addClass,
                    style: "margin-right: 1px;"
                },
                children: [{
                    type: 'text',
                    text: (typeof arr[i].value === "number") ? (arr[i].value + "") : arr[i].show
                }]
            });
        }
        return rich;
    }

    DICE.mexp.addToken([{
        type: 2,
        token: "d",
        show: "d",
        value: DICE.dice
    }]);

    module.exports = DICE;
})();