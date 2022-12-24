import React, { memo, useMemo } from "react";
import { useDispatch, useGetter } from "../store";
const useActive = (index) => {
  const activeIndex = useGetter("permissions", "roleActiveIndex");
  return index === activeIndex;
};
const Item = ({ item, index, onClick }) => {
  const isActive = useActive(index);
  const component = useMemo(
    () => (
      <div
        style={{
          marginLeft: 10,
          marginRight: 10,
        }}
        onClick={() => !isActive && onClick(index)}
      >
        <div style={{ color: isActive ? "green" : "red" }}>{item.name}</div>
      </div>
    ),
    [isActive, index, onClick]
  );

  return component;
};
const Role = () => {
  const roles = useGetter("permissions", "roles");
  const setRoleActiveIndex = useDispatch("permissions", "setRoleActiveIndex");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {roles.map((item, index) => (
          <Item
            item={item}
            index={index}
            key={item.id}
            onClick={setRoleActiveIndex}
          />
        ))}
      </div>
    </>
  );
};

export default Role;
