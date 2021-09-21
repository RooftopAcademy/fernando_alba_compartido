
let store = new Store

store.fetchBrands()

Array.from(document.getElementsByClassName('js-brand-list'))
    .forEach(list => {
        console.log(store.catalog.brandList);
        store.catalog.brandList.forEach(brand => {
            list.innerHTML += brandItemView(brand)
        })
    })