const getCSSVariable = (name: string, defaultValue: string): string => {
    if (typeof getComputedStyle === "undefined") {
        // Server, return default value
        return defaultValue;
    }

    return getComputedStyle(document.documentElement).getPropertyValue(name);
};

export default getCSSVariable;
