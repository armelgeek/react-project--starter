import React, { useRef, useState, useEffect, memo, useCallback } from "react";
import { subscribe, useGetter, useDispatch } from "../store";
import Role from "./Role";
const PermissionItem = memo(
  ({ item, index, selectedList, onClick }) => {
    const isSelected = selectedList.findIndex((v) => v.id == item.id) > -1;
    console.log("is", isSelected);
    return (
      <div key={index} onClick={onClick}>
        <span
          style={{
            color: isSelected ? "green" : "red",
          }}
        >
          {isSelected ? "ckeck" : "no-check"}
        </span>
        {" : "}
        {item.desc}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return !!(
      prevProps.item === nextProps.item &&
      prevProps.index === nextProps.index &&
      nextProps.selectedList.findIndex((v) => v.id == prevProps.item.id) > -1 ==
        prevProps.selectedList.findIndex((v) => v.id == nextProps.item.id) > -1
    );
  }
);
const Permission = () => {
  const scopes = [
    {
      id: 1,
      name: "can-create",
      desc: "can create",
    },
    {
      id: 2,
      name: "can-edit",
      desc: "can edit",
    },
    {
      id: 3,
      name: "can-delete",
      desc: "can delete",
    },
    {
      id: 4,
      name: "can-view",
      desc: "can view",
    },
  ];
  const permissions = useGetter("permissions", "permissions");
  const activeIndex = useGetter("permissions", "roleActiveIndex");
  const setPermissions = useDispatch("permissions", "setPermissions");
  const selectedPermissionRef = useRef(permissions);
  useEffect(() => {
    selectedPermissionRef.current = permissions;
  }, [activeIndex]);
  const handleSelectPermission = useCallback(
    (item) => {
      if (selectedPermissionRef.current.length) {
        let index = selectedPermissionRef.current
          .map((e) => e.id)
          .indexOf(item.id);
        if (index != -1) selectedPermissionRef.current.splice(index, 1);
        else selectedPermissionRef.current.push(item);
      } else selectedPermissionRef.current.push(item);
      setPermissions([...selectedPermissionRef.current]);
    },
    [selectedPermissionRef]
  );
  const renderItem = useCallback(
    ({ item, index }) => (
      <PermissionItem
        item={item}
        index={index}
        activeIndex={activeIndex}
        selectedList={permissions}
        onClick={() => handleSelectPermission(item)}
      />
    ),
    [activeIndex, handleSelectPermission, permissions]
  );

  return (
    <>
      <Role />
      {scopes.map((item, index) => renderItem({ item, index }))}
    </>
  );
};

export default Permission;
