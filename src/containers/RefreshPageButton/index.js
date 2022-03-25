import React from "react";
import "./Settings.css";
import { useDispatch } from "react-redux";
import { setRenderState } from "../ExamNavigation/actions";
import { navigationPhaseTypes } from "../renderSwitch/renderSwitch";
import { Button } from "@material-ui/core";

const renderViewDispatch = (dispatch) => ({
  setRenderState: (nameState) => dispatch(setRenderState(nameState)),
});

const ReturnToMainPageButton = () => {
  // this destructing allows us to use onInputChange instead of props.onInputChange

  //-------------------- Functions Fetch and Store Data for the setRenderState:

  const { setRenderState } = renderViewDispatch(useDispatch());

  //-------------------- END of functions Fetch and Store Data for the setRenderState
  return (
    //

    <div className="settings">
      <Button
        color="tertiary"
        variant="contained"
        stringvalue={"Return to Main Page"}
        onClick={() => {
          window.location.reload();
        }}
      >
        Back
      </Button>
    </div>
  );
};

export default RefreshPageButton;
