/**
*В данной папке находится код функций работы с анимацией рыбок и импортом svg компонентов
*Работа с svg компонентом Ternetsia
*/
import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"

export function Ternetsia() {
  return (
    <Svg
     viewBox="-100 -200 1080 1080" height={60} width={60}
    >
      <Path
        d="M826.78 285.46s16.59-17.44-34.39-38.64-78.48-50.89-78.48-50.89-56.63-47.12-207.93-41.47c0 0-110.03 42.88-163.03 79.17s-81.31 56.55-81.31 56.55-14.56 14.14-55.02 7.07c0 0-6.47 21.68-15.37 23.09 0 0 22.65 13.67 24.27 57.49 0 0 23.06-.94 21.44 7.54 0 0 12.94-17.91 27.51-8.01 0 0 45.31 192.26 242.72 188.02l81.71-48.54s87.38-24.98 139.16-71.63c51.78-46.65 92.64-98.96 92.64-98.96l19.42-32.04s5.26-18.38-2.43-21.68-10.91-7.07-10.91-7.07z"
        fill="#2d242e"
      />
      <Path
        d="M809.12 287.66s-11.33-27.96-26.97-28.9c0 0-13.21-8.8-34.79-5.34-21.57 3.46-43.42-30.16-43.42-30.16l-20.66-16.52s4.72 35.91 1.63 45.07c-3.09 9.16-4.27 7.67-4.27 7.67s-10.55 8.71-15.68 29.76l4.89 25s.67 8.46-5.29 21.66c0 0-3.24 39.43-1.11 51.41 0 0 5.56 22.1 41.16 38.6l20.3 22.11 37.34-35.72s57.93-61.78 58.47-66.02 5.66-39.11 3.44-42.76c-2.23-3.68-15.04-15.86-15.04-15.86z"
        fill="#62556a"
      />
      <Ellipse cx={770.08} cy={298.25} rx={26.36} ry={29.12} fill="#ecdcec" />
      <Ellipse cx={769.07} cy={298.7} rx={17.93} ry={20.89} fill="#15152a" />
      <Path
        d="M765.33 295.94s2.63-4.48-1.48-5.26c-4.11-.79-1.67 6.05 1.16 5.26"
        fill="#fff"
      />
      <Path
        d="M704.62 425.89s-44.5-19.79-42.07-48.07c2.43-28.27 2.02-41.94 2.02-41.94s12.14-22.78.4-28.59c-11.73-5.81-21.44 3.61-21.44 3.61s-1.62 65.03 3.64 73.04c5.26 8.01 5.66 28.27 5.66 28.27s-8.5 11.78-15.37 6.6-24.68-100.84-24.68-100.84-12.14-14.77-43.69-10.68-26.29 8.8-26.29 8.8-9.3 23.56 2.83 57.96 2.43 57.49 2.43 57.49-7.69 21.68-24.27-14.14c-16.59-35.81-14.16-97.07-14.16-97.07s-43.69-.47-41.26 17.44c2.43 17.91 28.32 52.78 26.7 82-1.62 29.22 17.8 65.5 17.8 65.5s8.5 29.69 17.39 36.76 22.56 16.26 22.56 16.26l36.1-21.44s58.64-20.03 60.47-22.85 46.56-18.72 75.52-45.99l-20.29-22.12z"
        fill="#b3b3cb"
      />
      <Path
        fill="#312A4B"
        d="M638.68 197.81s5.93 18.85 4.85 31.1-2.36 39.9-2.36 39.9l2.49 29.53-.13 12.57s.89 61.05 1.57 64.99 4.14 12.41 4.14 12.41 3.38 18.62 3.49 21.27c.11 2.65-5.6 8.32-5.6 8.32s-1.16 3.08-7.23 2.08-7.79-14.15-7.79-14.15l-19.32-87.85s-18.41-19.56-19.42-62.44c-1.01-42.88 3.22-60.32 3.22-60.32s30.15-17.91 42.09 2.59zM522.71 205.35s14.02 32.67 11.33 65.66c-2.7 32.99 8.76 45.08 8.76 45.08s-10.97 16.5 7.66 76.66c0 0 6.09 43.18-8.78 45.23-14.87 2.05-26.48-47.76-26.48-47.76s-6.59-37.61-5.58-69.89 9.7-28.04-.11-47.12c-9.81-19.09-12.84-32.75-15.67-45.71s-9.51-28.27 1.01-31.1c10.52-2.83 23.27-8.95 25.56 0l2.3 8.95z"
      />
      <Path
        d="M664.97 199.23s19.01 2.36 19.01 9.9c0 7.54 6.07 43.35-2.83 49.95-8.9 6.6-16.18 30.16-16.18 30.16l4.61 23.79s-4.82-15.42-26.05-2.11c0 0 1.08-16.47-1.62-33.29l-.74-8.81 2.22-38.17s1.9-12.41-4.71-32.83c0 0-8.45-19.71-42.08-2.59 0 0-15.34 86.48 16.19 122.76 0 0-7.98-12.42-37.9-11.24 0 0-35.77 3.46-32.08 9.35 0 0-5.55-5.35-8.54-24.18 0 0-1.28-10.08-.57-15.04.71-4.96 1.54-27.38-1.55-38.43-3.1-11.06-7.56-28.23-7.56-28.23s-1.71-4.5-4.54-14.93c0 0-.92-4.2-7.12-3.54-6.2.65-18.88 4.92-18.88 4.92s-7.51 1.21-4.19 14.59c3.33 13.38 7.15 29.65 7.15 29.65s4.46 17.13 9.22 25.55c4.76 8.42 8.32 17.48 7.92 21.14s-5.66 26.39-4.51 32.75c0 0-29.99-1.63-39.97 11.2 0 0-8.49.54 15.13 46.5 0 0 12.74 23.04 11.31 58.53 0 0 5.49 29.95 16.49 48.16 0 0 7.48 24.34 13.89 32.99 0 0 6.02 7.95 26.34 20.55l-45.62 27.1 12.94-27.1s-31.96-25.81-56.23-118.11-22.11-126.86-22.11-126.86-6.03-78.54-.05-86.71c5.98-8.16 176.69-36.12 223.21-7.37z"
        fill="#8582a9"
      />
      <Path
        fill="#454251"
        d="M311.41 42.06l29.53 7.54 71.2 35.81 98.71 73.04s-120.31 42.43-158.46 76.12l-40.98-18.63 5.26-5.21-20.23-23.06 2.43-21.68-7.69-12.72 5.66-9.9-3.64-12.72s.4-20.73.4-22.15c0-1.41 3.64-17.91 3.64-17.91l-2.83-13.19s3.64-32.99 14.56-35.34h2.44z"
      />
      <Path d="M329.35 64.3c12.47 6.05 24.75 12.5 36.83 19.28 6.06 3.36 12.05 6.86 18.03 10.37 5.96 3.55 11.87 7.18 17.75 10.85 5.84 3.74 11.66 7.52 17.4 11.42 5.7 3.95 11.39 7.94 16.9 12.17 5.52 4.22 10.91 8.62 16.04 13.32 1.28 1.18 2.55 2.37 3.76 3.62l1.84 1.85c.6.63 1.18 1.28 1.77 1.92 2.4 2.52 4.51 5.31 6.41 8.2-4.29-5.45-9.41-10.11-14.75-14.47-5.32-4.39-10.86-8.51-16.46-12.54-11.27-7.98-22.82-15.57-34.51-22.94-11.67-7.4-23.49-14.59-35.34-21.74L329.35 64.3zM325.84 82.52c2.89.96 5.63 2.31 8.4 3.55 2.77 1.27 5.5 2.6 8.24 3.92a591.02 591.02 0 0116.26 8.28c10.77 5.66 21.36 11.64 31.83 17.85 5.21 3.14 10.4 6.32 15.53 9.6 5.11 3.31 10.2 6.64 15.18 10.16 4.99 3.49 9.89 7.11 14.66 10.9 4.75 3.81 9.41 7.75 13.69 12.08-4.72-3.83-9.6-7.44-14.57-10.9-4.96-3.49-10.01-6.83-15.09-10.14-5.1-3.27-10.2-6.54-15.38-9.7a905.11 905.11 0 00-15.55-9.43c-5.19-3.13-10.43-6.2-15.67-9.25-5.22-3.09-10.5-6.08-15.75-9.13l-15.82-9.02-7.93-4.48-3.98-2.21c-1.34-.72-2.64-1.52-4.05-2.08zM377.62 74.98c8.36 5.02 16.53 10.34 24.61 15.78 4.06 2.7 8.04 5.49 12.05 8.26 3.99 2.79 7.95 5.64 11.91 8.47 3.93 2.88 7.85 5.77 11.74 8.7 3.86 2.97 7.75 5.91 11.54 8.99 3.81 3.05 7.56 6.17 11.22 9.4 1.82 1.63 3.64 3.26 5.37 4.99 1.73 1.72 3.48 3.46 4.86 5.48-1.63-1.82-3.54-3.33-5.41-4.86-1.89-1.53-3.81-3.01-5.75-4.47-3.87-2.94-7.8-5.8-11.71-8.68l-23.62-17.12c-7.86-5.73-15.74-11.44-23.55-17.25-7.81-5.81-15.6-11.65-23.26-17.69zM316.13 98.54c10.41 4.68 20.67 9.65 30.87 14.73 5.11 2.52 10.17 5.14 15.26 7.72l15.16 7.92 15.05 8.12c4.98 2.77 9.99 5.5 14.92 8.36 4.95 2.83 9.87 5.72 14.74 8.7 2.42 1.51 4.85 3.01 7.23 4.59 1.19.79 2.37 1.59 3.54 2.42.58.42 1.15.85 1.71 1.3.55.45 1.14.89 1.53 1.49-.45-.55-1.08-.92-1.67-1.31-.6-.38-1.21-.74-1.83-1.1-1.23-.72-2.47-1.41-3.72-2.09-2.5-1.36-5.01-2.7-7.53-4.02l-15.13-7.92-15.14-7.91-15.11-7.97-15.07-8.06c-5-2.72-10.03-5.4-15.02-8.16-9.99-5.48-19.95-11.03-29.79-16.81zM316.13 119.27c8.78 3.13 17.43 6.56 26.03 10.12 4.31 1.75 8.57 3.61 12.86 5.43l12.77 5.64c4.23 1.94 8.46 3.88 12.67 5.87 4.19 2.02 8.4 4.01 12.55 6.13 4.16 2.09 8.29 4.25 12.37 6.51 2.03 1.15 4.06 2.29 6.05 3.53.99.61 1.98 1.25 2.94 1.91.48.34.95.68 1.41 1.05.45.37.92.75 1.22 1.25-.36-.46-.87-.76-1.36-1.07-.49-.3-1-.58-1.51-.85-1.02-.55-2.06-1.07-3.1-1.57-2.09-1.01-4.19-1.99-6.31-2.94-4.22-1.94-8.47-3.8-12.71-5.71l-25.45-11.38-12.68-5.79c-4.21-1.97-8.45-3.88-12.64-5.89-8.43-3.94-16.82-7.97-25.11-12.24zM327.46 153.99c6.55.95 13.02 2.24 19.46 3.67 6.44 1.41 12.84 3.01 19.21 4.73 3.18.88 6.35 1.8 9.52 2.73 3.15 1 6.31 1.93 9.43 3.05 3.13 1.05 6.23 2.22 9.3 3.47 1.52.66 3.06 1.27 4.54 2.03.74.38 1.5.71 2.22 1.14l2.1 1.34-2.29-.93c-.76-.3-1.56-.52-2.34-.78-1.55-.53-3.14-.97-4.72-1.41-1.57-.48-3.16-.9-4.74-1.33-1.58-.44-3.16-.89-4.75-1.3l-19.05-5.12-9.51-2.64c-3.16-.91-6.34-1.78-9.49-2.73-6.33-1.85-12.63-3.76-18.89-5.92zM327.46 181.79c5.14-.72 10.3-1.1 15.46-1.33 2.58-.14 5.16-.17 7.74-.23 2.58-.03 5.16 0 7.75.02 5.17.13 10.33.35 15.49.92 2.58.27 5.15.63 7.71 1.12 1.28.28 2.55.54 3.81.94 1.23.38 2.55.82 3.53 1.7-.57-.32-1.18-.48-1.81-.6-.63-.12-1.25-.22-1.89-.28-1.27-.14-2.54-.23-3.82-.29-2.55-.14-5.12-.18-7.68-.25l-15.4-.26c-5.14-.13-10.28-.23-15.43-.46-5.15-.21-10.3-.48-15.46-1z" />
      <Path
        d="M335.55 204.1s40.18-10.05 45.31-6.28"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
      />
      <Path
        d="M336.23 54.78l-11.87 36.13-20.77 33.77-9.7 11.67-1.63-5.7.4-22.15 3.64-17.91-2.83-13.19s3.91-34.24 16.99-35.34L340 49.6l-3.77 5.18z"
        fill="#a29e9b"
      />
      <Path
        fill="#8F8DA3"
        d="M244.67 262.84s11.33-25.45 41.67-1.57c0 0 10.25 3.61 12.94 1.57l.42.63-39.17 27.62-5.21 3s-16.99-.77-16.25-10.36c.74-9.58 5.6-20.89 5.6-20.89zM1.14 251.05s-5.39-23.71 7.28-23.71 87.11 22.62 163.7 58.43l35.48 11.63s-6.42 17.74-16.33 22.93c0 0 23.87 16.26 24.27 57.49 0 0 21.17-2.2 21.44 7.54.27 9.74-19.69 31.42-19.69 31.42s-76.19 112.31-93.18 124.09-28.72 7.54-28.72 7.54-16.59-8.01-10.52-39.58 31.15-122.99 31.15-122.99 2.02-7.54-12.94-13.19c-14.97-5.66-90.21-52.33-101.94-121.6z"
      />
      <Path d="M19.34 234.57c13.18 4.08 26.27 8.46 39.25 13.12 6.5 2.31 12.97 4.71 19.43 7.13 6.46 2.41 12.87 4.96 19.31 7.46 6.39 2.61 12.8 5.16 19.15 7.88 6.36 2.69 12.67 5.48 18.95 8.35l9.36 4.43c3.11 1.51 6.17 3.12 9.25 4.68l2.3 1.2 2.26 1.28 4.51 2.56c.75.44 1.51.83 2.24 1.3l2.18 1.4 4.32 2.85-4.55-2.46-2.26-1.25c-.75-.42-1.54-.76-2.31-1.15l-4.65-2.25-2.32-1.12-2.36-1.04c-3.15-1.4-6.26-2.86-9.42-4.21l-9.49-4.08c-6.37-2.6-12.69-5.34-19.1-7.87-6.36-2.63-12.77-5.16-19.16-7.71l-38.45-15.19c-12.84-5.04-25.64-10.14-38.44-15.31zM9.23 243.52c13.95 4.48 27.81 9.22 41.59 14.18 6.9 2.45 13.76 5.01 20.63 7.54 6.86 2.57 13.7 5.18 20.54 7.8 13.65 5.32 27.25 10.75 40.71 16.56 6.73 2.89 13.43 5.88 20.05 9.03l4.94 2.43c1.63.85 3.27 1.66 4.89 2.53 1.62.87 3.23 1.74 4.8 2.7 1.57.95 3.11 1.98 4.47 3.21-1.46-1.12-3.06-2-4.69-2.81-1.62-.84-3.27-1.62-4.93-2.38-1.66-.77-3.34-1.48-5.01-2.22l-5.06-2.11c-6.74-2.82-13.55-5.5-20.35-8.2l-20.44-7.99-20.46-7.94L50 259.89l-20.42-8.09c-6.77-2.78-13.59-5.45-20.35-8.28zM9.23 254.36c3.69.87 7.26 2.16 10.86 3.32l10.77 3.62c7.15 2.48 14.29 4.99 21.41 7.56 7.13 2.54 14.22 5.19 21.32 7.79l21.25 7.98 21.19 8.15c7.04 2.77 14.1 5.5 21.12 8.33a1682.96 1682.96 0 0141.98 17.32c-14.34-4.87-28.61-9.92-42.82-15.13-7.12-2.57-14.2-5.24-21.3-7.86l-21.24-8.01-21.19-8.14-21.14-8.26-21.1-8.38-10.53-4.25-5.28-2.09-2.64-1.04c-.87-.3-1.74-.69-2.66-.91zM9.23 266.38c14.85 4.54 29.65 9.26 44.37 14.15 7.38 2.41 14.72 4.93 22.08 7.39l22.02 7.55 21.97 7.7c7.3 2.62 14.63 5.19 21.91 7.86 14.6 5.27 29.14 10.73 43.61 16.36a1845.12 1845.12 0 01-44.38-14.15c-7.38-2.41-14.72-4.93-22.08-7.39l-22.02-7.55-21.97-7.71c-7.31-2.62-14.63-5.19-21.91-7.86a1923.83 1923.83 0 01-43.6-16.35zM19.34 281.69c14 3.89 27.94 7.95 41.82 12.2 6.95 2.09 13.87 4.28 20.81 6.42l20.76 6.58 20.71 6.73c6.89 2.3 13.79 4.54 20.66 6.89 13.76 4.62 27.46 9.43 41.11 14.43-14-3.88-27.94-7.95-41.82-12.2-6.95-2.09-13.87-4.28-20.81-6.42l-20.76-6.58L81.11 303c-6.89-2.3-13.79-4.54-20.66-6.89-13.76-4.62-27.46-9.43-41.11-14.42zM33.91 308.32c-.13-.39-.01-.85.26-1.18.25-.34.62-.58.98-.79.75-.38 1.57-.62 2.38-.78 1.64-.33 3.31-.39 4.97-.41 3.32-.02 6.63.23 9.92.61 6.58.77 13.09 1.96 19.55 3.33 12.93 2.72 25.68 6.16 38.36 9.81 6.32 1.87 12.64 3.77 18.92 5.77 3.14.99 6.28 2.01 9.41 3.04 3.13 1.02 6.27 2.05 9.38 3.13 12.5 4.2 24.87 8.76 37.16 13.52-6.36-1.77-12.63-3.77-18.97-5.58l-18.91-5.72c-6.31-1.87-12.59-3.85-18.91-5.69-6.3-1.91-12.6-3.78-18.92-5.6-6.31-1.86-12.63-3.66-18.97-5.4-6.33-1.79-12.69-3.41-19.06-5.02-6.38-1.56-12.78-3.05-19.24-4.15-3.22-.59-6.47-1.06-9.73-1.26-1.63-.09-3.27-.13-4.88.07-.81.08-1.61.24-2.36.54-.36.16-.73.35-.99.66-.29.27-.45.69-.35 1.1zM47.66 318.45c11.41 2.27 22.75 4.82 34.07 7.47 5.66 1.3 11.3 2.7 16.95 4.06l16.91 4.22 16.87 4.38c5.61 1.51 11.23 2.97 16.83 4.54 11.21 3.08 22.38 6.26 33.49 9.73-11.41-2.26-22.75-4.81-34.07-7.47-5.66-1.3-11.3-2.71-16.95-4.06l-16.91-4.22-16.87-4.38c-5.61-1.51-11.23-2.98-16.83-4.54-11.2-3.08-22.38-6.26-33.49-9.73zM185.2 359.72c-8.01-1.02-15.97-2.34-23.9-3.76-3.97-.68-7.92-1.47-11.88-2.2l-11.85-2.37-11.82-2.53c-3.93-.9-7.87-1.74-11.78-2.69-7.84-1.85-15.67-3.8-23.43-6.04 8.01 1.02 15.97 2.33 23.9 3.75 3.97.68 7.92 1.47 11.88 2.2l11.85 2.37 11.82 2.53c3.93.9 7.87 1.74 11.78 2.69 7.85 1.86 15.67 3.81 23.43 6.05zM179.13 367.31c-5.93-.6-11.79-1.48-17.64-2.47-2.93-.47-5.83-1.04-8.75-1.56l-8.72-1.73-8.68-1.88c-2.88-.68-5.78-1.31-8.65-2.05-5.76-1.42-11.49-2.94-17.16-4.76 5.93.59 11.79 1.48 17.64 2.47 2.93.47 5.83 1.04 8.75 1.56l8.72 1.73 8.68 1.89c2.88.68 5.78 1.31 8.65 2.05 5.76 1.41 11.49 2.93 17.16 4.75zM191.27 370.28c-5.03 1.75-10.23 2.92-15.48 3.81-5.25.89-10.56 1.42-15.9 1.6-5.34.1-10.7-.07-16-.88-5.28-.84-10.53-2.21-15.33-4.53 5.21 1.14 10.37 1.81 15.58 2.2 1.31.05 2.61.11 3.91.19 1.3.09 2.61.05 3.91.07.65 0 1.3.03 1.96.04l1.96-.02c1.31-.03 2.61-.02 3.92-.08l3.92-.13c1.31-.05 2.61-.18 3.92-.23 1.31-.05 2.62-.16 3.92-.26l3.93-.3c5.25-.43 10.49-.94 15.78-1.48zM198.15 370.28c-6.09 4.8-12.38 9.31-18.76 13.7-3.17 2.22-6.41 4.33-9.63 6.47-3.24 2.12-6.51 4.18-9.78 6.25-3.3 2.02-6.6 4.04-9.94 6.01-3.36 1.93-6.7 3.89-10.13 5.7-3.41 1.84-6.87 3.6-10.4 5.23-1.78.79-3.55 1.59-5.38 2.26-1.82.67-3.69 1.34-5.63 1.5 1.88-.47 3.59-1.39 5.3-2.26 1.71-.88 3.38-1.83 5.04-2.81 3.34-1.92 6.62-3.94 9.91-5.95l19.65-12.22c6.57-4.06 13.11-8.15 19.73-12.14 6.6-4.01 13.24-7.96 20.02-11.74zM179.13 377.35c-3.65 2.98-7.52 5.64-11.48 8.15-1.97 1.27-4 2.44-6.03 3.63-2.04 1.16-4.11 2.26-6.19 3.35-4.2 2.11-8.48 4.09-12.94 5.65-2.23.79-4.51 1.46-6.83 1.96-2.32.45-4.76.8-7.09.36 2.34-.23 4.53-.95 6.68-1.77 2.16-.81 4.26-1.76 6.36-2.71 2.09-.99 4.19-1.96 6.25-3.02 2.08-1.01 4.15-2.06 6.21-3.13l12.43-6.34c4.16-2.12 8.34-4.2 12.63-6.13zM202.6 377.35c-6.16 7.18-12.66 14.05-19.32 20.76-6.65 6.72-13.53 13.21-20.58 19.53-7.09 6.26-14.35 12.37-22.05 17.93-3.85 2.78-7.8 5.42-11.97 7.75-2.09 1.14-4.23 2.22-6.47 3.06-1.12.43-2.27.78-3.44 1.03-1.17.24-2.38.37-3.56.17 1.19.04 2.34-.23 3.44-.61 1.11-.37 2.18-.82 3.22-1.35 2.09-1.04 4.09-2.25 6.04-3.56 3.91-2.57 7.63-5.45 11.31-8.35 3.65-2.95 7.29-5.92 10.84-9.01 3.58-3.05 7.12-6.15 10.62-9.29 3.54-3.11 7.02-6.28 10.51-9.45l10.45-9.52c6.97-6.39 13.91-12.77 20.96-19.09zM205.02 385.84c-8.52 11.08-17.28 21.96-26.25 32.67-4.46 5.38-9.01 10.67-13.55 15.98-4.56 5.29-9.19 10.53-13.82 15.76-4.67 5.2-9.36 10.37-14.12 15.49-4.79 5.09-9.57 10.19-14.51 15.14-4.92 4.97-9.93 9.85-15.13 14.54-2.62 2.32-5.28 4.61-8.05 6.76-1.38 1.08-2.8 2.11-4.27 3.07-1.48.91-3.03 1.85-4.77 2.17 1.69-.46 3.12-1.51 4.51-2.54 1.39-1.05 2.73-2.15 4.02-3.31 2.61-2.3 5.09-4.74 7.55-7.21 4.93-4.92 9.7-10 14.46-15.1 4.72-5.13 9.46-10.25 14.11-15.44 4.68-5.17 9.35-10.35 13.98-15.57L177 416.98l13.95-15.62c4.71-5.15 9.33-10.39 14.07-15.52zM208.66 395.02c-8.76 11.17-17.71 22.18-26.85 33.04-4.54 5.45-9.17 10.83-13.77 16.23l-13.97 16.06c-4.71 5.31-9.43 10.61-14.19 15.87-4.8 5.23-9.57 10.48-14.47 15.62-4.87 5.16-9.82 10.26-14.88 15.25-2.55 2.47-5.12 4.93-7.76 7.31-1.32 1.19-2.66 2.37-4.04 3.49-.7.55-1.41 1.09-2.14 1.6-.37.25-.75.49-1.14.71-.39.2-.81.42-1.26.42.45-.03.83-.28 1.2-.52.37-.25.72-.51 1.06-.79.69-.56 1.34-1.15 1.98-1.76 1.3-1.2 2.55-2.45 3.79-3.72 2.47-2.53 4.88-5.14 7.26-7.76 4.79-5.22 9.5-10.52 14.21-15.81l28.14-31.89 14.09-15.94 14.14-15.89c9.42-10.59 18.96-21.09 28.6-31.52zM213.11 404.21c-8.62 11.36-17.46 22.54-26.49 33.57-4.48 5.54-9.07 11-13.62 16.47-4.58 5.46-9.21 10.87-13.85 16.29-4.67 5.38-9.36 10.75-14.1 16.07-4.77 5.3-9.53 10.61-14.42 15.8-4.87 5.21-9.82 10.35-14.92 15.35-2.57 2.48-5.16 4.93-7.85 7.29a79.666 79.666 0 01-4.13 3.42c-.72.54-1.45 1.06-2.21 1.52-.76.45-1.57.95-2.47.98.89-.11 1.64-.66 2.35-1.17.72-.52 1.39-1.1 2.05-1.69 1.33-1.17 2.62-2.39 3.87-3.65 2.52-2.51 4.94-5.11 7.34-7.73 4.83-5.22 9.53-10.56 14.24-15.89l14.02-16.1 13.96-16.16 27.96-32.31 14.06-16.09c4.75-5.3 9.42-10.69 14.21-15.97zM216.35 412.48a1191.27 1191.27 0 01-25.29 33.87c-4.28 5.59-8.66 11.11-13.01 16.65-4.38 5.52-8.8 11-13.23 16.48-4.47 5.45-8.94 10.89-13.47 16.29-4.56 5.37-9.1 10.76-13.77 16.05-4.64 5.3-9.37 10.54-14.22 15.66-2.45 2.54-4.92 5.06-7.47 7.51a94.508 94.508 0 01-3.91 3.57c-.68.57-1.37 1.12-2.1 1.63-.36.26-.73.5-1.12.72-.38.22-.8.4-1.24.44.44-.08.82-.29 1.18-.54.36-.24.71-.51 1.04-.8.67-.56 1.3-1.17 1.93-1.79 1.25-1.23 2.47-2.5 3.65-3.79 2.38-2.59 4.67-5.25 6.94-7.94 4.57-5.34 9.05-10.77 13.53-16.19l26.69-32.71 26.74-32.69 13.47-16.27c4.58-5.38 9.05-10.82 13.66-16.15zM156.07 431.07c-3.77 5.15-7.81 10.08-11.95 14.91-2.05 2.43-4.19 4.79-6.3 7.17-2.14 2.36-4.31 4.68-6.49 7-4.41 4.59-8.89 9.12-13.62 13.41-2.35 2.15-4.77 4.24-7.27 6.24-1.27.97-2.54 1.96-3.88 2.84-1.32.88-2.73 1.78-4.3 2.15.74-.32 1.37-.78 1.99-1.27l.92-.75.88-.79c1.17-1.06 2.3-2.16 3.42-3.29 2.24-2.23 4.42-4.53 6.62-6.81l13.08-13.8c4.4-4.57 8.77-9.17 13.24-13.68 4.46-4.52 8.97-9 13.66-13.33zM177.11 391.96c-5.06 4.77-10.34 9.27-15.7 13.66-2.67 2.22-5.4 4.34-8.12 6.5-2.74 2.13-5.5 4.22-8.27 6.31-5.58 4.11-11.22 8.16-17.05 11.94-2.91 1.9-5.87 3.73-8.89 5.46-1.53.84-3.05 1.69-4.63 2.44-1.56.75-3.2 1.5-4.92 1.76.83-.27 1.59-.67 2.33-1.11.74-.43 1.47-.89 2.19-1.37 1.44-.95 2.85-1.94 4.25-2.95 2.81-2.01 5.57-4.09 8.34-6.14l16.6-12.43c5.57-4.1 11.12-8.23 16.76-12.25 5.62-4.04 11.28-8.03 17.11-11.82z" />
      <Path
        fill="#454251"
        d="M503.03 571.66c-12.41 33.3-86.57 104.93-86.57 104.93s-129.18-89.53-148.33-140.43c-19.15-50.89-23.46-38.64-32.9-136.97l1.75-13.82s10.11-16.61 27.51-8.01c0 0 16.13 68.79 70.43 122.12s110.04 60.15 110.04 60.15 53.35 8.1 62.25 5.75l-4.18 6.28z"
      />
      <Path d="M411.13 665.75c6.32-8.2 12.84-16.21 19.42-24.18 3.27-4 6.61-7.94 9.91-11.91l10-11.83 10.08-11.76 10.13-11.72 10.13-11.71c1.69-1.95 3.36-3.91 5.02-5.89.83-.99 1.65-1.99 2.45-3 .4-.5.8-1.01 1.18-1.53.37-.52.76-1.04.98-1.65-.14.63-.48 1.21-.79 1.78-.32.57-.65 1.12-1 1.67-.7 1.09-1.42 2.17-2.15 3.24-1.47 2.14-3 4.22-4.53 6.31-3.1 4.15-6.26 8.24-9.48 12.29-3.19 4.07-6.49 8.05-9.76 12.05l-9.96 11.88-10.13 11.73c-3.43 3.87-6.82 7.77-10.3 11.59-6.93 7.66-13.94 15.26-21.2 22.64zM404.46 659.62c5.71-7.93 11.64-15.68 17.66-23.36 2.99-3.86 6.06-7.65 9.09-11.47l9.21-11.36 9.34-11.26c3.16-3.72 6.27-7.47 9.47-11.15 6.36-7.4 12.79-14.73 19.46-21.88-5.7 7.94-11.64 15.68-17.65 23.36-2.99 3.86-6.06 7.65-9.09 11.47l-9.22 11.36-9.34 11.26c-3.16 3.72-6.27 7.47-9.47 11.15-6.36 7.4-12.8 14.74-19.46 21.88zM395.96 654.68c4.92-7.39 10.07-14.6 15.31-21.74 2.6-3.59 5.28-7.11 7.92-10.67l8.05-10.57 8.18-10.47c2.77-3.45 5.5-6.94 8.31-10.36 5.58-6.88 11.25-13.69 17.16-20.31-4.92 7.39-10.07 14.6-15.31 21.74-2.59 3.59-5.28 7.11-7.92 10.67l-8.05 10.56-8.18 10.47c-2.77 3.46-5.5 6.94-8.31 10.36-5.59 6.87-11.26 13.69-17.16 20.32zM390.3 649.26c4.37-6.93 8.98-13.68 13.68-20.37 2.32-3.36 4.74-6.66 7.11-9.99l7.24-9.89 7.37-9.79c2.5-3.23 4.96-6.49 7.51-9.69 5.05-6.43 10.18-12.79 15.55-18.98-4.37 6.93-8.98 13.68-13.67 20.37-2.32 3.36-4.74 6.66-7.11 9.99l-7.24 9.88-7.37 9.79c-2.5 3.23-4.96 6.49-7.51 9.69-5.06 6.43-10.19 12.8-15.56 18.99zM382.41 644.31c3.96-6.51 8.17-12.85 12.46-19.12 2.12-3.15 4.33-6.24 6.5-9.37l6.63-9.27 6.76-9.17c2.3-3.02 4.56-6.08 6.9-9.07 4.64-6.02 9.38-11.97 14.35-17.75-3.96 6.51-8.16 12.85-12.45 19.13-2.12 3.15-4.33 6.24-6.5 9.37l-6.64 9.26-6.77 9.17c-2.3 3.03-4.56 6.08-6.9 9.07-4.64 6.01-9.37 11.97-14.34 17.75zM376.54 632.76c3.55-5.87 7.33-11.56 11.2-17.18 1.91-2.83 3.91-5.6 5.87-8.39l6-8.3 6.13-8.2c2.09-2.7 4.13-5.43 6.27-8.1 4.22-5.37 8.53-10.67 13.08-15.8-3.54 5.87-7.32 11.56-11.19 17.19-1.91 2.83-3.91 5.6-5.87 8.39l-6 8.29-6.13 8.2c-2.09 2.7-4.14 5.43-6.27 8.1-4.23 5.37-8.54 10.67-13.09 15.8zM364.81 628.76c3.76-5.91 7.74-11.65 11.82-17.32 2.01-2.85 4.11-5.64 6.17-8.46l6.31-8.36 6.43-8.26c2.19-2.72 4.34-5.47 6.57-8.15 4.42-5.4 8.93-10.74 13.67-15.9-3.75 5.92-7.74 11.65-11.81 17.32-2.01 2.85-4.12 5.64-6.17 8.46l-6.31 8.35-6.44 8.26c-2.19 2.72-4.34 5.47-6.57 8.15-4.42 5.41-8.93 10.75-13.67 15.91zM355.51 622.4c3.41-5.65 7.06-11.13 10.79-16.54 1.84-2.72 3.77-5.38 5.66-8.07l5.8-7.97 5.93-7.88c2.02-2.59 4-5.22 6.07-7.77 4.09-5.15 8.26-10.24 12.67-15.15-3.41 5.65-7.06 11.13-10.79 16.54-1.84 2.72-3.78 5.38-5.66 8.07l-5.8 7.97-5.93 7.87c-2.02 2.59-4 5.22-6.07 7.77-4.09 5.16-8.26 10.24-12.67 15.16zM351.66 614.39c2.96-5.32 6.17-10.48 9.46-15.57 1.62-2.56 3.33-5.06 5-7.59l5.14-7.5 5.27-7.41c1.8-2.44 3.56-4.9 5.41-7.31 3.65-4.84 7.39-9.62 11.38-14.23-2.96 5.33-6.17 10.48-9.46 15.57-1.62 2.56-3.34 5.06-5 7.59l-5.14 7.5-5.28 7.4c-1.8 2.44-3.56 4.9-5.41 7.31-3.65 4.84-7.38 9.62-11.37 14.24zM343.37 608.73c2.94-5.55 6.12-10.93 9.39-16.25 1.61-2.68 3.31-5.3 4.97-7.94l5.11-7.85 5.25-7.76c1.8-2.56 3.55-5.14 5.39-7.67 3.64-5.08 7.37-10.1 11.34-14.96-2.94 5.55-6.12 10.93-9.39 16.26-1.61 2.68-3.32 5.3-4.97 7.94l-5.12 7.85-5.25 7.76c-1.8 2.56-3.55 5.14-5.39 7.67-3.63 5.07-7.36 10.09-11.33 14.95zM334.27 604.72c3.01-5.64 6.26-11.13 9.6-16.55 1.65-2.73 3.38-5.39 5.08-8.09l5.22-8 5.35-7.91c1.83-2.6 3.61-5.24 5.49-7.81 3.71-5.18 7.5-10.3 11.54-15.26-3 5.65-6.25 11.13-9.59 16.55-1.65 2.73-3.38 5.39-5.08 8.09l-5.22 8-5.35 7.91c-1.83 2.61-3.62 5.24-5.49 7.81-3.72 5.19-7.51 10.31-11.55 15.26zM324.76 598.83c3.24-5.58 6.72-11 10.28-16.35 1.76-2.69 3.6-5.32 5.41-7.98l5.55-7.88 5.68-7.79c1.94-2.56 3.83-5.16 5.82-7.69 3.92-5.09 7.93-10.13 12.18-14.99-3.23 5.59-6.71 11-10.27 16.35-1.76 2.69-3.61 5.32-5.41 7.98l-5.55 7.88-5.68 7.79c-1.94 2.56-3.83 5.16-5.82 7.69-3.93 5.1-7.94 10.13-12.19 14.99zM318.09 590.71c3.35-5.28 6.92-10.38 10.59-15.42 1.81-2.53 3.7-5 5.55-7.5l5.69-7.4 5.81-7.3c1.98-2.4 3.92-4.83 5.95-7.19 4.01-4.76 8.1-9.46 12.43-13.98-3.34 5.28-6.92 10.38-10.58 15.42-1.81 2.54-3.7 5-5.56 7.5l-5.69 7.4-5.82 7.3c-1.98 2.4-3.92 4.83-5.95 7.19-4.01 4.76-8.1 9.46-12.42 13.98zM309.19 584.58c3.27-5.18 6.77-10.18 10.36-15.12 1.77-2.49 3.63-4.9 5.44-7.36l5.57-7.25 5.7-7.15c1.95-2.35 3.85-4.73 5.83-7.05 3.93-4.67 7.95-9.26 12.2-13.68-3.27 5.19-6.77 10.19-10.35 15.12-1.77 2.49-3.63 4.9-5.44 7.36l-5.58 7.25-5.7 7.15c-1.94 2.35-3.85 4.73-5.84 7.05-3.93 4.66-7.94 9.26-12.19 13.68zM304.74 572.92c3.05-4.82 6.34-9.46 9.71-14.04 1.66-2.3 3.41-4.54 5.11-6.81l5.24-6.71 5.37-6.61c1.84-2.17 3.63-4.37 5.5-6.5 3.71-4.3 7.51-8.53 11.53-12.58-3.05 4.83-6.34 9.47-9.7 14.04-1.66 2.31-3.41 4.54-5.11 6.81l-5.25 6.71-5.37 6.6c-1.83 2.17-3.63 4.37-5.51 6.5-3.7 4.3-7.5 8.54-11.52 12.59zM295.23 565.45c3.35-4.85 6.93-9.5 10.58-14.09 1.81-2.31 3.69-4.55 5.54-6.83l5.67-6.72 5.79-6.61c1.97-2.17 3.91-4.37 5.92-6.5 3.99-4.3 8.06-8.53 12.35-12.57-3.35 4.85-6.92 9.51-10.58 14.09-1.81 2.31-3.7 4.55-5.54 6.83l-5.67 6.72-5.8 6.61c-1.97 2.17-3.91 4.37-5.92 6.5-3.98 4.3-8.04 8.53-12.34 12.57zM286.94 560.19c3.55-4.97 7.31-9.74 11.16-14.44 1.9-2.37 3.88-4.67 5.83-7l5.96-6.89 6.08-6.78c2.07-2.22 4.09-4.48 6.2-6.67 4.18-4.41 8.43-8.75 12.91-12.89-3.54 4.97-7.31 9.74-11.16 14.44-1.9 2.37-3.89 4.67-5.83 7l-5.96 6.88-6.08 6.78c-2.07 2.22-4.1 4.48-6.21 6.67-4.17 4.42-8.42 8.76-12.9 12.9zM283.3 550.3c3.38-4.47 6.97-8.74 10.63-12.94 1.81-2.12 3.7-4.16 5.56-6.24l5.68-6.12 5.8-6.01c1.97-1.96 3.91-3.97 5.92-5.9 3.99-3.89 8.05-7.71 12.33-11.33-3.37 4.47-6.96 8.74-10.63 12.94-1.81 2.12-3.71 4.16-5.56 6.24l-5.68 6.12-5.8 6.01c-1.97 1.97-3.91 3.97-5.92 5.9-3.99 3.89-8.05 7.71-12.33 11.33zM276.02 541.34c3.35-4.21 6.92-8.21 10.56-12.14 1.8-1.98 3.67-3.89 5.51-5.83l5.63-5.71 5.74-5.6c1.96-1.83 3.87-3.69 5.86-5.48 3.95-3.61 7.97-7.15 12.2-10.48-3.35 4.21-6.91 8.21-10.55 12.14-1.8 1.98-3.68 3.89-5.51 5.83l-5.63 5.71-5.75 5.6c-1.95 1.83-3.87 3.69-5.87 5.48-3.94 3.61-7.96 7.15-12.19 10.48zM270.76 531.92c3.31-4.1 6.82-7.98 10.41-11.79 1.77-1.92 3.62-3.77 5.44-5.66l5.55-5.54 5.67-5.42c1.93-1.77 3.82-3.57 5.79-5.3 3.9-3.49 7.87-6.91 12.04-10.12-3.31 4.1-6.82 7.98-10.41 11.79-1.77 1.93-3.63 3.77-5.44 5.66l-5.56 5.53-5.67 5.42c-1.93 1.77-3.82 3.57-5.79 5.3-3.89 3.5-7.86 6.92-12.03 10.13zM267.32 519.67c2.83-3.37 5.86-6.52 8.96-9.59 1.53-1.56 3.13-3.03 4.7-4.55l4.81-4.42c3.24-2.91 6.56-5.73 9.95-8.47 3.39-2.74 6.85-5.41 10.51-7.85-2.83 3.37-5.86 6.52-8.95 9.59-3.1 3.07-6.26 6.06-9.51 8.96l-4.92 4.3c-1.68 1.39-3.32 2.82-5.03 4.17-3.4 2.75-6.86 5.41-10.52 7.86zM260.65 510.95c2.99-3.31 6.17-6.4 9.42-9.4 1.61-1.52 3.28-2.97 4.92-4.45l5.03-4.32c3.38-2.84 6.85-5.59 10.37-8.26 3.53-2.67 7.13-5.25 10.92-7.61-2.99 3.32-6.17 6.4-9.41 9.41-3.25 3-6.56 5.93-9.95 8.76l-5.14 4.19c-1.75 1.36-3.46 2.75-5.24 4.06-3.54 2.67-7.14 5.26-10.92 7.62zM260.65 499.64c2.78-3.15 5.75-6.06 8.78-8.9 1.5-1.44 3.07-2.8 4.6-4.2l4.71-4.07c3.17-2.68 6.43-5.26 9.74-7.76 3.32-2.5 6.71-4.92 10.28-7.11-2.78 3.15-5.74 6.07-8.78 8.91-3.04 2.84-6.14 5.6-9.32 8.26l-4.82 3.94c-1.64 1.27-3.25 2.58-4.93 3.81-3.3 2.5-6.69 4.92-10.26 7.12zM258.42 489.04c2.5-2.87 5.2-5.52 7.95-8.09 1.36-1.3 2.79-2.53 4.19-3.79l4.3-3.66c2.89-2.4 5.87-4.71 8.91-6.93 3.04-2.23 6.15-4.37 9.44-6.28-2.5 2.88-5.19 5.52-7.95 8.09-2.76 2.56-5.58 5.05-8.49 7.44l-4.4 3.53c-1.5 1.14-2.97 2.31-4.51 3.4-3.04 2.22-6.14 4.37-9.44 6.29zM254.98 475.61c2.93-2.62 6.03-5 9.18-7.28 1.56-1.17 3.18-2.24 4.77-3.36l4.86-3.22c3.27-2.11 6.6-4.11 9.99-6.03 3.39-1.92 6.84-3.74 10.44-5.32-2.93 2.63-6.03 5-9.18 7.29-3.15 2.28-6.36 4.49-9.63 6.58l-4.95 3.08c-1.68.98-3.33 2.01-5.04 2.94-3.39 1.91-6.83 3.74-10.44 5.32zM251.34 465.47c2.49-2.11 5.13-3.97 7.82-5.73 2.68-1.78 5.44-3.43 8.23-5 2.8-1.57 5.64-3.06 8.56-4.43 2.91-1.38 5.86-2.67 8.97-3.69-2.49 2.12-5.13 3.97-7.82 5.73-2.68 1.78-5.44 3.43-8.23 5-2.8 1.57-5.64 3.06-8.56 4.42-2.91 1.39-5.87 2.68-8.97 3.7zM247.9 453.46c2.4-1.75 4.92-3.21 7.47-4.61 2.56-1.38 5.17-2.65 7.82-3.83 2.65-1.18 5.34-2.26 8.08-3.24 2.75-.96 5.52-1.85 8.43-2.46-2.4 1.75-4.92 3.22-7.47 4.61a115.34 115.34 0 01-7.82 3.83c-2.65 1.18-5.34 2.26-8.08 3.24-2.75.96-5.52 1.85-8.43 2.46zM246.08 443.09c2.24-1.58 4.6-2.87 6.99-4.09 2.4-1.21 4.83-2.3 7.31-3.3 2.48-1 4.99-1.91 7.55-2.71 2.57-.78 5.16-1.49 7.88-1.91-2.24 1.58-4.6 2.88-6.99 4.1a95.63 95.63 0 01-7.31 3.3c-2.48 1-4.99 1.91-7.55 2.7-2.57.78-5.17 1.49-7.88 1.91zM244.67 432.02c2.06-1.26 4.21-2.22 6.38-3.11 2.18-.87 4.39-1.62 6.63-2.28 2.24-.66 4.51-1.21 6.82-1.65 2.31-.41 4.64-.79 7.07-.74-4.2 2.32-8.57 3.94-13.05 5.27a78.58 78.58 0 01-6.81 1.66c-2.3.42-4.63.78-7.04.85zM243.66 424.24c1.69-1.54 3.53-2.8 5.39-3.99 1.87-1.18 3.8-2.25 5.77-3.23a65.34 65.34 0 016.06-2.65c2.08-.77 4.19-1.47 6.44-1.88-1.69 1.54-3.52 2.8-5.39 4-1.87 1.18-3.8 2.25-5.77 3.23a65.34 65.34 0 01-6.06 2.65c-2.08.75-4.19 1.45-6.44 1.87zM242.04 412.48c1.53-1.27 3.16-2.26 4.83-3.16a49.681 49.681 0 0110.52-4.14c1.84-.47 3.71-.86 5.69-.97-1.52 1.27-3.16 2.26-4.83 3.16-1.67.89-3.39 1.68-5.14 2.36-1.75.69-3.54 1.28-5.38 1.76-1.84.49-3.71.88-5.69.99zM241.23 404.21c1.39-1.22 2.89-2.17 4.42-3.04 1.54-.85 3.12-1.6 4.73-2.24 1.62-.65 3.27-1.2 4.97-1.65 1.7-.43 3.44-.78 5.29-.85-1.39 1.23-2.88 2.18-4.42 3.04-1.54.85-3.12 1.6-4.74 2.24-1.62.65-3.27 1.2-4.97 1.64-1.69.44-3.43.79-5.28.86zM239 393.85c1.38-1.17 2.86-2.06 4.37-2.87 1.52-.8 3.07-1.48 4.67-2.07 1.59-.59 3.22-1.08 4.89-1.47 1.67-.37 3.38-.66 5.19-.66-1.38 1.17-2.86 2.07-4.37 2.87-1.52.8-3.07 1.48-4.67 2.07-1.59.59-3.22 1.08-4.89 1.46-1.67.37-3.38.66-5.19.67z" />
    </Svg>
  )
}
