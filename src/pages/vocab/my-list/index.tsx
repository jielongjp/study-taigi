import React from "react";
import { useEffect, useState } from "react";
import DataList from "../../../components/UserVocabList";
import { styled } from "styled-components";
import { RowData } from "@/components/VocabCardList";
import { getCookie } from "@/components/VocabListItem";
import Link from "next/link";
import Head from "next/head";

const MyVocabPage = () => {
  const [userList, setUserList] = useState<RowData[]>([]);

  const metaDescription = `Taiwanese vocabulary list for user. Learn words in Taiwanese Hokkien with English and Mandarin`;

  useEffect(() => {
    const cookie = getCookie("userVocabList");
    if (cookie && cookie.trim() !== "") {
      const vocabList: RowData[] = JSON.parse(cookie) || [];
      setUserList(vocabList);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My saved Taiwanese Hokkien vocabulary</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>{" "}
      <StContainer>
        <StTitle>My saved Taiwanese vocabulary</StTitle>
        {userList.length === 0 ? (
          <>
            <StEmpty>Nothing here yet...</StEmpty>
            <StEmpty>
              Click on the link below to start adding some vocabulary cards and
              review them here.
            </StEmpty>
            <Link href="/vocab">See all vocab categories</Link> <StEmpty />
          </>
        ) : (
          <>
            <Link href="/vocab">See all vocab categories</Link>
            <DataList vocabList={userList} />
          </>
        )}
      </StContainer>
    </>
  );
};

const StTitle = styled.h1`
  margin: 8px;
`;

const StContainer = styled.div`
  text-align: center;
`;

const StEmpty = styled.div`
  margin: 12px;
`;

export default MyVocabPage;
