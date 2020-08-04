import React from 'react';
import { create } from "react-test-renderer";
import ProfileInfo from "./ProfileInfo";

describe("ProfileInfo component", () => {
    test("status from props should be in the local state", () => {
        const component = create(<ProfileInfo status="it-incubator.by" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-incubator.by");
    });

    test("after render span should be displayed", () => {
        const component = create(<ProfileInfo status="it-incubator.by" />);
        const root = component.root;
        const span = root.findAllByType("span");
        expect(span).not.toBeNull();
    });

    test("after render input should not be displayed", () => {
        const component = create(<ProfileInfo status="it-incubator.by" />);
        const root = component.root;
        expect(()=> {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("after render span should be displayed with correct status", () => {
        const component = create(<ProfileInfo status="it-incubator.by" />);
        const root = component.root;
        let span = root.findAllByType("span");
        expect(span.children[0]).toBe("it-incubator.by");
    });

    test("input should be displayed while EditMode instead of span", () => {
        const component = create(<ProfileInfo status="it-incubator.by" />);
        const root = component.root;
        let span = root.findAllByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("it-incubator.by");
    });

    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileInfo status="it-incubator.by" updateStatus={mockCallBack} />);
        const instance = component.getInstance();
        instance.onBlur()
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});

