import React, { memo, useEffect } from "react";
import LayoutContent from "../../@adminlte/adminlte/Content/LayoutContent";
import DataTable from "../../@adminlte/adminlte/Datatable";
import { usePage } from "../../screens";
import { useGetter, useDispatch } from "../../store";
const List = memo(({ title = "", model, columns = [], params = {} }) => {
  const value = useGetter(`${model}`, "value");
  const meta = useGetter(`${model}`, "meta");
  const page = usePage(`${model}`,'create');
  const fetch = useDispatch(`${model}`, "fetch");
  useEffect(() => {
    fetch(params);
  }, [params]);
  console.log(value);
  return (
    <LayoutContent title={title}>
      <DataTable
        data={value}
        meta={meta}
        columns={columns}
        addUrl={page}
        urlName={"+"}
      />
    </LayoutContent>
  );
});

export default List;
