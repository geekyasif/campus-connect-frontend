import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useUser() {
  const { user, authToken } = useSelector((state) => state.auth);

  return {
    user_id: user?.id,
    user: user?.user,
    authToken,
    personal_details: user?.user?.personal_details,
    current_user_id: user?.id,
  };
}

export default useUser;
