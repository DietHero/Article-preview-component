var button = document.querySelector('.info__button')
var click = document.querySelector('.click-container')


button.addEventListener(
    'click', () => click.classList.toggle('click-container-visible')
)

