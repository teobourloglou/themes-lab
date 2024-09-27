const data = () => {
    return {
        themeName: "new-theme",

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

        cssString() {

        return `
.${this.themeName} {

    /* General */
    --bg-color: ${this.bgColor};
    --header-desktop-bg-color: ${this.headerDesktopBgColor};
    --header-desktop-items-color: ${this.headerDesktopItemsColor};
    --header-mobile-items-color: ${this.headerMobileItemsColor};
    --mobile-menu-bg-color: ${this.mobileMenuBgColor};
    --mobile-menu-divide-color: ${this.mobileMenuDivideColor};
    --mobile-menu-button: ${this.mobileMenuButton};
    --mobile-menu-x: ${this.mobileMenuX};
    --copyright-text: ${this.copyrightText};

    /* Category Buttons */
    --category-btns-bg-color: ${this.categoryBtnsBgColor};
    --category-btn-bg-color: ${this.categoryBtnBgColor};
    --category-btn-color: ${this.categoryBtnColor};
    --active-category-btn-bg-color: ${this.activeCategoryBtnBgColor};
    --active-category-btn-color: ${this.activeCategoryBtnColor};
    --category-btn-border-color: ${this.categoryBtnBorderColor};
    --category-btn-border-width: ${this.categoryBtnBorderWidth};

    /* Categories */
    --category-bg-color: ${this.categoryBgColor};
    --category-border: ${this.categoryBorder};
    --category-border-radius: ${this.categoryBorderRadius};
    --category-title-bg-color: ${this.categoryTitleBgColor};
    --category-title-color: ${this.categoryTitleColor};
    --category-title-size: ${this.categoryTitleSize};
    --category-title-align: ${this.categoryTitleAlign};
    --category-title-transform: ${this.categoryTitleTransform};
    --category-title-border-bottom: ${this.categoryTitleBorderBottom};
    --category-description-color: ${this.categoryDescriptionColor};
    --category-description-align: ${this.categoryDescriptionAlign};
    --category-description-transform: ${this.categoryDescriptionTransform};
    --category-description-style: ${this.categoryDescriptionStyle};
    --category-body-padding: ${this.categoryBodyPadding};

    /* Products */
    --product-bg-color: ${this.productBgColor};
    --product-border-radius: ${this.productBorderRadius};
    --product-image-border-radius: ${this.productImageBorderRadius};
    --product-title-color: ${this.productTitleColor};
    --product-description-color: ${this.productDescriptionColor};
    --product-price-color: ${this.productPriceColor};
}`
        },

        openCssInNewTab() {
            window.open().document.write(`<pre>${this.cssString()}</pre>`);
            newTab.document.close();  // Close the document stream to complete writing
        }

    };
};
