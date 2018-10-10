
//% weight=99 icon="\uf0e7" color=#1B80C4
namespace rgbLED {

    // let maxRGB = 4;
    let neoStrip: neopixel.Strip;

    //% blockId=tape_rgb block="连接引脚 %pin| 灯%firstRGB| ~ 灯%lastRGB| ，颜色为 R值 %red| G值 %green| B值 %blue"
    //% firstRGB.min=1 firstRGB.max=30
    //% firstRGB.defl=1
    //% lastRGB.min=1 lastRGB.max=30
    //% lastRGB.defl=30
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    //% weight=99
    export function setTapeLights(pin: DigitalPin, firstRGB: number, lastRGB:number, red:number, green:number, blue:number): void {

        if(firstRGB < 1 || firstRGB > lastRGB){
            firstRGB = 1;
        }

        if(lastRGB < 1){
            lastRGB = 1;
        }

        if (!neoStrip) {
            neoStrip = neopixel.create(pin, lastRGB, NeoPixelMode.RGB);
        }
        
        for(let i=firstRGB-1;i<lastRGB;i++){
            neoStrip.setPixelColor(i, neopixel.rgb(red, green, blue));
        }
        
        neoStrip.show();
        
    }

   /**
     * 关闭所有灯
     */
   //% blockId="tape_neo_clear" block="关闭所有灯"
   //% weight=98
   export function neoClear(): void {
       neoStrip.showColor(neopixel.colors(NeoPixelColors.Black));
   }

}