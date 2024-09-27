const data = () => {
    return {
        /* General */
        bgColor: "#ffffff",
        headerDesktopBgColor: "#ffffff",
        headerDesktopItemsColor: this.mobileMenuButton,
        headerMobileItemsColor: "#ffffff",
        mobileMenuBgColor: "#171717",
        mobileMenuDivideColor: this.headerMobileItemsColor,
        mobileMenuButton: "#171717",
        mobileMenuX: "#ffffff",
        copyrightText: "#171717",

        /* Category Buttons */
        categoryBtnsBgColor: "#ffffff",
        categoryBtnBgColor: "#ffffff",
        categoryBtnColor: "#171717",
        activeCategoryBtnBgColor: "#171717",
        activeCategoryBtnColor: "#ffffff",
        categoryBtnBorderColor: "transparent",
        categoryBtnBorderWidth: "0px",

        /* Categories */
        categoryBgColor: "transparent",
        categoryBorderStyle : "none",
        categoryBorderWidth : "0px",
        categoryBorderColor : "transparent",
        get categoryBorder() {
            return this.categoryBorderWidth + ' ' + this.categoryBorderStyle + ' ' + this.categoryBorderColor;
        },
        categoryBorderRadius: "0px",
        categoryTitleBgColor: "transparent",
        categoryTitleColor: "#171717",
        categoryTitleSize: "36px",
        categoryTitleAlign: "left",
        categoryTitleTransform: "none",
        categoryTitleBorderStyle : "none",
        categoryTitleBorderWidth : "0px",
        categoryTitleBorderColor : "transparent",
        get categoryTitleBorderBottom() {
            return this.categoryTitleBorderWidth + ' ' + this.categoryTitleBorderStyle + ' ' + this.categoryTitleBorderColor;
        },
        categoryDescriptionColor: "#171717",
        categoryDescriptionAlign: "left",
        categoryDescriptionTransform: "none",
        categoryDescriptionStyle: "none",
        categoryBodyPadding: "0px",

        /* Products */
        productBgColor: "transparent",
        productBorderRadius: "0px",
        productImageBorderRadius: "8px",
        productTitleColor: "#171717",
        productDescriptionColor: "#171717",
        productPriceColor: "#171717",

        loadData() {

        },
    };
};
