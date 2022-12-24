import React, { memo,useEffect } from "react";
import LayoutContent from "../../@adminlte/adminlte/Content/LayoutContent";
import DataTable from "../../@adminlte/adminlte/Datatable";
import { ADD_ROLE } from "../../config/links";
import { useGetter,useDispatch } from '../../store';
const RoleList = memo(() => {
  const value = useGetter('roles','value');
  const meta = useGetter('roles','meta');
  const fetch = useDispatch('roles','fetch');
  const columns = [
    {
      Header: "Nom",
      accessor: "name",
    },
  ];
  useEffect(() => {
    fetch()
  }, [])
  console.log(value);
  return (
    <LayoutContent title={"Roles"}>
      <DataTable
        data={value}
        meta={meta}
        columns={columns}
        addUrl={ADD_ROLE}
        urlName={"Ajouter une role"}
      />
    </LayoutContent>
  );
});

export default RoleList;
