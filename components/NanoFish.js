import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

export function NanoFish() {
  return (
    <Svg
    viewBox="-50 -200 1080 1080" height={60} width={60}
>
      <Path
        d="M173.64 284.07s0 14.29 79.21 20.96c0 0 105.25-20 201.82-31.44 0 0 139.97-22.86 248.48 0 0 0 125.87 15.24 136.72 48.58 0 0 22.79 51.44-84.63 67.64 0 0-83.55 20.96-217.01 23.82 0 0-93.31 5.72-194.23-28.58 0 0-108.51-51.44-159.5-10.48l-16.28-.95c0-.01-19.53-36.21 5.42-89.55z"
        fill="#99a9b7"
        stroke="#000"
        strokeMiterlimit={10}
      />
      <Ellipse
        fill="#DC9C37"
        stroke="#000000"
        stroke-miterlimit={10}
        cx={779.4}
        cy={334.18}
        rx={30.05}
        ry={28.8}
      />
      <Ellipse
        cx={779.4}
        cy={329.94}
        rx={16.39}
        ry={12.01}
        stroke="#000"
        strokeMiterlimit={10}
      />
      <Path
        d="M286.46 309.01s85.72 29.53 144.31 33.34 116.1 27.63 116.1 27.63 17.36 14.29-6.51 41.91l-68.55-2.25-58.33-8.48-54.46-13.69-52.12-18.96-56.45-11.15-49.24 6.77-14.58 8.7-16.28-.95s-22.79-32.39 5.43-89.55l14.79 9.91 34.85 7.75 29.57 3.31 31.47 5.71z"
        fill="#db5341"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M755.2 309.86s-46.66-2.86-146.48 20c0 0-57.51 12.38-119.36 0s-160.48-31.09-222.93-23.64l-11.45-2.08 85.6-14.87s64.14 2.49 69.57 4.39 79.21 15.24 152.99 14.29c0 0 164.93-32.39 230.03-4.76.01.01-31.46-2.85-37.97 6.67z"
        fill="#8ad1f1"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M754.11 377.76s-87.89-27.15-18.45-78.11"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
      />
      <Path
        d="M657 389.67s52.08-26.2 45.57-32.86c-6.51-6.67-30.38-16.67-56.42-9.05S657 389.67 657 389.67z"
        fill="#bfdbf3"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M821.87 304.38s-3.74 19.26 19.05 27.12c0-.01 7.47-11.38-19.05-27.12z"
        fill="#b6c0cd"
        stroke="#000"
        strokeMiterlimit={10}
      />
      <Path
        d="M175.78 281.9S100.91 152.35 0 152.35l10.85 31.44s37.98 49.54 60.76 69.54c0 0 45.57 91.45-32.55 183.85 0 0-24.96 17.15-39.06 68.59 0 0 78.12 0 103.08-42.87l67.27-91.45-5.7-17.74-1.57-28.58 2.69-14.09 5.8-18.06 4.21-11.08z"
        fill="#3f73a4"
        stroke="#000"
        strokeMiterlimit={10}
      />
      <Path
        d="M446.64 258.44s33.77-76.45 66.32-82.52c32.55-6.07 88.7 82.52 88.7 82.52l3.66 7.14-28.08 1.51-40.62 1.82-42.23 3.55-34.32 4.29-22.56 2.88 9.13-21.19z"
        fill="#3e74a5"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M543.8 466.51s40.69-26.2 56.97-51.44l4.56-6.98-34.68 1.86s-4.61 13.7-8.95 24.65c-4.34 10.95-11.12 16.91-11.12 16.91l-9.77 11.67-1.09 3.33h4.08z"
        fill="#4d73a5"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M381.4 400.98s7.05 36.68 36.89 51.92c29.84 15.24 53.51-42.73 53.51-42.73l-28.56-3.47-33.32-5.72-26.32-6.8-2.2 6.8z"
        fill="#3e76aa"
        stroke="#000"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <Path d="M70.53 460.33c5.66-8.92 11.83-17.52 18.35-25.84 6.51-8.33 13.42-16.36 20.75-24.01 7.36-7.61 15.15-14.85 23.69-21.17 4.28-3.14 8.75-6.04 13.45-8.5 4.72-2.41 9.68-4.47 14.89-5.44-5.1 1.41-9.9 3.63-14.42 6.3-4.54 2.64-8.83 5.67-12.98 8.88-4.13 3.23-8.1 6.68-11.95 10.25-3.87 3.55-7.59 7.27-11.24 11.06-3.67 3.76-7.21 7.67-10.7 11.6-3.51 3.92-6.91 7.95-10.28 11.99-3.36 4.06-6.68 8.15-9.93 12.3-3.29 4.14-6.47 8.35-9.63 12.58zM86.36 386.81c3.43-.89 6.84-1.79 10.21-2.85 3.38-1 6.74-2.09 10.08-3.19 6.67-2.26 13.26-4.75 19.73-7.52l4.84-2.11 4.75-2.28c1.61-.72 3.14-1.57 4.7-2.38l2.34-1.23c.79-.39 1.56-.82 2.31-1.27l4.57-2.64c1.53-.88 2.97-1.89 4.46-2.82l2.24-1.41c.74-.48 1.44-1.02 2.16-1.53 1.43-1.04 2.87-2.06 4.33-3.07-5.24 4.75-10.87 9.14-16.97 12.81-6.08 3.68-12.39 7-18.94 9.76-6.54 2.77-13.23 5.2-20.05 7.17-6.81 1.98-13.74 3.58-20.76 4.56zM92.23 334.48c5.46.07 10.9.26 16.34.59 5.44.29 10.87.71 16.29 1.14 5.42.47 10.85.97 16.26 1.58 5.41.58 10.82 1.3 16.21 2.14-5.46-.07-10.9-.26-16.34-.58-5.44-.3-10.87-.71-16.29-1.14-5.42-.47-10.85-.97-16.26-1.58-5.41-.6-10.82-1.32-16.21-2.15zM86.36 293.82c7.05.89 13.99 2.54 20.79 4.62 3.41 1.01 6.76 2.22 10.11 3.43l4.96 1.97c1.65.66 3.26 1.42 4.9 2.12l2.43 1.1 2.39 1.18c1.59.8 3.21 1.55 4.77 2.4 3.1 1.75 6.26 3.39 9.24 5.35 1.5.96 3.04 1.84 4.5 2.87l4.36 3.07c1.46 1.01 2.84 2.13 4.23 3.24 1.39 1.1 2.77 2.22 4.14 3.35-5.93-3.9-11.84-7.77-18.02-11.18-6.12-3.5-12.43-6.66-18.86-9.55-6.4-2.95-12.98-5.52-19.63-7.87-6.66-2.31-13.41-4.45-20.31-6.1zM64.02 194.38c2.18 6.08 4.9 11.93 7.93 17.61 2.98 5.7 6.25 11.25 9.79 16.62 7.03 10.76 14.98 20.92 23.68 30.38 8.65 9.51 18.04 18.34 28.01 26.48l3.73 3.06 3.82 2.95c2.52 2 5.16 3.85 7.76 5.76 2.58 1.93 5.27 3.7 7.91 5.56l8.08 5.33c-2.79-1.61-5.61-3.2-8.36-4.89-2.72-1.74-5.51-3.39-8.18-5.2-2.67-1.82-5.36-3.61-7.95-5.55l-3.92-2.86-3.84-2.97c-5.14-3.94-10.01-8.22-14.78-12.59-4.77-4.38-9.32-9-13.74-13.74-4.34-4.81-8.49-9.79-12.43-14.93-3.93-5.15-7.69-10.44-11.07-15.97-6.78-11.02-12.77-22.64-16.44-35.05z" />
      <Ellipse
         fill="#DC9C37"
        stroke="#000000"
        stroke-miterlimit={10}
        cx={778.39}
        cy={329.06}
        rx={5.83}
        ry={5.12}
      />
    </Svg>
  )
}