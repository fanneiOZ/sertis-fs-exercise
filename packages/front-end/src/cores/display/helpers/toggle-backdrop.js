export function toggleBackdrop(backdrop = false) {
    if (backdrop) {
        document.body.classList.add('backdrop')
    } else {
        document.body.classList.remove('backdrop')
    }
}
