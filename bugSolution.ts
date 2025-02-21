function printCoord(pt: { x?: number; y?: number }) {
  if (pt.x !== undefined && pt.y !== undefined && typeof pt.x === 'number' && typeof pt.y === 'number') {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  } else {
    console.error("Invalid coordinates provided.");
  }
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3 });
printCoord({});
printCoord({x: 'hello', y: 7});