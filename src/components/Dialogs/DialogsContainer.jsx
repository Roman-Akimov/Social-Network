import React from "react";

import {addNewMessageText, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>{ store => {
                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageText(text));
                }

                let addMessage = () => {
                    store.dispatch(addNewMessageText());
                }
                return <Dialogs addMessage={addMessage}
                         updateNewMessageText={onMessageChange}
                         dialogsPage={store.getState().dialogsPage}/>
            }

        }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer;