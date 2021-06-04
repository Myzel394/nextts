import {useCountUp, useCountUpProps} from "react-countup";
import {MutableRefObject, useEffect, useRef} from "react";
import {useIsVisible} from "react-is-visible";

interface CountUpResult {
    countUp: number | string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    start: Function;
    // eslint-disable-next-line @typescript-eslint/ban-types
    pauseResume: Function;
    // eslint-disable-next-line @typescript-eslint/ban-types
    reset: Function;
    update: (newEnd?: number) => void;
}

export interface UseVisibleCountUpProps extends Omit<useCountUpProps, "startOnMount"> {
    ref: MutableRefObject<any>;
}

export interface UseVisibleCountUpResult extends CountUpResult {
    isVisible: boolean;
    hasBeenStarted: boolean;
}

const useVisibleCountUp = ({
    end,
    ref,
    ...other
}: UseVisibleCountUpProps): UseVisibleCountUpResult => {
    const $hasBeenStarted = useRef<boolean>(false);
    const {
        start,
        ...countUp
    } = useCountUp({
        end,
        startOnMount: false,
        ...other,
    });
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        if (isVisible && !$hasBeenStarted.current) {
            $hasBeenStarted.current = true;
            start();
        }
    }, [isVisible, start]);

    return {
        ...countUp,
        start,
        isVisible,
        hasBeenStarted: $hasBeenStarted.current,
    };
};

export default useVisibleCountUp;
