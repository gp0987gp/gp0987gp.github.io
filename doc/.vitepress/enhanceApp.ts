import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      const sidebar = document.querySelector('.layout-sidebar')
      const toggleButton = document.createElement('button')

      toggleButton.innerText = '☰'
      toggleButton.style.position = 'fixed'
      toggleButton.style.top = '10px'
      toggleButton.style.left = '10px'
      toggleButton.style.zIndex = '1000'
      toggleButton.style.background = '#333'
      toggleButton.style.color = '#fff'
      toggleButton.style.border = 'none'
      toggleButton.style.padding = '10px'
      toggleButton.style.cursor = 'pointer'

      document.body.appendChild(toggleButton)

      toggleButton.addEventListener('click', () => {
        sidebar?.classList.toggle('hidden')
      })
    })
  },
}
