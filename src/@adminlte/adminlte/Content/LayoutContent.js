import React, { memo } from "react";
import Content from "./";
import ContentHeader from "./ContentHeader";
import ActiveLink from "./ActiveLink";
import Page from "./Page";
const LayoutContent = memo(({ title,children }) => {
  return (
    <Content>
      <ContentHeader title={title || "Content Header"}>
        <ActiveLink title={title  || "Content Header"}></ActiveLink>
      </ContentHeader>
      <Page>{children}</Page>
    </Content>
  );
});

export default LayoutContent;
