// Customize Chakra theme
import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";

// 3. extend the theme
const MBRTheme = extendTheme({
    colors: {
        background: "#202329",
        box: "#81848a"
    },
    styles: {
        global: (props) => ({
          body: {
            bg: mode("#2c2f36","#2c2f36")(props),
          }
        })
      },
});

export default MBRTheme;