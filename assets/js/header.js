

export function statusHeader(){
    let popUp = document.getElementById('pop-up');

    if ( popUp.getAttribute('data-status-popup') == 'false') {
        popUp.style.display = "flex";
        popUp.setAttribute('data-status-popup', 'true')



    } else if ( popUp.getAttribute('data-status-popup') == 'true' ) {
        popUp.style.display = "none";
        popUp.setAttribute('data-status-popup', 'false')
    }
}



