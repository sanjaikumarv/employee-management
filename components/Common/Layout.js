import AbilityProvider from "../../lib/contexts/AbilityContext";
import AuthProvider from "../../lib/contexts/AuthContext";
import PopupProvider from "../../lib/contexts/PopupContext";

export default function Layout({ children }) {
  return (
    <PopupProvider>
      <AuthProvider>
        <AbilityProvider>{children}</AbilityProvider>
      </AuthProvider>
    </PopupProvider>
  );
}
