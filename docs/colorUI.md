# Color UI Quick Reference

## Basics

### 1. Layout

 layout                 |                          view                               |          note
----------------------- | ----------------------------------------------------------- | ---------------------
 flex flex-wrap         | basis-* : xs 20%, sm 40%, df 50%, lg 60%, xl 80%, `fx 100%` |
 flex                   | flex-* : sub 1x, twice 2x, treble 3x                        |
 flex justify-*         | start, end, center, between, around                         | horizontal align
 flex align-*           | start, end, center                                          | vertical align
 grid col-*             | `n`: 1 100%, 2 50%, 3 33.33%, 4 25%, 5 20%                  | n-aequilate children
 grid grid-square col-* | `n`: 1 100%, 2 50%, 3 33.33%, 4 25%, 5 20%                  | contour children
 cf                     | fl flow-left, fr flow-right                                 | clear flow
 margin/padding-{d}-{s} | `d`: `null`, lr left+right, tb top+bottom, top, bottom, left, right. <br/> `s`: xs, sm, `null` 50%, lg, xl  | also have `margin-0` and `padding-0`

### 2. Color

 CSS var        | color                                                                         | background | line(s)    | text        | CSS var         | color                                                                            | background
--------------- | ----------------------------------------------------------------------------- | --------- | ----------- | ----------- | --------------- | -------------------------------------------------------------------------------- | --------------
 `--red`        | <div style="background-color: #e54d42;color: #fff;">&nbsp;#e54d42&nbsp;</div> | bg-red    | line-red    | text-red    | `--redLight`    | <div style="background-color: #fadbd9;color: #e54d42;">&nbsp;#fadbd9&nbsp;</div> | .bg-red.light
 `--orange`     | <div style="background-color: #f37b1d;color: #fff;">&nbsp;#f37b1d&nbsp;</div> | bg-orange | line-orange | text-orange | `--orangeLight` | <div style="background-color: #fde6d2;color: #f37b1d;">&nbsp;#fde6d2&nbsp;</div> | .bg-orange.light
 `--yellow`     | <div style="background-color: #fbbd08;color: #333;">&nbsp;#fbbd08&nbsp;</div> | bg-yellow | line-yellow | text-yellow | `--yellowLight` | <div style="background-color: #fef2ce;color: #fbbd08;">&nbsp;#fef2ce&nbsp;</div> | .bg-yellow.light
 `--olive`      | <div style="background-color: #8dc63f;color: #fff;">&nbsp;#8dc63f&nbsp;</div> | bg-olive  | line-olive  | text-olive  | `--oliveLight`  | <div style="background-color: #e8f4d9;color: #8dc63f;">&nbsp;#e8f4d9&nbsp;</div> | .bg-olive.light
 `--green`      | <div style="background-color: #39b54a;color: #fff;">&nbsp;#39b54a&nbsp;</div> | bg-green  | line-green  | text-green  | `--greenLight`  | <div style="background-color: #d7f0db;color: #39b54a;">&nbsp;#d7f0db&nbsp;</div> | .bg-green.light
 `--cyan`       | <div style="background-color: #1cbbb4;color: #fff;">&nbsp;#1cbbb4&nbsp;</div> | bg-cyan   | line-cyan   | text-cyan   | `--cyanLight`   | <div style="background-color: #d2f1f0;color: #1cbbb4;">&nbsp;#d2f1f0&nbsp;</div> | .bg-cyan.light
 `--blue`       | <div style="background-color: #0081ff;color: #fff;">&nbsp;#0081ff&nbsp;</div> | bg-blue   | line-blue   | text-blue   | `--blueLight`   | <div style="background-color: #cce6ff;color: #0081ff;">&nbsp;#cce6ff&nbsp;</div> | .bg-blue.light
 `--purple`     | <div style="background-color: #6739b6;color: #fff;">&nbsp;#6739b6&nbsp;</div> | bg-purple | line-purple | text-purple | `--purpleLight` | <div style="background-color: #e1d7f0;color: #6739b6;">&nbsp;#e1d7f0&nbsp;</div> | .bg-purple.light
 `--mauve`      | <div style="background-color: #9c26b0;color: #fff;">&nbsp;#9c26b0&nbsp;</div> | bg-mauve  | line-mauve  | text-mauve  | `--mauveLight`  | <div style="background-color: #ebd4ef;color: #9c26b0;">&nbsp;#ebd4ef&nbsp;</div> | .bg-mauve.light
 `--pink`       | <div style="background-color: #e03997;color: #fff;">&nbsp;#e03997&nbsp;</div> | bg-pink   | line-pink   | text-pink   | `--pinkLight`   | <div style="background-color: #f9d7ea;color: #e03997;">&nbsp;#f9d7ea&nbsp;</div> | .bg-pink.light
 `--brown`      | <div style="background-color: #a5673f;color: #fff;">&nbsp;#a5673f&nbsp;</div> | bg-brown  | line-brown  | text-brown  | `--brownLight`  | <div style="background-color: #ede1d9;color: #a5673f;">&nbsp;#ede1d9&nbsp;</div> | .bg-brown.light
 `--grey`       | <div style="background-color: #8799a3;color: #333;">&nbsp;#8799a3&nbsp;</div> | bg-grey   | line-grey   | text-grey   | `--greyLight`   | <div style="background-color: #e7ebed;color: #8799a3;">&nbsp;#e7ebed&nbsp;</div> | .bg-grey.light
 `--black`      | <div style="background-color: #333333;color: #fff;">&nbsp;#333333&nbsp;</div> | bg-black  | line-black  | text-black  |
 `--darkGray`   | <div style="background-color: #666666;color: #fff;">&nbsp;#666666&nbsp;</div> |
 `--gray`       | <div style="background-color: #aaaaaa;color: #333;">&nbsp;#aaaaaa&nbsp;</div> | &nbsp;    | line-gray
 `--ghostWhite` | <div style="background-color: #f1f1f1;color: #333;">&nbsp;#f1f1f1&nbsp;</div> |
 `--white`      | <div style="background-color: #ffffff;color: #666;">&nbsp;#ffffff&nbsp;</div> | bg-white  | line-white  | text-white
 &nbsp;         | <div style="background-color: #f0f0f0;color: #333;">&nbsp;#f0f0f0&nbsp;</div> | bg-gray

 CSS var           | linear-gradient color                                                                                                                           | background
------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------
 `--gradualRed`    | <div style="background-image: linear-gradient(45deg, #f43f3b, #ec008c);color: #fff;">&nbsp;linear-gradient(45deg, #f43f3b, #ec008c)&nbsp;</div> | bg-gradual-red
 `--gradualOrange` | <div style="background-image: linear-gradient(45deg, #ff9700, #ed1c24);color: #fff;">&nbsp;linear-gradient(45deg, #ff9700, #ed1c24)&nbsp;</div> | bg-gradual-orange
 `--gradualGreen`  | <div style="background-image: linear-gradient(45deg, #39b54a, #8dc63f);color: #fff;">&nbsp;linear-gradient(45deg, #39b54a, #8dc63f)&nbsp;</div> | bg-gradual-green
 `--gradualPurple` | <div style="background-image: linear-gradient(45deg, #9000ff, #5e00ff);color: #fff;">&nbsp;linear-gradient(45deg, #9000ff, #5e00ff)&nbsp;</div> | bg-gradual-purple
 `--gradualPink`   | <div style="background-image: linear-gradient(45deg, #ec008c, #6739b6);color: #fff;">&nbsp;linear-gradient(45deg, #ec008c, #6739b6)&nbsp;</div> | bg-gradual-pink
 `--gradualBlue`   | <div style="background-image: linear-gradient(45deg, #0081ff, #1cbbb4);color: #fff;">&nbsp;linear-gradient(45deg, #0081ff, #1cbbb4)&nbsp;</div> | bg-gradual-blue

1. `line-*` can also be `lines-*`.
