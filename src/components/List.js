import React, { memo, useState, useCallback } from "react";
import FlatList from "flatlist-react";

const List = memo(() => {
  const [search, setSearch] = useState("");
  const onClick = useCallback((idx) => {
    console.log("onClick", idx);
  }, []);
  const renderPerson = useCallback((person, idx) => {
    console.log("render person", idx);
    return (
      <li key={idx} onClick={onClick}>
        <b>
          {person.firstName} {person.lastName}
        </b>{" "}
        (<span>{person.info.age}</span>)
      </li>
    );
  }, []);
  const onSearchInput = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <ul>
      <input value={search} onChange={onSearchInput} />

      <FlatList
        list={[
          { firstName: "Elson", lastName: "Correia", info: { age: 24 } },
          { firstName: "John", lastName: "Doe", info: { age: 18 } },
          { firstName: "Jane", lastName: "Doe", info: { age: 34 } },
          { firstName: "Maria", lastName: "Carvalho", info: { age: 22 } },
          { firstName: "Kelly", lastName: "Correia", info: { age: 23 } },
          { firstName: "Don", lastName: "Quichote", info: { age: 39 } },
          { firstName: "Marcus", lastName: "Correia", info: { age: 0 } },
          { firstName: "Bruno", lastName: "Gonzales", info: { age: 25 } },
          { firstName: "Alonzo", lastName: "Correia", info: { age: 44 } },
        ]}
        renderItem={renderPerson}
        renderWhenEmpty={() => <div>List is empty!</div>}
        search={{
          term: search,
          onEveryWord: true,
        }}
      />
    </ul>
  );
});

export default List;
