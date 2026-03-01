import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Dependency Injection 精通指南',
  description: '基於《Dependency Injection Principles, Practices, and Patterns》的逐章精通指南',
  base: '/di-mastery-book/',
  lang: 'zh-TW',

  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '全書精華', link: '/summary' },
      {
        text: '基礎篇',
        items: [
          { text: 'Ch1 DI 基礎', link: '/ch01' },
          { text: 'Ch2 緊耦合程式碼', link: '/ch02' },
          { text: 'Ch3 鬆耦合程式碼', link: '/ch03' },
        ]
      },
      {
        text: '模式篇',
        items: [
          { text: 'Ch4 DI 模式', link: '/ch04' },
          { text: 'Ch5 DI 反模式', link: '/ch05' },
          { text: 'Ch6 程式碼異味', link: '/ch06' },
        ]
      },
      {
        text: 'Pure DI 篇',
        items: [
          { text: 'Ch7 應用程式組合', link: '/ch07' },
          { text: 'Ch8 物件生命週期', link: '/ch08' },
          { text: 'Ch9 攔截', link: '/ch09' },
          { text: 'Ch10 AOP by Design', link: '/ch10' },
          { text: 'Ch11 工具導向 AOP', link: '/ch11' },
        ]
      },
      {
        text: 'DI 容器篇',
        items: [
          { text: 'Ch12 DI 容器入門', link: '/ch12' },
          { text: 'Ch13 Autofac', link: '/ch13' },
          { text: 'Ch14 Simple Injector', link: '/ch14' },
          { text: 'Ch15 MS.DI', link: '/ch15' },
        ]
      },
    ],

    sidebar: [
      {
        text: '全書精華',
        items: [
          { text: '架構師視角的全書精華', link: '/summary' },
        ]
      },
      {
        text: 'Part 1：基礎篇 — DI 概念入門',
        items: [
          { text: 'Ch1 DI 基礎：是什麼、為什麼、怎麼做', link: '/ch01' },
          { text: 'Ch2 撰寫緊耦合程式碼', link: '/ch02' },
          { text: 'Ch3 撰寫鬆耦合程式碼', link: '/ch03' },
        ]
      },
      {
        text: 'Part 2：模式篇 — DI 模式目錄',
        items: [
          { text: 'Ch4 DI 模式', link: '/ch04' },
          { text: 'Ch5 DI 反模式', link: '/ch05' },
          { text: 'Ch6 程式碼異味', link: '/ch06' },
        ]
      },
      {
        text: 'Part 3：Pure DI — 純手工依賴注入',
        items: [
          { text: 'Ch7 應用程式組合', link: '/ch07' },
          { text: 'Ch8 物件生命週期', link: '/ch08' },
          { text: 'Ch9 攔截', link: '/ch09' },
          { text: 'Ch10 以設計實現 AOP', link: '/ch10' },
          { text: 'Ch11 工具導向 AOP', link: '/ch11' },
        ]
      },
      {
        text: 'Part 4：DI 容器 — 容器實戰',
        items: [
          { text: 'Ch12 DI 容器入門', link: '/ch12' },
          { text: 'Ch13 Autofac DI 容器', link: '/ch13' },
          { text: 'Ch14 Simple Injector DI 容器', link: '/ch14' },
          { text: 'Ch15 Microsoft.Extensions.DI 容器', link: '/ch15' },
        ]
      },
    ],

    outline: { level: [2, 3], label: '本頁目錄' },
    docFooter: { prev: '上一章', next: '下一章' },
    darkModeSwitchLabel: '主題',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '回到頂部',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
          modal: {
            noResultsText: '找不到結果',
            resetButtonTitle: '清除搜尋',
            footer: { selectText: '選擇', navigateText: '切換', closeText: '關閉' }
          }
        }
      }
    }
  },

  mermaid: {},
}))
