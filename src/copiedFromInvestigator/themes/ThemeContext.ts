import React from "react";

import { pubTheme } from "../../themes/pubTheme";
import { ThemeV1 } from "./types";

export const ThemeContext = React.createContext<ThemeV1>(pubTheme);
