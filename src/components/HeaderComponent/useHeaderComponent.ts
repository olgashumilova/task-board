import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";

export const useHeaderComponent = () => {
  const [showRegisterButons, setShowRegisterButtons] = useState(false);
  const userProfile = useSelector((state: RootState) => state.userProfile);
  const userName = localStorage.getItem("username");

  useEffect(() => {
    if (userProfile !== null && userName) {
      setShowRegisterButtons(false);
    } else {
      setShowRegisterButtons(true);
    }
  }, [userProfile, userName]);

  return { showRegisterButons, userProfile };
};
