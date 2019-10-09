// miniprogram/pages/tools/dice.js
const Dice = require("../../utils/dice");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        collapseName: 'name1',
        collapseDisc: false,
        editorCtx: null,
        exp: [],
        input: "(3d8)*10D7+5"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    onEditorReady() {

    },

    toggleDisc(e) {
        console.log(this.data.collapseDisc);
        this.setData({
            collapseDisc: !this.data.collapseDisc
        });
    },

    tapNum(e) {
        const t = this.data.input + e.currentTarget.dataset.text;
        this.setData({
            input: t
        });
    },

    tapDel(e) {
        if (this.data.input.length) {
            this.setData({
                input: this.data.input.substr(0, this.data.input.length - 1)
            });
        }
    },

    tapSure(e) {
        const that = this;

        this.setData({
            exp: [{
                type: "text",
                text: "解析中"
            }]
        });

        let p = Dice.parse(this.data.input);
        console.log(p);
        if (!p.error) {
            let post = p.msg.toPostfix();
            console.log(post.postfixEval());
            console.log(post.postfixEval());

            let rich = Dice.diceRichText(p.msg.value);
            if (!rich.error) {
                console.log("rich", rich);
                this.setData({
                    exp: rich
                });
            }
        } else {
            this.setData({
                exp: p.msg
            });
        }

    }
});