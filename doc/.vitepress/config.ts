import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'


export default defineConfig({
  title: 'Meu RPG', // Altere aqui o nome do site
  themeConfig: {
    sidebar,
    outline: [2, 3], // Garante que o índice de navegação interno funcione corretamente
    sidebarMenuLabel: 'Menu', // Personaliza o nome do menu lateral no botão de abrir/fechar
    returnToTopLabel: 'Voltar ao topo', // Define o nome do botão de voltar ao topo
    docFooter: { prev: 'Anterior', next: 'Próximo' }, // Personaliza botões de navegação entre páginas

    // Ativa o comportamento de recolhimento automático
    aside: true, // Mantém a sidebar visível como um menu lateral
  },

  appearance: true, // Mantém o botão de modo claro/escuro (opcional)
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./.vitepress/theme/styles.css";`
        }
      }
    }
  },
})
