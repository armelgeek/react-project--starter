import React, { memo } from "react";
import LayoutContent from "../../@adminlte/adminlte/Content/LayoutContent";
import DataTable from "../../@adminlte/adminlte/Datatable";
import { ADD_ROLE } from "../../config/links";

const RoleList = memo(() => {
  let meta = { isLoading: false };
  const columns = [
    {
      Header: "Nom",
      accessor: "name",
    },
  ];
  return (
    <LayoutContent title={"Roles"}>
      <DataTable
        data={[]}
        meta={meta}
        columns={columns}
        addUrl={ADD_ROLE}
        urlName={"Ajouter une role"}
      />
    </LayoutContent>
  );
});

export default RoleList;
