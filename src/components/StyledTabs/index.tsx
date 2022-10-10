import { Tabs, TabsProps } from "@mantine/core";

const StyledTabs = (props: TabsProps) => {
  return (
    <Tabs
      unstyled
      defaultValue={props.defaultValue}
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: "#35105f",
          color: 'white',
          border: "none",
          borderRadius: 0,
          padding: "8px 60px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          fontSize: "20px",
          fontFamily: "inherit",
          "&:disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
          "&[data-active]": {
            backgroundColor: "#de7508",
          },
        },
        tabsList: {
          display: "flex",
        },
      })}
      {...props}
    />
  );
}

export default StyledTabs
