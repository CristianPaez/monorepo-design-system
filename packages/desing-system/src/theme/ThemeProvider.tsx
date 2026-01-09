export type SuiteTheme = "blue" | "green" | "red";

export function ThemeProvider(props: {
  theme: SuiteTheme;
  children: React.ReactNode;
}) {
  return <div data-suite-theme={props.theme}>{props.children}</div>;
}
