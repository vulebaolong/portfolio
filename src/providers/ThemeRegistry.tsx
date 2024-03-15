"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { useServerInsertedHTML } from "next/navigation";
import { useMemo, useState } from "react";

export const borderRadius = "30px";
export const heightHeader = "80px";

type TColor = {
  // input: {
  //   borderColor: string;
  // };
  // other: {
  //   color1: string;
  //   color2: string;
  //   color3: string;
  //   color4: string;
  //   color5: string;
  //   color6: string;
  //   color7: string;
  //   color8: string;
  //   color9: string;
  //   opacity1: string;
  //   opacity2: string;
  // };
};

declare module "@mui/material/styles" {
  interface TypeText {
    tertiary: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
  }
  interface PaletteOptions extends TColor {}
  interface Palette extends TColor {}
}

export default function ThemeRegistry(props: any) {
  const theme = useMemo(
    () =>
      extendTheme({
        colorSchemes: {
          light: {
            palette: {
              // primary: { main: "#AD59FB" },
              background: { paper: "#fff", default: "#fff" },
              // text: {
              //   primary: "#444",
              //   primaryChannel: "",
              //   secondary: "#666",
              //   tertiary: "#666",
              //   color1: "#999",
              //   color2: "#000",
              //   color3: "#666",
              //   color4: "#999",
              //   color5: "#999",
              // },
              // input: {
              //   borderColor: "#CCC",
              // },
              // other: {
              //   color1: "#EEE",
              //   color2: "linear-gradient(180deg, #FFF 0%, #F5F5F5 100%), #FFF",
              //   color3: "linear-gradient(180deg, #FFF 0%, #F5F5F5 100%), #FFF",
              //   color4: "transparent",
              //   color5: "rgba(255, 255, 255, 0.50)",
              //   color6: "#999",
              //   color7: "linear-gradient(180deg, #FFF 0%, #F5F5F5 100%), #FFF",
              //   color8: "rgba(255, 255, 255, 0.8)",
              //   color9: "rgba(255, 255, 255, 0.25)",
              //   opacity1: "0.3",
              //   opacity2: "0",
              // },
            },
          },
          dark: {
            palette: {
              // primary: { main: "#AD59FB" },
              background: { paper: "#000", default: "#000" },
              // text: {
              //   primary: "#FFF",
              //   primaryChannel: "",
              //   secondary: "#999",
              //   tertiary: "#CCC",
              //   color1: "#CCC",
              //   color2: "#fff",
              //   color3: "#fff",
              //   color4: "#ffffff66",
              //   color5: "#fff",
              // },
              // input: {
              //   borderColor: "#444",
              // },
              // other: {
              //   color1: "#444",
              //   color2: "linear-gradient(180deg, #262027 0%, rgba(32, 35, 39, 0.00) 100%), rgba(0, 0, 0, 0.50)",
              //   color3: "linear-gradient(180deg, #222 0%, rgba(32, 35, 39, 0.00) 100%), #000",
              //   color4: "#444",
              //   color5: "rgba(0, 0, 0, 0.50)",
              //   color6: "#666",
              //   color7: "linear-gradient(180deg, #000 0%, #321449 100%)",
              //   color8: "linear-gradient(180deg, #262027 0%, rgba(32, 35, 39, 0.00) 100%), #000",
              //   color9: "rgba(0, 0, 0, 0.25)",
              //   opacity1: "1",
              //   opacity2: "0.7",
              // },
            },
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: "8px",
              },
            },
          },
          MuiContainer: {
            defaultProps: {
              maxWidth: "lg",
            },
          },
        },
      }),
    []
  );

  const { options, children } = props;

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </CacheProvider>
  );
}
