// miniprogram/pages/tools/dice.js
let Dice = require("../../utils/dice");
const testRunNum = 20;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        collapseDisc: false,
        collapseRule: false,
        editorCtx: null,
        exp: [],
        input: "1d100"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.info("Dice", Dice);
    },

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

    toggleCollapse(e) {
        const member = e.currentTarget.dataset.collapse;
        console.log(this.data[member]);
        this.setData({
            [member]: !this.data[member]
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
        this.setData({
            exp: [{
                type: "text",
                text: "解析中"
            }]
        });

        let p = Dice.parse(this.data.input);
        if (!p.error) {
            let rich = Dice.diceRichText(p.msg.value);
            if (!rich.error) {
                rich.push(Dice.analyse(p.msg, testRunNum));
                // console.info("rich", rich);
                this.setData({
                    exp: rich
                });
            }
        } else {
            this.setData({
                exp: [{
                    type: "text",
                    text: p.msg
                }]
            });
        }
        return;
    }
});