function CreateEl (userConfig = new Object()) {
    let defaulConfig = {
        tag: 'div',
        parent: document.body,
        class: null,
        id: null,
        text: null,
    }
    let newConfig = { ...defaulConfig, ...userConfig }
    
    let item = document.createElement(newConfig.tag);
    if (newConfig.class != null) item.setAttribute('class', newConfig.class);
    if (newConfig.id != null) item.id = newConfig.id;
    if (newConfig.text != null) item.textContent = newConfig.text;
    newConfig.parent = newConfig.parent === null ? document.body : newConfig.parent;
    (newConfig.parent).append(item);

    return item;
}