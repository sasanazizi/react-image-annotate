// @flow

import * as muiColors from "@material-ui/core/colors"

export const colors = [
  muiColors.cyan['A200'], //#18ffff,
  muiColors.lime[500], //#eeff41,
  muiColors.teal[500], //#64ffda,
  muiColors.lightGreen[700], //#b2ff59,
  muiColors.blue[500], //#448aff,
  muiColors.green[500], //#69f0ae,
  muiColors.purple[500], //#e040fb,
  muiColors.indigo[500], //#536dfe,
  muiColors.pink[500], //#ff4081,
  muiColors.red[500], //#ff5252,
  muiColors.orange[800], //#ffab40,
  muiColors.brown[500], //#ffff00,
]
const transparency = 0x88000000

function reverseParseColor(rrggbb) {
  rrggbb = rrggbb.replace("#", "")
  const bbggrr = rrggbb.substr(4, 2) + rrggbb.substr(2, 2) + rrggbb.substr(0, 2)
  return parseInt(bbggrr, 16)
}

export const colorInts: Array<number> = colors.map(
  (c) => (reverseParseColor(c) | transparency) >>> 0
)

export default colors
