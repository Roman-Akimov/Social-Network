import React from 'react';
import './index.css';
import {rendererEntireTree} from "./render";
import state from "./redux/state";


rendererEntireTree(state);



