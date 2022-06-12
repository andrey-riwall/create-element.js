function CreateEl (userCfg = new Object()) {
    let defaulCfg = {
        tag: 'div',
        parent: document.body,
        attribute: [ null, null ],
        text: null,
    }
    let newCfg = { ...defaulCfg, ...userCfg }
    
    let item = document.createElement(newCfg.tag);

    if (String(typeof newCfg.attribute[0]) === 'object') {
        newCfg.attribute.forEach((el) => {
            if (String(typeof el) === 'object' && (el[0] && el[1])) {
                item.setAttribute(el[0], el[1]);
            } else if (String(typeof el) === 'object' && (el[0] && !el[1])) {
                item.setAttribute(el[0], '');
            } else if (String(typeof el) != 'object') {
                item.setAttribute(el, '');
            }
        });
    } else if ((String(typeof newCfg.attribute[0]) === 'string' || String(typeof newCfg.attribute[0]) === 'number') && (String(typeof newCfg.attribute[1]) === 'string' || String(typeof newCfg.attribute[1]) === 'number')) {
        item.setAttribute(newCfg.attribute[0], newCfg.attribute[1]);
    } else if ((String(typeof newCfg.attribute[0]) === 'string' || String(typeof newCfg.attribute[0]) === 'number') && !newCfg.attribute[1]) {
        item.setAttribute(newCfg.attribute[0], '');
    }

    if (newCfg.text != null) {
        item.textContent = newCfg.text;
    }

    newCfg.parent = newCfg.parent === null ? document.body : newCfg.parent;
    (newCfg.parent).append(item);

    return item;
}