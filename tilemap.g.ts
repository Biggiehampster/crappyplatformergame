// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000001000000000000000000000000000001010000000000000000000000000001010100000000000000000000000001010101000000000000000000000001010101010000000000000000000001010101010100000000000000000001010101010101000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . 2 . . . . . . . 
2 2 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick], TileScale.Sixteen);
            case "c0_a0":
            case "level1":return tiles.createTilemap(hex`3200320000000000000000000000000000000000000808080808080808080808080808080808080808080808080808080808080808080000000000000000000000000000000000080808080808080808080808080808080808080808080808080808080808080808000000000000000000000000000000000008080808080808080808080808080808080808080808080808080808080808080800000000000000000000000000000000000808080808080808080808080808080808080808080808080808080808080808080000000000000000000000000000000000080808080808080808080808080808080808080808080808080808080808080808000000000000000000000000000000000008080808080808080808080808080808080808080808080808080808080808080800000000000000000000000000000000000808080808080808080808080808080808080808080808080808080808080808080000000000000000000000000000000000080808080808080808080808080808080808080808080808080808080808080808000000000000000000000000000000000008080808080808080808080808080808080808080808080808080808080808080801010101010101010101010101010101010808080808080808080808080808080808080808080808080808080808080808080101010101010101010101010101010101080808080808080808080808080808080808080808080808080808080808080808010101010101010101010101010101010108080808080808080808080808080808080808080808080808080808080808080801010101010101010101010101010101010808080808080808080808080808080808080808080808080808080808080808080101010101010101010101010101010101080808080808080808080808080808080808080808080808080808080808080808020202020202020202020202020205070308080808080808080808080808080808080808080808080808080808080808080802020202020202020202020202020504030808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808030405080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080803070308080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080304030808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808050403080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080803070308080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080304030808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808030405080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080803070308080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080304030808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808030403080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080805040508080808080808080808080808080808080808080808080808080808080808080808080808080808030305030305030304050303050305030308080808080808080808080808080808080808080808080808080000000000000005040404040404040404040404040404050000000000000000000000000000000000000000000000000000000000000000000304040707070404040404070404040403000000000000000000000000000000000000000000000000000000000000000000030404040707070707070407040704070500000000000000000000000000000000000000000000000000000000000000000006040404040704040704070707040404030000000000000000000000000000000000000000000000000000000000000000000504070404070404040404040707040405000000000000000000000000000000000000000000000000000000000000000000030407040407070707070707070407040300000000000000000000000000000000000000000000000000000000000000000006040707070707070404040707040704030000000000000000000000000000000000000000000000000000000000000000000504040404040404040404040407070403000000000000000000000000000000000000000000000000000000000000000000030404040404040704040404040704040900000000000000000000000000000000000000000000000000000000000000000003030305030503030503030305050305030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
................2.................................
................2.................................
................2.................................
................2.................................
................2.................................
................2.................................
................2.................................
................2.................................
................2.................................
................2.................................
................2.................................
................2.................................
................2.................................
................2.................................
222222222222222.2.................................
222222222222222.2.................................
..............2.2.................................
..............2.2.................................
..............2.2.................................
..............2.2.................................
..............2.2.................................
..............2.2.................................
..............2.2.................................
..............2.2.................................
..............2.2.................................
..............2.2.................................
..............2.2.................................
.......22222222.22222222..........................
.......2...............2..........................
.......2...............2..........................
.......2...............2..........................
.......2...............2..........................
.......2...............2..........................
.......2...............2..........................
.......2...............2..........................
.......2...............2..........................
.......2..........................................
........2222222222222222..........................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile6,sprites.dungeon.floorDark0,sprites.dungeon.floorDark2,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark5,sprites.builtin.forestTiles10,tileUtil.door1], TileScale.Sixteen);
            case "c0_a1":
            case "c0_a1":return tiles.createTilemap(hex`3200320000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020200000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000202020202020200000000000000000000000000000000000000000000020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020200000000000000000000000000000000000000000000000000000002020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
.................2222222........2.................
................................2.................
................................2.................
................................2.................
2222222......................2222.................
..................................................
........2222222...................................
..................................................
.....................2............................
.....................2.....2......................
.....................2.....2......................
.....................2.....2......................
.....................2.....2......................
.....................2222222......................
.....22222........................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "transparency8":return transparency8;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.