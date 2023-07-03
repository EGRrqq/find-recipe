import { createIcon } from "@chakra-ui/icons";

export const BiFilterAlt = createIcon({
  displayName: "BiFilterAlt",
  viewBox: "4 3 19 19",
  d: "M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z",
});

export const BiFoodMenu = createIcon({
  displayName: "BiFoodMenu",
  viewBox: "2.5 2 20 20",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path key={'2h2v20H3zm7'} d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z" />,
    <path key={'2H6v20h13c1'} d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z" />,
  ],
});
