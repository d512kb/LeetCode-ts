function findOcurrences(text: string, first: string, second: string): string[] {
    const textLines = text.split(' ');
    const result: string[] = [];

    for (let i = 0; i < textLines.length-2; ++i) {
        if (textLines[i] === first && textLines[i+1] === second) {
            result.push(textLines[i+2]);
        }
    }

    return result;
};