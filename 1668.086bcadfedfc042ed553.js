(window.webpackJsonp=window.webpackJsonp||[]).push([[1668],{sm0d:function(n,t,e){"use strict";e.r(t),t.default="@import 'taiga-ui-local';\n\n.wrapper {\n    display: grid;\n    width: 100%;\n    gap: 1px;\n    grid-template-columns: repeat(3, 1fr);\n    margin: auto;\n    font: var(--tui-font-text-xs);\n\n    @media @desktop-s-min {\n        font: var(--tui-font-text-s);\n        width: 500px;\n    }\n}\n\n.item {\n    height: 100px;\n    background: var(--tui-neutral-bg);\n    color: var(--tui-text-01);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n@breakpoints: mobile-m, mobile-m-min, mobile-m-interval, tablet-lg, tablet-lg-min, tablet-lg-interval, desktop-s,\n    desktop-s-min, desktop-s-interval;\n\neach(@breakpoints, {\n    .@{value} {\n        @media @@value {\n            background: var(--tui-primary);\n            color: var(--tui-primary-text);\n        }\n    }\n});\n"}}]);