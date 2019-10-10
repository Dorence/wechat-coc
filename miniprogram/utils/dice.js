(() => {
    "use strict";
    let DICE = {
        mexp: require("math-expression-evaluator")
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
            return {
                error: false,
                msg: lexed,
                string: str
            };
        } catch (e) {
            return {
                error: true,
                msg: e.message
            };
        }
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

    DICE.analyse = (lex, testRunNum) => {
        let post = lex.toPostfix();

        let div = {
            name: "div",
            attrs: {
                class: "margin-tb-xs"
            },
            children: [{
                type: "text",
                text: testRunNum + "次运行结果：&ensp;"
            }]
        }
        for (let i = 0; i < testRunNum; i++) {
            div.children.push({
                name: "div",
                attrs: {
                    class: "cu-tag bg-white radius",
                    style: "margin: 0 3px 5px 0;"
                },
                children: [{
                    type: "text",
                    text: post.postfixEval() + ""
                }]
            });
        }
        return div;
    }

    DICE.diceRichText = (arr) => {
        let rich = [],
            cls = "";
        console.log("stack", arr);
        for (let i = 1; i + 1 < arr.length; i++) {
            switch (arr[i].show) {
                case "+":
                case "-":
                case "*":
                case "/":
                case "&times;":
                case "&divide;":
                    cls = "bg-green round";
                    break;
                case "(":
                case ")":
                    cls = "bg-mauve light radius";
                    break;
                case "d":
                case "D":
                    cls = "bg-orange light round"
                    break;
                default:
                    cls = (arr[i].type === 1 ? "radius " : "") + "bg-grey";
                    break;
            }
            rich.push({
                name: "div",
                attrs: {
                    class: "cu-tag " + cls,
                    style: "margin-right: 1px; margin-bottom: 5px"
                },
                children: [{
                    type: "text",
                    text: (arr[i].type === 1) ? (arr[i].value + "") : arr[i].show
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