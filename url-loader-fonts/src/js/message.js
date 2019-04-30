const renderToDom = require('./render-to-dom');
const makeMassage = require('./make-message');

const waitTime = new Promise((allOk, allBad) =>{
    setTimeout(()=>{
        allOk('Han pasado 3 segundos :P');
    }, 3000);
})

module.exports = {
    firstMessage: 'Hola mundo desde un módulo',
    delayedMessage: async () => {
        const message = await waitTime;
        console.log(message);
        renderToDom(makeMassage(message));
    },
}
