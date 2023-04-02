import { createContext, useCallback } from "react";
import { createContextualCan } from "@casl/react";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import useHttpClient from "../hooks/useHttpClient";
import { usePopup } from "./PopupContext";
import { useMemo } from "react";
import getUserAbilities from "../ability";
import { useEffect } from "react";
import { useContext } from "react";

const AbilityContext = createContext();
export const Can = createContextualCan(AbilityContext.Consumer);
export const useAbility = () => useContext(AbilityContext);

export default function AbilityProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [permissions, setPermissions] = useState([]);
  const { showError } = usePopup();
  const { loggedIn } = useAuth();
  const httpClient = useHttpClient();

  const getUserPerms = useCallback(() => {
    if (!loggedIn) {
      return setLoading(false);
    }
    httpClient
      .get("api/user/perms")
      .then(({ data }) => {
        setPermissions(data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log("err", err);
        showError(err?.data?.response?.message);
        setLoading(false);
      });
  }, [loggedIn]);

  useEffect(() => {
    getUserPerms();
  }, [loggedIn]);

  const ability = useMemo(() => getUserAbilities(permissions), [permissions]);

  return (
    <AbilityContext.Provider value={ability}>
      {!loading && children}
      {/* {children} */}
    </AbilityContext.Provider>
  );
}
