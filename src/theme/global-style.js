import { createGlobalStyle } from "styled-components";
import SpaceMonoRegular from "../fonts/SpaceMono-Regular.ttf";
import SpaceMonoBold from "../fonts/SpaceMono-Bold.ttf";
import NimbusRegular from "../fonts/Nimbus-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
 * {
   box-sizing:border-box;
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
   --highlight-color: #edff00;
   }

#root {
  height:100%;
}
body{
margin:0;
font-size: 18;
font-family: "SpaceMonoRegular";
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: var(--main-font-color);
background-color: var(--primary-color)
}

h1 {
font-family: "NimbusRegular";
font-size: 120px;
}
a {
  text-decoration: none;
  
  :hover {
    text-decoration:line-through;
  }
}
 
`;

export default GlobalStyle;
