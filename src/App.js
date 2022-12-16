import "./App.css";
import LayoutContent from "./@adminlte/adminlte/Content/LayoutContent";
import { createBrowserHistory } from "history";
import { useGetter, useDispatch } from "./store";
import { useCallback, useEffect } from "react";
import PermissionsGate from "./components/PermissionsGate";
import { SCOPES } from "./config/permissions-maps";
import Permission from "./pages/Permission";
import Setting from "./pages/Setting";
const history = createBrowserHistory();

function App() {
  const success = useGetter("posts", "success");
  const error = useGetter("posts", "error");
  const isLoading = useGetter("posts", "isLoading");
  const value = useGetter("posts", "value");
  const selected = useGetter("posts", "selected");
  const create = useDispatch("posts", "create");
  const fetch = useDispatch("posts", "fetch");
  const update = useDispatch("posts", "update");
  const destroy = useDispatch("posts", "destroy");
  const get = useDispatch("posts", "get");
  const activeThemeId = useGetter("common", "activeThemeId");
  const createItem = useCallback(() => {
    create({
      id: new Date().getTime(),
      title: "foo",
      body: "bar",
      userId: 1,
    });
  }, []);

  const onClickItem = useCallback((item, index) => {
    update(
      {
        id: item.id,
        title: "hello leka",
      },
      {
        index: index,
      }
    );
  }, []);
  const destroyItem = useCallback((item, index) => {
    if (window.confirm(`Vous voulez vraiment supprimer le post #${item.id}`)) {
      destroy(item, {
        index: index,
      });
    }
  }, []);
  const getItem = useCallback((item, index) => {
    get(item);
  }, []);
  const renderItem = useCallback((v, i) => {
    //console.log("index", i);
    return (
      <tr
        key={i}
        style={{
          backgroundColor: v.hasModified ? "green" : "transparent",
          color: v.hasModified ? "#fff" : "#000",
        }}
      >
        <td>{v.id}</td>
        <td key={i}>{v.title}</td>
        <td>
          <button className="mr-3 btn btn-info" onClick={() => getItem(v, i)}>
            Voir
          </button>
          <button
            className="mr-3 btn btn-warning"
            onClick={() => onClickItem(v, i)}
          >
            Editer
          </button>
          <button className="btn btn-danger" onClick={() => destroyItem(v, i)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }, []);
  useEffect(() => {
    //   fetch();
  }, []);

  return (
    <LayoutContent title={"Parametres"}>
      <p
        style={{
          color: `${activeThemeId}`,
        }}
      >
        {activeThemeId}
      </p>
      <Setting />
      <Permission />
      {/** <PermissionsGate
        scopes={[SCOPES.canEdit]}
      >
        <h1>Private content</h1>
        <p>Must be an editor to view</p>
      </PermissionsGate>
      {error && <p>{error}</p>}
      {success && <p className={"text-green"}>{success}</p>}
      {isLoading && <p>Chargement en cours ....</p>}
      {selected && <p>selected:{selected.title}</p>}
      <button onClick={createItem} className="pl-1 py-3">
        Create post
      </button>
      <table className="table w-100 table-striped text-left" border={2}>
        <thead>
          <tr>
            <th className="uppercase">Id</th>
            <th className="uppercase">Title</th>
            <th className="uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>{value.map(renderItem)}</tbody>
      </table> */}
    </LayoutContent>
  );
}

export default App;
