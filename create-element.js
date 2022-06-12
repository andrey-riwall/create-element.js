// function CreateEl (userCfg = new Object()) {
//     let defaulCfg = {
//         tag: 'div',
//         parent: document.body,
//         attribute: null,
//         text: null,
//     }
//     let newCfg = { ...defaulCfg, ...userCfg }
    
//     let item;
//     if (newCfg.tag != null) {
//         item = document.createElement(newCfg.tag);
//     } else {
//         console.error('You cannot leave out the tag!!!')
//     }

//     if (newCfg.attribute != null) {
//         let attributeEntries = Object.entries(newCfg.attribute);
//         attributeEntries.forEach((el) => {
//             item.setAttribute( el[0], el[1] === true ? '' : el[1] );
//         })
//     }

//     if (newCfg.text != null) {
//         item.textContent = newCfg.text;
//     }

//     if (newCfg.parent != null) {
//         (newCfg.parent).append(item);
//     } else {
//         console.error('You cannot leave out the parent!!!')
//     }

//     return item;
// }

function CreateEl (userCfg = new Object()) {
    let defaulCfg = {
        tag: 'div',
        parent: document.body,
        attribute: null,
        texts: null,
    }
    userCfg.texts = []
    if (Array.isArray(userCfg.text)) {
        userCfg.texts = userCfg.text;
    } else {
        userCfg.texts.push(userCfg.text === undefined ? null : userCfg.text);
    }
    delete userCfg.text;
    let newCfg = { ...defaulCfg, ...userCfg }

    if (newCfg.tag != null) {
        let itemArr = [];
        (newCfg.texts).forEach((text) => {
            let item = document.createElement(newCfg.tag);
            itemArr.push(item);

            if (text != null) {
                item.textContent = text;
            }

            if (newCfg.attribute != null) {
                let attributeEntries = Object.entries(newCfg.attribute);
                attributeEntries.forEach((el) => {
                    item.setAttribute( el[0], el[1] === true ? '' : el[1] );
                })
            }

            newCfg.parent = newCfg.parent === null ? document.body : newCfg.parent;
            (newCfg.parent).append(item);
        });
        return itemArr.length > 1 ? itemArr : itemArr.shift();
    } else {
        console.error('You cannot leave out the tag!!!')
    }
    
} 