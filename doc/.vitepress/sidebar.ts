import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'Introdução',
      link: '/introducao'
    },

    {
      text: 'Raças',
      link: '/racas/',
      collapsed: true,
      items: [
        { text: 'Anão', link: '/racas/anao' },
        { text: 'Bestial', link: '/racas/bestial' },
        { text: 'Draconato', link: '/racas/draconato' },
        { text: 'Elfo', link: '/racas/elfo' },
        { text: 'Fada', link: '/racas/fada' },
        { text: 'Humano', link: '/racas/humano' },
        { text: 'Meio-Elfo', link: '/racas/meio-elfo' },
        { text: 'Meio-Golem', link: '/racas/meio-golem' },
        { text: 'Meio-Orc', link: '/racas/meio-orc' },
        { text: 'Meio-Slime', link: '/racas/meio-slime' },
        { text: 'Orc', link: '/racas/orc' },
        { text: 'Tiefling', link: '/racas/tiefling' }
      ]
    },
    {
      text: 'Classes',
      link: '/classes/',
      collapsed: true,
      items:
        [
          {
            text: 'Baskerville (Espadachim)',
            link: '/classes/baskerville/',
            collapsed: true,
            items: [
              { text: 'Espadachim', link: '/classes/baskerville/espadachim' },
              { text: 'Esgrimista', link: '/classes/baskerville/esgrimista' },
              { text: 'Espadachim Arcano', link: '/classes/baskerville/espadachim-arcano' },
              { text: 'Duelista', link: '/classes/baskerville/duelista' }
            ]
          },
          {
            text: 'Morgue (Mago)',
            link: '/classes/morgue/',
            collapsed: true,
            items: [
              { text: 'Mago', link: '/classes/morgue/mago' },
              { text: 'Elementalista', link: '/classes/morgue/elementalista' },
              { text: 'Necromancer', link: '/classes/morgue/necromancer' },
              { text: 'Druída', link: '/classes/morgue/druida' }
            ]
          },
          {
            text: 'Feralorn (Bárbaro)',
            link: '/classes/feralorn/',
            collapsed: true,
            items: [
              { text: 'Bárbaro', link: '/classes/feralorn/barbaro' },
              { text: 'Gladiador', link: '/classes/feralorn/gladiador' },
              { text: 'Berserker', link: '/classes/feralorn/berserker' },
              { text: 'Lanceiro', link: '/classes/feralorn/lanceiro' }
            ]
          },
          {
            text: 'Guardrake (Escudeiro)',
            link: '/classes/guardrake/',
            collapsed: true,
            items: [
              { text: 'Escudeiro', link: '/classes/guardrake/escudeiro' },
              { text: 'Guerreiro', link: '/classes/guardrake/guerreiro' },
              { text: 'Sentinela', link: '/classes/guardrake/sentinela' },
              { text: 'Guardião Arcano', link: '/classes/guardrake/guardiao-arcano' }
            ]
          },
          {
            text: 'Lifespring (Curandeiro)',
            link: '/classes/lifespring/',
            collapsed: true,
            items: [
              { text: 'Curandeiro', link: '/classes/lifespring/curandeiro' },
              { text: 'Clérigo', link: '/classes/lifespring/clerigo' },
              { text: 'Mestre do Chi', link: '/classes/lifespring/mestre-do-chi' },
              { text: 'Paladino', link: '/classes/lifespring/paladino' }
            ]
          },
          {
            text: 'Skythorn (Arqueiro)',
            link: '/classes/skythorn/',
            collapsed: true,
            items: [
              { text: 'Arqueiro', link: '/classes/skythorn/arqueiro' },
              { text: 'Arqueiro de Precisão', link: '/classes/skythorn/arqueiro-de-precisao' },
              { text: 'Amigo da Floresta', link: '/classes/skythorn/amigo-da-floresta' },
              { text: 'Arqueiro Arcano', link: '/classes/skythorn/arqueiro-arcano' }
            ]
          },
          {
            text: 'Silentblade (Assassino)',
            link: '/classes/silentblade/',
            collapsed: true,
            items: [
              { text: 'Assassino', link: '/classes/silentblade/assassino' },
              { text: 'Lâmina das Sombras', link: '/classes/silentblade/lamina-das-sombras' },
              { text: 'Mestre dos Venenos', link: '/classes/silentblade/mestre-dos-venenos' },
              { text: 'Ceifador do Abismo', link: '/classes/silentblade/ceifador-do-abismo' }
            ]
          }
        ]
    }
  ]
}
