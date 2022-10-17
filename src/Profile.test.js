import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
    it("matches snapshot", () => {
        const utils = render(<Profile username="hwangj9642" name="황진주" />);
        expect(utils.container).toMatchSnapshot();
    });
    it("shows thhe props correctly", () => {
        const utils = render(<Profile username="hwangj9642" name="황진주" />);
        utils.getByText("hwangj96421");
        utils.getByText("(황진주)");
        // utils.getByText("hwangj9642 (황진주)");
    });
});