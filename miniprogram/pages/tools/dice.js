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
        exp: "",
        input: ""
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
        const t = this.data.input.substr(this.data.input.length - 1);
        this.setData({
            input: t
        });
    },

    tapSure(e) {
        const that = this;

        let p = Dice.parse(this.data.input);
        console.log(p);
        if (!p.error) {
            console.log(Dice.eval(p.msg));
            console.log(Dice.eval(p.msg));
        }

    }
});