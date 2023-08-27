import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { setUser } from "../../redux/actions/actions";

import { RootState } from "../../redux/store";

export const useHeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showRegisterButons, setShowRegisterButtons] = useState(false);
  const userProfile = useSelector((state: RootState) => state.userProfile);

  useEffect(() => {
    if (userProfile !== null) {
      setShowRegisterButtons(false);
    } else {
      setShowRegisterButtons(true);
    }
  }, [userProfile]);

  const onSignOut = () => {
    dispatch(setUser(null));
    navigate(ROUTES.HOME);
  };

  return { showRegisterButons, userProfile, onSignOut };
};
