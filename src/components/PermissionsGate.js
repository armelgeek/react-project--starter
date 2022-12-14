import { cloneElement } from "react";
import { PERMISSIONS, ROLES } from "../config/permissions-maps";
const hasPermission = ({ permissions, scopes }) => {
  const scopesMap = {};
  scopes.forEach((scope) => {
    scopesMap[scope] = true;
  });
  return permissions.some((permission) => scopesMap[permission]);
};
export default function PermissionsGate({ children, scopes = [] }) {
  const permissions = PERMISSIONS[ROLES.editor];
  const permissionGranted = hasPermission({ permissions, scopes });
  if (!permissionGranted) return <></>;
  return <>{children}</>;
}
