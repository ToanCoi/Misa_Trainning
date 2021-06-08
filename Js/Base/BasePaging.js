class BasePaging {
    constructor(pagingId) {
        let me = this;

        me.paging = $(this).find(`${pagingId}`);

        //Sự kiện trên paging
        me.initEvents();
    }

    /**
     * Khời tạo các sự kiện trên pagging
     * NVTOAN 08/06/2021
     */
    initEvents() {
        let me = this;

        //Hover vào một item trên paging
        me.pagingItemHover();

        //Click vào một item trên paging
        me.pagingItemClick();
    }

    pagingItemHover() {
        let me = this;

        CommonEvt.hover(me.paging, ".paging-item", "paging-item-hover", "paging-item-select");
    }

    pagingItemClick() {
        CommonEvt.click(me.paging, ".paging-item", "paging-item-hover", "paging-item-select", 1, null);
    }
}