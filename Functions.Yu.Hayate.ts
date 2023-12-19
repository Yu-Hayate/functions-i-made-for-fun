function hexToRGB(hex: string): number[] {
    // Convert a hex color string to an RGB tuple
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

function calculateColorDistance(color1: number[], color2: number[]): number {
    // Calculate the Euclidean distance between two RGB colors
    let rDiff = color1[0] - color2[0];
    let gDiff = color1[1] - color2[1];
    let bDiff = color1[2] - color2[2];
    return Math.sqrt(rDiff ** 2 + gDiff ** 2 + bDiff ** 2);
}
function toHex(num: number, width: number): string {
    let hexChars = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i < width; i++) {
        hex = hexChars.charAt(num & 0xF) + hex;
        num = num >> 4;
    }
    return hex;
}

function findClosestColor(col: string): number {
    if (col.charAt(0) != "#") {
        col = "#" + col
    }
    let colList = makeCodeColors
    let colRGB = hexToRGB(col);
    let closestColor = "";
    let minDistance = Infinity;

    for (let i = 0; i < colList.length; i++) {
        let colListRGB = hexToRGB(colList[i]);
        let distance = calculateColorDistance(colRGB, colListRGB);
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = colList[i];
        }
    }

    return makeCodeColors.indexOf(closestColor) + 1;
}
const makeCodeColors = [
    "#FFFFFF", // 1
    "#FF2121", // 2
    "#FF93C4", // 3
    "#FF8135", // 4
    "#FFF609", // 5
    "#249CA3", // 6
    "#78DC52", // 7
    "#003FAD", // 8
    "#87F2FF", // 9
    "#8E2EC4", // 10
    "#A4839F", // 11
    "#5C406C", // 12
    "#E5CDC4", // 13
    "#91463D", // 14
    "#000000"  // 15
]
enum Colortype {
    GrayScale,
    Inverted
}

//% Groupes='[Colors, notcolors]'
namespace stuff {
    //% block="Get closest color to $col"
    //% group="Colors"
    //% col.defl="#FFFFFF"
    export function GetClosestColor(col: string) {
        return findClosestColor(col)
    }
    //% block="Get hexedecimal color of $col"
    //% groupe="Colors"
    //% col.shadow="colorindexpicker"
    export function GetHexOfColor(col: number) {
        if (col <=0) {
            throw("transparent color doesn't have a hexedecimal value")
        }
        return makeCodeColors[col-1]
    }

    //% block="get $Type hexedecimal value of $col"
    //% col.defl="#1C4F1B"
    //% group="Colors"
    export function TransformColor(col: string, Type: Colortype) {
        const RGB = hexToRGB(col)
        if (Type == Colortype.GrayScale) {
           const r = RGB[0]
           const g = RGB[1]
           const b = RGB[2]
           const GrayScaleHex = toHex((r + g + b) / 3, 2)
           return "#" + GrayScaleHex + GrayScaleHex + GrayScaleHex
       } else if (Type == Colortype.Inverted) {
            const r = 255 - RGB[0]
            const g = 255 - RGB[1]
            const b = 255 - RGB[2]
            return "#" + toHex(r,2) + toHex(g,2) + toHex(b,2)
       } else {
           return null
       }
    }

    //% block="Get Gray scale of $col"
    //% col.defl="#FF297C"
    //% group="Colors"
    export function ToGrayScale(col: string) {
        const RGB = hexToRGB(col)
        const r = RGB[0]
        const g = RGB[1]
        const b = RGB[2]
        const GrayScaleHex = toHex(Math.round((r + g + b) / 3), 2)
        return "#" + GrayScaleHex + GrayScaleHex + GrayScaleHex
    }
    }