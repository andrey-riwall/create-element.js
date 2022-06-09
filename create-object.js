window.createEl = function (userConfig = new Object()) {
    let defaulConfig = {
        tag: 'div',
        append: document.body,
        class: null,
        id: null,
        text: null,
    }
    let newConfig = { ...defaulConfig, ...userConfig }
    
    let item = document.createElement(newConfig.tag);
    if (newConfig.class != null) item.setAttribute('class', newConfig.class);
    if (newConfig.id != null) item.id = newConfig.id;
    if (newConfig.text != null) item.textContent = newConfig.text;
    newConfig.append = newConfig.append === null ? document.body : newConfig.append;
    newConfig.append.append(item);

    return item;
}