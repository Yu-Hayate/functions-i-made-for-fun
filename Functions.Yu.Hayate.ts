function hexToRGB(hex: string): number[] {
    // Convert a hex color string to an RGB tuple
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}
enum RGB {
    R = 0,
    G = 1,
    B = 2
}
let ColorList: string[] = []
let NewColorList: string[] = []
enum Colorpalette {
Arcade,
Matte,
Pastel,
Sweet,
Poke,
Adventure,
DIY,
Adafruit,
Still_life,
SteamPunk,
GrayScale
}
const Colors: { [key: string]: string[] } = {
        Arcade: stuff.CreateCustomColorArray("1  #FFFFFF 2  #FF2121 3  #FF93C4 4  #FF8135 5  #FFF609 6  #249CA3 7  #78DC52 8  #003FAD 9  #87F2FF 10  #8E2EC4 11  #A4839F 12  #5C406C 13  #E5CDC4 14  #91463D 15  #000000"),
         Matte: stuff.CreateCustomColorArray("1  #FFF1E8 2  #FF004D 3  #FF77A8 4  #FFA300 5  #FFEC27 6  #008751 7  #00E436 8  #29ADFF 9  #C2C3C7 10  #7E2553 11  #83769C 12  #5F574F 13  #FFCCAA 14  #AB5236 15  #1D2B53"),
        Pastel: stuff.CreateCustomColorArray("1  #FFF7E4 2  #F98284 3  #FEAAE4 4  #FFC384 5  #FFF7A0 6  #87A889 7  #B0EB93 8  #B0A9E4 9  #ACCCE4 10  #B3E3DA 11  #D9C8BF 12  #6C5671 13  #FFE6C6 14  #DEA38B 15  #28282E"),
         Sweet: stuff.CreateCustomColorArray("1  #F4F4F4 2  #B13E53 3  #A7F070 4  #EF7D57 5  #FFCD75 6  #257179 7  #38B764 8  #29366F 9  #3B5DC9 10  #41A6F6 11  #566C86 12  #333C57 13  #94B0C2 14  #5D275D 15  #1A1C2C"),
          Poke: stuff.CreateCustomColorArray("1  #FFFFFF 2  #D45362 3  #E8958B 4  #CC8945 5  #F5DC8C 6  #417D53 7  #5DD48F 8  #5162C2 9  #6CADEB 10  #B56EDD 11  #8F3F29 12  #612431 13  #C0FAC2 14  #24325E 15  #1B1221"),
     Adventure: stuff.CreateCustomColorArray("1  #F5EDBA 2  #9D303B 3  #D26471 4  #E4943A 5  #C0C741 6  #647D34 7  #34859D 8  #17434B 9  #7EC4C1 10  #584563 11  #8C8FAE 12  #3E2137 13  #D79B7D 14  #9A6348 15  #1F0E1C"),
           DIY: stuff.CreateCustomColorArray("1  #F8F8F8 2  #F80000 3  #FF93C4 4  #F8A830 5  #F8F858 6  #089050 7  #70D038 8  #2868C0 9  #10C0C8 10  #C868E8 11  #C0C0C0 12  #787878 13  #F8D898 14  #C04800 15  #000000"),
      Adafruit: stuff.CreateCustomColorArray("1  #FFFFFF 2  #FF0000 3  #FF007D 4  #FF7A00 5  #E5FF00 6  #2D9F00 7  #00FF72 8  #0034FF 9  #17ABFF 10  #C600FF 11  #636363 12  #7400DB 13  #00EFFF 14  #DF2929 15  #000000"),
    Still_life: stuff.CreateCustomColorArray("1  #A8E4D4 2  #D13B27 3  #E07F8A 4  #CC8218 5  #B3E868 6  #5D853A 7  #68C127 8  #286FB8 9  #9B8BFF 10  #3F2811 11  #513155 12  #122615 13  #C7B581 14  #7A2222 15  #000000"),
     SteamPunk: stuff.CreateCustomColorArray("1  #C0D1CC 2  #603B3A 3  #170E19 4  #775C4F 5  #77744F 6  #4F7754 7  #A19F7C 8  #4F5277 9  #65738C 10  #3A604A 11  #213B25 12  #433A60 13  #7C94A1 14  #3B2137 15  #2F213B"),
     GrayScale: stuff.CreateCustomColorArray("1  #FFFFFF 2  #EDEDED 3  #DBDBDB 4  #C8C8C8 5  #B6B6B6 6  #A4A4A4 7  #929292 8  #808080 9  #6D6D6D 10  #5B5B5B 11  #494949 12  #373737 13  #242424 14  #121212 15  #000000")
}
function setColorArrayTo(ColorArray: String[]) {
    const makeCodeColors = ColorArray
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
let reason = ""
function findClosestColor(col: string): number {
    if (col.charAt(0) != "#") {
        col = "#" + col
    }  
    if (col.length < 7 || col.length > 7) {
        if (col.length > 7) {
            reason = "too big"
        } else {
            reason = "too small"
        }
        throw ("This isn't a hexadecimal color, the input is " + reason + " to be a hexadecimal color")
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
const makeCodeColors = ["#FFFFFF", "#FF2121", "#FF93C4", "#FF8135", "#FFF609", "#249CA3", "#78DC52", "#003FAD", "#87F2FF", "#8E2EC4", "#A4839F", "#5C406C", "#E5CDC4","#91463D", "#000000"]
enum Colortype {
    GrayScale,
    Inverted
}

//% Groupes='[Colors, Sprites]'
namespace stuff {
    //% block="Get closest color to $col"
    //% group="Colors"
    //% col.defl="#FFFFFF"
    export function GetClosestColor(col: string) {
        return findClosestColor(col)
    }
    //% block="Get hexadecimal color of $col"
    //% groupe="Colors"
    //% col.shadow="colorindexpicker"
    export function GetHexOfColor(col: number) {
        if (col <=0) {
            throw("transparent color doesn't have a hexadecimal value")
        }
        return makeCodeColors[col-1]
    }
    //% block="Get RGB of $col"
    //% col.defl="#1C4F1B"
    //% group="Colors"
    export function GetRGBof(col: string) {
        return hexToRGB(col)
    }
    //% block="Get $color of $RGB"
    export function getR_G_BOf(RGB: number[], color: RGB) {

        return RGB[color]
    }
    //% block="from RGB to hex $RGB"
    export function ToHexColor(RGB: number[]) {
        const r = RGB[0]
        const g = RGB[1]
        const b = RGB[2]
        return "#" + toHex(r, 2) + toHex(g, 2) + toHex(b, 2)
    }
    //% block="get $Type hexadecimal value of $col"
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
    //% block="Create Custom color array with $Colors"
    //% group="Colors"
    export function CreateCustomColorArray (Colors: string) {
    ColorList = Colors.split(" ")
    NewColorList = []
    for (let Hex of ColorList) {
        if (!(Hex.includes("#"))) {
            continue;
        }
        NewColorList.push(Hex)
    }
    return NewColorList
}
    //% block="set custom Color palette to $ColorArray"
    //% ColorArray.defl="["#FFFFFF", "#FF2121", "#FF93C4", "#FF8135", "#FFF609", "#249CA3", "#78DC52", "#003FAD", "#87F2FF", "#8E2EC4", "#A4839F", "#5C406C", "#E5CDC4","#91463D", "#000000"]"
    export function setColorpaletteToCustom(ColorArray: String[]) {
        const makeCodeColors = ColorArray
    }
    //% block="set the Color palette to $ColorArray"
    export function SetColorpalette(ColorArray: Colorpalette) {
        switch (ColorArray) {
            case Colorpalette.Arcade: {
                const makeCodeColors = Colors.Arcade
            }
            case Colorpalette.Matte: {
                const makeCodeColors = Colors.Matte
            }
            case Colorpalette.Pastel : {
                const makeCodeColors = Colors.Pastel
            }
            case Colorpalette.Sweet : {
                const makeCodeColors = Colors.Sweet
            }
            case Colorpalette.Poke : {
                const makeCodeColors = Colors.Poke
            }
            case Colorpalette.Adventure : {
                const makeCodeColors = Colors.Adventure
            }
            case Colorpalette.DIY : {
                const makeCodeColors = Colors.DIY
            }
            case Colorpalette.Adafruit : {
                const makeCodeColors = Colors.Adafruit
            }
            case Colorpalette.Still_life : {
                const makeCodeColors = Colors.Still_life
            }
            case Colorpalette.SteamPunk : {
                const makeCodeColors = Colors.SteamPunk
            }
            case Colorpalette.GrayScale : {
                const makeCodeColors = Colors.GrayScale
            }
        }
    }
    //% block="switch sprites $SpriteA with $SpriteB"
    //% group="Sprites"
    //% SpriteA.defl=sprite
    //% SpriteA.shadow=variables_get
    //% SpriteB.defl=enemy
    //% SpriteB.shadow=variables_get
    export function SwitchSprites(SpriteA: Sprite, SpriteB: Sprite) {
        const _PosA = [SpriteA.x, SpriteA.y]
        const _PosB = [SpriteB.x, SpriteB.y]
        SpriteA.setPosition(_PosB[0],_PosB[1])
        SpriteB.setPosition(_PosA[0], _PosA[1])
        
    }
}



