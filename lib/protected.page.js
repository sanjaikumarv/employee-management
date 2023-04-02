import Router from "next/router";
import { useEffect } from "react";
import Loading from "../components/Common/Loading";
import { useAuth } from "./contexts/AuthContext";

export default function ProtectedPage(WrapperComponent) {
  function Wrapper() {
    const { loggedIn } = useAuth();
    useEffect(() => {
      if (!loggedIn) {
        Router.push("/account/signin");
        // auth.signOut();
      }
    }, [loggedIn]);

    if (loggedIn) {
      return <WrapperComponent />;
    }
    return (
      <Loading />
    );
  }
  return Wrapper;
}
