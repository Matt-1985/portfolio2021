import { createGlobalStyle } from "styled-components";
import SpaceMonoRegular from "../fonts/SpaceMono-Regular.ttf";
import SpaceMonoBold from "../fonts/SpaceMono-Bold.ttf";
import NimbusRegular from "../fonts/Nimbus-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
 * {
   box-sizing:border-box;
 }


 *::-webkit-scrollbar {
  width: 0;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}

* {
  -ms-overflow-style: none;
} 



 @font-face {
  font-family: "NimbusRegular";
  font-style: normal;
  font-weight: 400;
  src: url(${NimbusRegular});
 }
  @font-face {
  font-family: "SpaceMonoRegular";
  font-style: regular;
  font-weight: 400;
  src: url(${SpaceMonoRegular})
}
  @font-face {
  font-family: "SpaceMonoBold";
  font-style: bold;
  font-weight: 600;
  src: url(${SpaceMonoBold})
}
 
 :root {
   --primary-color: #fffffa;
   --secondary-color: #f6f6f6;
   --main-font-color: #e879de;
   --secondary-font-color: #0090ff;
   --highlight-color: rgba(240, 255, 31, 0.39);
   }

html {
width: 100%;

scroll-behavior: smooth;
  
}
html, body {
  vertical-align: baseline;
  
}

body{
  
min-height: 100vh;
min-width: 100vw;
margin:0;
padding:0;
font-size: 100%;
font-family: "SpaceMonoRegular";
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: var(--main-font-color);
background-color: var(--primary-color);

}

p {
 font-size: 2vw;
 
}



main {
  overflow: hidden;
	height: 100%;
}

span {
margin: 0;
/* text-align: center;
font-size: 14vw;
letter-spacing: 2vw;
color: var(--primary-color); */

}



button {
  font-family: "SpaceMonoRegular";
  color: var(--primary-color);
  font-size: 1vw;
}


h1 {
font-family: "NimbusRegular";
font-size: 9vw;
color: var(--primary-color);
-webkit-text-stroke-width: 0.2px;
-webkit-text-stroke-color: var(--secondary-font-color);
}
a {
  text-decoration: none;
  color: var(--primary-color);
  
}

 
`;

export default GlobalStyle;
