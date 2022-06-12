function CreateEl (userCfg = new Object()) {
    let defaulCfg = {
        tag: 'div',
        parent: document.body,
        attribute: null,
        text: null,
    }
    let newCfg = { ...defaulCfg, ...userCfg }
    
    let item;
    if (newCfg.tag != null) {
        item = document.createElement(newCfg.tag);
    } else {
        console.error('You cannot leave out the tag!!!')
    }

    if (newCfg.attribute != null) {
        let attributeEntries = Object.entries(newCfg.attribute);
        attributeEntries.forEach((el) => {
            item.setAttribute( el[0], el[1] === true ? '' : el[1] );
        })
    }

    if (newCfg.text != null) {
        item.textContent = newCfg.text;
    }

    newCfg.parent = newCfg.parent === null ? document.body : newCfg.parent;
    (newCfg.parent).append(item);

    return item;
}