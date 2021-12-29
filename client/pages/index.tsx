import type { NextPage } from "next";
import Portal from "@components/portal";
import TestModal from "@components/modal/test";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <h1>Hellow World</h1>
      <Portal>
        <TestModal />
      </Portal>
    </>
  );
};

export default Home;
