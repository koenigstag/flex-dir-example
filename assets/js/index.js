const container = document.getElementById('flex-container')

const direction = document.getElementById('direction')

direction.addEventListener('change', ({ target: { value } }) =>
  container.classList.replace(container.classList.item(2), value)
)

const justContent = document.getElementById('just-content')

justContent.addEventListener('change', ({ target: { value } }) =>
  container.classList.replace(container.classList.item(3), value)
)

const alignItems = document.getElementById('align-items')

alignItems.addEventListener('change', ({ target: { value } }) =>
  container.classList.replace(container.classList.item(4), value)
)

const alignContent = document.getElementById('align-content')

alignContent.addEventListener('change', ({ target: { value } }) =>
  container.classList.replace(container.classList.item(5), value)
)
