import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { AbilityContext } from "@/casl/abilityFor";
import { ability } from "@/casl/abilityFor";
import { Provider } from "react-redux";
import store from "@/Redux/store";
export default function App({ Component, pageProps }: AppProps) {

  return( 
  
      <FluentProvider theme={webLightTheme} >
          <AbilityContext.Provider value={ability}> 
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
          </AbilityContext.Provider>
      </FluentProvider>
    
);
}
