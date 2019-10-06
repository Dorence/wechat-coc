Page({
    data: {
        pageName: ["basics", "component", "plugin", "about"],
        pageTitle: ["元素", "组件", "扩展", "关于"],
        curr: 3
    },
    navSelect(e) {
        const c = e.currentTarget.dataset.curr;
        this.setData({
            curr: c
        });
    }
});