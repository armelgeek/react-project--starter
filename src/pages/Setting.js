import React, { memo, useMemo } from "react";
import { useGetter, useDispatch } from "../store";
const ThemeItem = ({ id, color, setTheme }) => {
  const useActive = (color) => {
    const activeThemeId = useGetter("common", "activeThemeId");
    const isActive = useMemo(() => activeThemeId == color, [activeThemeId, color]);
    return isActive;
  };
  return (
    <div
      key={id}
      style={{
        padding: 10,
        color: useActive(color) ? color : "#000",
      }}
      onClick={() => setTheme(color)}
    >
      {color}
    </div>
  );
};
const Setting = memo(() => {
  const themes = [
    {
      id: 1,
      color: "red",
    },
    {
      id: 2,
      color: "green",
    },
    {
      id: 3,
      color: "pink",
    },
  ];
  const setTheme = useDispatch("common", "setTheme");

  return (
    <>
      <h2>Settings</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {themes.map(({ id, color }) => (
          <ThemeItem id={id} color={color} setTheme={setTheme} />
        ))}
      </div>
    </>
  );
});

export default Setting;
